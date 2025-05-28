import Button from "../../components/Button/Button";
import { ConfirmationContainer, ConfirmationHeader, ImageIcon, Subtitle, Title } from "../../styles/pages/signup/confirmation";
import UserTickIcon from "../../assets/icons/user-tick.svg";

export default function Confirmation({ handleNavigation }) {
  return (
    <ConfirmationContainer>
      <ConfirmationHeader>
        <ImageIcon src={UserTickIcon} alt="icon" />
        <Title>Account created successfully!</Title>
        <Subtitle>
          A confirmation email has been sent to your registered email address.
          Please check your inbox and follow the instructions to complete your
          registration.
        </Subtitle>
        <Button
          onClick={() => handleNavigation('login')}
        >Back to login</Button>
      </ConfirmationHeader>
    </ConfirmationContainer>
  );
}
