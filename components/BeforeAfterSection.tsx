// app/components/BeforeAfterSection.tsx

import React from "react";
import "../styles/BeforeAfterSection.css";

interface BeforeAfterSectionProps {
  beforeImage: string;
  afterImage: string;
  headingPart1: string;
  headingPart2: string;
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  beforeImage,
  afterImage,
  headingPart1,
  headingPart2,
}) => {
  return (
    <section className="beforeafter">
      <div className="container">
        {/* Heading Row */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="beforeafter-heading">
              {headingPart1} <span>{headingPart2}</span>
            </h2>
          </div>
        </div>
        {/* Image Row */}
        <div className="row align-items-center justify-content-center mt-4">
          {/* Before Image - 5 columns */}
          <div className="col-md-5 col-12 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <img 
              src={beforeImage} 
              alt="Before Image" 
              className="img-fluid"
            />
          </div>
          
          {/* Arrow Image - 2 columns */}
          <div className="col-md-2 col-12 d-flex justify-content-center align-items-center my-3 my-md-0">
            <img 
              src="/images/arrowafter.webp" 
              alt="Arrow" 
              className="img-fluid arrow-image"
              width={300}
              height={200}
            />
          </div>
          
          {/* After Image - 5 columns */}
          <div className="col-md-5 col-12 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <img 
              src={afterImage} 
              alt="After Image" 
              className="img-fluid"
            />
          </div>
        </div>
    
      </div>
      
    </section>
  );
};

export default BeforeAfterSection;