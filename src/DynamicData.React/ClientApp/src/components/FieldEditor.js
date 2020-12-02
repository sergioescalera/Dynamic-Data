import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { AttributeTypeCode } from '../core/AttributeTypeCode';
import { isDateObj, isNumber } from '../core/EntitySerialization';
import { EnumRepository } from '../data/EnumRepository';
import { Storage } from '../data/Storage';

export class FieldEditor extends Component {

    _storage;
    _enumRepository;
    _attribute;
    _value;
    _enum;

    constructor(props) {

        super(props);

        this._attribute = props.attribute;
        this._value = this.parseValue(props.attribute, props.value);

        this._storage = new Storage();
        this._enumRepository = new EnumRepository(this._storage);

        if (this._attribute.TypeCode === AttributeTypeCode.Enum) {

            this._enum = this._enumRepository.GetByName(props.attribute.EnumName);
        }
        
        this.state = {
            attr: this._attribute,
            value: this._value,
            values: this._enum ? this._enum.Values : [],
            renderAsText: this.getRenderAsInputText(props.attribute),
            renderAsCheckBox: this.getRenderAsCheckBox(props.attribute),
            renderAsOptionSet: this.getRenderAsOptionSet(props.attribute)
        };
    }

    getRenderAsInputText(attr) {

        return [
            AttributeTypeCode.Email,
            AttributeTypeCode.Phone,
            AttributeTypeCode.String,
            AttributeTypeCode.Url,
            AttributeTypeCode.Decimal,
            AttributeTypeCode.Int,
            AttributeTypeCode.Currency,
            AttributeTypeCode.Text,
            AttributeTypeCode.Date,
            AttributeTypeCode.DateTime,
            AttributeTypeCode.Time
        ].indexOf(attr.TypeCode) >= 0;
    }

    getRenderAsCheckBox(attr) {

        return attr.TypeCode === AttributeTypeCode.Boolean;
    }

    getRenderAsOptionSet(attr) {

        return attr.TypeCode === AttributeTypeCode.Enum;
    }

    onChange(event) {

        if (this._attribute.TypeCode === AttributeTypeCode.Boolean) {

            this._value = event.target.checked;

        } else {

            this._value = event.target.value;
        }

        this.setState({
            value: this._value
        });

        this.props.onChange(this._value);
    }

    parseValue(attr, value) {

        switch (attr.TypeCode) {

            case AttributeTypeCode.Boolean:
                return value || false;
            case AttributeTypeCode.Currency:
            case AttributeTypeCode.Decimal:
            case AttributeTypeCode.Int:
                if (isNumber(value)) {
                    return value.toString();
                }
                break;
            case AttributeTypeCode.Date:
                if (isDateObj(value)) {
                    return value.toJSON().split("T")[0];
                }
                break;
            case AttributeTypeCode.DateTime:
                if (isDateObj(value)) {
                    return `${value.toJSON().split("T")[0]}T${value.getHours()}:${value.getMinutes()}`;
                }
                break;
            default:
        }

        return value || "";
    }

    render() {

        if (this.state.renderAsCheckBox) {

            return <FormGroup check>
                <Label check>
                    <Input type="checkbox"
                        name={this.state.attr.Name}
                        id={this.state.attr.Name}
                        checked={this.state.value}
                        onChange={(event) => this.onChange(event)} />
                    {this.state.attr.DisplayName}
                </Label> 
            </FormGroup>;
        }

        return (
            <FormGroup key={this.state.attr.Name}>
                <Label for={this.state.attr.Name}>
                    {this.state.attr.DisplayName}
                </Label>
                {
                    this.state.renderAsText ?
                        <Input type={this.state.attr.HtmlInputType}
                            name={this.state.attr.Name}
                            id={this.state.attr.Name}
                            placeholder={"Enter " + this.state.attr.DisplayName}
                            value={this.state.value}
                            onChange={(event) => this.onChange(event)} /> : ''
                }
                {
                    this.state.renderAsOptionSet ?
                        <Input type="select"
                            name={this.state.attr.Name}
                            id={this.state.attr.Name}>
                            {
                                this.state.values.map(val => <option value={val} key={val}>{val}</option>)
                            }
                        </Input> : ''
                }
            </FormGroup >
        );
    }
}