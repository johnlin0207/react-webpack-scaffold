import {combineReducers} from 'redux';
import {ADD_TODO} from '../action';

const todo = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state,
                {
                    text: action.text
                }
            ];
        default:
            return state
    }
};

const Reducer = combineReducers({todo});
export default Reducer;