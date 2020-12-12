import { ADD_PROJECT } from "../actions/project";
import {ADD_TASK, CHANGE_STATUS} from "../actions/task";

export const initialState = {
    projects: [
        {
            id: 1,
            name: 'Учеба',
            tasks: [
                {
                    id: 1,
                    name: 'Сдать ДЗ во время.',
                    description: 'Очень сложно.',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Сдать сессию на 10.',
                    description: 'Невозможно.',
                    completed: true
                },

                {
                    id: 3,
                    name: 'Сделать проект.',
                    description: 'К 26 января.',
                    completed: true
                }
            ]
        },
        {
            id: 2,
            name: 'Еда',
            tasks: [
                {
                    id: 1,
                    name: 'Купить продукты.',
                    description: 'Хлеб, молоко, сыр.',
                    completed: true
                },
                {
                    id: 2,
                    name: 'Поспать.',
                    description: 'Минимум 8 часов.',
                    completed: false
                },
                {
                    id: 3,
                    name: 'Поесть.',
                    description: 'В Burger Heroes.',
                    completed: false
                }
            ]
        },
        {
            id: 3,
            name: 'Дополнительно',
            tasks: [
                {
                    id: 1,
                    name: 'Запушить коммит',
                    description: 'Как можно скорее.',
                    completed: true
                },
                {
                    id: 2,
                    name: 'Сделать дз по React',
                    description: 'Как можно скорее.',
                    completed: false
                }
            ]
        }
    ]
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT: {
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        }

        case ADD_TASK: {
            const { task, projectId } = action.payload;
            let newProjects = [...state.projects];
            let projectIndex = newProjects.findIndex(x => (x.id == projectId))
            newProjects[projectIndex].tasks.push(task);
            return {
                ...state,
                projects: newProjects
            }
        }

        case CHANGE_STATUS: {
            const { projectId, taskId } = action.payload;
            let newProjects = [...state.projects];
            let projectIndex = newProjects.findIndex(x => (x.id == projectId))
            let taskIndex = newProjects[projectIndex].tasks.findIndex(x => (x.id === taskId))
            newProjects[projectIndex].tasks[taskIndex].completed = newProjects[projectIndex].tasks[taskIndex].completed ? false : true;
            return {
                ...state,
                projects: newProjects
            }
        }

        default:
            return state;
    }
}