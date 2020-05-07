import React from 'react';
import ReactDom from 'react-dom';

const checkboxes = [
    {
        headerName: "Header",
        radiodata: [
            {
                type: 'radio',
                trigger: 'onChange',
                value: 'S',
                hours: '2'
            },
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'M',
                hours: '3'
            },
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'L',
                hours: '4'
            }
        ]
    },
    {
        headerName: "Videos",
        radiodata: [
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'S',
                hours: '2'
            },
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'M',
                hours: '3'
            },
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'L',
                hours: '4'
            }
        ]
    },
    {
        headerName: "Photos",
        radiodata: [
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'S',
                hours: '2'
            },
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'M',
                hours: '3'
            },
            {
                type: 'checkbox',
                trigger: 'onChange',
                value: 'L',
                hours: '4'
            }
        ]
    }
]


class EssentialComponent extends React.Component {

    constructor(props) {
        super(props);

        this.radioChange = this.radioChange.bind(this);
    }

    radioChange() {
        alert(checkboxes[0].headerName);
    }


    render() {
        
    }
}

export default EssentialComponent;