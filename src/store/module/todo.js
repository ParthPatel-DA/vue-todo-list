

const state = {
  todoList: [],
  isLoading: true,
  currentIndex: 3,
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
  fetchTodo({ commit }) {
    commit('FETCH_START');
    setTimeout(() => {
      const data = [
        { text: "Task 1", id: 1, isCompleted: true },
        { text: "Task 2", id: 2, isCompleted: false },
      ];
      commit('FETCH_END', { data });
    }, 1000);
  },
};

const mutations = {
  FETCH_START(state) {
    state.isLoading = true;
  },
  FETCH_END(state, { data }) {
    state.todoList = data;
    state.isLoading = false;
  },
  ADD(state, { data }) {
    state.todoList.push({ text: data.text, id: state.currentIndex });
    state.currentIndex++;
  },
  EDIT(state, data) {
    const index = state.todoList.findIndex(item => item.id === data.editIndex);
    state.todoList[index].text = data.text;
  },
  COMPLETE(state, data) {
    const index = state.todoList.findIndex(item => item.id === data.data.id);
    state.todoList[index].isCompleted = !state.todoList[index].isCompleted;
  },
  DELETE(state, data) {
    const index = state.todoList.findIndex(item => item.id === data.data.id);
    state.todoList.splice(index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
