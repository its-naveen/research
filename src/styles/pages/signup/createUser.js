import styled from "styled-components";

export const CreateUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  height: 100dvh;
  width: 100%;
`;

export const CreateUserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 350px;
  background-color: #fff;
  padding: 24px;
  gap: 10px;
`;

export const CreateUserTitle = styled.h3`
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 20px;
  text-align: center;
`;