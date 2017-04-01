import React, { Component } from 'react';

export default class Column extends Component {
  getValue(datum) {
    return datum;
  }

  getCaption() {
    return '';
  }

  renderHeader() {
    return this.getCaption();
  }

  renderData({ data }) {
    return this.getValue(data);
  }

  render() {
    switch (this.props.mode) {
    case 'header':
      return (
        <p data-column={this.constructor.name}>
          {this.renderHeader(this.props)}
        </p>
      );
    case 'content':
      /* falls through */
    default:
      return (
        <span data-column={this.constructor.name}>
          {this.renderData(this.props)}
        </span>
      );
    }
  }
}
