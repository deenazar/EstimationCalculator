import React, { Component } from 'react';
import './CalculationEffort.css';

export default class CalculationEffortComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Effort: this.props.name,
            addOn: this.props.addOnEffort,
            status:false
        }

        console.log(this.state.Effort);
    }

    render() {

        var totalEffort = 0;
        console.log("before",totalEffort, "estimation Effort:", this.state.Effort , "addOns Effort:", this.state.addOn)
        totalEffort = this.state.Effort + this.state.addOn;
        console.log("after",totalEffort, "estimation Effort:", this.state.Effort , "addOns Effort:", this.state.addOn)

        return (
            <div class="calHeading">
                Total Effort: {totalEffort} Hrs

                <hr></hr>
            </div>
        )
    }
}