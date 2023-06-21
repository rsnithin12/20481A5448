import React from "react";
import { Route, Routes } from "react-router-dom";
import TrainListPage from "./pages/TrainListPage";
import TrainDetailsPage from "./pages/TrainDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" component={TrainListPage} />
      <Route path="/trains/:id" component={TrainDetailsPage} />
    </Routes>
  );
};

export default App;
