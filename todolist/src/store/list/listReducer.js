import { types } from "../types";
import { listInitState } from "./listInitState";

export const listReducer = (state = listInitState, action) => {
  if (action.type === types.ADD) {
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: state.list.length + 1,
          title: action.payload,
          success: false,
        },
      ],
    };
  }

  if (action.type === types.MARK) {
    return {
      ...state,
      list: state.list.map((item) =>
        item.id === action.payload ? { ...item, success: !item.success } : item
      ),
    };
  }

  if (action.type === types.CLEAN) {
    return {
      ...state,
      list: state.list.filter((item) => item.success === false),
    };
  }
};
