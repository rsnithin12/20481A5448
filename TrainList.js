import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get("http://104.211.219.98/train/trains")
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        All Trains
      </Typography>
      <List>
        {trains.map((train) => (
          <ListItem
            key={train.id}
            component={Link}
            to={`/trains/${train.trainNumber}`}
          >
            <ListItemText
              primary={train.trainName}
              secondary={`Departure: ${train.departureTime}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TrainList;
