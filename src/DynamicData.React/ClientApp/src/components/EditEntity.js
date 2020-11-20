import React, { Component } from 'react';
import { Form } from 'reactstrap';
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
            model: Object.create(this._entity.Fields)
        };

        document.addEventListener("save", () => this.save(), false);

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

    save() {

        this._entityRepository.CreateOrUpdate(this._entity);

        this.redirectEntityList();
    }

    render() {

        return (
            <Form>
                {
                    this.state.type.Attributes.map(attr =>
                        <FieldEditor key={attr.Name} attribute={attr} value={this.state.model[attr.Name]}></FieldEditor>
                    )
                }
            </Form>
        );
    }
}