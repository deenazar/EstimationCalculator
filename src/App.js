import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stepper from 'react-js-stepper';
//import EssentialComponent from './EssentialTask.js';

import Estimation from './component/Estimation.js';
import AddOns from './component/AddOns.js';
import EffortCalculate from './component/CalculationEffort.js';

const steps = [{ title: 'Essential effort' }, { title: 'Add-Ons' }, { title: 'Show Effort' },]

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
            totalEffort: 0,
            videoScore: 0,
            headerScore: 0,
            photoScore: 0,
            lightbox: 0,
            toaster: 0,
            whatever: 0,
            addOnsEffort: 0,
            calculateStatus: false
        }
    }

    InitialEffortSet = () =>{
        if(this.state.activeStep===1){
            this.setState({totalEffort:0, headerScore:0, photoScore:0, videoScore:0})
        }
        else if(this.state.activeStep === 2){
            this.setState({addOnsEffort:0, toaster:0, lightbox:0, whatever:0})
        }
    }

    handleOnClickStepper = (step) => {
        
        this.setState({ activeStep: step }, ()=>{
            this.InitialEffortSet();
        });
        
    }

    handleOnClickNext = () => {
        let nextStep = this.state.activeStep + 1;
        this.setState({ activeStep: nextStep })
    }

    handleOnClickBack = () => {
        let prevStep = this.state.activeStep - 1;
        this.setState({ activeStep: prevStep })
    }

    handleOnClickFinish = () => {
        let nextStep = 1;
        this.setState({ activeStep: nextStep })
    }

    EstimationCalculation = (e) => {
        this.setState({
            headerScore: e.target.name === "header" && (e.target.name !== "video" || e.target.name !== "photo") ? e.target.checked ? this.state.headerScore + parseInt(e.target.value) : this.state.headerScore - parseInt(e.target.value) : this.state.headerScore,
            videoScore: e.target.name === "video" && (e.target.name !== "header" || e.target.name !== "photo") ? e.target.checked ? this.state.videoScore + parseInt(e.target.value) : this.state.videoScore - parseInt(e.target.value) : this.state.videoScore,
            photoScore: e.target.name === "photo" && (e.target.name !== "header" || e.target.name !== "video") ? e.target.checked ? this.state.photoScore + parseInt(e.target.value) : this.state.photoScore - parseInt(e.target.value) : this.state.photoScore,
        }, () => {
            this.calculationEffort(this.state);
        });

    }

    AddOnsCalculation = (e) => {
        console.log(e.target.checked);

        //     this.setState({
        //     lightbox: e.target.name === "lightbox" ? e.target.checked ? this.state.addOnsEffort + parseInt(e.target.value) : this.state.addOnsEffort - parseInt(e.target.value) : this.state.lightbox,
        //     toaster: e.target.name === "toaster" ? e.target.checked ? this.state.addOnsEffort + parseInt(e.target.value) : this.state.addOnsEffort - parseInt(e.target.value) : this.state.toaster,
        //     whatever: e.target.name === "whatever" ? e.target.checked ? this.state.addOnsEffort + parseInt(e.target.value) : this.state.addOnsEffort - parseInt(e.target.value) : this.state.whatever,
        // }, () => {
        //     this.addOnscalculationEffort(this.state);
        //     console.log("Hour", this.state.lightbox, this.state.toaster, this.state.whatever);
        //     console.log("Total Hours:", this.state.addOnsEffort);
        // });

        this.setState({
            addOnsEffort: e.target.checked ? this.state.addOnsEffort + parseInt(e.target.value) : this.state.addOnsEffort - parseInt(e.target.value)
        })


    }

    addOnscalculationEffort = () => {
        this.setState({ addOnsEffort: this.state.lightbox + this.state.toaster + this.state.whatever });
    }

    calculationEffort() {
        this.setState({ totalEffort: this.state.headerScore + this.state.videoScore + this.state.photoScore });
        console.log("totalEffort", this.state.totalEffort);
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
                        this.state.activeStep === 1 ? <Estimation FindCalculation={this.EstimationCalculation} /> : this.state.activeStep === 2 ? <AddOns FindCalculation={this.AddOnsCalculation} /> : <EffortCalculate name={this.state.totalEffort} addOnEffort={this.state.addOnsEffort} />
                    }
                </div>




                <div class="button">
                    <input type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'}
                        onClick={this.state.activeStep === steps.length ? this.handleOnClickFinish : this.handleOnClickNext} />
                    {this.state.activeStep === 1 ? '' : <input type="button" value="Back" onClick={this.handleOnClickBack} />}
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