import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0.68rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputLabel = styled.span`
  font-size: ${({ $focused }) => ($focused === 'Y' ? "10px" : "14px")};
  font-weight: ${({ $focused }) => ($focused === 'Y' ? "bold" : "normal")};
  top: ${({ $focused }) => ($focused === 'Y' ? "4%" : "30%")};
  color: ${({ $focused, $error }) => ($focused === 'Y' ? "var(--text-secondary-color)" : $error === 'Y' ? 'red' : "var(--text-color)")};
  position: absolute;
  transition: all 0.2s ease-in-out;
  padding: 0 0.65rem;
  margin-left: 0.3rem;
  display: inline-block;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid ${({ $error }) => ($error === 'Y' ? "red" : "var(--border-color)")};
  border-radius: 4px;
  font-size: 14px;
  color: #333;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const InputError = styled.span`
  color: red;
  font-size: 10px;
  // font-style: italic;
  font-weight: 500;
  position: absolute;
  bottom: -0.9rem;
  
  &.show {
    animation: ${slideDown} 0.3s ease-out forwards;
  }
`;

export const IsRequired = styled.span`
  color: red;
  font-size: 12px;
  padding-bottom: 0.8rem;
  display: inline-block;
  position: absolute;
  top: -0.1rem;
`;
