import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export class AttributeList extends Component {

    constructor(props) {

        super(props);

        this._type = this.props.type;
        this._isNew = this.props.isNew;
        this._attributes = this._type.Attributes || [];
        this._summaryCount = 3;

        this.state = {
            attributes: this._attributes,
            count: this._attributes.length,
            type: this._type,
            isNew: this._isNew
        };
    }

    render() {

        return (
            <div className="attribute-list mb-3">
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            List group item heading
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}