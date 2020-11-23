import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Alert, Button, Card, CardBody, CardTitle, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { Storage } from '../data/Storage';
import { AttributeSummary } from './AttributeSummary';

export class ManageTypes extends Component {

    static displayName = ManageTypes.name;

    _storage;
    _typeRepository;
    _types;
    _selected;

    constructor() {

        super();

        this._storage = new Storage();
        this._typeRepository = new EntityTypeRepository(this._storage);
        this._types = this._typeRepository.GetAll();
        this._selected = {};

        this.state = {
            noData: this._types.length === 0,
            types: this._types,
            showNoneSelectedAlert: false,
            showDeleteConfirmationModal: false
        };

        document.addEventListener("add", () => this.add(), false);

        document.addEventListener("refresh", () => this.refresh(), false);

        document.addEventListener("delete", () => this.delete(), false);
    }

    add() {

        window.location.href = "/type";
    }

    delete() {

        const types = this._types.filter(t => this._selected[t.Name] === true);

        if (types.length) {

            this.setState({
                showDeleteConfirmationModal: true
            });

        } else {

            this.setState({
                showNoneSelectedAlert: true
            });
        }
    }

    confirmDelete() {

        const types = this._types.filter(t => this._selected[t.Name] === true);

        this._typeRepository.BulkDelete(types);

        this._types = this._typeRepository.GetAll();

        this.setState({
            noData: this._types.length === 0,
            types: this._types,
            showNoneSelectedAlert: false,
            showDeleteConfirmationModal: false
        });
    }

    cancelDelete() {

        this.setState({
            showDeleteConfirmationModal: false
        });
    }

    refresh() {

        this._types = this._typeRepository.GetAll();

        this.setState({
            noData: this._types.length === 0,
            types: this._types
        });
    }

    toggle(type) {

        this._selected[type.Name] = !this._selected[type.Name];

        if (this._selected[type.Name]) {

            this.setState({
                showNoneSelectedAlert: false
            });
        }
    }

    render() {

        if (this.state.noData) {
            return (
                <Alert color="primary">
                    <h4 className="alert-heading">It's lonely here...</h4>
                    <Button color="primary" onClick={() => this.add() } outline>Create first type</Button>
                </Alert>
            );
        }

        return (
            <div className="type-list">
                <h3>Manage Types</h3>
                <Alert color="warning"
                    className="mb-2 mt-2"
                    toggle={() => this.setState({ showNoneSelectedAlert: false })}
                    isOpen={this.state.showNoneSelectedAlert}>Please select at least one item.</Alert>
                <Modal isOpen={this.state.showDeleteConfirmationModal} fade={false} toggle={() => this.cancelDelete()}>
                    <ModalHeader toggle={() => this.cancelDelete()}>Confirm Action</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete these types?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.confirmDelete()}>Yes</Button>
                        <Button color="secondary" onClick={() => this.cancelDelete()}>No</Button>
                    </ModalFooter>
                </Modal>
                <Row>
                    {
                        this.state.types.map(type =>
                            <Col key={type.Name}
                                sm="6" md="4" lg="3">
                                <Card className="type-list-item mb-2">
                                    <CardBody>
                                        <CardTitle>
                                            {type.DisplayName} <a href={"/type/" + type.Name}><FaEdit></FaEdit></a>
                                        </CardTitle>
                                        <AttributeSummary type={type}></AttributeSummary>
                                        <Input type="checkbox" onChange={() => this.toggle(type)} />
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        );
    }
}
