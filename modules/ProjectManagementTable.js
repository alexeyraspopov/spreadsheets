import React, { Component } from 'react';
import Spreadsheet from '../lib/Spreadsheet';
import PropertyColumn from './PropertyColumn';
import DateColumn from './DateColumn';
import DataColumn from '../lib/DataColumn';
import Selection from './SelectionColumn';
import Action from './ActionColumn';

class CreatedAt extends DateColumn {
  getCaption() {
    return 'Created';
  }

  getValue(datum) {
    return datum.createdAt;
  }
}

export default class ProjectManagementTable extends Component {
  render() {
    const columns = [
      Selection,
      PropertyColumn.of('Project Name', d => d.projectName),
      PropertyColumn.of('Filename', d => d.filename),
      CreatedAt,
      PropertyColumn.of('Role', d => d.role),
      Action,
    ];

    return (
      <Spreadsheet
        columns={columns}
        rows={this.props.projects} />
    );
  }
}
