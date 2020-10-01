import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
  },
  margin: {
    height: theme.spacing(20),
  },
}));

const marks = [
  {
    value: 0,
    label: 'Upbeat',
  },
  {
    value: 20,
    label: 'Down',
  },
  {
    value: 40,
    label: 'Angry',
  },
  {
    value: 60,
    label: 'Energetic',
  },
  {
    value: 80,
    label: 'Peaceful',
  },
  {
    value: 100,
    label: 'Chill',
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}Mood`;
}

function Slidershort(props) {
  const classes = useStyles();

  return (
    <div>
      {/* <div className={classes.root}>
        <Typography
          id="discrete-slider-custom"
          style={{ textAlign: 'center' }} gutterBottom>
          Choose your Mood
      </Typography>
        <Slider
          defaultValue={props.value}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={20}
          valueLabelDisplay="off"
          marks={marks}
          style={{ position: 'relative' }}
          onChangeCommitted={props.handleChange}
        />
        
      </div> */}
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider valueLabelDisplay="off" aria-label="pretto slider" marks={marks} defaultValue={20} />
    </div>
  );
}

export default Slidershort;