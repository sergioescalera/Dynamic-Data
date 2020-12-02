import React, { Component } from 'react';
import { AttributeTypeCode } from '../core/AttributeTypeCode';

export class FieldView extends Component {

    constructor(props) {

        super(props);

        this._attribute = props.attribute;
        this._value = props.value;

        this.state = {
            key: this._attribute.Name,
            displayName: this._attribute.DisplayName,
            value: this.formatValue(this._value)
        };
    }

    formatValue(value) {

        if (this._attribute.TypeCode === AttributeTypeCode.Boolean) {
            return value ? 'Yes' : 'No';
        }

        if (value === null || value === void 0) {
            return "";
        }

        if (this._attribute.TypeCode === AttributeTypeCode.Date) {
            return value.toLocaleDateString();
        }

        if (this._attribute.TypeCode === AttributeTypeCode.DateTime) {
            return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`;
        }

        return value.toString();
    }

    render() {

        return [
            <dt key={this.state.key + '-dt'}>{this.state.displayName}</dt>,
            <dd key={this.state.key + '-dd'}>{this.state.value}</dd>
        ];
    }
}