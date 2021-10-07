import { createStore } from "redux";
// ini store

const initialState = {
  globalLog: [],
  inProgress: [],
  evaluate: [],
  done: [],
};

const log = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        globalLog: [...state.globalLog, action.payload],
      };
    case "TAKE":
      return {
        ...state,
        globalLog: [...state.globalLog],
        inProgress: [...state.inProgress, action.payload],
      };
    case "EVALUATE":
      return {
        ...state,
        inProgress: [...state.inProgress],
        evaluate: [...state.evaluate, action.payload],
      };
    case "DONE":
      return {
        ...state,
        evaluate: [...state.evaluate],
        done: [...state.done, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(log);

export default store;
