4.0 difference 

# Work Product Changes from Automotive SPICE 3.1 to 4.0

## Removed Work Products
These work products from 3.1 are present in 4.0 not as Work Product but in Practice:
- Contract
- Contract review record
- Customer request
- Change management plan
- Technology monitoring plan
- Change control record
- Customer requirements
- Acceptance criteria
- Risk action request
- Request for proposal
- Validation strategy
- Preferred suppliers register 
- Supplier evaluation report
- Supplier qualification criteria
- Project plan
- Supplier proposal response
- Proposal review record
- Release plan
- Product release information
- Temporary solution
- Product release approval record
- Risk management plan
- Risk mitigation plan
- Stakeholder Requirements
- Traceability record
- Interface requirements specification
- System requirements specification
- Test specification
- Test plan
- System Test result
- Software requirements specification
- Interface requirement specification
- Software item
- Build list
- Quality plan
- Quality record
- Verification strategy
- Tracking system
- Documentation plan
- Work product list
- Handling and storage guide
- Configuration management plan
- Recovery plan
- Problem management plan
- Evaluation report
- Problem status report
- Work breakdown structure
- Project status report
- Risk analysis report
- Personnel performance measure
- Process measure
- Project measure
- Service level measure
- Process performance report
- Goals
- Plan
- Improvement plan
- Domain model
- Reuse plan
- Reuse policy
- Reuse proposal
- Reuse evaluation report
- Reuse strategy

## Added Work Products
New work products in 4.0:
- Hardware Architecture (04-52)
- Hardware Detailed Design (04-53)
- Hardware Schematics (04-54)
- Hardware Layout (04-55)
- Hardware Element Interface (04-56)
- Hardware Bill of Materials (14-54)
- Hardware Production Data (03-54)
- ML Architecture (04-51)
- ML Data (03-53)
- ML Data Set (03-51)
- Trained ML Model (01-53)
- Deployed ML Model (11-50)
- ML Test Results (13-50)
- Hyperparameter (01-54)
- Process Performance Strategy (19-01)
- ML Data Quality Approach (19-50)
- Process Resource and Infrastructure Description (10-52)
- Process Resource and Infrastructure Documentation (13-55)
- Role Assignment (14-53)
- Qualification Method Description (10-51)
- Process Monitoring Method (08-63)
- Tailoring Documentation (15-54)
- ML Test Approach (08-64)
- ML Training and Validation Approach (08-65)
- Measures Against Deviations in Quantitative Process Analysis (08-66)
- Business Goals (18-70)
- Improvement Opportunity (18-80)
- Improvement Evaluation Results (18-81)

## Modified/Renamed Work Products
Work products that have been modified or renamed:
- "Quality criteria" is now more specifically defined with ID 18-07
- "Verification criteria" has been replaced by "Verification measure" (08-60)
- "Baseline" is now defined with ID 13-08
- Several work products have been given more specific IDs and definitions while maintaining similar content

## Key Observations
1. Many generic or overlapping work products from 3.1 have been consolidated or removed
2. New work products focus on specific domains (Hardware, Machine Learning)
3. More structured ID system for work products
4. Greater emphasis on measurable and verifiable outputs
5. Addition of quantitative process analysis and improvement work products




# Supplier Quality Assessment Checklist

## Project Management (MAN.3)
### Project Planning & Scope
- Is the complete SW SOW Compliance Matrix filled out by supplier? Where there are deviations or non-acceptance, are alternatives clearly defined?
- Is Document Traceability Matrix filled out with mapping to supplier's documentation structure?
- Does Software Development Plan (SWDP) include:
  - Project scope and work products to be developed
  - Life cycle model and methodology
  - Project management requirements and procedures
  - Tasks and ownership
  - Project personnel, availability, training needs
  - Project resources, equipment, tools
  - Project roles and responsibilities
  - Schedules, milestones, target dates
  - Communication interfaces
  - Risk planning
  - Maintenance planning
  - Progress reporting
  - Estimates

### Risk Management (MAN.5)
- Does SW Risk Management List include:
  - Unique risk IDs and identification dates
  - Risk descriptions and analysis (likelihood and impact)
  - Risk prioritization (High/Medium/Low)
  - Mitigation actions and their tracking
  - History of actions, due dates, status, responsibilities

