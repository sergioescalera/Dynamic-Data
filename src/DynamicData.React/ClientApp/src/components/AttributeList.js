import React, { Component } from 'react';
import { Alert, Button, Input, ListGroup, ListGroupItem, ListGroupItemHeading, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AttributeTypeCode } from '../core/AttributeTypeCode';
import { EditAttribute } from './EditAttribute';

export class AttributeList extends Component {

    constructor(props) {

        super(props);

        this._type = this.props.type;
        this._isNew = this.props.isNew;
        this._attributes = this._type.Attributes || [];
        this._summaryCount = 3;
        this._selected = [];

        this.state = {
            attributes: this._attributes,
            count: this._attributes.length,
            type: this._type,
            isNew: this._isNew,
            showNoneSelectedAlert: false,
            showDeleteConfirmationModal: false
        };

        document.addEventListener("add", () => this.addAttribute(), false);
        document.addEventListener("delete", () => this.deleteAttributes(), false);
    }

    addAttribute() {

        this._attributes.push({
            Name: "",
            DisplayName: "",
            TypeCode: AttributeTypeCode.String,
            EnumName: "",
        });

        this.setState({
            count: this._attributes.length,
            attributes: this._attributes,
        });
    }

    deleteAttributes() {

        const attributes = this
            ._attributes
            .filter((t, i) => this._selected[i] === true);

        if (attributes.length) {

            this.setState({
                showDeleteConfirmationModal: true
            });

        } else {

            this.setState({
                showNoneSelectedAlert: true
            });
        }
    }

    confirmDelete() {

        this._attributes
            .filter((_, index) => this._selected[index] === true)
            .forEach((attr) => {

                if (this._attributes.length <= 1) {
                    return;
                }

                const index = this._attributes.indexOf(attr);

                this._attributes.splice(index, 1);
            });

        this.setState({
            count: this._attributes.length,
            attributes: this._attributes,
            showNoneSelectedAlert: false,
            showDeleteConfirmationModal: false
        });

        console.log(this.state);
    }

    cancelDelete() {

        this.setState({
            showDeleteConfirmationModal: false
        });
    }

    toggle(index) {

        this._selected[index] = !this._selected[index];

        if (this._selected[index]) {

            this.setState({
                showNoneSelectedAlert: false
            });
        }
    }

    render() {

        return (
            <div className="attribute-list mb-3">
                <Modal isOpen={this.state.showDeleteConfirmationModal} fade={false} toggle={() => this.cancelDelete()}>
                    <ModalHeader toggle={() => this.cancelDelete()}>Confirm Action</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete these attributes?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.confirmDelete()}>Yes</Button>
                        <Button color="secondary" onClick={() => this.cancelDelete()}>No</Button>
                    </ModalFooter>
                </Modal>
                <ListGroup>
                    <ListGroupItem color="info">
                        <ListGroupItemHeading>Attribute List</ListGroupItemHeading>
                    </ListGroupItem>
                    {
                        this.state.attributes.map((attr, index) =>
                            <ListGroupItem className="attribute-list-item"
                                key={"attr_" + index + "_" + this.state.count}>
                                <EditAttribute attribute={attr}
                                    index={index}></EditAttribute>
                                <Input type="checkbox"
                                    onChange={() => this.toggle(index)}
                                    disabled={this.state.count === 1} />
                            </ListGroupItem>
                        )
                    }
                </ListGroup>
                <Alert color="warning"
                    className="mb-2 mt-2"
                    toggle={() => this.setState({ showNoneSelectedAlert: false })}
                    isOpen={this.state.showNoneSelectedAlert}>Please select at least one attribute.</Alert>
            </div>
        );
    }
}