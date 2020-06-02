import React, { Component } from 'react';
import './Estimation.css';


export default class Estimation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            essentialLoadData: this.props.essentialLoadData
        }

    }

    render() {

        return (
            <div className="container">
                <div className="titleHeading">
                    <div className="blockHeading">
                        <h1>Blocks</h1>
                    </div>
                    <div className="subTitle">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                    </div>
                </div>

                <div className="childContainer">

                    {
                        this.state.essentialLoadData.map(rowData =>
                            <div className="childContainer">
                                <div className="estimationTitle">
                                    <h1>{rowData.name}</h1>
                                </div>
                                <div className="estimationcontrols">
                                    {
                                        Object.keys(rowData.options).map((op, i) =>
                                            <input checked={rowData.choosen === op ? true : false} name={rowData.name} type="radio" value={op} onChange={this.props.FindCalculation} />
                                        )
                                    }
                                </div>
                                {/* <hr className="divided"></hr> */}
                            </div>

                        )
                    }
                </div>
            </div>
        );

    }

}

