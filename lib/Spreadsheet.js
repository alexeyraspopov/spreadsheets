import React, { Component } from 'react';

export default class Spreadsheet extends Component {
  render() {
    const { columns, rows, name, onRowSelect, onColumnSelect } = this.props;

    return (
      <section className="spreadsheet" name={name}>
        <header className="spreadsheet-header">
          {columns.map(Column => (
            <Column
              mode="header"
              key={Column.name}
              onColumnSelect={onColumnSelect} />
          ))}
        </header>

        <ul className="spreadsheet-body">
          {rows.map(row => (
            <li key={row.id} className="spreadsheet-item">
              {columns.map(Column => (
                <Column
                  mode="content"
                  key={Column.name}
                  data={row} />
              ))}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
