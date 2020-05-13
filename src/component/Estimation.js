import React, { Component } from 'react';
import './Estimation.css';


var score = 0;
var alp = {
    a:0,
    b:1,
    c:2
}



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

        this.state.essentialLoadData.map((x) => {
            Object.keys(x.options).map((data,i) => {
                console.log("name", data[i])
            })
        }
        )



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
                                    <h1>{rowData.name}</h1>
                                </div>
                                <div class="estimationcontrols">
                                    {
                                        Object.keys(rowData.options).map((op, i) =>
                                            <input checked={rowData.choosen === op ? true : false} name={rowData.name} type="radio" value={op} onChange={this.props.FindCalculation} />
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