### Progress Monitoring
- Does SW Development Schedule (SWDS) show:
  - Activity names
  - Estimated durations
  - Planned/actual start and completion dates
  - Activity progress percentage

- Does SW Progress Report include:
  - Project activities summary
  - Progress against planned tasks
  - Issues and solutions
  - Planned activities
  - Risks and mitigations
  - QA activities summary
  - Software module development status
  - Design description and review status
  - Implementation status and review status
  - Verification status and review status

## Configuration Management (SUP.8)
- Does SW Configuration Management Plan (SWCP) define:
  - Change control procedures
  - Configuration management metrics
  - Audit criteria
  - Configuration management requirements
  - Configuration library tools
  - Status reporting mechanisms
  - Library access and location details
  - Storage and handling procedures

## Quality Assurance (SUP.1)
- Does SW Quality Plan (SWQP) specify:
  - Quality objectives/goals
  - Quality assurance activities/tasks
  - Work product references
  - Quality assessment methods
  - Regulatory/standards requirements
  - Quality criteria
  - Quality management procedures

## Verification (replacing previous testing sections)
### Verification Planning
- Resources (personnel, tools, equipment)
- Verification environment setup
- Verification measures to be performed
- Schedules and locations
- Verification management procedures

### Verification Execution
- Verification purpose and preconditions
- Detailed verification measures and procedures
- Verification logs (project, SW/HW versions, dates, responsible engineers)
- Verification metrics
- Results and verdicts
- Recommendations and conclusions

## Technical Analysis
### Software Worst-Case Analysis Report (SWWCA)
- Estimated microprocessor load
- Estimated Flash Memory size
- Estimated RAM Memory size
- Estimated EEPROM Memory size

### Requirements and Traceability
- Are SWRS-Application and SWRS-Base Tech requirements agreed and documented in SWRT?
- Are implementation/verification plans documented in SWRT?
- Are verification measures inspected against specific requirements?




# Supplier Quality Assessment Checklist by Process Outcomes

## Initial Phase (Project Setup)

### MAN.3 Project Management
**Outcome 1: Scope Definition**
- Is the SW SOW Compliance Matrix completely filled out?
- Are deviations clearly documented with alternative solutions?
- Are there any uncertainties in scope definition?

**Outcome 2: Feasibility Evaluation**
- Does SWDP include:
  - Project scope and deliverables
  - Life cycle model selection justification
  - Required resources and their availability
  - Risk assessment for feasibility

**Outcome 3: Work Estimation**
- Are estimates documented for:
  - Resource requirements
  - Project timeline
  - Budget allocation
- Does Software Worst-Case Analysis Report (SWWCA) include:
  - Estimated Microprocessor load
  - Estimated Flash Memory size
  - Estimated RAM Memory size
  - Estimated EEPROM Memory size

### SUP.8 Configuration Management
**Initial Setup**
- Does SW Configuration Management Plan (SWCP) define:
  - Configuration item control procedures
  - Configuration management metrics
  - Audit criteria
  - Library tools and mechanisms
  - Access and storage procedures
  - Status tracking methods

### SUP.1 Quality Assurance
**Initial Planning**
- Does SW Quality Plan (SWQP) specify:
  - Quality objectives
  - Quality assurance activities
  - Assessment methods
  - Regulatory requirements
  - Quality criteria
  - Management procedures

## Ongoing Phase (Project Execution)

### MAN.3 Project Management
**Outcome 4: Interface Management**
- Is Document Traceability Matrix maintained?
- Are communication interfaces defined and active?
- Are stakeholder interactions documented?

**Outcome 5: Project Execution Planning**
- Does SW Development Schedule (SWDS) track:
  - Activity names and durations
  - Planned/actual dates
  - Progress percentage
  - Resource allocation

**Outcome 6: Progress Monitoring**
- Does SW Progress Report include:
  - Activity summaries
  - Task progress
  - Issue tracking
  - Next period plans
  - QA activities
  - Module status updates

### Risk Management (MAN.5)
**Continuous Monitoring**
- Does Risk Management List maintain:
  - Risk IDs and dates
  - Risk analysis (likelihood/impact)
  - Prioritization (H/M/L)
  - Mitigation tracking
  - Action history

### Requirements and Verification
**Throughout Development**
- Is Software Requirements Traceability Matrix (SWRT) maintained showing:
  - SWRS-Application requirements status
  - SWRS-Base Tech requirements status
  - Implementation planning
  - Verification coverage

