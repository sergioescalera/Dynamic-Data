import React, { Component } from 'react';
import { Alert } from 'reactstrap';
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
            type: this._type
        };

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
                {
                    this.state.entities.map((entity) => <EntityView key={entity.Id} entity={entity} entityType={this.state.type}></EntityView>)
                }
            </div>
        );
    }
}