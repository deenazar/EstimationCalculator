import React, { Component } from 'react';
import './AddOns.css';

export default class AddOnsComponent extends Component {

    constructor() {
        super();

        this.state = {
            toasterStatus: false,
            lightboxStatus: false,
            whateverStatus: false
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
            <div class="container">
                <div class="childContainer">
                    <div class="heading">
                        Choose Drupal/MIS add Ons:
                    </div>
                    <div class="addOnTitle">
                    <h1>Toaster</h1>
                    </div>
                  
                    <div class="addOncontrols">
                        <input type="checkbox" name="toaster" value="2" onChange={this.props.FindCalculation} />
                    </div>


                </div>

                <div class="childContainer">
                    <div class="addOnTitle">
                        <h1>Lightbox</h1>
                    </div>

                    <div class="addOncontrols">
                        <input type="checkbox" name="lightbox" value="4" onChange={this.props.FindCalculation} />
                    </div>


                </div>

                <div class="childContainer">
                    <div class="addOnTitle">
                        <h1>Whatever</h1>
                    </div>

                    <div class="addOncontrols">
                        <input type="checkbox" name="whatever" value="6" onChange={this.props.FindCalculation} />
                    </div>

                </div>
            </div>
        )
    }
}