import './App.css';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import { PushToTalkButton, BigTranscript, IntroPopup } from "@speechly/react-ui";
import Layout from "./components/Layout"
import Explore from "./components/Explore"
import Snacks from "./components/Snacks"
import Drinks from "./components/Drinks"
import Grocery from "./components/Grocery"
import MyStuff from "./components/MyStuff"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SpeechlyApp from './SpeechlyApp'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="whitespace">
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
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

            <Box sx={{ flex: '1 1 auto' }} />
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
            <Tab label="My Stuff" component={Link} to="/MyStuff" style={{fontSize:"20px", margin:"10px"}}/>
            <Tab label="Drinks" component={Link} to="/Drinks" style={{fontSize:"20px", margin:"10px"}}/>
            <Tab label="Snacks" component={Link} to="/Snacks" style={{fontSize:"20px", margin:"10px"}}/>
            <Tab label="Grocery" component={Link} to="/Grocery" style={{fontSize:"20px", margin:"10px"}}/>
          </Tabs>
        </Box>

        <Button variant="contained">FILTER</Button>
        <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        SORT BY:
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>LOW TO HIGH</MenuItem>
        <MenuItem onClick={handleClose}>HIGH TO LOW</MenuItem>
        <MenuItem onClick={handleClose}>POPULARITY</MenuItem>
      </Menu>
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Explore />} />
            <Route path="MyStuff" element={<MyStuff />} />
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
