using PDFIO

"""
Clean and format text into sentences (for pressed format)
"""
function clean_text_pressed(text::String)
    # Initial cleaning
    cleaned = replace(text, r"\s+" => " ")  # Replace multiple spaces with single space
    cleaned = replace(cleaned, r"\n" => " ") # Replace newlines with spaces
    
    # Split into sentences
    sentences = String[]
    temp_sentences = split(cleaned, r"(?<=\.|!|\?)\s+(?=[A-Z])")
    
    for sentence in temp_sentences
        sentence = strip(sentence)
        if isempty(sentence) || length(sentence) < 3
            continue
        end
        
        if !endswith(sentence, '.') && !endswith(sentence, '!') && !endswith(sentence, '?')
            sentence = sentence * "."
        end
        
        push!(sentences, sentence)
    end
    
    return join(sentences, "\n")
end

"""
Write content to a file
"""
function FileLog(Filename::String, logme::String)
    open(Filename, "w"; lock = true) do io
        write(io, logme * "\r\n")
    end
end

"""
Extract text from PDF using PDFIO with error skipping
"""
function getPDFText(src::String, out::String, format::Symbol = :original)
    doc = pdDocOpen(src)
    docinfo = pdDocGetInfo(doc)
    
    if format == :pressed
        # Use buffer for pressed format
        text_buffer = IOBuffer()
        try
            npage = pdDocGetPageCount(doc)
            println("Processing $npage pages...")
            for i=1:npage
                print("\rPage $i/$npage")
                page = pdDocGetPage(doc, i)
                try
                    pdPageExtractText(text_buffer, page)
                    write(text_buffer, " ")
                catch
                    print(" (skipped)")
                    continue
                end
            end
            println("\nExtraction complete!")
            
            # Process and write the cleaned text
            text_content = String(take!(text_buffer))
            cleaned_text = clean_text_pressed(text_content)
            open(out, "w") do io
                write(io, cleaned_text)
            end
        finally
            close(text_buffer)
        end
    else
        # Original format
        open(out, "w") do io
            npage = pdDocGetPageCount(doc)
            println("Processing $npage pages...")
            for i=1:npage
                print("\rPage $i/$npage")
                page = pdDocGetPage(doc, i)
                try
                    pdPageExtractText(io, page)
                catch
                    print(" (skipped)")
                    continue
                end
            end
            println("\nExtraction complete!")
        end
    end
    
    pdDocClose(doc)
    return docinfo
end

"""
Process a folder of PDF files
"""
function process_pdf_folder(folder_path::String, format::Symbol = :original)
    if !isdir(folder_path)
        println("Error: '$folder_path' is not a valid directory")
        return
    end

    pdf_files = filter(f -> endswith(lowercase(f), ".pdf"), readdir(folder_path))
    
    if isempty(pdf_files)
        println("No PDF files found in '$folder_path'")
        return
    end

    println("Found $(length(pdf_files)) PDF files")
    println("Using format: ", format)

    for (i, pdf_file) in enumerate(pdf_files)
        println("\nProcessing file $i/$(length(pdf_files)): $pdf_file")
        
        pdf_path = joinpath(folder_path, pdf_file)
        output_file = string(splitext(pdf_file)[1], ".txt")
        output_path = joinpath(folder_path, output_file)
        
        try
            info = getPDFText(pdf_path, output_path, format)
            println("Saved to: $output_path")
            
            if !isempty(info)
                println("\nDocument Info:")
                for (key, value) in info
                    println("  $key: $value")
                end
            end
        catch e
            println("Error processing $pdf_file:")
            println(e)
        end
    end
    println("\nProcessing complete!")
end

"""
Main execution
"""
function main()
    if length(ARGS) < 1
        println("""
        PDF to Text Conversion Tool
        --------------------------
        
        Usage: julia pdf2txt.jl /path/to/pdf/folder [-p|-o]
        
        Options:
          -p    Pressed format (one sentence per line)
          -o    Original format (default)
        
        Example: 
          julia pdf2txt.jl ~/Documents/pdfs
          julia pdf2txt.jl ~/Documents/pdfs -p
        
        This tool will:
        1. Find all PDF files in the specified folder
        2. Convert each PDF to text
        3. Save the extracted text as .txt files
        """)
        return
    end

    folder_path = ARGS[1]
    format = :original  # default format
    
    if length(ARGS) > 1
        if ARGS[2] == "-p"
            format = :pressed
        elseif ARGS[2] == "-o"
            format = :original
        end
    end

    process_pdf_folder(folder_path, format)
end

# Run the main function
try
    main()
catch e
    println("An error occurred:")
    println(e)
    println("\nStacktrace:")
    println(stacktrace())
end
