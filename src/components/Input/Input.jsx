import { useReducer } from 'react';
import { InputContainer, InputError, InputField, InputLabel, InputWrapper, IsRequired } from '../../styles/components/input/input';

const INITIAL_STATE = {
  isFocused: 'N',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FOCUS':
      return { ...state, isFocused: action.payload };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const FloatingInput = ({ label, placeholder, error, ...props }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { isFocused } = state;

  return (
    <InputWrapper>
      <InputContainer onClick={() => dispatch({ type: 'SET_FOCUS', payload: 'Y' })}>
        <InputLabel $focused={isFocused} $error={!!error ? 'Y' : 'N'} >
          {label}
          {props.required && <IsRequired>*</IsRequired>}
        </InputLabel>
        <InputField
          {...props}
          $error={!!error ? 'Y' : 'N'}
          $focused={isFocused}
          placeholder={isFocused === 'Y' ? placeholder : ''}
          type={props.type || 'text'}
          onFocus={() => dispatch({ type: 'SET_FOCUS', payload: 'Y' })}
          onBlur={(e) => {
            if (!e.target.value) dispatch({ type: 'SET_FOCUS', payload: 'N' })
          }
          }
        />
      </InputContainer>
      {!!error && <InputError className={error !== '' ? 'show' : ''}>{error}</InputError>}
    </InputWrapper>
  );
};
