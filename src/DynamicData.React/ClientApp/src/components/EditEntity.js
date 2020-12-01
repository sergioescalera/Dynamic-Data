import React, { Component } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardTitle, Form, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AttributeTypeCode } from '../core/AttributeTypeCode';
import { Entity } from '../core/Entity';
import { EntityRepository } from '../data/EntityRepository';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { Storage } from '../data/Storage';
import { FieldEditor } from './FieldEditor';

export class EditEntity extends Component {

    _storage;
    _typeRepository;
    _entityRepository;
    _entityTypeName;
    _entityId;
    _type;
    _entity;

    constructor(props) {

        super(props);

        this._storage = new Storage();
        this._typeRepository = new EntityTypeRepository(this._storage);
        this._entityRepository = new EntityRepository(this._storage, this._typeRepository);

        this._entityTypeName = props.match.params.name || "";
        this._entityId = props.match.params.id || "";
        this._type = this._typeRepository.GetByName(this._entityTypeName);
        
        if (this._type === null) {
            return this.redirectHome();
        }

        this._entity = this._entityId ? this._entityRepository.GetById(this._type, this._entityId) : new Entity(this._type);

        if (this._entity === null) {
            return this.redirectEntityList();
        }

        this.state = {
            type: this._type,
            model: this._entity.Fields,
            showDeleteConfirmationModal: false
        };

        document.addEventListener("save", () => this.save(), false);

        document.addEventListener("delete", () => this.delete(), false);

        document.addEventListener("add", () => this.redirectEntityCreate(), false);

        document.addEventListener("cancel", () => this.redirectEntityList(), false);
    }

    redirectHome() {

        window.location.href = "/home";
    }

    redirectEntityCreate() {

        window.location.href = "/entity/" + this._type.Name;
    }

    redirectEntityList() {

        window.location.href = "/home/" + this._type.Name;
    }

    delete() {

        if (this._entityId) {

            this.setState({
                showDeleteConfirmationModal: true
            });
        }
    }

    confirmDelete() {

        if (this._entityId) {

            this._entityRepository.BulkDelete(this._type, this._entityId);

            this.redirectEntityList();
        }
    }

    cancelDelete() {

        this.setState({
            showDeleteConfirmationModal: false
        });
    }

    save(event) {

        this._entityRepository.CreateOrUpdate(this._entity);

        this.redirectEntityList();

        if (event) {
            event.preventDefault();
        }
    }

    onValueChange(attr, value) {

        switch (attr.TypeCode) {

            case AttributeTypeCode.Boolean:
                this._entity.Fields[attr.Name] = value;
                break;
            case AttributeTypeCode.Currency:
            case AttributeTypeCode.Decimal:
            case AttributeTypeCode.Int:
                this._entity.Fields[attr.Name] = value === "" ?
                    null :
                    parseInt(value);
                break;
            case AttributeTypeCode.Date:
            case AttributeTypeCode.DateTime:
                this._entity.Fields[attr.Name] = value === "" ?
                    null :
                    new Date(value + (attr.TypeCode === AttributeTypeCode.Date ? ' 00:00' : ''));
                break;
            case AttributeTypeCode.Time:
            case AttributeTypeCode.Email:
            case AttributeTypeCode.Phone:
            case AttributeTypeCode.String:
            case AttributeTypeCode.Text:
            case AttributeTypeCode.Url:
            case AttributeTypeCode.Enum:
                this._entity.Fields[attr.Name] = value;
                break;
            default:
                console.warn("Not implemented", attr, value);
                return;
        }

        this.setState({
            model: this._entity.Fields
        });
    }

    render() {

        return (
            <div className="entity-form">
                <Modal isOpen={this.state.showDeleteConfirmationModal} fade={false} toggle={() => this.cancelDelete()}>
                    <ModalHeader toggle={() => this.cancelDelete()}>Confirm Action</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete this item?
                            </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.confirmDelete()}>Yes</Button>
                        <Button color="secondary" onClick={() => this.cancelDelete()}>No</Button>
                    </ModalFooter>
                </Modal>
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.type.DisplayName}</CardTitle>
                        <Form onSubmit={(event) => this.save(event)} noValidate>
                            {
                                this.state.type.Attributes.map(attr =>
                                    <FieldEditor key={attr.Name}
                                        attribute={attr}
                                        value={this.state.model[attr.Name]}
                                        onChange={(val) => this.onValueChange(attr, val)}></FieldEditor>
                                )
                            }
                            <div className="text-right">
                                <Button color="primary"
                                    type="submit"
                                    className="mr-2">
                                    <FaEdit className="mb-1" /> Save
                                </Button>
                                <Button color="secondary"
                                    type="button"
                                    onClick={() => this.redirectEntityList()}>
                                    <FaTimes className="mb-1" /> Cancel
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}