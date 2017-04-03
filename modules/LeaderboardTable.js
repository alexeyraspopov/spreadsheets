import React, { Component } from 'react';
import Spreadsheet from '../lib/Spreadsheet';
import PropertyColumn from './PropertyColumn';
import Selection from './SelectionColumn';

const ModelName = PropertyColumn.of('ModelName', 'Model Name', d => d.modelType);
const Validation = PropertyColumn.of('Validation', 'Validation', d => d.validation);

export default class LeaderboardTable extends Component {
  constructor(props) {
    super(props);

    const columns = [
      Selection,
      ModelName,
      Validation,
    ];

    this.state = { columns };
  }

  render() {
    return (
      <Spreadsheet
        name="leaderboard"
        columns={this.state.columns}
        rows={this.props.models} />
    );
  }
}
