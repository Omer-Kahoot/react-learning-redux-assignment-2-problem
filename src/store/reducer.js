import * as actionTypes from './actions.js';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return { persons: [...state.persons, action.person] }
        case actionTypes.REMOVE:
            const newPersonsArray = state.persons.filter(el => el.id !== action.id);
            return { persons : newPersonsArray }
    }

    return state;
}

export default reducer;