import { useDispatch } from "react-redux"

// const dispatch = useDispatch()

const initialState = {
    entities: [], //array of data
    status: "idle", //loading state
}

export function fetchCats() {
    return function(dispatch){
    dispatch({type: "cats/catsLoading"})
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
    .then(resp => resp.json())
    .then(data => dispatch({type:"cats/catsLoaded", payload: data.images}) )
    }
}

export default function catsReducer(state = initialState, action) {
    switch(action.type){
        case "cats/catsLoading":
            return {...state, 
            status: "loading"}
        case "cats/catsLoaded":
            return {...state,
            status: "idle",
            entities: action.payload}
        default:
            return state;
    }
}
