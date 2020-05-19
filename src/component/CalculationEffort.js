import React, { Component } from 'react';
import './CalculationEffort.css';
import '../App.css'

const initialState = {
    externalEffort: 0,
    externalEffortName: '',
    externalEffortError: ''
}

var regEx = RegExp()

export default class CalculationEffortComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calculationEffortData: this.props.CalculationEffortData,
            totalEffort: this.props.totalEffort,
            externalEffort: 0,
            initialState: initialState,
            regexp: '/^[0-9\b]+$/'

        }

        this.externalEffortRef = React.createRef()
        this.externalEffortNameRef = React.createRef()



    }

    addEffort = (e) => {

        console.log("Data", this.externalEffortRef.current.value, this.externalEffortNameRef.current.value);

        if (this.externalEffortRef.current.value > 0 && this.externalEffortNameRef.current.value !== '') {
            let tempObj = {}
            let tempArray = [];

            tempObj.name = this.externalEffortNameRef.current.value;
            tempObj.value = this.externalEffortRef.current.value;

            tempArray = this.state.calculationEffortData;
            tempArray.push(tempObj);

            this.setState({
                calculationEffortData: tempArray,
                totalEffort: this.state.totalEffort + parseInt(tempObj.value),

                // clear the form
                initialState
            })
        } else {
            let externalEffortError = 'Invalid value of Effort and Hours';
            this.setState({
                externalEffortError
            })
        }
    }

    onChangeEvent = (e) => {
        console.log("Value", e.target.value);

        if (e.target.name == "externalEffort") {
            if (isNaN(e.target.value)) {
                this.setState({
                    initialState: {
                        ...this.state.initialState,
                        externalEffort: 0
                    }
                })
            } else {
                this.setState({
                    initialState: {
                        ...this.state.initialState,
                        externalEffort: e.target.value
                    }
                })
            }
        } else {
            this.setState({
                initialState: {
                    ...this.state.initialState,
                    externalEffortName: e.target.value
                }
            })
        }

    }



    render() {

        var totalEffort = 0;


        return (
            <div className="calHeading">
                {
                    this.state.calculationEffortData.map(rowData =>
                        <div>
                            <div className="showReport">
                                <div className="reportHeading">{rowData.name} </div>
                                <div className="reportScore"> - {rowData.value} Hrs</div>
                            </div>


                        </div>

                    )


                }

                {
                    <div className="addReport">
                        <div className="addreportHeading"><input className="EffortNameClass" value={this.state.initialState.externalEffortName} name="externalEffortName" onChange={this.onChangeEvent} ref={this.externalEffortNameRef} type="text" placeholder="Enter the effort">
                        </input>
                        </div>
                        <div className="addreportScore"> - <input className="EffortValueClass" pattern="[0-9]*" value={this.state.initialState.externalEffort} name="externalEffort" onChange={this.onChangeEvent} ref={this.externalEffortRef} type="text" placeholder="Enter the value">
                        </input> Hrs</div>
                        <div className="error">{this.state.externalEffortError}</div>
                        <div className="addbtn1">
                            <button onClick={this.addEffort}>Add</button>
                        </div>



                    </div>
                }

                <hr className="totalHr"></hr>
                <h1 className="totalEffort" >Total Effort: {this.state.totalEffort} Hrs </h1>

            </div>
        )
    }
}