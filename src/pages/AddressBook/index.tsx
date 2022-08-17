import Address from "../../components/Address";

import { Container } from "./style";

const AddressBook = () => {
  return (
    <Container>
      <h1>Address Book</h1>
      <p>Welcome back to your address book.</p>

      <Address />
    </Container>
  );
};

export default AddressBook;
