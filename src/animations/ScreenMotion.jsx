import { AnimatePresence, motion } from 'framer-motion';

const INITIAL_STATE = {
  direction: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DIRECTION':
      return { ...state, direction: action.payload };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default function ScreenMotion({ children }) {
  return (
    <></>
  );
};