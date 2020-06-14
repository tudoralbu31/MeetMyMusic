import React, { useState, createContext, useReducer } from 'react'

export const TheContext = createContext()

const InitialState = {
  userData: {},
  globalConfig: { sideDrawer: false }
}

const TheReducer = (state, action) => {
  switch (action.type) {
    case 'GIVE_INFO':
      return {
        ...state
      }
    case 'TOGGLE_SIDE_DRAWER':
      const { globalConfig: oldGlobalConfig } = state
      const { sideDrawer } = oldGlobalConfig

      const newGlobalConfig = { ...oldGlobalConfig, sideDrawer: !sideDrawer }
      return { ...state, globalConfig: newGlobalConfig }
      

    case 'ADD_AUTH_INFO':
      const { payload } = action
      const { email } = payload
      return { ...state, userData: { email } }
    default:
      return state
  }
}

const TOGGLE_SIDE_DRAWER = dispatch => {
  return () => {
    dispatch({ type: 'TOGGLE_SIDE_DRAWER' })
  }
}

const UNTOGGLE_SIDE_DRAWER = dispatch => {
  return () => {
    dispatch({ type: 'UNTOGGLE_SIDE_DRAWER' })
  }
}

const ADD_AUTH_INFO = dispatch => {
  return email => {
    dispatch({ type: 'ADD_AUTH_INFO', payload: { email } })
  }
}

export const TheProvider = props => {
  const [state, dispatch] = useReducer(TheReducer, InitialState)

  return (
    <TheContext.Provider
      value={{
        state,
        TOGGLE_SIDE_DRAWER: TOGGLE_SIDE_DRAWER(dispatch),
        UNTOGGLE_SIDE_DRAWER: UNTOGGLE_SIDE_DRAWER(dispatch)
      }}
    >
      {props.children}
    </TheContext.Provider>
  )
}
