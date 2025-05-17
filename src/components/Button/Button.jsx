import { ButtonContainer } from "../../styles/components/button/button";

export default function Button({ children, ...props }) {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  );
}
