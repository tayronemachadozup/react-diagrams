import React from 'react'
import Conditional from "./Conditional";
import UserTask from "./UserTask";

export const widgets = [
  {
    id: "userTask",
    name: "User Task",
    color: "red",
    icon: "",
    widget: (data, onClick) => <UserTask data={data} onClick={onClick} />,
    panel: (data, onChange) => <UserTask.Panel data={data} onChange={onChange} />,
    data: {}
  },
  {
    id: "conditional",
    name: "Conditional",
    color: "yellow",
    icon: "",
    widget: (data, onClick) => <Conditional data={data} onClick={onClick} />,
    panel: (data, onChange) => <Conditional.Panel data={data} onChange={onChange} />,
    data: {
      title: ""
    }
  }
]