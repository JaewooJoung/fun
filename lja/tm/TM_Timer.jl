using Gtk
using Gtk.GLib
using Dates, TOML

struct AgendaItem
    time::Time
    role::String
    presenter::String
    event::String
    green::Int
    amber::Int
    red::Int
end

function create_agenda(toml_file::String="TMAgenda.toml")
    # Read TOML file
    data = TOML.parsefile(toml_file)
    
    # Convert to AgendaItems
    agenda = AgendaItem[]
    
    for item in data["agenda_items"]
        # Parse time string to Time object
        time_str = item["time"]
        hour, minute = parse.(Int, split(time_str, ":"))
        time_obj = Time(hour, minute)
        
        # Create AgendaItem
        agenda_item = AgendaItem(
            time_obj,
            item["role"],
            item["presenter"],
            item["event"],
            item["green"],
            item["amber"],
            item["red"]
        )
        
        push!(agenda, agenda_item)
    end
    
    return agenda
end

function create_timer_ui()
    # Create main window
    win = GtkWindow("Toastmasters Timer")
    set_gtk_property!(win, :default_width, 800)
    set_gtk_property!(win, :default_height, 600)

    # Create main vertical box with spacing
    vbox = GtkBox(:v)
    set_gtk_property!(vbox, :spacing, 10)
    set_gtk_property!(vbox, :margin, 10)
    push!(win, vbox)

    # Create left and right panes
    hbox = GtkBox(:h)
    set_gtk_property!(hbox, :spacing, 10)
    left_vbox = GtkBox(:v)
    right_vbox = GtkBox(:v)
    set_gtk_property!(left_vbox, :spacing, 10)
    set_gtk_property!(right_vbox, :spacing, 10)
    push!(hbox, left_vbox)
    push!(hbox, right_vbox)

    # Create info area
    info_frame = GtkFrame("Current Item")
    info_box = GtkBox(:v)
    set_gtk_property!(info_box, :spacing, 5)
    set_gtk_property!(info_box, :margin, 10)
    push!(info_frame, info_box)

    role_label = GtkLabel("Role: ")
    presenter_label = GtkLabel("Presenter: ")
    event_label = GtkLabel("Event: ")
    time_label = GtkLabel("Time: 0:00")
    
    # Make labels left-aligned
    set_gtk_property!(role_label, :xalign, 0)
    set_gtk_property!(presenter_label, :xalign, 0)
    set_gtk_property!(event_label, :xalign, 0)
    set_gtk_property!(time_label, :xalign, 0)
    
    # Make time label larger
    GAccessor.markup(time_label, "<span font='20'>Time: 0:00</span>")

    push!(info_box, role_label)
    push!(info_box, presenter_label)
    push!(info_box, event_label)
    push!(info_box, time_label)

    # Create signal lights
    lights_frame = GtkFrame("Signals")
    lights_box = GtkBox(:h)
    set_gtk_property!(lights_box, :spacing, 20)
    set_gtk_property!(lights_box, :margin, 10)
    push!(lights_frame, lights_box)
    
    green_light = GtkLabel("")
    amber_light = GtkLabel("")
    red_light = GtkLabel("")
    
    # Style the lights with larger circles
    set_gtk_property!(green_light, :use_markup, true)
    set_gtk_property!(amber_light, :use_markup, true)
    set_gtk_property!(red_light, :use_markup, true)
    
    push!(lights_box, green_light)
    push!(lights_box, amber_light)
    push!(lights_box, red_light)

    # Create control buttons
    button_box = GtkBox(:h)
    set_gtk_property!(button_box, :spacing, 10)
    start_button = GtkButton("Start")
    stop_button = GtkButton("Stop")
    next_button = GtkButton("Next")
    reset_button = GtkButton("Reset")

    # Style buttons
    for btn in [start_button, stop_button, next_button, reset_button]
        set_gtk_property!(btn, :expand, true)
    end

    push!(button_box, start_button)
    push!(button_box, stop_button)
    push!(button_box, next_button)
    push!(button_box, reset_button)

    # Create agenda list
    agenda_frame = GtkFrame("Agenda")
    agenda_store = GtkListStore(String, String, String)
    agenda_view = GtkTreeView(GtkTreeModel(agenda_store))
    renderer = GtkCellRendererText()
    
    c1 = GtkTreeViewColumn("Time", renderer, Dict([("text", 0)]))
    c2 = GtkTreeViewColumn("Role", renderer, Dict([("text", 1)]))
    c3 = GtkTreeViewColumn("Presenter", renderer, Dict([("text", 2)]))
    
    push!(agenda_view, c1, c2, c3)
    
    # Create scrolled window for agenda
    sw = GtkScrolledWindow()
    set_gtk_property!(sw, :expand, true)
    push!(sw, agenda_view)
    push!(agenda_frame, sw)

    # Create log view
    log_frame = GtkFrame("Timing Log")
    set_gtk_property!(log_frame, :expand, true)
    
    log_view = GtkTextView()
    log_buffer = GtkTextBuffer()
    set_gtk_property!(log_view, :buffer, log_buffer)
    set_gtk_property!(log_view, :editable, false)
    set_gtk_property!(log_view, :wrap_mode, 2)
    
    log_sw = GtkScrolledWindow()
    push!(log_sw, log_view)
    push!(log_frame, log_sw)

    # Add everything to main vbox and panes
    push!(left_vbox, info_frame)
    push!(left_vbox, lights_frame)
    push!(left_vbox, button_box)
    push!(left_vbox, agenda_frame)
    push!(right_vbox, log_frame)
    push!(vbox, hbox)

    # Initialize variables
    agenda = create_agenda()
    current_item = Ref(1)
    elapsed = Ref(0)
    timer_running = Ref(false)

    # Update display function
    function update_display()
        item = agenda[current_item[]]
        GAccessor.text(role_label, "Role: $(item.role)")
        GAccessor.text(presenter_label, "Presenter: $(item.presenter)")
        GAccessor.text(event_label, "Event: $(item.event)")
        
        # Update lights with larger circles
        green_markup = elapsed[] >= item.green && item.green > 0 ? 
            "<span font='24' foreground='green'>⬤</span>" : "<span font='24' foreground='gray'>⬤</span>"
        amber_markup = elapsed[] >= item.amber && item.amber > 0 ? 
            "<span font='24' foreground='orange'>⬤</span>" : "<span font='24' foreground='gray'>⬤</span>"
        red_markup = elapsed[] >= item.red && item.red > 0 ? 
            "<span font='24' foreground='red'>⬤</span>" : "<span font='24' foreground='gray'>⬤</span>"
            
        GAccessor.markup(green_light, green_markup)
        GAccessor.markup(amber_light, amber_markup)
        GAccessor.markup(red_light, red_markup)
        
        # Update time with large font
        minutes = elapsed[] ÷ 60
        seconds = elapsed[] % 60
        time_str = "<span font='20'>Time: $(minutes):$(lpad(seconds, 2, '0'))</span>"
        GAccessor.markup(time_label, time_str)
    end

    # Function to add log entry
