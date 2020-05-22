import React, { Component } from 'react';
import '../component/CalculationEffort.css';



export default class CustomComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customOnLoadData: this.props.customLoadData,
            initialState: this.props.initialState,
            externalError: this.props.externalError
        }

        this.externalEffortRef = React.createRef()
        this.externalEffortNameRef = React.createRef()
    }

    onChangeEvent = (e) => {

        if (e.target.name == "externalEffort") {
            if (isNaN(e.target.value)) {
                this.setState({
                    initialState: {
                        ...this.state.initialState,
                        externalEffort: 0
                    }
                })
            } else {
                this.setState({
                    initialState: {
                        ...this.state.initialState,
                        externalEffort: e.target.value
                    }
                })
            }
        } else {
            this.setState({
                initialState: {
                    ...this.state.initialState,
                    externalEffortName: e.target.value
                }
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        // Any time props.email changes, update state.

        if (nextProps.initialState !== this.props.initialState) {
            this.setState({
                initialState: nextProps.initialState
            });
        }
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.customOnLoadData.map(rowData =>
                        <div>
                            <div className="showReport">
                                <div className="reportHeading">{rowData.name} </div>
                                <div className="reportScore"> - {rowData.value} Hrs</div>
                            </div>
                        </div>
                    )
                }

                {
                    <div className="addReport">
                        <div className="addreportHeading"><input className="EffortNameClass" value={this.state.initialState.externalEffortName} name="externalEffortName" onChange={this.onChangeEvent} ref={this.externalEffortNameRef} type="text" placeholder="Enter the effort">
                        </input>
                        </div>
                        <div className="addreportScore"> - <input className="EffortValueClass" pattern="[0-9]*" value={this.state.initialState.externalEffort} name="externalEffort" onChange={this.onChangeEvent} ref={this.externalEffortRef} type="text">
                        </input> Hrs</div>
                        <div className="addbtn1">
                            <button onClick={this.props.addEffort}>Add</button>
                        </div>
                        <div className="error">{this.props.externalError}</div>
                    </div>
                }
            </div>

        );
    }
}