import React, { Component } from 'react';
import './Estimation.css';


var score = 0;



export default class Estimation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headerScore: 0,
            videoScore: 0,
            photoScore: 0,
            totalScore: 0
        }

    }

    headerEstimate = (e) => {
        this.setState({ headerScore: parseInt(e.target.value) })
    }

    videoEstimate = (e) => {
        this.setState({ videoScore: parseInt(e.target.value) })
    }

    photoEstimate = (e) => {
        this.setState({ photoScore: parseInt(e.target.value) })
    }

    validate = () => {
        this.setState({ totalScore: this.state.headerScore + this.state.videoScore + this.state.photoScore })
    }

    render() {

        return (
            <div class="container">
                <div class="childContainer">
                    <div class="subTitle">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                    </div>
                    <div class="estimationTitle">
                        <h1>Header</h1>
                    </div>

                    <div class="estimationcontrols">
                        <input type="checkbox" name="header" value="2" onChange={this.props.FindCalculation} />
                        <input type="checkbox" name="header" value="4" onChange={this.props.FindCalculation} />
                        <input type="checkbox" name="header" value="6" onChange={this.props.FindCalculation} />
                    </div>

                </div>

                <div class="childContainer">
                    <div class="estimationTitle">
                        <h1>Video</h1>
                    </div>

                    <div class="estimationcontrols">
                        <input type="checkbox" name="video" value="2" onChange={this.props.FindCalculation} />
                        <input type="checkbox" name="video" value="4" onChange={this.props.FindCalculation} />
                        <input type="checkbox" name="video" value="6" onChange={this.props.FindCalculation} />
                    </div>

                </div>

                <div class="childContainer">
                    <div class="estimationTitle">
                        <h1>Photos</h1>
                    </div>
                    <div class="estimationcontrols">
                        <input type="checkbox" name="photo" value="2" onChange={this.props.FindCalculation} />
                        <input type="checkbox" name="photo" value="4" onChange={this.props.FindCalculation} />
                        <input type="checkbox" name="photo" value="6" onChange={this.props.FindCalculation} />
                    </div>

                </div>
            </div>

        )

    }

}

