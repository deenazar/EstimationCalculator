import React, { Component } from 'react';
import './CalculationEffort.css';
import '../App.css'

export default class CalculationEffortComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calculationEffortData: this.props.CalculationEffortData,
            totalEffort: this.props.totalEffort,
            externalEffort: 0,
        }

        console.log("Calculation", this.state.calculationEffortData);
    }

    render() {

        return (
            <div className="calHeading">
                {
                    this.state.calculationEffortData.map(rowData =>
                        <div className={rowData.header == "Essential" ? "Essential" : rowData.header == "AddOns" ? "AddOns" : rowData.header == "Mandatory" ? "Mandatory" : "Custom"}>
                            <div className={rowData.header == "Essential" ? "showReport " + "Essential" : rowData.header == "AddOns" ? "showReport " + "AddOns" : rowData.header == "Mandatory" ? "showReport " + "Mandatory" : "showReport " + "Custom"}>
                                <div className="reportHeading">{rowData.name} </div>
                                <div className="reportScore"> - {rowData.value} Hrs</div>
                            </div>
                        </div>
                    )
                }

                <hr className="totalHr"></hr>
                <h1 className="totalEffort" >Total Effort: {this.state.totalEffort} Hrs </h1>

            </div>
        )
    }
}