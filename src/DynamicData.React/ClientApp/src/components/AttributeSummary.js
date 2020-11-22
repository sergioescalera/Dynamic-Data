import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

export class AttributeSummary extends Component {

    constructor(props) {

        super(props);

        this._type = this.props.type;
        this._attributes = this._type.Attributes || [];
        this._summaryCount = 3;

        this.state = {
            attributes: this._attributes,
            count: this._attributes.length,
            details: this._attributes.map(a => a.DisplayName).join(", "),
            summary: this._attributes.slice(0, this._summaryCount).map(a => a.DisplayName).join(", "),
            summaryCount: this._summaryCount,
            type: this._type,
            tooltipOpen: false
        };
    }

    toggle() {

        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {

        return (
            <div className="attribute-summary">
                <span id={'attribute-summary-' + this.state.type.Name}>
                    {this.state.summary}
                    {this.state.count > this.state.summaryCount ? '...' : ''}
                </span>
                <Tooltip placement="bottom"
                    isOpen={this.state.tooltipOpen}
                    toggle={() => this.toggle()}
                    target={'attribute-summary-' + this.state.type.Name}>
                    {this.state.details}
                </Tooltip>
            </div>
        );
    }
}