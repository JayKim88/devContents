import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};
//component -- 해당 컴포넌트,
//title -- Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법.

const Template = (args) => <Task {...args} />;
// Template.bind({})는 함수의 복사본을 만드는 표준 JavaScript의 한 기법.
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
