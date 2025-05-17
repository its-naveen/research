import { useAppContext } from "../../context/appContext";

export default function Home() {
  const { logout } = useAppContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
