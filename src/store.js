import { createStore } from 'redux'

const initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const AUTHORS_FIRST_NAME = 'AUTHORS_FIRST_NAME'
export const AUTHORS_LAST_NAME = 'AUTHORS_LAST_NAME'
export const CHANGE_INGREDIENTS = 'CHANGE_INGREDIENTS'
export const FOLLOW_INSTRUCTIONS = 'FOLLOW_INSTRUCTIONS'
export const ADD_RECIPE = "ADD_RECIPE"

function reducer(state = initialState, action){
    switch(action.type) {
      case UPDATE_NAME:
        return {
          ...state,
          name: action.payload
        }
      case UPDATE_CATEGORY:
        return {
          ...state,
          category: action.payload
        }
      case AUTHORS_FIRST_NAME:
        return {
          ...state,
          authorFirst: action.payload
        }
      case AUTHORS_LAST_NAME:
        return{
          ...state,
          authorLast: action.payload
        }
      case CHANGE_INGREDIENTS:
        const newIngredients = [...state.ingredients, action.payload];
        return{
          ...state, 
          ingredients: newIngredients
        }
      case FOLLOW_INSTRUCTIONS:
        const readInstructions = [...state.instructions, action.payload];
        return{
          ...state,
          instructions: readInstructions
        }
      case ADD_RECIPE:
        const {
          name,
          authorFirst,
          authorLast,
          ingredients,
          instructions
        } = state;
        const recipe = {
          name,
          authorFirst,
          authorLast,
          ingredients,
          instructions
        };
        const newRecipes = [...state.recipes, recipe]
        return{
          ...state,
          recipes: newRecipes
        }

      default:
        return state;
    }
}

export default createStore(reducer)