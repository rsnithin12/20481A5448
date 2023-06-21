import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@material-ui/core";

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios
      .get(`http://104.211.219.98/train/trains/${trainNumber}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [trainNumber]);

  if (!train) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Train Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        {train.name}
      </Typography>
      <Typography>Departure: {train.departureTime}</Typography>
      <Typography>Delay: {train.delayedBy}</Typography>
      <Typography>Seat Availability: {train.seatAvailable}</Typography>
      <Typography>Price: {train.price}</Typography>
    </div>
  );
};

export default TrainDetails;
