import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

export class EntityView extends Component {

    _type;
    _entity;

    constructor(props) {

        super(props);

        this._type = props.entityType;
        this._entity = props.entity;

        this.state = {
            entity: this._entity,
            type: this._type
        };
    }

    render() {

        return (
            <Card>
                <CardBody>
                    {
                        this.state.type.Attributes.map(attr =>
                            <div key={attr.Name}>
                                {attr.DisplayName}: {this.state.entity.Fields[attr.Name]}
                            </div>
                        )
                    }
                </CardBody>
            </Card>
        );
    }
}