import React, { Component } from 'react';
import './AddOns.css';

export default class MandatoryComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mandatoryLoadData: this.props.mandatoryLoadData
        }
    }

    render() {
        return (
            <div className="container">
            <div className="heading">
                </div>
                {
                    this.state.mandatoryLoadData.map(rowData =>
                        rowData.detail.map(subrow =>
                            <div class="childContainer">
                                    <div class="addOnTitle">
                                        <h1>{subrow.name}</h1>
                                    </div>
                                    <div class="addOncontrols">
                                        {
                                            <input type="checkbox" name={subrow.name} checked={subrow.checked} value={subrow.value} onChange={this.props.FindCalculation} />
                                        }
                                    </div>
                                        
                            </div>
                        )

                    )
                }
            </div>
        );
    }
}