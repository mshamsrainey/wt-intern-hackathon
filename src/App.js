import './App.css';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import { PushToTalkButton, BigTranscript, IntroPopup } from "@speechly/react-ui";
import Layout from "./components/Layout"
import Explore from "./components/Explore"
import Snacks from "./components/Snacks"
import Drinks from "./components/Drinks"
import Grocery from "./components/Grocery"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SpeechlyApp from './SpeechlyApp';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const steps = ['ORDER', 'CHECK OUT', 'ENJOY'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    //return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <BrowserRouter>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    <Box display="flex" justifyContent="right" width="100%">
      <IconButton>
        < ShoppingCart style={{fontSize:"50px"}}/>
      </IconButton>
      <div className="cart-price">$0.00</div>
    </Box>
        <Box display="flex" justifyContent="center" width="100%">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Explore" component={Link} to="/" style={{fontSize:"20px", margin:"10px"}}/>
            <Tab label="Drinks" component={Link} to="/Drinks" style={{fontSize:"20px", margin:"10px"}}/>
            <Tab label="Snacks" component={Link} to="/Snacks" style={{fontSize:"20px", margin:"10px"}}/>
            <Tab label="Grocery" component={Link} to="/Grocery" style={{fontSize:"20px", margin:"10px"}}/>
          </Tabs>
        </Box>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Explore />} />
            <Route path="Drinks" element={<Drinks />} />
            <Route path="Snacks" element={<Snacks />} />
            <Route path="Grocery" element={<Grocery />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="Speechly">
        <BigTranscript placement="top"/>
        <PushToTalkButton placement="bottom" captureKey=' '/>
        <IntroPopup />
        <SpeechlyApp />
      </div>
    </div>
  );
}


export default App;
