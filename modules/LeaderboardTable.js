import React, { Component } from 'react';
import Spreadsheet from '../lib/Spreadsheet';
import PropertyColumn from './PropertyColumn';
import Selection from './SelectionColumn';

export default class LeaderboardTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      Selection,
      PropertyColumn.of('ModelName', 'Model Name', d => d.modelType),
      PropertyColumn.of('Validation', 'Validation', d => d.validation)
    ];
  }

  render() {
    return (
      <Spreadsheet
        name="hotspots"
        columns={this.columns}
        rows={this.props.models} />
    );
  }
}
