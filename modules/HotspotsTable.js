import React, { Component } from 'react';
import Spreadsheet from '../lib/Spreadsheet';
import PropertyColumn from './PropertyColumn';
import DataColumn from '../lib/DataColumn';

class Temperature extends DataColumn {
  getCaption() {
    return 'Hot/Cold';
  }

  getValue(datum) {
    return datum.temperature
  }

  renderData({ data }) {
    const temperature = this.getValue(data);
    const sign = Math.sign(temperature);
    const width = Math.abs(temperature) * 100;
    const background = sign === 1 ? '#be3c28' : '#3264aa';

    return (
      <div>
        <span style={{ display: 'block', width: `${width}%`, background }}></span>
      </div>
    );
  }
}

export default class HotspotsTable extends Component {
  render() {
    const columns = [
      PropertyColumn.of('Rule', d => d.rule),
      Temperature,
      PropertyColumn.of('Mean Rel. Target', d => d.mean),
      PropertyColumn.of('Mean Target', d => d.meanTarget),
      PropertyColumn.of('Observations [%]', d => d.observations),
    ];

    return (
      <Spreadsheet
        name="hotspots"
        columns={columns}
        rows={this.props.hotspots} />
    );
  }
}
