import React, { Component } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Alert, Badge, Button, FormFeedback, FormGroup, Input, InputGroup, InputGroupAddon, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { EnumRepository } from '../data/EnumRepository';
import { Storage } from '../data/Storage';

export class EnumEditor extends Component {

    _enumName;
    _storage;
    _repository;

    constructor(props) {

        super(props);

        this._storage = new Storage();
        this._repository = new EnumRepository(this._storage);

        this._enumName = props.enumName;
        this._isNew = !props.enumName;
        this._enum = this._isNew ? this._repository.New() : this._repository.GetByName(this._enumName);
        this._enumValue = '';

        this._errors = {
            nameRequired: false,
            displayNameRequired: false,
            valueRequired: false,
            atLeastOneValueRequired: false
        };

        this.state = {
            isNew: this._isNew,
            enum: this._enum,
            enumValue: this._enumValue,
            errors: this._errors
        };
    }

    save() {

        if (!this.validateAtLeastOneValue() |
            !this.validateName() |
            !this.validateDisplayName()) {
            return;
        }

        this._repository.Upsert(this._enum);

        this.props.close(this._enum.Name);
    }

    cancel() {

        this.props.close(false);
    }

    onNameChange(event) {

        this._enum.Name = event.target.value;

        this.setState({
            enum: this._enum
        });

        this.validateName();
    }

    onDisplayNameChange(event) {

        this._enum.DisplayName = event.target.value;

        this.setState({
            enum: this._enum
        });

        this.validateDisplayName();
    }

    onValueChange(event) {

        this._enumValue = event.target.value;

        this.setState({
            enumValue: this._enumValue
        });

        this.validateValue();
    }

    validateName() {

        this._errors.nameRequired = !this._enum.Name;

        this.setState({
            errors: this._errors
        });

        return !this._errors.nameRequired;
    }

    validateDisplayName() {

        this._errors.displayNameRequired = !this._enum.DisplayName;

        this.setState({
            errors: this._errors
        });

        return !this._errors.displayNameRequired;
    }

    validateValue() {

        this._errors.valueRequired = !this._enumValue;

        this.setState({
            errors: this._errors
        });

        return !this._errors.valueRequired;
    }

    validateAtLeastOneValue() {

        this._errors.atLeastOneValueRequired = this.state.enum.Values.length === 0;

        this.setState({
            errors: this._errors
        });

        return !this._errors.atLeastOneValueRequired;
    }

    addValue() {

        this.validateValue();

        const enumValue = this._enumValue;

        if (enumValue && !this._enum.Values.some(v => v === enumValue)) {

            this._enum.Values.push(enumValue);

            this._errors.valueRequired = false;
            this._errors.atLeastOneValueRequired = false;
        }

        this._enumValue = '';

        this.setState({
            enum: this._enum,
            enumValue: '',
            errors: this._errors
        });
    }

    deleteValue(val) {

        const index = this._enum.Values.indexOf(val);

        if (index >= 0) {

            this._enum.Values.splice(index, 1);

            this.setState({
                enum: this._enum
            });
        }
    }

    render() {

        return (
            <Modal isOpen={true}>
                <ModalHeader>
                    Edit Enum
                </ModalHeader>
                <ModalBody>

                    <FormGroup>
                        <Label for={'enumName'}>
                            Name
                        </Label>
                        <Input type="text"
                            id={'enumName'}
                            placeholder="Enter Enum Name"
                            maxLength="20"
                            value={this.state.enum.Name}
                            readOnly={this.state.isNew===false}
                            onChange={(event) => this.onNameChange(event)}
                            invalid={this.state.errors.nameRequired} />
                        <FormFeedback invalid="true">This field is required.</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for={'enumDisplayName'}>
                            Display Name
                        </Label>
                        <Input type="text"
                            id={'enumDisplayName'}
                            placeholder="Enter Display Name"
                            maxLength="50"
                            value={this.state.enum.DisplayName}
                            onChange={(event) => this.onDisplayNameChange(event)}
                            invalid={this.state.errors.displayNameRequired} />
                        <FormFeedback invalid="true">This field is required.</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for={'enumValues'}>
                            Values
                        </Label>
                        <InputGroup>
                            <Input type="text"
                                id={'enumValues'}
                                placeholder="Enter Enum Value"
                                maxLength="20"
                                value={this.state.enumValue}
                                onChange={(event) => this.onValueChange(event)}
                                invalid={this.state.errors.valueRequired} />
                            <InputGroupAddon addonType="append">
                                <Button color="secondary"
                                    onClick={() => this.addValue()}><FaPlus /></Button>
                            </InputGroupAddon>
                        </InputGroup>
                        {
                            this.state.enum.Values.map(val =>
                                <Badge color="info"
                                    className="mr-2 mt-2"
                                    key={'badge_' + val}>
                                    <span className='ml-1 mr-1 d-inline-block align-middle'>{val}</span>
                                    <Button color="link"
                                        className="p-0"
                                        onClick={() => this.deleteValue(val)}>
                                        <FaTimes />
                                    </Button>
                                </Badge>)
                        }
                    </FormGroup>
                    {
                        this.state.errors.atLeastOneValueRequired ?
                            <Alert color="danger">Please define at least one value for enum</Alert>
                            : ''
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => this.save()}>Save</Button>
                    <Button color="secondary"
                        onClick={() => this.cancel()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}