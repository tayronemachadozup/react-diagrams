import React from 'react'
import Conditional from "./Conditional";
import UserTask from "./UserTask";

export const widgets = [
  {
    id: "userTask",
    name: "User Task",
    color: "red",
    icon: "",
    widget: () => <UserTask />,
    panel: () => <UserTask.Panel />
  },
  {
    id: "conditional",
    name: "Conditional",
    color: "yellow",
    icon: "",
    widget: () => <Conditional />,
    panel: () => <Conditional.Panel />
  }
]