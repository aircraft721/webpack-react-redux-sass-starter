import {combineReducers} from 'redux';
import {pingReducer} from '../epics/index';


const app2 = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    app2,
    pingReducer
})

// export default app2;