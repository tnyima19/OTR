import * as at from './actionTypes';

export const fetchAllPoems = (poems) =>{
    return{
        type: at.FETCH_ALL_POEMS,
        payload: employees,
    }
}

export const fetchPoem = (poem) =>{
    return{
        type: at.FETCH_POEM,
        payload: poem,
    }
}

export const addPoem = (poem) =>{
    return{
        type: at.ADD_POEM,
        payload: poem,
    }
}