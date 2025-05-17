import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
