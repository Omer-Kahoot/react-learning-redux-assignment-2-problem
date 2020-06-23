import * as actionTypes from './actions.js';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    console.log(action.name);
    console.log(action.age);
    
    switch (action.type) {
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: Math.floor(action.age)
            }
            return { persons: [...state.persons, newPerson] }
        case actionTypes.REMOVE:
            const newPersonsArray = state.persons.filter(el => el.id !== action.id);
            return { persons : newPersonsArray }
    }

    return state;
}

export default reducer;