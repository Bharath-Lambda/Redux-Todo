export const NEW_TODO = "NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const newTodo = (title) => {
    return {type: NEW_TODO, payload: title};
};

export const toggleComplete = (id) => {
    return {type: TOGGLE_COMPLETE, payload: id};
};