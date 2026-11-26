// import { useState } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }



const mydetails = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  },
  img: "https://example.com/profile.jpg"
};

export default function App() {
  return (
    <section id="center">
      <img src={mydetails.img} style={{ width: "10%" }} alt="Profile" />
      <h1>{mydetails.name}</h1>
      <p>Age: {mydetails.age}</p>
      <p>Hobbies: {mydetails.hobbies.join(", ")}</p>
      <p>
        Address: {mydetails.address.street}, {mydetails.address.city}, {mydetails.address.country}
      </p>
    </section>
  );
}