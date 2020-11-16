import React, { Component } from 'react';

export class ManageTypes extends Component {

    static displayName = ManageTypes.name;

    render() {
        return (
            <div>
                Manage Types

                <ul>
                    <li><a href="/type/notes">Notes</a></li>
                    <li><a href="/type/expenses">Expenses</a></li>
                    <li><a href="/type/tasks">Tasks</a></li>
                    <li><a href="/type">Create New</a></li>
                </ul>
            </div>
        );
    }
}
