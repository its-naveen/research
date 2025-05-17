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

export default function Signup() {
  const navigation = useNavigate();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { email, phone, emailError, phoneError } = state;

  const handleChange = (e) => {
    const { name, value } = e.targer;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  return (
    <SignupContainer>
      <SignupForm>
        <SignupTitle>Create an account</SignupTitle>
        <FloatingInput
          label={'Email'}
          name={'email'}
          type={'text'}
          placeholder={'Enter email'}
          value={email}
          error={emailError}
          onChange={handleChange}
          maxLength={30}
        />
        <FloatingInput
          label={'Phone'}
          name={'phone'}
          type={'number'}
          placeholder={'Enter phone'}
          value={phone}
          error={phoneError}
          onChange={handleChange}
          maxLength={30}
        />
        <Button>Confirm</Button>
        <LoginContainer>
          <LoginLink>Already have an account?
            <LoginText onClick={() => navigation('/login')}>
              Login
            </LoginText>
          </LoginLink>
        </LoginContainer>
      </SignupForm>
    </SignupContainer>
  );
}