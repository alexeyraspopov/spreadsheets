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

const Rule = PropertyColumn.of('Rule', 'Rule', d => d.rule);
const Mean = PropertyColumn.of('Mean', 'Mean Rel. Target', d => d.mean);
const MeanTarget = PropertyColumn.of('MeanTarget', 'Mean Target', d => d.meanTarget);
const Observations = PropertyColumn.of('Observations', 'Observations [%]', d => d.observations);

export default class HotspotsTable extends Component {
  constructor(props) {
    super(props);

    const columns = [
      Rule,
      Temperature,
      Mean,
      MeanTarget,
      Observations,
    ];

    this.state = { columns };
  }

  render() {
    return (
      <Spreadsheet
        name="hotspots"
        columns={this.state.columns}
        rows={this.props.hotspots} />
    );
  }
}
