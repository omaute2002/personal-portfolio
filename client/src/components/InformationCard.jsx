import React, { useState, useEffect, useContext } from "react";
import "./InformationCard.css";
import { CardContext } from "../CardContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import experiences from './Experience';
import skills from "./Skills";
import projects from './Projects';
import education from './Education';

function InformationCard() {
  const { cardContext } = useContext(CardContext); // use context 
  const [cardDetails, setCardDetails] = useState([]); // state variable
  const experiencesDetails = experiences;
  const ProjectDetails = projects;
  const skillsDetails = skills;
  const educationDetails = education;
 // skills data  experinec 2 
  // useEffect(() => { // useEffect hook 
  //   async function fetchCardDetails() {
  //     try {
  //       const response = await fetch(`https://personal-portfolio-server-eight-chi.vercel.app/api/${cardContext}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (response.status === 200) {
  //         const result = await response.json();
  //         setCardDetails(result);
  //       } else {
  //         console.log("Error while receiving the data");
  //       }
  //     } catch (error) {
  //       console.log("Fetch error: ", error);
  //     }
  //   }
  //   fetchCardDetails();
  // }, [cardContext]);

  // Backend mongo 
  // skills 
  // experiuce
  // ediucation 
  // projects 

  useEffect(()=>{
    if(cardContext === "experiences"){
      setCardDetails(experiencesDetails);
    }
    else if(cardContext === "skills"){
      setCardDetails(skillsDetails);
    }
    else if(cardContext === "education"){
      setCardDetails(educationDetails);

    }else if(cardContext === "projects"){
      setCardDetails(ProjectDetails);
    }
  },[cardContext])

  useEffect(() => {
    AOS.refresh();
  }, [cardContext]);

  return (
    <>
      <div  data-aos="fade-left" className="space-y-4 mt-10">
        {cardDetails.map((card, index) => (
          <div key={index}>
            <div
              id="info__card"
              className="max-w-lg mx-auto bg-slate-900 text-white p-6 rounded-lg shadow-md cursor-pointer mb-4"
            >
              <h4 className="text-sm sm:text-xs md:text-xs mb-2">{card.subHeading}</h4>
              <a href={card.link} className="text-2xl font-bold mb-4">{card.heading}</a>
              <p className="text-base mt-2" >{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default InformationCard;
