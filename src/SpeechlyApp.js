import { useSpeechContext } from "@speechly/react-client";
import React, { useState, useEffect } from 'react'

const SpeechlyApp = function() {
  const { segment } = useSpeechContext()

  useEffect(() => {
    if (segment) {
        if (segment.entities) {
            segment.entities.forEach(entity => {
                console.log(entity);
            })
        } if (segment.intent) {
            console.log(segment.intent);
        }
      // Handle speech segment and make tentative changes to app state
      console.log(segment);
      if (segment.isFinal) {
        // Handle speech segment and make permanent changes to app state
        console.log("✅", segment)
      }
    }
  }, [segment])
}

export default SpeechlyApp