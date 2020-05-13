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
                    Mandatory Effort:
                    </div>
                <div className="childContainer">
                    {
                        this.state.mandatoryLoadData.map(rowData =>
                            <div className="childContainer" >
                                <div class="addOnTitle">
                                    <h1>{rowData.mainTitle}</h1>
                                </div>

                                {
                                    rowData.detail.map(subrow =>
                                        <div class="addOncontrols">
                                            {
                                                <input id={subrow.find} type={subrow.type} checked={subrow.checked} value={subrow.value} onChange={this.props.FindCalculation} />
                                            }
                                        </div>
                                    )
                                }

                            </div>

                        )
                    }
                </div>
            </div>
        );
    }
}