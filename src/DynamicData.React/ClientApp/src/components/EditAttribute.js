import React, { Component } from "react";
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { AttributeTypeCode, ATTRIBUTE_TYPE_CODES } from "../core/AttributeTypeCode";

export class EditAttribute extends Component {

    constructor(props) {

        super(props);

        this._attribute = props.attribute;
        this._index = props.index;

        this.state = {
            attribute: this._attribute,
            isNew: !this._attribute.Name,
            index: this._index,
            typeOptions: ATTRIBUTE_TYPE_CODES
        };

        console.log(this.state);
    }

    displayTypeCode(val) {

        return AttributeTypeCode[val];
    }

    onNameChange(event) {

    }

    onDisplayNameChange(event) {

    }

    onTypeChange(event) {

    }

    render() {
        return <div className="d-flex flex-row">
            <FormGroup className="flex-grow-1">
                <Label for={'attrName_' + this.state.index }>
                    Name
                </Label>
                <Col>
                    <Input type="text"
                        id={'attrName_' + this.state.index}
                        placeholder="Enter Attribute Name"
                        maxLength="20"
                        value={this.state.attribute.Name}
                        readOnly={!this.state.isNew}
                        onChange={(event) => this.onNameChange(event)} />
                </Col>
            </FormGroup>
            <FormGroup className="flex-grow-1">
                <Label for={'attrDisplayName_' + this.state.index}>
                    Display Name
                </Label>
                <Col>
                    <Input type="text"
                        id={'attrDisplayName_' + this.state.index}
                        placeholder="Enter Display Name"
                        maxLength="50"
                        value={this.state.attribute.DisplayName}
                        onChange={(event) => this.onDisplayNameChange(event) } />
                </Col>
            </FormGroup>

            <FormGroup className="flex-grow-1">
                <Label for={'attrType_' + this.state.index}>Type</Label>
                <Input type="select"
                    id={'attrType_' + this.state.index}
                    value={this.state.attribute.TypeCode}
                    onChange={(event) => this.onTypeChange(event)}>
                    {
                        this.state.typeOptions.map(code =>
                            <option key={'attrTypeCode_' + this.state.index + '_' + code}
                                value={code}>
                                {this.displayTypeCode(code)}
                            </option>
                        )
                    }
                </Input>
            </FormGroup>

        </div>
    }
}