## Verification Phase

### Verification Planning
**Pre-Execution**
- Are verification measures defined including:
  - Required resources
  - Environment setup
  - Verification scope
  - Schedule and locations
  - Management procedures

### Verification Execution
**During Execution**
- Are verification records maintained showing:
  - Execution logs
  - Results and metrics
  - Issue tracking
  - Recommendations
  - Conclusions

## Project Closure

### Final Assessment
**Outcome 7: Corrective Actions**
- Final progress status
- Outstanding issues resolution
- Verification completion status
- Quality criteria fulfillment
- Configuration management status
- Risk closure status

## Throughout Project Lifecycle

### SUP.1 Quality Assurance
- Regular quality assessments
- Work product reviews
- Process adherence checks
- Non-conformance tracking

### SUP.8 Configuration Management
- Configuration item control
- Change management
- Status accounting
- Configuration audits


# Supplier Deliverables Checklist Organized by Process Outcomes

## Outcome 1: The scope of work for the project is defined
Review of:
- SW SOW Compliance Matrix
  - Is it completely filled out?
  - Are all requirements addressed?
  - Are deviations clearly marked?
  - Are alternative solutions provided for deviations?

- Software Development Plan (SWDP)
  - Is project scope clearly defined?
  - Are all work products to be developed listed?
  - Is life cycle model defined?
  - Are methodologies specified?
  - Is maintenance planning included?

- Document Traceability Matrix
  - Is it mapped to supplier's documentation structure?
  - Are all required documents listed?

- SW Quality Plan (SWQP)
  - Are quality objectives defined?
  - Are regulatory requirements identified?
  - Is scope of quality activities defined?

## Outcome 2: The feasibility of achieving the goals of the project with available resources and constraints is evaluated
Review of:
- Software Worst-Case Analysis Report (SWWCA)
  - Microprocessor load estimates
  - Flash Memory size estimates
  - RAM Memory size estimates
  - EEPROM Memory size estimates

- SW Development Plan (SWDP)
  - Resource availability assessment
  - Tools and equipment availability
  - Personnel skills and availability
  - Training needs identified

- SW Risk Management List
  - Initial risk assessment
  - Feasibility-related risks
  - Resource constraints risks
  - Technical feasibility analysis

## Outcome 3: The activities and resources necessary to complete the work are sized and estimated
Review of:
- SW Development Plan (SWDP)
  - Task breakdown
  - Effort estimates
  - Resource allocation
  - Project estimates

- SW Development Schedule (SWDS)
  - Activity durations
  - Resource assignments
  - Timeline estimates
  - Dependencies identified

- SW Quality Plan (SWQP)
  - Quality assurance resource needs
  - Review and verification effort estimates
  - Quality activity scheduling

## Outcome 4: Interfaces within the project, and with other projects and organizational units, are identified and monitored
Review of:
- SW Development Plan (SWDP)
  - Communication interfaces defined
  - Stakeholder identification
  - Interface management procedures

- Document Traceability Matrix
  - Interface documentation
  - Cross-project dependencies
  - Organizational interfaces

- SW Configuration Management Plan (SWCP)
  - Interface control procedures
  - Configuration item interfaces
  - Cross-project configuration management

## Outcome 5: Plans for the execution of the project are developed, implemented and maintained
Review of:
- SW Development Schedule (SWDS)
  - Planned start/end dates
  - Activity progress tracking
  - Resource assignments
  - Milestone definition

- SW Development Plan (SWDP)
  - Project methodology
  - Work breakdown
  - Quality gates
  - Review points

- SW Configuration Management Plan (SWCP)
  - Configuration control procedures
  - Change management process
  - Version control strategy

- SW Quality Plan (SWQP)
  - Quality activity planning
  - Review schedules
  - Quality metrics tracking

## Outcome 6: Progress of the project is monitored and reported
Review of:
- SW Progress Report
  - Activity summaries
  - Progress against plan
  - Issues and solutions
  - Next period activities
  - QA activities summary
  - Module development status
  - Review status
  - Verification status

- SW Development Schedule (SWDS)
  - Actual vs planned progress
  - % completion tracking
  - Milestone status

