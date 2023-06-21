import axios from "axios";

const BASE_URL = "http://104.211.219.98/train/register"; //

export const getTrains = () => {
  return axios
    .get(`http://104.211.219.98/train/trains`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getTrainById = (id) => {
  return axios
    .get(`http://104.211.219.98/train/trains/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
