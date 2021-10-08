// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
// 데이터 저장을 위해 React 라이브러리인 Redux를 사용하여 앱을 위해 간단한 데이터 모델을 만든다.
// 이 패턴은 Apollo와 MobX 같은 다른 데이터 관리 라이브러리에도 적용 가능.
import { createStore } from "redux";

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task.
// 상태 변화 동작을 하는 부분.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
// 각 액션에 대해 저장소의 내용이 어떻게 바뀌는지 표현하는 리듀서.
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    // "TASK_ARCHIVED" => taskState, state => state, action => action
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks });
