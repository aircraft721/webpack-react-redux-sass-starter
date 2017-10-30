import {combineEpics} from 'redux-observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

const pingEpic = action$ => 
    action$.ofType('PING')
    .delay(1000)
    .mapTo({type: 'PONG'});

export const pingReducer = (state = {isPinging: false}, action) => {
    switch(action.type){
        case 'PING':
            return {isPinging: true}
        case 'PONG': 
            return {isPinging: false}
        default: 
            return state;
    }
}

export const rootEpic = combineEpics(
    pingEpic
);

