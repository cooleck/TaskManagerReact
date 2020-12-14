import { ADD_TASK, CHANGE_STATUS} from "../actions/task";

const initialState = {
    tasks: [
        {
            id: 1,
            name: 'Купить продукты.',
            description: 'Хлеб, молоко, сыр.',
            completed: true
        },

        {
            id: 2,
            name: 'Сдать ДЗ во время.',
            description: 'Очень сложно.',
            completed: false
        },

        {
            id: 3,
            name: 'Сдать сессию на 10.',
            description: 'Невозможно.',
            completed: true
        },

        {
            id: 4,
            name: 'Сделать проект.',
            description: 'К 26 января.',
            completed: true
        },

        {
            id: 5,
            name: 'Поспать.',
            description: 'Минимум 8 часов.',
            completed: false
        },

        {
            id: 6,
            name: 'Запушить коммит',
            description: 'Как можно скорее.',
            completed: true
        },

        {
            id: 7,
            name: 'Поесть.',
            description: 'В Burger Heroes.',
            completed: false
        }
    ]
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }

        case CHANGE_STATUS: {
            let newTasks = [...state.tasks];
            let taskIndex = newTasks.findIndex(x => (x.id === action.payload))
            newTasks[taskIndex].completed = newTasks[taskIndex].completed ? false : true;
            return {
                ...state,
                tasks: newTasks
            }
        }

        default: {
            return state;
        }
    }
}