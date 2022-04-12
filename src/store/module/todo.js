import { FETCH_TODO } from "../types/action";
import { FETCH_START, FETCH_END, ADD, EDIT, DELETE } from "../types/mutation";

const state = {
  todoList: [],
  isLoading: true,
  currentIndex: 2,
};

const getters = {
  todoList(state) {
    return state.todoList;
  },
  isCompleted(state) {
    return state.todoList.filter((item) => item.isCompleted === true);
  },
  isLoading(state) {
    return state.isLoading;
  },
};

const actions = {
  [FETCH_TODO]({ commit }) {
    commit(FETCH_START);
    setTimeout(() => {
      const data = [
        { text: "Task 1", id: 1, isCompleted: true },
        { text: "Task 2", id: 2, isCompleted: false },
      ];
      commit(FETCH_END, { data });
    }, 1000);
  },
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { data }) {
    state.todoList = data;
    state.isLoading = false;
  },
  [ADD](state, { data }) {
    state.todoList.push({ text: data.text, id: state.currentIndex });
    state.currentIndex++;
  },
  [EDIT](state, data) {
    state.todoList[data.editIndex].text = data.text;
  },
  [DELETE](state, data) {
    state.todoList.splice(data.index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
