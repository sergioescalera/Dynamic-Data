import React, { Component } from 'react';

export class EntityView extends Component {

    _type;
    _entity;

    constructor(props) {

        super(props);

        this._type = props.entityType;
        this._entity = props.entity;

        this.state = {
            entity: this._entity,
            type: this._type
        };
    }

    render() {

        return (
            <ul>
                {
                    this.state.type.Attributes.map(attr =>
                        <li key={attr.Name}>{attr.DisplayName}: {this.state.entity.Fields[attr.Name]}</li>)
                }
            </ul>
        );
    }
}