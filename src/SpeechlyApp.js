import { useSpeechContext } from "@speechly/react-client";
import { render } from "@testing-library/react";
import React, { useState, useEffect } from 'react'
// Importing toastify module
import { toast, ToastContainer } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

const SpeechlyApp = function () {
  const { segment } = useSpeechContext()

  useEffect(() => {
    if (segment) {
      if (segment.entities) {
        segment.entities.forEach(entity => {
          console.log(entity);
        })
      } if (segment.intent) {
        console.log(segment.intent.intent);
      } if (segment.isFinal) {
        // Handle speech segment and make permanent changes to app state
        console.log("✅", segment)
        switch (segment.intent.intent) {
          case "info_bathrooms":
            toast.info("Our store has complimentary restrooms next to the checkout counter. Come on in!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            break;
          case "info_hours":
            toast.info("Our convenience store is open from 6am to 11pm, seven days a week.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            break;
          case "info_carwash":
            toast.info("We offer premium quality car washes for $12. Once you're done fueling, come to our car wash center for details.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            break;
          case "info_vacuum":
            toast.info("Need to clean the inside of your car? We offer vacuum use for a dollar per minute. Vacuums are located to the left of fueling area", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            break;
          case "info_tirepump":
            toast.info("We can help you get back to a smooth driving experience. Fill up your tires for a dollar a minute to the left of the fueling area.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            break;
        }
      }
    }
  }, [segment])

  return <ToastContainer />
}

export default SpeechlyApp

