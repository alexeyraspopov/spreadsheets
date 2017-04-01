import React from 'react';
import ProjectManagementTable from './ProjectManagementTable';
import HotspotsTable from './HotspotsTable';

export default function App({ projects, hotspots }) {
  return (
    <article className="playground">
      <HotspotsTable hotspots={hotspots} />
      <ProjectManagementTable projects={projects} />
    </article>
  );
}
