import React, { Component } from 'react';
import { Alert, Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { EntityRepository } from '../data/EntityRepository';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { Storage } from '../data/Storage';
import { EntityView } from './EntityView';

export class EntityList extends Component {

    _storage;
    _typeRepository;
    _entityRepository;
    _type;
    _entities;
    _selected;

    constructor(props) {

        super(props);

        this._storage = new Storage();
        this._typeRepository = new EntityTypeRepository(this._storage);
        this._entityRepository = new EntityRepository(this._storage, this._typeRepository);

        this._type = props.entityType;
        this._entities = this._entityRepository.GetByType(this._type);

        this.state = {
            noData: this._entities.length === 0,
            entities: this._entities,
            type: this._type,
            showNoneSelectedAlert: false
        };

        this._selected = {};

        document.addEventListener("add", () => window.location.href = "/entity/" + this.state.type.Name, false);

        document.addEventListener("refresh", () => this.refresh(), false);

        document.addEventListener("delete", () => this.delete(), false);
    }

    refresh() {

        this._entities = this._entityRepository.GetByType(this._type);

        this.setState({
            noData: this._entities.length === 0,
            entities: this._entities
        });
    }

    delete() {

        const ids = Object.keys(this._selected).filter((id) => this._selected[id] === true);

        if (ids.length) {

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

        const ids = Object.keys(this._selected).filter((id) => this._selected[id] === true);

        this._entityRepository.BulkDelete(this._type, ids);

        this._entities = this._entityRepository.GetByType(this._type);

        this.setState({
            noData: this._entities.length === 0,
            entities: this._entities,
            showNoneSelectedAlert: false,
            showDeleteConfirmationModal: false
        });
    }

    cancelDelete() {

        this.setState({
            showDeleteConfirmationModal: false
        });
    }

    toggle(entity) {

        this._selected[entity.Id] = !this._selected[entity.Id];

        if (this._selected[entity.Id]) {

            this.setState({
                showNoneSelectedAlert: false
            });
        }
    }

    render() {

        if (this.state.noData) {
            return (
                <Alert color="secondary">
                    <p>It's lonely here...</p>
                    <a className="btn btn-outline-primary" href={"/entity/" + this.state.type.Name}>Create your first {this.state.type.DisplayName}</a>
                </Alert>
            );
        }

        return (
            <div>
                <Alert color="warning"
                    className="mb-2 mt-2"
                    toggle={() => this.setState({ showNoneSelectedAlert: false })}
                    isOpen={this.state.showNoneSelectedAlert}>Please select at least one item.</Alert>
                <Modal isOpen={this.state.showDeleteConfirmationModal} fade={false} toggle={() => this.cancelDelete()}>
                    <ModalHeader toggle={() => this.cancelDelete()}>Confirm Action</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete these items?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.confirmDelete()}>Yes</Button>
                        <Button color="secondary" onClick={() => this.cancelDelete()}>No</Button>
                    </ModalFooter>
                </Modal>
                <div className="entity-list">
                    {
                        this.state.entities.map((entity) =>
                            <div className="entity-list-item mb-2 mt-2" key={entity.Id}>
                                <EntityView
                                    entity={entity}
                                    entityType={this.state.type}></EntityView>
                                <Input type="checkbox" onChange={() => this.toggle(entity)} />
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}