# Function to add log entry
function add_log_entry()
    item = agenda[current_item[]]
    
    # Only log items with timing requirements
    if item.red > 0
        local status
        if elapsed[] < item.green
            status = "Under minimum time"
        elseif elapsed[] < item.amber
            status = "Green"
        elseif elapsed[] < item.red
            status = "Amber"
        else
            over_time = elapsed[] - item.red
            status = "Red ($(over_time) seconds over)"
        end
        
        timestamp = Dates.format(now(), "HH:MM:SS")
        minutes = elapsed[] ÷ 60
        seconds = elapsed[] % 60
        
        log_text = """
        [$timestamp] $(item.role)
        Presenter: $(item.presenter)
        Time: $(minutes):$(lpad(seconds, 2, '0'))
        Status: $status
        ───────────────────
        """
        
        # Insert at the beginning of the buffer
        start_iter = Gtk.GtkTextIter(log_buffer, 0)
        insert!(log_buffer, start_iter, log_text)
    end
end
    # Button callbacks
    signal_connect(start_button, "clicked") do widget
        if !timer_running[]
            timer_running[] = true
            @async while timer_running[]
                elapsed[] += 1
                Gtk.G_.markup(time_label, 
                    "<span font='20'>Time: $(elapsed[] ÷ 60):$(lpad(elapsed[] % 60, 2, '0'))</span>")
                update_display()
                sleep(1)
            end
        end
    end

    signal_connect(stop_button, "clicked") do widget
        timer_running[] = false
    end

    signal_connect(next_button, "clicked") do widget
        if timer_running[] || elapsed[] > 0  # Only log if timer was used
            add_log_entry()
        end
        
        if current_item[] < length(agenda)
            current_item[] += 1
            elapsed[] = 0
            timer_running[] = false
            update_display()
        end
    end

    signal_connect(reset_button, "clicked") do widget
        elapsed[] = 0
        update_display()
    end

    # Populate agenda list
    for item in agenda
        push!(agenda_store, (string(item.time), item.role, item.presenter))
    end

    # Initial display update
    update_display()

    # Window close callback
    signal_connect(win, :destroy) do widget
        timer_running[] = false
        Gtk.gtk_quit()
    end

    # Show all elements
    showall(win)
end

# Start the application
create_timer_ui()
Gtk.gtk_main()