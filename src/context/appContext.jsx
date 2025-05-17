import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const isAuthenticated = () => {
    return state.isAuthenticated;
  };

  const getUser = () => {
    return state.user;
  };
  
  return (
    <AppContext.Provider value={{login, logout, isAuthenticated, getUser}}>
      {children}
    </AppContext.Provider>
  );
}; 

export const useAppContext = () => useContext(AppContext);

export default AppContext;
