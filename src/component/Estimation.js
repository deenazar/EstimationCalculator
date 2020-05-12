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
            totalScore: 0,
            essentialLoadData: this.props.essentialLoadData
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
                <div class="subTitle">
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                </div>
                <div class="childContainer">

                    {
                        this.state.essentialLoadData.map(rowData =>
                            <div class="childContainer">
                                <div class="estimationTitle">
                                    <h1>{rowData.mainTitle}</h1>
                                </div>
                                <div class="estimationcontrols">
                                {
                                    rowData.detail.map(subrow =>
                                       
                                           
                                                <input id={subrow.find} checked={subrow.checked} type={subrow.type} value={subrow.value} onChange={this.props.FindCalculation} />
                                           
                                        
                                    )
                                }
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        );

    }

}

