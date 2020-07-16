export const addTodo = (content) => {
  return {
    type: "ADD_TODO",
    content,
  };
};

export const completedTodo = (id) => {
  return {
    type: "COMPLETED_TODO",
    id,
  };
};

export const filterTodo = (status) => {
  return {
    type: "FILTER_TODO",
    status,
  };
};
