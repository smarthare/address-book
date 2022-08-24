import Sidebar from "./components/Sidebar";
import AddressBook from "./pages/AddressBook";

import { AddressProvider } from "contexts/AddressContext";

function App() {
  return (
    <AddressProvider>
      <Sidebar />
      <AddressBook />
    </AddressProvider>
  );
}

export default App;
