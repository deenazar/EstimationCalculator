import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stepper from 'react-js-stepper';
//import EssentialComponent from './EssentialTask.js';

import Estimation from './component/Estimation.js';
import AddOns from './component/AddOns.js';
import EffortCalculate from './component/CalculationEffort.js';
import MandatoryComponent from './component/Mandatory';

const steps = [{ title: 'Essential effort' }, { title: 'Add-Ons' }, { title: 'Mandatory' }, { title: 'Show Effort' },]

var essentialLoadData = [
    {
        Heading: "Essential",
        mainTitle: 'Header',
        detail: [
            {
                find: 'H1',
                type: 'radio',
                value: 2,
                name: "Header",
                checked: false
            },
            {
                find: 'H2',
                type: 'radio',
                value: 4,
                name: "Header",
                checked: false
            },
            {
                find: 'H3',
                type: 'radio',
                value: 6,
                name: "Header",
                checked: false
            }
        ]

    },
    {
        Heading: "Essential",
        mainTitle: 'Videos',
        detail: [
            {
                find: 'V1',
                type: 'radio',
                value: 2,
                name: "Videos",
                checked: false
            },
            {
                find: 'V2',
                type: 'radio',
                value: 4,
                name: "Videos",
                checked: false
            },
            {
                find: 'V3',
                type: 'radio',
                value: 6,
                name: "Videos",
                checked: false
            }
        ]

    },
    {
        Heading: "Essential",
        mainTitle: 'Photos',
        detail: [
            {
                find: 'P1',
                type: 'radio',
                value: 2,
                name: "Photos",
                checked: false
            },
            {
                find: 'P2',
                type: 'radio',
                value: 4,
                name: "Photos",
                checked: false
            },
            {
                find: 'P3',
                type: 'radio',
                value: 6,
                name: "Photos",
                checked: false
            }
        ]

    }
]

