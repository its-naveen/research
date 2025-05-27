import { useReducer } from "react";
import Button from "../../components/Button/Button";
import { FloatingInput } from "../../components/Input/Input";
import { CreateUserContainer, CreateUserForm, CreateUserTitle } from "../../styles/pages/signup/createUser";
import { useToastContext } from "../../context/toastContext";

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

export default function CreateUser({ handleNavigation}) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { showToast } = useToastContext();
  const { username, password, usernameError, passwordError } = state;

  const handleValidation = () => {
    let hasError = false;

    if (!username) {
      dispatch({ type: 'SET_USERNAME_ERROR', payload: 'Username is required' });
      hasError = true;
    } else {
      dispatch({ type: 'SET_USERNAME_ERROR', payload: '' });
    }

    if (!password) {
      dispatch({ type: 'SET_PASSWORD_ERROR', payload: 'Password is required' });
      hasError = true;
    } else if (password && password.length < 8) {
      dispatch({ type: 'SET_PASSWORD_ERROR', payload: 'Password must be at least 8 characters long' });
      hasError = true;
    } else {
      dispatch({ type: 'SET_PASSWORD_ERROR', payload: '' });
    }

    return hasError;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = handleValidation();

    if (!hasError) {
      console.log('User created:', { username, password });
      showToast('User created successfully!', 'success');
      handleNavigation('/login');
      dispatch({ type: 'RESET' });
    }
  }

  return (
    <CreateUserContainer>
      <CreateUserForm>
        <CreateUserTitle>Create User</CreateUserTitle>
        <FloatingInput
          label={'Username'}
          type={'text'}
          name={'username'}
          required={true}
          value={username}
          onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
          error={usernameError}
        />
        <FloatingInput
          label={'Password'}
          type={'password'}
          name={'password'}
          required={true}
          value={password}
          onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
          error={passwordError}
        />
        <Button onClick={handleSubmit}>Create User</Button>
      </CreateUserForm>
    </CreateUserContainer>
  );
}
