import React from 'react';
import ProjectManagementTable from './ProjectManagementTable';
import HotspotsTable from './HotspotsTable';
import LeaderboardTable from './LeaderboardTable';

export default function App({ projects, hotspots, models }) {
  return (
    <article className="playground">
      <ProjectManagementTable projects={projects} />
      <LeaderboardTable models={models} />
      <HotspotsTable hotspots={hotspots} />
    </article>
  );
}
