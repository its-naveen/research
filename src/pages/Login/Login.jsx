import { use, useReducer } from "react";
import { FloatingInput } from "../../components/Input/Input";
import { LoginContainer, LoginForm, LoginTitle, RedirectionLink, RedirectionLinks, SignupContainer, SignupLink, SignupText } from "../../styles/pages/login/login";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { useAppContext } from "../../context/appContext";

const INITIAL_STATE = {
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_USERNAME_ERROR':
      return { ...state, usernameError: action.payload };
    case 'SET_PASSWORD_ERROR':
      return { ...state, passwordError: action.payload };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAppContext();

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { username, password, usernameError, passwordError } = state;

  const handleValidation = () => {
    let hasError = false;
    if (!username) {
      dispatch({ type: 'SET_USERNAME_ERROR', payload: 'Username is required' });
      hasError = true;
    } else {
      dispatch({ type: 'SET_USERNAME_ERROR', payload: '' });
      hasError = false;
    }

    if (!password) {
      dispatch({ type: 'SET_PASSWORD_ERROR', payload: 'Password is required' });
      hasError = true;
    } else {
      dispatch({ type: 'SET_PASSWORD_ERROR', payload: '' });
      hasError = false;
    }

    return hasError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!handleValidation()) {
      console.log('Login successful');
      login({ username, password });
      navigate('home');
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <LoginTitle>Welcome back !</LoginTitle>
        <FloatingInput
          label={'Username'}
          name={'username'}
          type={'text'}
          placeholder={'Enter username'}
          value={username}
          error={usernameError}
          onChange={handleChange}
          maxLength={20}
        />
        <FloatingInput
          label={'Password'}
          name={'password'}
          type={'password'}
          placeholder={'Enter password'}
          value={password}
          error={passwordError}
          onChange={handleChange}
          maxLength={20}
        />
        <RedirectionLinks>
          <RedirectionLink>Forgot Username?</RedirectionLink>
          <RedirectionLink>Forgot Password?</RedirectionLink>
        </RedirectionLinks>
        <Button onClick={handleSubmit} type="submit">
          Login
        </Button>
        <SignupContainer>
          <SignupText>Don't have an account?
            <SignupLink onClick={() => navigate('/signup')}>
              Sign up
            </SignupLink>
          </SignupText>
        </SignupContainer>
      </LoginForm>
    </LoginContainer>
  );
}
