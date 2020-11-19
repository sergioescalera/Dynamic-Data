import React, { Component } from 'react';
import { Route } from 'react-router';
import { EditEntity } from './components/EditEntity';
import { EditType } from './components/EditType';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { ManageTypes } from './components/ManageTypes';
import { Profile } from './components/Profile';
import { Settings } from './components/Settings';
import { Templates } from './components/Templates';
import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/home/:name' component={Home} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/templates' component={Templates} />
                <Route exact path='/manage' component={ManageTypes} />
                <Route exact path='/type' component={EditType} />
                <Route exact path='/type/:name' component={EditType} />
                <Route exact path='/entity/:name' component={EditEntity} />
                <Route exact path='/entity/:name/:id' component={EditEntity} />
            </Layout>
        );
    }
}
