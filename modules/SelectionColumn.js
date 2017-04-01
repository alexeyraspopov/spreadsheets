import React from 'react';
import DataColumn from '../lib/DataColumn';

export default class Selection extends DataColumn {
  getCaption() {
    return '#';
  }

  renderData({ data }) {
    return <input type="checkbox" />;
  }
}
