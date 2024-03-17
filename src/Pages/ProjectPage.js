import React from "react";
import classes from "./ProjectPage.module.css";
import CardProp from "../Components/UI/Card"; 

const ProjectPage = () => {
  // Arrays for titles and descriptions
  const titles = [
    "Fuel Tracking App",
    "Golf Booking Web App",
    "Coffee Shop App", 
    "Java OOP Principals", 
    "Portfolio", 
    "MOP"
  ];
  const descriptions = ["Description 1", "Description 2", "Description 3", "Description 4", "Description 5", "Description 6"];

  return (
    <>
      <div className={classes.projectContainer}>
        {/* Loop through titles and descriptions */}
        {titles.map((title, index) => (
          <CardProp
            key={index}
            className={classes[`p${index + 1}`]}
            title={title}
            description={descriptions[index]}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
