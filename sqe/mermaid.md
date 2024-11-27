```mermaid
flowchart TD
    A[Monitor Supply Partner Performance] --> B{Performance Parameters}
    B -->|Negative Trend or Abnormality| C[Consider for LPS Process]
    B -->|No Issues| D[Continue Monitoring]
    
    C --> E[Send Warning Letter]
    E --> F[Notify Quality Department]
    
    F --> G[LPS Procedure Initiation]
    G --> H[Three-Stage Elevation Process]
    
    H --> I{Stage Criteria}
    I -->|Meet Criteria| J[Exit to Monitoring Status]
    I -->|Do Not Meet Criteria| K[Elevate to Next Stage]
    
    J --> L[Track Performance with Parma Code]
    
    K --> H  %% Loop back to three-stage process

```
