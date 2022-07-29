import { useSpeechContext } from "@speechly/react-client";
import React, { useState, useEffect } from 'react'

const SpeechlyApp = function() {
  const { segment } = useSpeechContext()

  useEffect(() => {
    if (segment) {
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