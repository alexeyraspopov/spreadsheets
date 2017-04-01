import React from 'react';
import DataColumn from '../lib/DataColumn';

export default class Action extends DataColumn {
  getCaption() {
    return ' ';
  }

  renderData() {
    return (
      <button className="button">delete</button>
    );
  }
}
