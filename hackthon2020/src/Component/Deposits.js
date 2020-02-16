import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

function BusinessLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Business Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        CLOSED
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        0
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Low {/*Should be light green here! */}
      </Typography>
      
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function HealthSciencesLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Health Sciences Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        52
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be green here! */}
      </Typography>
      
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function DoucetteLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Doucette Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        20
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be green here! */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function GallagherLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Gallagher Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        20
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be green here! */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function BennettJonesLawLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Bennett Jones Law Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        14
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Low {/*Should be green here! */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function TaylorFamilyDigitalLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Taylor Family Digital Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        125
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: High {/*Should be red here! */}
      </Typography>
      
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function DiningCenter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Dining Centre</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        40
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be red here! */}
      </Typography>
      
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function MachallParkade() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>MacEven Hall Parkade</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4">
        173
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function ArtParkade() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Art Parkade</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4">
        112
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function Lot11() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lot 11</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4">
        59
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function Lot10() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lot 10</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4">
        67
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function SwimmingPool() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Swimming Pool</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h4">
        37
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function BasketballGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Basketball Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        2
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function RedGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Red Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        3
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function GoldGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Gold Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        0
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function JackSimpsonGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Jack Simpson Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        4
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

export default BusinessLibrary;
export {BennettJonesLawLibrary ,Lot11, JackSimpsonGym, RedGym, GoldGym, DoucetteLibrary, GallagherLibrary, BusinessLibrary, HealthSciencesLibrary, TaylorFamilyDigitalLibrary, DiningCenter, ArtParkade, MachallParkade, Lot10, SwimmingPool, BasketballGym};

// import {BennettJonesLawLibrary ,Lot11, JackSimpsonGym, RedGym, GoldGym, DoucetteLibrary, GallagherLibrary, BusinessLibrary, HealthSciencesLibrary, TaylorFamilyDigitalLibrary, DiningCenter, ArtParkade, MachallParkade, Lot10, SwimmingPool, BasketballGym} from "./Deposits";
