import React, { Component } from "react";
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { AttributeTypeCode, ATTRIBUTE_TYPE_CODES } from "../core/AttributeTypeCode";
import { EnumRepository } from "../data/EnumRepository";
import { Storage } from "../data/Storage";

export class EditAttribute extends Component {

    _storage;
    _enumRepository;

    _attribute;
    _index;

    _errors;

    _enums;

    constructor(props) {

        super(props);

        this._storage = new Storage();
        this._enumRepository = new EnumRepository(this._storage);
        this._enumValues = this._enumRepository.GetAll();

        this._attribute = props.attribute;
        this._index = props.index;
        this._isEnum = this._attribute.TypeCode === AttributeTypeCode.Enum;

        this._errors = {
            nameRequired: false,
            displayNameRequired: false,
            typeCodeRequired: false,
            enumNameRequired: false
        };
        
        this.state = {
            attribute: this._attribute,
            isNew: !this._attribute.Name,
            isEnum: this._isEnum,
            index: this._index,
            errors: this._errors,
            typeOptions: ATTRIBUTE_TYPE_CODES,
            enumValues: this._enumValues
        };

        document.addEventListener("validateAttributes", () => this.validate(), false);
    }

    displayTypeCode(val) {

        return AttributeTypeCode[val];
    }

    onNameChange(event) {

        this._attribute.Name = event.target.value;

        this.validateName();
    }

    onDisplayNameChange(event) {

        this._attribute.DisplayName = event.target.value;

        this.validateDisplayName();
    }

    onTypeCodeChange(event) {

        this._attribute.TypeCode = parseInt(event.target.value);
        this._isEnum = this._attribute.TypeCode === AttributeTypeCode.Enum;

        this.validateTypeCode();
    }

    onEnumNameChange(event) {

        this._attribute.EnumName = event.target.value;
    }

    validate() {

        this.validateName();

        this.validateDisplayName();
    }

    validateName() {

        this._errors.nameRequired = !this._attribute.Name;

        this.setState({
            attribute: this._attribute,
            errors: this._errors
        });
    }

    validateDisplayName() {

        this._errors.displayNameRequired = !this._attribute.DisplayName;

        this.setState({
            attribute: this._attribute,
            errors: this._errors
        });
    }

    validateTypeCode() {

        this._errors.enumNameRequired = this._isEnum && !this._attribute.EnumName;
        this._errors.typeCodeRequired = !this._attribute.TypeCode;

        this.setState({
            attribute: this._attribute,
            isEnum: this._isEnum,
            errors: this._errors
        });
    }

    render() {
        return <div className="d-flex flex-row">
            <FormGroup className="flex-grow-1 mr-2">
                <Label for={'attrName_' + this.state.index }>
                    Name
                </Label>
                <Input type="text"
                    id={'attrName_' + this.state.index}
                    placeholder="Enter Attribute Name"
                    maxLength="20"
                    value={this.state.attribute.Name}
                    readOnly={!this.state.isNew}
                    onChange={(event) => this.onNameChange(event)}
                    invalid={this.state.errors.nameRequired} />
                <FormFeedback invalid="true">This field is required.</FormFeedback>
            </FormGroup>

            <FormGroup className="flex-grow-1 mr-2">
                <Label for={'attrDisplayName_' + this.state.index}>
                    Display Name
                </Label>
                <Input type="text"
                    id={'attrDisplayName_' + this.state.index}
                    placeholder="Enter Display Name"
                    maxLength="50"
                    value={this.state.attribute.DisplayName}
                    onChange={(event) => this.onDisplayNameChange(event)}
                    invalid={this.state.errors.displayNameRequired} />
                <FormFeedback invalid="true">This field is required.</FormFeedback>
            </FormGroup>

            <div className="flex-grow-1">
                <FormGroup>
                    <Label for={'attrType_' + this.state.index}>Type</Label>
                    <Input type="select"
                        id={'attrType_' + this.state.index}
                        value={this.state.attribute.TypeCode}
                        onChange={(event) => this.onTypeCodeChange(event)}
                        invalid={this.state.errors.typeCodeRequired}>
                        {
                            this.state.typeOptions.map(code =>
                                <option key={'attrTypeCode_' + this.state.index + '_' + code}
                                    value={code}>
                                    {this.displayTypeCode(code)}
                                </option>
                            )
                        }
                    </Input>
                    <FormFeedback invalid="true">This field is required.</FormFeedback>
                </FormGroup>
                {
                    this.state.isEnum ?
                        <FormGroup>
                            <Label for={'attrEnum_' + this.state.index}>Enum</Label>
                            <Input type="select"
                                id={'attrEnum_' + this.state.index}
                                value={this.state.attribute.EnumName}
                                onChange={(event) => this.onEnumNameChange(event)}
                                invalid={this.state.errors.enumNameRequired}>
                                <option></option>
                                {
                                    this.state.enumValues.map(enumValue =>
                                        <option key={'attrEnumVal_' + this.state.index + '_' + enumValue}
                                            value={enumValue}>
                                            {enumValue}
                                        </option>
                                    )
                                }
                            </Input>
                            <FormFeedback invalid="true">This field is required.</FormFeedback>
                        </FormGroup>
                        : ''
                }
            </div>
            
        </div>
    }
}