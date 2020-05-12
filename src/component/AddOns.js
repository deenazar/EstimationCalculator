import React, { Component } from 'react';
import './AddOns.css';

export default class AddOnsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toasterStatus: false,
            lightboxStatus: false,
            whateverStatus: false,
            addOnsLoadData: this.props.addOnsLoadData
        }
    }

    statusChange = (e) => {
        this.setState({
            toasterStatus: e.target.name === "toaster" ? !this.state.toasterStatus : !this.state.toasterStatus,
            lightboxStatus: e.target.name === "lightbox" ? !this.state.lightboxStatus : !this.state.lightboxStatus,
            whateverStatus: e.target.name === "whatever" ? !this.state.whateverStatus : !this.state.whateverStatus,
        });
    }


    render() {
        return (
            <div className="container">
                <div className="heading">
                    Choose Drupal/MIS add Ons:
                    </div>
                <div className="childContainer">
                    {
                        this.state.addOnsLoadData.map(rowData =>
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