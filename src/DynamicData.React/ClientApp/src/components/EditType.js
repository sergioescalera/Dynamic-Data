import React, { Component } from 'react';

export class EditType extends Component {

    static displayName = EditType.name;

    _entityTypeName;

    constructor(props) {

        super(props);

        this._entityTypeName = props.match.params.name || "";
    }

    render() {
        return (<div>Edit Type</div>);
    }
}