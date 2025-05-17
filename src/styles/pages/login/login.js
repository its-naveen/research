import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: #f0f0f0;
`;

export const LoginForm = styled.form`
  border-radius: 8px;
  background-color: #fff;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LoginTitle = styled.h3`
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 20px;
`;

export const RedirectionLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RedirectionLink = styled.span`
  color: var(--primary-color);
  cursor: pointer;
  font-size: 12px;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const SignupText = styled.span`
  color: var(--text-color);
  font-size: 12px;
`;

export const SignupLink = styled.span`
  color: var(--primary-color);
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;

  &:hover {
    color: var(--secondary-color);
  }
`;