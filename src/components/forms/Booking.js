// WIP
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ContactForm from "./ContactForm";
import PassengerForm from "./PassengerForm";
import { FormTitle } from "../../styles";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import { bookFlight } from "../../store/actions/flightActions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    margin: "30px",
  },
}));

export default function Booking({ flight }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { flightId } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <FormTitle>Booking Details</FormTitle>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Contact info" {...a11yProps(0)} />
          <Tab label="Passenger info" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <ContactForm flightId={flightId} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PassengerForm />
        </TabPanel>
      </div>
    </div>
  );
}
