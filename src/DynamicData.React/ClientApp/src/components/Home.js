import classnames from 'classnames';
import React, { Component } from 'react';
import { Alert, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { EntityTypeRepository } from '../data/EntityTypeRepository';
import { SampleData } from '../data/SampleData';
import { Storage } from '../data/Storage';
import { TemplateRepository } from '../data/TemplateRepository';
import { EntityList } from './EntityList';

export class Home extends Component {

    static displayName = Home.name;

    _sampleData;
    _storage;
    _typeRepository;
    _types;
    _sampleData;
    _entityTypeName;

    constructor(props) {

        super(props);

        this._storage = new Storage();
        this._typeRepository = new EntityTypeRepository(this._storage);
        this._settings = this._storage.Settings;
        this._types = this._typeRepository.GetAll();
        this._sampleData = new SampleData(this._typeRepository, new TemplateRepository(this._storage));

        this._entityTypeName = props.match.params.name || this._settings.CurrentEntityType;

        this._settings.CurrentEntityType = this._entityTypeName;
        this._storage.Settings = this._settings;

        this.state = {
            noData: this._types.length === 0,
            types: this._types,
            selectedType: this._types.find(t => t.Name === this._entityTypeName) || this._types[0]
        };
    }

    installData() {

        this._sampleData.Install();

        this._types = this._typeRepository.GetAll();

        this.setState({
            noData: this._types.length === 0,
            types: this._types
        });
    }

    render() {

        if (this.state.noData) {
            return (
                <Alert color="primary">
                    <h4 className="alert-heading">It's lonely here...</h4>
                    <Button color="primary" onClick={() => this.installData()} outline>Install sample data</Button>
                </Alert>
            );
        }

        return (
            <div>
                <Nav tabs>
                    {
                        this.state.types.map(t =>

                            <NavItem key={t.Name}>
                                <NavLink
                                    className={classnames({ active: this.state.selectedType.Name === t.Name })}
                                    href={"/home/" + t.Name}>
                                    {t.DisplayName}
                                </NavLink>
                            </NavItem>

                        )
                    }
                </Nav>
                <TabContent activeTab={this.state.selectedType.Name}>
                    <TabPane tabId={this.state.selectedType.Name}>
                        <br />
                        <EntityList entityType={this.state.selectedType}></EntityList>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}