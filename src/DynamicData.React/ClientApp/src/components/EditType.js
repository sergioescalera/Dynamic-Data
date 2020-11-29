import React, { Component } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { Alert, Button, Card, CardBody, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { EntityTypeSerialization } from '../core/EntityTypeSerialization';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { Storage } from '../data/Storage';
import { AttributeList } from './AttributeList';

export class EditType extends Component {

    static displayName = EditType.name;

    _storage;
    _typeRepository;

    _entityTypeName;

    constructor(props) {

        super(props);

        this._storage = new Storage();
        this._typeRepository = new EntityTypeRepository(this._storage);
        
        this._entityTypeName = props.match.params.name || "";
        this._entityType = this._entityTypeName ? EntityTypeSerialization.ToPOCO(
            this._typeRepository.GetByName(this._entityTypeName)) :
            this._typeRepository.New();

        this._attributes = this._entityType.Attributes;
        this._isNew = !this._entityTypeName;
        this._errors = {
            nameRequired: false,
            namePattern: false,
            nameAvailable: false,
            displayNameRequired: false,
            displayPluralNameRequired: false,
            message: ""
        };

        this.state = {
            isNew: this._isNew,
            type: this._entityType,
            showDeleteConfirmationModal: false,
            errors: this._errors
        };

        document.addEventListener("save", () => this.save(), false);

        document.addEventListener("cancel", () => this.redirectManageTypes(), false);

        document.addEventListener("refresh", () => window.location.reload(), false);
    }

    save(event) {

        if (event) {
            event.preventDefault();
        }

        this._errors.message = '';

        if (!this.validate()) {
            return;
        }

        const entityType = EntityTypeSerialization.FromPOCO(this._entityType);

        const result = this._isNew ? this._typeRepository.Create(entityType) : this._typeRepository.Update(entityType);

        if (result.Success) {

            this.redirectManageTypes();

        } else {

            this._errors.message = result.ErrorMessage;

            this.setState({
                errors: this._errors
            });
        }
    }

    redirectManageTypes() {

        window.location.href = "/manage";
    }

    nameIsAvailable(name) {

        const types = this._typeRepository.GetAll();

        return !this._isNew || !types.some(t => t.Name === name);
    }

    onNameChange(event) {

        const name = event.target.value;
        
        this._entityType.Name = name;

        this.validateName();
    }

    onDisplayNameChange(event) {

        this._entityType.DisplayName = event.target.value;

        this.validateDisplayName();
    }

    onDisplayPluralNameChange(event) {

        this._entityType.DisplayPluralName = event.target.value;

        this.validateDisplayPluralName();
    }

    validate() {

        return this.validateName() & 
            this.validateDisplayName() &
            this.validateDisplayPluralName() &
            this.validateAttributes();
    }

    validateName() {

        const regex = new RegExp('^[a-zA-Z_]+$');

        this._errors.nameRequired = !this._entityType.Name;
        this._errors.namePattern = !this._errors.nameRequired && !regex.test(this._entityType.Name);
        this._errors.nameAvailable = !this._errors.nameRequired && !this._errors.namePattern && !this.nameIsAvailable(this._entityType.Name);

        this.setState({
            type: this._entityType,
            errors: this._errors
        });

        return !this._errors.nameRequired && !this._errors.namePattern && !this._errors.nameAvailable;
    }

    validateDisplayName() {

        this._errors.displayNameRequired = !this._entityType.DisplayName;

        this.setState({
            type: this._entityType,
            errors: this._errors
        });

        return !this._errors.displayNameRequired;
    }

    validateDisplayPluralName() {

        this._errors.displayPluralNameRequired = !this._entityType.DisplayPluralName;

        this.setState({
            type: this._entityType,
            errors: this._errors
        });

        return !this._errors.displayPluralNameRequired;
    }

    validateAttributes() {

        document.dispatchEvent(new Event("validateAttributes"));

        if (this._attributes.length === 0) {

            this._errors.message = 'At least one attribute is required';

            this.setState({
                errors: this._errors
            });
        }

        return this._attributes.length > 0
            && this._attributes.every(attr => !!attr.Name && !!attr.DisplayName);
    }

    render() {

        return (
            <div className="type-form">
                <Card>
                    <CardBody>
                        <Form onSubmit={(event) => this.save(event)} noValidate>
                            <legend>{this.state.isNew ? 'New Type' : 'Edit Type'}</legend>
                            <FormGroup>
                                <Label for="typeName">
                                    Name
                                </Label>
                                <Input type="text"
                                    name="typeName"
                                    id="typeName"
                                    placeholder="Enter Type Name"
                                    maxLength="20"
                                    value={this.state.type.Name}
                                    readOnly={!this.state.isNew}
                                    onChange={(event) => this.onNameChange(event)}
                                    invalid={this.state.errors.nameRequired
                                        || this.state.errors.namePattern
                                        || this.state.errors.nameAvailable} />
                                <FormFeedback invalid="true">
                                    {
                                        this.state.errors.nameRequired ? 'This field is required.' :
                                            this.state.errors.namePattern ? 'Use digits and letters only.' :
                                                this.state.errors.nameAvailable ? 'Name is not available.' : ''
                                    }
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="typeDisplayName">
                                    Display Name
                                </Label>
                                <Input type="text"
                                    name="typeDisplayName"
                                    id="typeDisplayName"
                                    placeholder="Enter Display Name"
                                    maxLength="50"
                                    value={this.state.type.DisplayName}
                                    onChange={(event) => this.onDisplayNameChange(event)}
                                    invalid={this.state.errors.displayNameRequired} />
                                <FormFeedback invalid="true">This field is required.</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="typeDisplayPluralName">
                                    Display Plural Name
                                </Label>
                                <Input type="text"
                                    name="typeDisplayPluralName"
                                    id="typeDisplayPluralName"
                                    placeholder="Enter Display Plural Name"
                                    maxLength="50"
                                    value={this.state.type.DisplayPluralName}
                                    onChange={(event) => this.onDisplayPluralNameChange(event)}
                                    invalid={this.state.errors.displayPluralNameRequired} />
                                <FormFeedback invalid="true">This field is required.</FormFeedback>
                            </FormGroup>

                            <AttributeList type={this.state.type} isNew={this.state.isNew}></AttributeList>

                            <div className="text-right">
                                <Button color="primary"
                                    type="submit"
                                    className="mr-2">
                                    <FaEdit className="mb-1" /> Save
                                </Button>
                                <Button color="secondary"
                                    type="button"
                                    onClick={() => this.redirectManageTypes()}>
                                    <FaTimes className="mb-1" /> Cancel
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                <Alert color="danger"
                    className="mb-2 mt-2"
                    isOpen={this.state.errors.message !== ""}>{this.state.errors.message}</Alert>
            </div>
        );
    }
}