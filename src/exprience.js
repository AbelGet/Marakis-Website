import React from "react";

const Exprience = (props) => {
  return (
    <div>
      <div className="yearExperience">
        <h3 className="startFrom startFromMobile">{props.startFrom}</h3>
        <h3 className="endOn endOnMobile">{props.endOn}</h3>
      </div>
      <span className="companyNameExperience">
        {props.companyName}
        <span className="jobTypeExperience">({props.jobType})</span>
      </span>
      <br />
      <span className="responsibility">Responsibilities:</span>
      <ul className="responsibilityList">{props.responsible}</ul>
    </div>
  );
};

export default Exprience;
