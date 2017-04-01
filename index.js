import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';

const projects = [
  { id: 'P0', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P1', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P2', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P3', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P4', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P5', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P6', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P7', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P8', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
  { id: 'P9', projectName: 'Prediction Application Test Project',
    filename: '10k-diabetes-train.csv', createdAt: new Date(), role: 'Owner' },
];

const hotspots = [
  { id: 'H1', rule: 'Forks-None or Unspecified <= 0.5 & ProductSize-Mini <= 0.5 & YearMade > 2000.5',
    temperature: 0.9, mean: 1.87, meanTarget: 57790, observations: 10.06 },
  { id: 'H2', rule: 'Enclosure-EROPS w AC > 0.5 & ProductSize-Mini <= 0.5 & SalesID <= 1.73103e+06 & YearMade > 1984.5',
    temperature: 0.8, mean: 1.76, meanTarget: 54344, observations: 9.19 },
  { id: 'H3', rule: 'Track_Type-Steel > 0.5 & YearMade > 1999.5',
    temperature: 0.6, mean: 1.71, meanTarget: 52919, observations: 7.50 },
  { id: 'H4', rule: 'Hydraulics_Flow-Standard > 0.5',
    temperature: -0.6, mean: 0.34, meanTarget: 10497, observations: 11.00 },
  { id: 'H5', rule: 'Enclosure-EROPS w AC > 0.5 & fiSecondaryDesc-small_count <= 0.5 & state-Washington <= 0.5 & datasource <= 160.5',
    temperature: 0.55, mean: 1.66, meanTarget: 51292, observations: 19.69 },
  { id: 'H6', rule: 'Enclosure-EROPS w AC > 0.5 & ProductSize-Mini <= 0.5 & SalesID > 1.73103e+06 & YearMade > 1984.5',
    temperature: 0.55, mean: 1.65, meanTarget: 51087, observations: 10.06 },
  { id: 'H7', rule: 'Enclosure-EROPS w AC > 0.5 & Hydraulics_Flow-nan > 0.5',
    temperature: 0.4, mean: 1.65, meanTarget: 50965, observations: 21.62 },
  { id: 'H8', rule: 'Enclosure-EROPS w AC > 0.5 & Hydraulics_Flow-Standard <= 0.5',
    temperature: -0.4, mean: 1.65, meanTarget: 50965, observations: 21.62 },
]

ReactDOM.render(<App projects={projects} hotspots={hotspots} />, document.querySelector('main'));
