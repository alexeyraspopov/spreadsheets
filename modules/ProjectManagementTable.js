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

const ProjectName = PropertyColumn.of('ProjectName', 'Project Name', d => d.projectName);
const Filename = PropertyColumn.of('Filename', 'Filename', d => d.filename);
const Role = PropertyColumn.of('Role', 'Role', d => d.role);

export default class ProjectManagementTable extends Component {
  constructor(props) {
    super(props);
    this.matcher = window.matchMedia('(max-width: 800px)')
    this.state = { columns: this.getColumns(this.matcher.matches) };
  }

  getColumns(matches) {
    if (matches) {
      return [
        Selection,
        ProjectName,
        CreatedAt,
        Action,
      ];
    }

    return [
      Selection,
      ProjectName,
      Filename,
      CreatedAt,
      Role,
      Action,
    ];
  }

  handleEvent(event) {
    const columns = this.getColumns(event.matches);
    this.setState(() => ({ columns }));
  }

  componentDidMount() {
    this.matcher.addListener(this);
  }

  componentWillUnmount() {
    this.matcher.removeListener(this);
  }

  render() {
    return (
      <Spreadsheet
        name="projects"
        columns={this.state.columns}
        rows={this.props.projects} />
    );
  }
}
