import { AddressProvider } from "contexts/AddressContext";
import Sidebar from "./components/Sidebar";
import AddressBook from "./pages/AddressBook";

function App() {
  return (
    <AddressProvider>
      <Sidebar />
      <AddressBook />
    </AddressProvider>
  );
}

export default App;
