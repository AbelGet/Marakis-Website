const RcProject = (props) => {
  return (
    <div className="projectOne">
      <div className="projectPic"></div>
      <div className="project">
        <span className="projectTitle">Project Name:</span>
        <br />
        <span className="projectName">{props.projectName}</span>
        <br />
        <span className="projectTitle">Project Client:</span>
        <br />
        <span className="projectClient">{props.projectClients}</span>
        <br />
        <span className="projectTitle">Project Location:</span>
        <br />
        <span className="projectLocation"> {props.projectLocation} </span>
        <br />
        <span className="projectTitle">Project Description:</span>
        <br />
        <span className="projectDescription"> {props.projectDescription} </span>
      </div>
    </div>
  );
};

export default RcProject;
