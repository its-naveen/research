import { createContext, useContext, useEffect, useReducer } from "react";
import { CloseButton, ToastContainer, ToastMessage, ToastText } from "../styles/components/toaster/toaster";

const INITIAL_STATE = {
  isOpen: false,
  message: '',
  type: 'info', // info, success, error, warning
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return { ...state, isOpen: true, message: action.payload.message, type: action.payload.type };
    case 'HIDE_TOAST':
      return { ...state, isOpen: false, message: '', type: 'info' };
    default:
      return state;
  }
}

const CreateToastContext = createContext();

export const ToastProvder = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { isOpen, message, type } = state;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideToast();
      }, 4000); // Auto-hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const showToast = (message, type = 'info') => {
    dispatch({ type: 'SHOW_TOAST', payload: { message, type } });
  };

  const hideToast = () => {
    dispatch({ type: 'HIDE_TOAST' });
  };

  return (
    <CreateToastContext.Provider value={{showToast}}>
      {children}
      {
        isOpen && (
          <ToastContainer>
            <ToastMessage type={type}>
              {/* <ToastIcon type={type} /> */}
              <ToastText>{message}</ToastText>
              <CloseButton onClick={hideToast}>×</CloseButton>
            </ToastMessage>
          </ToastContainer>
        )
      }
    </CreateToastContext.Provider>
  );
};

export const useToastContext = () => useContext(CreateToastContext);
