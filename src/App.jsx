import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import { useAppContext } from "./context/appContext";
import { useEffect, useReducer } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import PageAnimation from "./pages/PageAnimation/PageAnimation";
import CreateUser from "./pages/Signup/CreateUser";
import Confirmation from "./pages/Signup/Confirmation";

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

export default function App() {
  const navigation = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAppContext();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { direction } = state;

  useEffect(() => {
    console.log("Is Authenticated: ", isAuthenticated());
    if (isAuthenticated()) {
      navigation("/home");
    }
  }, [navigation, isAuthenticated]);

  const handleNavigation = (to) => {
    const paths = ['/login', '/signup', '/createuser', '/confirmation'];
    const currentPath = paths.indexOf(location.pathname);
    const nextPath = paths.indexOf(to);

    if (currentPath < nextPath) {
      dispatch({ type: 'SET_DIRECTION', payload: 1 });
    } else if (currentPath > nextPath) {
      dispatch({ type: 'SET_DIRECTION', payload: -1 });
    }
    navigation(to);
  };

  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '10%' : '-10%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-10%' : '10%',
      opacity: 0,
      transition: { duration: 0.25 }
    })
  };

  return (
    <AnimatePresence custom={direction} mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={
          <PageAnimation direction={direction} pageVariants={pageVariants}>
            <Login handleNavigation={handleNavigation} />
          </PageAnimation>
        } />
        <Route path='/signup' element={
          <PageAnimation direction={direction} pageVariants={pageVariants}>
            <Signup handleNavigation={handleNavigation} />
          </PageAnimation>
        } />
        <Route path='/createuser' element={
          <PageAnimation direction={direction} pageVariants={pageVariants}>
            <CreateUser handleNavigation={handleNavigation} />
          </PageAnimation>
        } />
        <Route path='/confirmation' element={
          <PageAnimation direction={direction} pageVariants={pageVariants}>
            <Confirmation handleNavigation={handleNavigation} />
          </PageAnimation>
        } />
        {
          isAuthenticated() && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path='/contact' element={<h1>Contact</h1>} />
            </>
          )
        }
        <Route path="*" element={<Navigate to={isAuthenticated() ? "/home" : "/login"} replace />} />
      </Routes>
    </AnimatePresence>
  );
}