var addOnsLoadData = [
    {
        Heading: "AddOns",
        mainTitle: 'Mailing List Block (in Page)',
        detail: [
            {
                find: 'T1',
                type: 'checkbox',
                name:"Mailing List Block (in Page)",
                value: 12,
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Turnkey LightBox',
        detail: [
            {
                find: 'L1',
                type: 'checkbox',
                name:"Turnkey LightBox",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Turnkey Toaster',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 4,
                name:"Turnkey Toaster",
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Cookie Banner',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 2,
                name:"Cookie Banner",
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Mailing List Page',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 4,
                name:"Mailing List Page",
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Song Kick Widget',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 4,
                name:"Song Kick Widget",
                checked: false
            }
        ]

    },
]

var mandatoryLoadData = [
    {
        Heading: "Mandatory",
        mainTitle: 'Site cleanup',
        detail: [
            {
                find: 'M1',
                type: 'checkbox',
                name:"Site cleanup",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'DTM',
        detail: [
            {
                find: 'M2',
                type: 'checkbox',
                name:"DTM",
                value: 8,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: '404/403  Page',
        detail: [
            {
                find: 'M3',
                type: 'checkbox',
                name:"404/403  Page",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'SEO/Favicon',
        detail: [
            {
                find: 'M4',
                type: 'checkbox',
                name:"SEO/Favicon",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'Footer Section(Without Mailing List)',
        detail: [
            {
                find: 'M5',
                type: 'checkbox',
                name:"Footer Section(Without Mailing List)",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'Pre Launch Activities',
        detail: [
            {
                find: 'M6',
                type: 'checkbox',
                name:"Pre Launch Activities",
                value: 12,
                checked: false
            }
        ]

    },

]

// Clone JSON array object - For use of when refresh the controls

var essentialCopyLoadData = [
    {
        Heading: "Essential",
        mainTitle: 'Header',
        detail: [
            {
                find: 'H1',
                type: 'radio',
                value: 2,
                name: "Header",
                checked: false
            },
            {
                find: 'H2',
                type: 'radio',
                value: 4,
                name: "Header",
                checked: false
            },
            {
                find: 'H3',
                type: 'radio',
                value: 6,
                name: "Header",
                checked: false
            }
        ]

    },
    {
        Heading: "Essential",
        mainTitle: 'Videos',
        detail: [
            {
                find: 'V1',
                type: 'radio',
                value: 2,
                name: "Videos",
                checked: false
            },
            {
                find: 'V2',
                type: 'radio',
                value: 4,
                name: "Videos",
                checked: false
            },
            {
                find: 'V3',
                type: 'radio',
                value: 6,
                name: "Videos",
                checked: false
            }
        ]

    },
    {
        Heading: "Essential",
        mainTitle: 'Photos',
        detail: [
            {
                find: 'P1',
                type: 'radio',
                value: 2,
                name: "Photos",
                checked: false
            },
            {
                find: 'P2',
                type: 'radio',
                value: 4,
                name: "Photos",
                checked: false
            },
            {
                find: 'P3',
                type: 'radio',
                value: 6,
                name: "Photos",
                checked: false
            }
        ]

    }
]

var addOnsCopyLoadData = [
    {
        Heading: "AddOns",
        mainTitle: 'Mailing List Block (in Page)',
        detail: [
            {
                find: 'T1',
                type: 'checkbox',
                name:"Mailing List Block (in Page)",
                value: 12,
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Turnkey LightBox',
        detail: [
            {
                find: 'L1',
                type: 'checkbox',
                name:"Turnkey LightBox",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Turnkey Toaster',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 4,
                name:"Turnkey Toaster",
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Cookie Banner',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 2,
                name:"Cookie Banner",
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Mailing List Page',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 4,
                name:"Mailing List Page",
                checked: false
            }
        ]

    },
    {
        Heading: "AddOns",
        mainTitle: 'Song Kick Widget',
        detail: [
            {
                find: 'W1',
                type: 'checkbox',
                value: 4,
                name:"Song Kick Widget",
                checked: false
            }
        ]

    },
]

var mandatoryCopyLoadData = [
    {
        Heading: "Mandatory",
        mainTitle: 'Site cleanup',
        detail: [
            {
                find: 'M1',
                type: 'checkbox',
                name:"Site cleanup",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'DTM',
        detail: [
            {
                find: 'M2',
                type: 'checkbox',
                name:"DTM",
                value: 8,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: '404/403  Page',
        detail: [
            {
                find: 'M3',
                type: 'checkbox',
                name:"404/403  Page",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'SEO/Favicon',
        detail: [
            {
                find: 'M4',
                type: 'checkbox',
                name:"SEO/Favicon",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'Footer Section(Without Mailing List)',
        detail: [
            {
                find: 'M5',
                type: 'checkbox',
                name:"Footer Section(Without Mailing List)",
                value: 4,
                checked: false
            }
        ]

    },
    {
        Heading: "Mandatory",
        mainTitle: 'Pre Launch Activities',
        detail: [
            {
                find: 'M6',
                type: 'checkbox',
                name:"Pre Launch Activities",
                value: 12,
                checked: false
            }
        ]

    },

]

var calculationLoadData = [];
var effort = 0;

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
            essentialOriginalData: essentialLoadData,
            addOnsOriginalData: addOnsLoadData,
            mandatoryOriginalData:mandatoryLoadData,
            calculationEffortData: calculationLoadData,
            totalEffort: 0
        }
    }

    InitialEffortSet = () => {
        if (this.state.activeStep === 1) {
            this.setState({ totalEffort: 0, headerScore: 0, photoScore: 0, videoScore: 0 })
        }
        else if (this.state.activeStep === 2) {
            this.setState({ addOnsEffort: 0, toaster: 0, lightbox: 0, whatever: 0 })
        }
        else if (this.state.activeStep === steps.length) {
            this.TotalEffortCalculation(4);
        }
    }

    handleOnClickStepper = (step) => {
        if(step == steps.length){
            this.TotalEffortCalculation(steps.length, step)
        }
        else{
            this.setState({ activeStep: step }, () => {
                this.InitialEffortSet();
            });
        }
        

    }

    TotalEffortCalculation = (length, step) => {

        let effort = 0;
        calculationLoadData = [];
        console.log("steps", step, length);
        if (step == length) {
            
            console.log("datas", this.state.essentialOriginalData, this.state.addOnsOriginalData);
            this.state.essentialOriginalData.map((temp) =>
                temp.detail.map((subTemp) => {
                    if (subTemp.checked) {
                        calculationLoadData.push(subTemp);
                        effort = effort + subTemp.value;
                    }
                })
            )

            this.state.addOnsOriginalData.map((temp) =>
                temp.detail.map((subTemp) => {
                    if (subTemp.checked) {
                        calculationLoadData.push(subTemp);
                        effort = effort + subTemp.value;
                    }
                })
            )

            this.state.mandatoryOriginalData.map((temp) =>
                temp.detail.map((subTemp) => {
                    if (subTemp.checked) {
                        calculationLoadData.push(subTemp);
                        effort = effort + subTemp.value;
                    }
                })
            )
        }

        this.setState({
            calculationEffortData: calculationLoadData, totalEffort: effort , activeStep: step
        }, console.log("Calculation Data", this.state.calculationEffortData, this.state.totalEffort));

        

    }

    EstimationCalculation = (e) => {
        console.log("name", e.target.name);

        calculationLoadData = [];

        essentialLoadData.map((data) =>
            data.detail.map((subdata) => {
                if (subdata.find === e.target.id) {
                    subdata.checked = e.target.checked;
                }
                else {
                    if(subdata.name == e.target.name){
                        subdata.checked =  false;
                    }
                    
                }
            }
            )
        );

        this.setState({
            essentialOriginalData: essentialLoadData
        })

    }

    AddOnsCalculation = (e) => {
        console.log(e.target.checked)
        calculationLoadData = [];


        addOnsLoadData.map((data) =>
            data.detail.map((subdata) => {
                subdata.checked = subdata.find === e.target.id ? e.target.checked : subdata.checked;
            }
            )
        );

        this.setState({
            addOnsOriginalData: addOnsLoadData
        })

    }

    MandatoryCalculation = (e) => {
        console.log(e.target.checked)
        calculationLoadData = [];


        mandatoryLoadData.map((data) =>
            data.detail.map((subdata) => {
                subdata.checked = subdata.find === e.target.id ? e.target.checked : subdata.checked;
            }
            )
        );

        this.setState({
            mandatoryOriginalData: mandatoryLoadData
        })

    }

    handleOnClickNext = () => {
        let nextStep = this.state.activeStep + 1;
        this.TotalEffortCalculation(steps.length, nextStep);
    }

    handleOnClickBack = () => {
        let prevStep = this.state.activeStep - 1;
        this.setState({ activeStep: prevStep })
    }

    handleOnClickFinish = () => {
        let nextStep = 1;
        this.setState({activeStep: nextStep , essentialOriginalData: essentialCopyLoadData , addOnsOriginalData: addOnsCopyLoadData, mandatoryOriginalData: mandatoryCopyLoadData })
        //this.setState({ activeStep: nextStep })
    }
    

    render() {
        return (
            <React.Fragment>
                <h1> Effort Calculator </h1><hr></hr><br />
                <Stepper
                    steps={steps}
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={false}
                />

                <div style={{ marginTop: '40px' }}>
                    {
                        this.state.activeStep === 1 ? <Estimation essentialLoadData={this.state.essentialOriginalData} FindCalculation={this.EstimationCalculation} /> : this.state.activeStep === 2 ? <AddOns addOnsLoadData={this.state.addOnsOriginalData} FindCalculation={this.AddOnsCalculation} /> : this.state.activeStep === 3 ? <MandatoryComponent mandatoryLoadData={this.state.mandatoryOriginalData} FindCalculation={this.MandatoryCalculation} /> : <EffortCalculate totalEffort={this.state.totalEffort} CalculationEffortData={calculationLoadData} name={this.state.totalEffort} addOnEffort={this.state.addOnsEffort} />
                    }
                </div>




                <div className="button">
                    <div className="btn1">
                        {this.state.activeStep === 1 ? '' : <input type="button" value="Back" onClick={this.handleOnClickBack} />}
                    </div>
                    <div className="btn2">
                        <input type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'}
                            onClick={this.state.activeStep === steps.length ? this.handleOnClickFinish : this.handleOnClickNext} />
                    </div>


                </div>




            </React.Fragment>
        )
    }
}


// <div style={{ marginTop: '40px' }}>
//     {this.state.activeStep === 1 ? <div> You are in Stage {this.state.activeStep} </div> :
//         this.state.activeStep === 2 ? <div> You are in Stage {this.state.activeStep} </div> :
//             <div> You are in Stage {this.state.activeStep} </div>
//     }
// </div>