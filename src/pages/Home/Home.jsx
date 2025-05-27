import Button from "../../components/Button/Button";
import { useAppContext } from "../../context/appContext";
import { useToastContext } from "../../context/toastContext";
import { HomeContainer, ButtonContainer } from "../../styles/pages/home/home";

export default function Home() {
  const { logout } = useAppContext();
  const { showToast } = useToastContext();

  const handleLogout = () => {
    logout();
    showToast("You have been logged out successfully", "success");
  }

  return (
    <HomeContainer>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <ButtonContainer>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};
