import React from 'react';
import DataColumn from '../lib/DataColumn';
import moment from 'moment';

export default class Date extends DataColumn {
  renderData({ data }) {
    const value = this.getValue(data);
    return moment(value).fromNow();
  }
}
