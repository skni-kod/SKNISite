import React from "react";

import { DetailsHeader } from "@/app/projects/[id]/(components)/details-header";
import { Authors } from "@/app/projects/[id]/(components)/authors";
import { Description } from "@/app/projects/[id]/(components)/description";
import { TechnologyGrid } from "@/app/projects/[id]/(components)/technology-grid";
import { Gallery } from "@/app/projects/[id]/(components)/gallery";
import { sampleProjectDetails } from "@/constants/sampleProjectDetails";
const ProjectDetails = () => {
  return (
    <div className="flex flex-col space-y-12 mb-10">
      <DetailsHeader
        name={sampleProjectDetails.name}
        shortDescription={sampleProjectDetails.shortDescription}
      />
      <Authors authors={sampleProjectDetails.authors} />
      <Description description={sampleProjectDetails.description} />
      <TechnologyGrid technologies={sampleProjectDetails.technologies} />
      {sampleProjectDetails.gallery && (
        <Gallery images={sampleProjectDetails.gallery} />
      )}
    </div>
  );
};

export default ProjectDetails;
