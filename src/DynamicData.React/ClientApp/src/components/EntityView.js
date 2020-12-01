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
                        this.state.type.Attributes
                            .map(attr => [attr, this.state.entity.Fields[attr.Name]])
                            .map(tuple =>
                                <div key={tuple[0].Name}>
                                    {tuple[0].DisplayName}:&nbsp;
                                    {
                                        tuple[1] === null || tuple[1] === void 0 ? '' : tuple[1].toString()
                                    }
                                </div>
                        )
                    }
                </CardBody>
            </Card>
        );
    }
}