- Risk Management List
  - Risk status updates
  - Mitigation action tracking
  - New risks identified
  - Risk closure status

- Verification Results
  - Progress of verification activities
  - Issues found
  - Coverage status
  - Quality metrics

## Supporting Documents Required Throughout All Outcomes
- Software Requirements Traceability Matrix (SWRT)
- Configuration management records
- Quality assurance records
- Verification results
- Issue tracking records
- Change request records



# Required Documents Matrix - ASPICE 4.0

| Supporting Documents Required Throughout All Outcomes | Outcome 1: Scope Definition | Outcome 2: Feasibility | Outcome 3: Size & Estimation | Outcome 4: Interface Management | Outcome 5: Plan Development | Outcome 6: Progress Monitoring |
|---------------------------------------------------|---------------------------|----------------------|----------------------------|--------------------------------|---------------------------|------------------------------|
| Software Requirements Traceability Matrix (SWRT) | SW SOW Compliance Matrix | Software Worst-Case Analysis Report (SWWCA) | SW Development Plan (SWDP) | SW Development Plan (SWDP) | SW Development Schedule (SWDS) | SW Progress Report |
| Configuration management records | Software Development Plan (SWDP) | SW Development Plan (SWDP) | SW Development Schedule (SWDS) | Document Traceability Matrix | SW Development Plan (SWDP) | SW Development Schedule (SWDS) |
| Quality assurance records | Document Traceability Matrix | SW Risk Management List | SW Quality Plan (SWQP) | SW Configuration Management Plan (SWCP) | SW Configuration Management Plan (SWCP) | Risk Management List |
| Verification results | SW Quality Plan (SWQP) | - | - | - | SW Quality Plan (SWQP) | Verification Results |
| Issue tracking records | - | - | - | - | - | - |
| Change request records | - | - | - | - | - | - |

### Key Verification Focus per Column:

**Supporting Documents:**
- Continuous maintenance
- Regular updates
- Status tracking
- Issue resolution
- Change management

**Outcome 1:**
- Matrix completeness
- Scope clarity
- Quality objectives
- Documentation structure

**Outcome 2:**
- Resource estimates
- Technical feasibility
- Risk assessment
- Capability analysis

**Outcome 3:**
- Task breakdown
- Effort estimates
- Resource allocation
- Timeline planning

**Outcome 4:**
- Interface definitions
- Communication paths
- Dependencies
- Configuration control

**Outcome 5:**
- Timeline tracking
- Methodology implementation
- Change control
- Quality activities

**Outcome 6:**
- Status updates
- Progress tracking
- Risk monitoring
- Quality metrics

# Required Documents by All Process Outcomes

| Supporting Documents Required Throughout All Outcomes | System/Software Engineering Outcomes | Cybersecurity Outcomes |
|---------------------------------------------------|----------------------------------|---------------------|
| - Software Requirements Traceability Matrix (SWRT) | **Outcome 1: Scope Definition** | **Outcome CS1: Threats & Risk Analysis** |
| - Configuration management records | - SW SOW Compliance Matrix | - Cybersecurity scenario register |
| - Quality assurance records | - Software Development Plan (SWDP) | - Risk analysis evidence |
| - Verification results | - Document Traceability Matrix | - Threat analysis documentation |
| - Issue tracking records | - SW Quality Plan (SWQP) | |
| - Change request records | | |
| | **Outcome 2: Feasibility** | **Outcome CS2: Risk Treatment** |
| | - Software Worst-Case Analysis Report (SWWCA) | - Risk treatment options |
| | - SW Development Plan (SWDP) | - Risk mitigation plans |
| | - SW Risk Management List | - Risk action requests |
| | | |
| | **Outcome 3: Size & Estimation** | **Outcome CS3: Cybersecurity Goals** |
| | - SW Development Plan (SWDP) | - Cybersecurity goals documentation |
| | - SW Development Schedule (SWDS) | - Risk reduction strategies |
| | - SW Quality Plan (SWQP) | - Cybersecurity requirements |
| | | |
| | **Outcome 4: Interface Management** | **Outcome CS4: Validation & Verification** |
| | - SW Development Plan (SWDP) | - Verification measures |
| | - Document Traceability Matrix | - Validation results |
| | - SW Configuration Management Plan (SWCP) | - Test results |
| | | - Consistency evidence |
| | | |
| | **Outcome 5: Plan Development** | **Outcome CS5: Traceability** |
| | - SW Development Schedule (SWDS) | - Traceability records |
| | - SW Development Plan (SWDP) | - Consistency documentation |
| | - SW Configuration Management Plan (SWCP) | - Verification coverage evidence |
| | - SW Quality Plan (SWQP) | |
| | | |
| | **Outcome 6: Progress Monitoring** | |
| | - SW Progress Report | |
| | - SW Development Schedule (SWDS) | |
| | - Risk Management List | |
| | - Verification Results | |

