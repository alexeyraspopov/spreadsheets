import React from 'react';
import DataColumn from '../lib/DataColumn';

export default class PropertyColumn {
  static of(displayName, getter) {
    return class extends DataColumn {
      static get name() {
        return displayName;
      }

      getCaption() {
        return displayName
      }

      getValue(datum) {
        return getter(datum);
      }
    }
  }
}
