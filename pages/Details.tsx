import React from "react";
import Link from "next/link";

// Complete dynamic routes
// 1 ex
// const people = [
//   { v: "car", name: "shadab" },
//   { v: "bus", name: "bushra" },
//   { v: "train", name: "zikra" },
//   { v: "aeroplane", name: "aidan" },
// ];

// 2 ex
// fetch data

function Details({ people }: any) {
  return (
    <div style={{ display: "flex", margin: "50px" }}>
      {people.map((p: any, i: number) => {
        return (
          <div key={i}>
            <Link as={`/${p.email}/${p.name}`} href='/[bmw]/[person]'>
              <a>Navigate to {p.name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

Details.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { people: data };
};

export default Details;
