import React, { useState, useReducer } from 'react';
import {ACTIONS,initialState,reducer} from './store';


export default function UseReducerHookDemo(){

  const [state, dispatch] = useReducer(reducer,initialState);

  function incrementCounter(){
    dispatch({type:ACTIONS.INCREMENT});
  }

  function decrementCounter(){
     dispatch({type:ACTIONS.DECREMENT});
  }
  console.log(state);

  return (
    <>
    <button onClick={decrementCounter}>-</button>
    <span>{state.count}</span>
    <button onClick={incrementCounter}>+</button>
    </>
  )
}