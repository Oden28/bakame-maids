import React, { useEffect } from "react";
import TaskForm from "./TaskForm";
import { Link } from "react-router-dom";
import arrowLeftDark from "../../../assets/images/arrowLeftDark.svg";

const TaskWorkerForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="mx-4 my-6 px-10 py-4 bg-gray rounded-[20px] shadow-md max-w-[800px] grow">
        {/* Header */}
        <div className="flex flex-row justify-between items-center font-semibold mb-4 mt-3">
          <Link to="/">
            <div>
              <img src={arrowLeftDark} alt="arrowLeft" />
            </div>
          </Link>
          <div>Job description</div>
          <div></div>
        </div>
        {/* Questions*/}
        <div className="mb-10">
          {form_info.map((info) => (
            <TaskForm key={info.id} form_info={info} />
          ))}
        </div>
        {/* Submit button */}
        <div className="flex justify-center mb-5">
          <Link to="/taskForm/taskWorkers">
            <div className="hover:shadow-md hover:bg-yellow bg-green rounded-[20px] py-2 px-20 text-white">
              Submit
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskWorkerForm;

const form_info = [
  {
    id: 1,
    question: "What's your house size?",
    placeholder: "How many rooms?",
  },
  {
    id: 2,
    question: "How many children do you have?",
    placeholder: "Enter the number of children you have",
  },
  {
    id: 3,
    question: "What are your specific skills?",
    placeholder: "Enter your skills seperated by a coma",
  },
  {
    id: 4,
    question: "What's your physical address?",
    placeholder: "Enter your house address",
  },
  {
    id: 5,
    question: "What amount are you willing to pay?",
    placeholder: "Enter amount, e.g. RWF 200,000",
  },
  {
    id: 6,
    question: "What's your phone number?",
    placeholder: "Enter your phone number",
  },
];
