import axios, { AxiosError } from "axios";

export const getAddress = (postcode: string) =>
  axios
    .get(
      `https://api.getaddress.io/find/${postcode}?api-key=${process.env.REACT_APP_API_KEY}&expand=true`
    )
    .then(({ data }) => data.addresses)
    .catch(({ message }: AxiosError) => {
      console.log(message);
      return false;
    });
