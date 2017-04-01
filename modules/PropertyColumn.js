import React from 'react';
import DataColumn from '../lib/DataColumn';

export default class PropertyColumn {
  static of(id, caption, getter) {
    return class extends DataColumn {
      static get name() {
        return id;
      }

      getCaption() {
        return caption;
      }

      getValue(datum) {
        return getter(datum);
      }
    }
  }
}
