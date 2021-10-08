// src/components/TaskList.test.js

import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import { WithPinnedTasks } from "./TaskList.stories"; //👈  Our story imported here

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  //👇 Story's args used with our test
  // 테스트를 위해 기존 설정한 args 를 가져옴
  // 기존의 WithPinnedTasks 스토리를 단위 테스트에서 재사용.
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
