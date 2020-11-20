import React, { Component } from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { AttributeTypeCode } from '../core/AttributeTypeCode';

export class FieldEditor extends Component {

    constructor(props) {

        super(props);

        this.state = {
            attr: props.attribute,
            value: props.value,
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

    render() {

        return (
            <FormGroup key={this.state.attr.Name} row>
                <Label for={this.state.attr.Name} sm={2}>
                    {this.state.attr.DisplayName}
                </Label>
                <Col sm={10}>
                    {
                        this.state.renderAsText ?
                            <Input type={this.state.attr.HtmlInputType}
                                name={this.state.attr.Name}
                                id={this.state.attr.Name}
                                placeholder={"Enter " + this.state.attr.DisplayName} /> : ''
                    }
                    {
                        this.state.renderAsCheckBox ?
                            <Input type="checkbox"
                                name={this.state.attr.Name}
                                id={this.state.attr.Name} /> : ''
                    }
                    {
                        this.state.renderAsOptionSet ?
                            <Input type="select"
                                name={this.state.attr.Name}
                                id={this.state.attr.Name}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Input> : ''
                    }
                </Col>
            </FormGroup >
        );
    }
}