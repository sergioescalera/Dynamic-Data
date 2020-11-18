import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';
import { EntityRepository } from '../data/EntityRepository';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { Storage } from '../data/Storage';

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
    }

    render() {

        if (this.state.noData) {
            return (
                <Alert color="secondary">
                    <p>It's lonely here...</p>
                    <Button color="primary" outline>Create your first {this.state.type.DisplayName}</Button>
                </Alert>
            );
        }

        return (
            <div>Entity List goes here</div>
        );
    }
}