import axios, { AxiosResponse } from "axios";

// API return array of objects
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
// 	"street": "Kulas Light",
// 	"suite": "Apt. 556",
// 	"city": "Gwenborough",
// 	"zipcode": "92998-3874",
// 	"geo": {
// 	  "lat": "-37.3159",
// 	  "lng": "81.1496"
// 	}
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
// 	"name": "Romaguera-Crona",
// 	"catchPhrase": "Multi-layered client-server neural-net",
// 	"bs": "harness real-time e-markets"
//   }
// }

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.group("generics task 1");
fetchData<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

fetchData<User[]>("https://jsonplaceholder.typicode.com/users22")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

console.groupEnd();
