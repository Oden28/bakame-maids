import React from "react";

const TaskForm = ({ form_info }) => {
  return (
    <div className="mb-5">
      <p className="text-[14px]">{form_info.question}</p>
      <input
        className="bg-white rounded-[15px] w-full py-3 px-5 text-[12px]"
        type="text"
        placeholder={form_info.placeholder}
      />
    </div>
  );
};

export default TaskForm;
