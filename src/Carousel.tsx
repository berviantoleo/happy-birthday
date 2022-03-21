import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import mainGif from './img/main.gif';
import shelaAva from './img/shela-ava.jpg';
import shelaMain from './img/shela-main.jpg';
import shela2 from './img/shela-2.jpg';
import shela3 from './img/shela-3.jpg';
import shela4 from './img/shela-4.jpg';
import shela5 from './img/shela-5.jpg';
import shela6 from './img/shela-6.jpg';
import shela7 from './img/shela-7.jpg';
import shela8 from './img/shela-8.jpg';
import shela10 from './img/shela-10.jpg';
import shela11 from './img/shela-11.jpg';
import endGif from './img/end.gif';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Happy Birthday, Shela! 🥳',
    imgPath:
      mainGif,
  },
  {
    label: 'How are you today? 😀',
    imgPath:
      shelaMain,
  },
  {
    label: "I hope you're having a great week! 😊",
    imgPath:
      shelaAva,
  },
  {
    label: 'May Christ be with you! 🙂',
    imgPath:
      shela2,
  },
  {
    label: 'Keep it up! 🙂',
    imgPath:
      shela3,
  },
  {
    label: 'Hope you will graduate soon! ☺️',
    imgPath:
      shela4,
  },
  {
    label: 'Keep smile! ☺️',
    imgPath:
      shela5,
  },
  {
    label: 'Never give up! ☺️',
    imgPath:
      shela6,
  },
  {
    label: 'Christ always in you. 😉',
    imgPath:
      shela7,
  },
  {
    label: 'I hope this is the beginning of your greatest, most wonderful year ever! 😇',
    imgPath:
      shela8,
  },
  {
    label: 'Do your best! 👍',
    imgPath:
      shela10,
  },
  {
    label: 'Stay in the church life! 👌',
    imgPath:
      shela11,
  },
  {
    label: 'Once again, happy birthday! 📦',
    imgPath:
      endGif,
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxHeight: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        style={{ minHeight: '100', WebkitOverflowScrolling: 'touch', }}
        animateHeight
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  width: '100%',
                  overflowY: 'auto',
                  maxHeight: "100%"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
