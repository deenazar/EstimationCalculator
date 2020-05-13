import React, { Component } from 'react';
import './CalculationEffort.css';

export default class CalculationEffortComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calculationEffortData: this.props.CalculationEffortData,
            totalEffort: this.props.totalEffort
        }

        console.log("total Data", this.state.calculationEffortData);
    }

    render() {

        var totalEffort = 0;


        return (
            <div class="calHeading">
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
                <hr className="totalHr"></hr>
                <h1 className="totalEffort" >Total Effort: {this.state.totalEffort} Hrs </h1>

            </div>
        )
    }
}