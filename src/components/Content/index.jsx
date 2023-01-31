import React from "react";
import HomePage from "./HomePage";
import Maids from "./Maids";
import Maid from "./Maid";
import MaidForm from "./MaidForm";
import { Route, Routes } from "react-router-dom";
import TaskWorkerForm from "./TaskWorkerForm";
import TaskWorkers from "./TaskWorkers";
import TaskWorker from "./TaskWorker";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maids" element={<Maids />} />
        <Route path="/maids/maid" element={<Maid />} />
        <Route path="/maids/maid/form" element={<MaidForm />} />
        <Route path="/taskForm" element={<TaskWorkerForm />} />
        <Route path="/taskForm/taskWorkers" element={<TaskWorkers />} />
        <Route
          path="/taskForm/taskWorkers/taskWorker"
          element={<TaskWorker />}
        />
      </Routes>
    </div>
  );
};

export default Content;
