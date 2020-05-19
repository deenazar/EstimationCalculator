import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stepper from 'react-js-stepper';
import Estimation from './component/Estimation.js';
import AddOns from './component/AddOns.js';
import EffortCalculate from './component/CalculationEffort.js';
import MandatoryComponent from './component/Mandatory';


// Variable declaration
const steps = [{ title: 'Essential effort' }, { title: 'Add-Ons' }, { title: 'Mandatory' }, { title: 'Show Effort' },]

var essentialLoadData = [
    {
        name: 'Header',
        options:
        {
            Small: 2,
            Medium: 4,
            Large: 6
        },
        choosen: ''
    },
    {
        name: 'Videos',
        options:
        {
            Small: 2,
            Medium: 4,
            Large: 6
        },
        choosen: ''
    },
    {
        name: 'Photos',
        options:
        {
            Small: 2,
            Medium: 4,
            Large: 6
        },
        choosen: ''
    }
]

var addOnsLoadData = [
    {
        Heading: "AddOns",
        detail: [
            {
                name:"Mailing List Block (in Page)",
                value: 12,
                checked: false
            },
            {
                name: "Turnkey LightBox",
                value: 4,
                checked: false
            },
            {
                value: 4,
                name: "Turnkey Toaster",
                checked: false
            },
            {
                value: 2,
                name: "Cookie Banner",
                checked: false
            },
            {
                value: 4,
                name: "Mailing List Page",
                checked: false
            },
            {
                value: 4,
                name: "Song Kick Widget",
                checked: false
            }

        ]

    }
]

var mandatoryLoadData = [
    {
        Heading: "Mandatory",
        detail: [
            {
                name: "Site cleanup",
                value: 4,
                checked: true
            },
            {
                name: "DTM",
                value: 8,
                checked: true
            },
            {
                name: "404/403  Page",
                value: 4,
                checked: true
            },
            {
                name: "SEO/Favicon",
                value: 4,
                checked: true
            },
            {
                name: "Footer Section(Without Mailing List)",
                value: 4,
                checked: true
            },
            {
                name: "Pre Launch Activities",
                value: 12,
                checked: true
            }
        ]
    }
]

// Clone JSON array object - For use of when refresh the controls

var essentialCopyLoadData = [
    {
        name: 'Header',
        options:
        {
            Small: 2,
            Medium: 4,
            Large: 6
        },
        choosen: ''
    },
    {
        name: 'Videos',
        options:
        {
            Small: 2,
            Medium: 4,
            Large: 6
        },
        choosen: ''
    },
    {
        name: 'Photos',
        options:
        {
            Small: 2,
            Medium: 4,
            Large: 6
        },
        choosen: ''
    }
]

var addOnsCopyLoadData = [
    {
        Heading: "AddOns",
        detail: [
            {
                name:"Mailing List Block (in Page)",
                value: 12,
                checked: false
            },
            {
                name: "Turnkey LightBox",
                value: 4,
                checked: false
            },
            {
                value: 4,
                name: "Turnkey Toaster",
                checked: false
            },
            {
                value: 2,
                name: "Cookie Banner",
                checked: false
            },
            {
                value: 4,
                name: "Mailing List Page",
                checked: false
            },
            {
                value: 4,
                name: "Song Kick Widget",
                checked: false
            }

        ]

    }
]

var mandatoryCopyLoadData = [
    {
        Heading: "Mandatory",
        detail: [
            {
                name: "Site cleanup",
                value: 4,
                checked: true
            },
            {
                name: "DTM",
                value: 8,
                checked: true
            },
            {
                name: "404/403  Page",
                value: 4,
                checked: true
            },
            {
                name: "SEO/Favicon",
                value: 4,
                checked: true
            },
            {
                name: "Footer Section(Without Mailing List)",
                value: 4,
                checked: true
            },
            {
                name: "Pre Launch Activities",
                value: 12,
                checked: true
            }
        ]
    }
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
            mandatoryOriginalData: mandatoryLoadData,
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
        if (step == steps.length) {
            this.TotalEffortCalculation(steps.length, step)
        }
        else {
            this.setState({ activeStep: step }, () => {
                this.InitialEffortSet();
            });
        }


    }

    // Calculate the total effort here,

    TotalEffortCalculation = (length, step) => {

        let effort = 0;
        var tempObj = {};
        calculationLoadData = [];
        if (step == length) {
            this.state.essentialOriginalData.map((temp) => {
                tempObj = {};
                if(temp.choosen != ""){
                    tempObj.name = temp.name + " - " + temp.choosen;
                    tempObj.value = temp.options[temp.choosen];
                    calculationLoadData.push(tempObj);
                    effort = effort + temp.options[temp.choosen];
                }
            }
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
            calculationEffortData: calculationLoadData, totalEffort: effort, activeStep: step
        });


    }

    EstimationCalculation = (e) => {

        // calculationLoadData = [];

        essentialLoadData.map((data) => {
            if(e.target.name == data.name){
                data.choosen = e.target.value.toString();
            }
        }
        );

        this.setState({
            essentialOriginalData: essentialLoadData
        });

    }

    AddOnsCalculation = (e) => {
        calculationLoadData = [];


        addOnsLoadData.map((data) =>
            data.detail.map((subdata) => {
                subdata.checked = subdata.name === e.target.name ? e.target.checked : subdata.checked;
            }
            )
        );

        this.setState({
            addOnsOriginalData: addOnsLoadData
        })

    }

    MandatoryCalculation = (e) => {
        calculationLoadData = [];

        mandatoryLoadData.map((data) =>
            data.detail.map((subdata) => {
                subdata.checked = subdata.name === e.target.name ? e.target.checked : subdata.checked;
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
        this.setState({ activeStep: nextStep, essentialOriginalData: essentialCopyLoadData, addOnsOriginalData: addOnsCopyLoadData, mandatoryOriginalData: mandatoryCopyLoadData })
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
