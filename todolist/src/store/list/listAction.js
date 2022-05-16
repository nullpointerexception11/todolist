import { types } from '../types';

export const addList = (text) => {
    return { 
        type: types.ADD,
        payload: text
    };
};

export const mark = (id) => {
    return {
        type: types.MARK,
        payload: id
    };
};

export const clean = () => {
    return{
        type: types.CLEAN
    };
};