### Key Verification Focus for Each Category:

**Supporting Documents:**
- Regular maintenance
- Continuous updates
- Status tracking
- Issue resolution
- Change management

**System/Software Engineering Outcomes:**
- Documentation completeness
- Process adherence
- Technical feasibility
- Resource allocation
- Quality assurance

**Cybersecurity Outcomes:**
- Risk assessment
- Security measures
- Goal achievement
- Verification coverage
- Traceability maintenance
- 


##verification tools 

Verification Measure (08-60):


Test cases
Measurements
Calculations
Simulations
Reviews
Analyses


Verification Measure Selection Set (08-58):


Criteria for re-verification in case of changes
Identification of verification measures for regression


Verification Results (15-52):


Verification data and logs
Verification measure passed/failed/not executed
Information about test execution
Summary of verification results


Verification Measure Data (03-50):


Data recorded during verification measure execution
Raw data, logs, traces, tool outputs
Measurement values
Review findings


ASPICE 4.0:

Does not mandate the use of MISRA
Does not specify which MISRA version to use
Does not detail specific MISRA rules to follow
Mentions it only as one example among other possible coding standards

The inclusion of MISRA is relevant in:

Static code analysis context
Software unit verification
Coding standards compliance
Quality assurance activities



Cyclomatic Complexity metrics, while not explicitly mentioned in ASPICE 4.0, generally guarantee several important aspects of code quality and testability:

1. Code Structure Quality:
- Measures control flow complexity
- Indicates function/method complexity
- Shows number of linearly independent paths
- Helps identify overly complex modules

2. Testing Coverage Implications:
- Helps determine minimum number of test cases needed
- Indicates testing effort required
- Supports test path planning
- Helps achieve structural coverage goals

3. Maintainability Indicators:
```
Typical Thresholds:
1-10: Simple function, low risk
11-20: Moderate complexity, moderate risk
21-50: High complexity, high risk
>50: Untestable code, very high risk
```

4. Quality Guarantees:
- More predictable testing effort
- Better resource estimation
- Reduced maintenance costs
- Lower defect probability
- Easier code understanding

5. Risk Mitigation:
- Identifies high-risk code sections
- Highlights potential refactoring needs
- Shows areas needing more review
- Indicates potential reliability issues

6. Design Improvements:
- Encourages modular design
- Promotes function decomposition
- Supports clean code principles
- Guides refactoring decisions

7. Process Benefits:
- Objective code measurement
- Quantifiable quality metrics
- Consistent evaluation criteria
- Traceable improvements

8. Review Support:
- Guides code review focus
- Identifies complex areas needing attention
- Supports peer review planning
- Helps prioritize inspection efforts

9. Development Guidelines:
```
Best Practices:
- Keep functions under 10 complexity points
- Split functions exceeding threshold
- Review anything over 15 points
- Refactor modules over 20 points
```

10. Testing Strategy Support:
- Helps plan unit testing
- Guides integration test focus
- Supports coverage planning
- Indicates verification effort needed

Although not mandated by ASPICE, implementing cyclomatic complexity metrics would support:

1. Quality Assurance (SUP.1):
- Objective quality measures
- Verifiable quality criteria
- Clear acceptance thresholds

2. Verification (SWE.4):
- Test case planning
- Coverage analysis
- Structural testing

3. Software Design (SWE.3):
- Design evaluation
- Module structuring
- Interface complexity

4. Problem Prevention:
- Early complexity detection
- Proactive refactoring
- Design improvement

Using cyclomatic complexity would enhance:
- Process predictability
- Code maintainability
- Testing effectiveness
- Quality assurance
- Risk management

Would you like me to:
1. Provide more specific examples of how to apply these metrics?
2. Explain integration with other code quality measures?
3. Detail implementation strategies within ASPICE processes?
4. Describe relationship with other testing approaches?


