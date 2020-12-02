import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { FieldView } from './FieldView';

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
                    <dl>
                        {
                            this.state.type.Attributes
                                .map(attr =>
                                    <FieldView key={attr.Name}
                                        attribute={attr}
                                        value={this.state.entity.Fields[attr.Name]}></FieldView>
                            )
                        }
                    </dl>
                </CardBody>
            </Card>
        );
    }
}