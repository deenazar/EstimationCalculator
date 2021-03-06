import React, { Component } from 'react';
import './AddOns.css';

export default class AddOnsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addOnsLoadData: this.props.addOnsLoadData
        }
    }


    render() {
        return (
            <div className="container">
                <div className="heading">
                    Choose Drupal/MIS add Ons:
                    </div>
                    {
                        this.state.addOnsLoadData.map(rowData =>
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