This whitepaper provides an overview of MISRA (Motor Industry Software Reliability Association) coding guidelines, which are widely used standards for developing safety-critical software, particularly in embedded systems. Here are the key points:

1. Origins & Purpose:
- Started in early 1990s for automotive industry
- Created to ensure software reliability in vehicles
- Now used across multiple industries (aerospace, medical devices, etc.)

2. Main Focus:
- Provides guidelines for C and C++ programming
- Aims to make these languages safer for critical systems
- Helps prevent common programming errors and unsafe practices

3. Key Versions:
```
MISRA C Evolution:
- MISRA C:1998 - First version (127 rules)
- MISRA C:2004 - Second version, broader scope
- MISRA C:2012 - Third version, added C99 support
- MISRA C:2023 - Latest version with security updates
```

4. Compliance and Tools:
- Uses static analysis tools for verification
- Allows for "deviation permits" when rules need to be broken
- Requires documentation of any deviations

5. Key Benefits:
- Improves code reliability
- Enhances maintainability
- Reduces software defects
- Supports safety certification

MISRA is particularly relevant to ASPICE because it's often used in conjunction with automotive software development processes and is referenced in ASPICE 4.0 as an example of coding standards that can be used for static analysis in software unit verification (SWE.4).

Let me explain how MISRA integrates with ASPICE, particularly focusing on the intersections in the software engineering processes:

1. Software Unit Verification (SWE.4):
```plaintext
Direct Integration:
- MISRA is explicitly mentioned in SWE.4.BP1 Note 2:
"Static analysis can be done based on MISRA rulesets and other coding standards"

Key Areas:
- Static code analysis
- Unit verification measures
- Coding standard compliance
```

2. Software Detailed Design and Unit Construction (SWE.3):
```plaintext
Coding Principles:
- MISRA rules support coding principles like:
  * No implicit type conversions
  * Single entry/exit points
  * Range checks
  * Design by contract
  * Defensive programming
```

3. Quality Assurance (SUP.1):
```plaintext
Quality Criteria:
- MISRA can serve as:
  * Objective quality criteria
  * Verifiable compliance rules
  * Coding standard baseline
  * Quality metrics source
```

4. Implementation Touchpoints:

Base Practices | MISRA Integration
---------------|------------------
Static Analysis | MISRA rule checking
Code Reviews | MISRA compliance verification
Unit Testing | MISRA-compliant test cases
Quality Gates | MISRA compliance checks

5. Configuration Management (SUP.8):
```plaintext
Version Control:
- MISRA rule sets versions
- Deviation management
- Compliance documentation
- Tool configurations
```

6. Change Request Management (SUP.10):
```plaintext
Change Impact:
- MISRA compliance impact analysis
- Rule deviation assessments
- Compliance maintenance
```

7. Documentation Requirements:
```plaintext
ASPICE & MISRA Documentation:
- Coding standards
- Deviation permits
- Compliance reports
- Tool qualification
- Static analysis results
```

8. Tool Support:
```plaintext
Integrated Tools:
- Static analyzers
- Code review tools
- Compliance checkers
- Reporting tools
```

9. Process Integration Points:

ASPICE Process | MISRA Integration
---------------|------------------
SWE.1 Requirements | Security rules consideration
SWE.2 Architecture | MISRA architectural constraints
SWE.3 Detailed Design | MISRA-compliant design
SWE.4 Unit Verification | MISRA rule checking
SWE.5 Integration | Maintaining compliance
SWE.6 Qualification | Compliance verification

10. Best Practice Alignment:
```plaintext
Shared Goals:
- Code reliability
- Maintainability
- Safety assurance
- Quality standards
- Process compliance
```

Benefits of Integration:

1. Quality Assurance:
- Objective compliance criteria
- Automated verification
- Consistent standards

2. Process Efficiency:
- Automated checks
- Clear guidelines
- Standard tooling

3. Risk Reduction:
- Known good practices
- Proven guidelines
- Industry acceptance

4. Compliance Management:
- Clear requirements
- Documented deviations
- Traceable compliance

Would you like me to:
1. Provide more specific examples of MISRA rules and their ASPICE implementation?
2. Explain the tool integration aspects in more detail?
3. Describe specific compliance verification procedures?
4. Detail deviation management processes?
