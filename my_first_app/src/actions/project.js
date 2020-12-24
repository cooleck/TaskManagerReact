export const ADD_PROJECT = "ADD_PROJECT";

export const handleAddProject = project => ({
    type: ADD_PROJECT,
    payload: project
});