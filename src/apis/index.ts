import axios from "axios";

export const getAddress = (postcode: string) =>
  axios
    .get(
      `https://api.getaddress.io/find/${postcode}?api-key=UF5NEc3wP06DZ1N9nswr9w36305`
    )
    .then((result) => result.data)
    .catch((result) => result);
