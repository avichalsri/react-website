import { AppContainer } from "./App.style";
import InputCard from "./components/InputCard/InputCard";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <AppContainer>
      <Navbar />
      <InputCard />
    </AppContainer>
  );
}

export default App;
