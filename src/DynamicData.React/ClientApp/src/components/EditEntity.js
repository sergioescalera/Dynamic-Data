import React, { Component } from 'react';
import { Entity } from '../core/Entity';
import { EntityRepository } from '../data/EntityRepository';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { Storage } from '../data/Storage';

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
            model: Object.create(this._entity.Fields)
        };
    }

    redirectHome() {

        window.location.href = "/home";
    }

    redirectEntityList() {

        window.location.href = "/entity/" + this._type.Name;
    }

    render() {

        return (
            <div>Entity goes here</div>
        );
    }
}