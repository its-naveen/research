import { useReducer } from "react";
import { FloatingInput } from "../../components/Input/Input";
import { LoginContainer, LoginLink, LoginText, SignupContainer, SignupForm, SignupTitle } from "../../styles/pages/signup/signup";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";

const INITIAL_STATE = {
  email: '',
  emailError: '',
  phone: '',
  phoneError: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    case 'SET_PHONE_ERROR':
      return { ...state, phoneError: action.payload };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default function Signup({ handleNavigation }) {
  const navigation = useNavigate();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { email, phone, emailError, phoneError } = state;

  const handleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{12}$/;

    let hasError = false;
    if (!email) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: 'Email is required' });
      hasError = true;
    } else if (email && emailRegex.test(email) === false) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: 'Invalid email address' });
      hasError = false;
    } else {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: '' });
      hasError = false;
    }

    if (!phone) {
      dispatch({ type: 'SET_PHONE_ERROR', payload: 'Phone is required' });
      hasError = true;
    } else if (phone && phoneRegex.test(phone) === false) {
      dispatch({ type: 'SET_PHONE_ERROR', payload: 'Invalid phone number' });
      hasError = true;
    } else {
      dispatch({ type: 'SET_PHONE_ERROR', payload: '' });
      hasError = false;
    }

    return hasError;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      handleNavigation('/createuser');
    }
  }

  return (
    <SignupContainer>
      <SignupForm>
        <SignupTitle>Create an account</SignupTitle>
        <FloatingInput
          label={'Email ID'}
          name={'email'}
          type={'text'}
          // placeholder={'Enter Your Email ID'}
          value={email}
          error={emailError}
          onChange={handleChange}
          maxLength={25}
          required={true}
        />
        <FloatingInput
          label={'Phone Number'}
          name={'phone'}
          type={'number'}
          // placeholder={'Enter Your Phone Number'}
          value={phone}
          error={phoneError}
          onChange={handleChange}
          maxLength={12}
          required={true}
        />
        <Button onClick={handleSubmit}>Continue</Button>
        <LoginContainer>
          <LoginLink>Already have an account?
            <LoginText onClick={() => handleNavigation('/login')}>
              Login
            </LoginText>
          </LoginLink>
        </LoginContainer>
      </SignupForm>
    </SignupContainer>
  );
}