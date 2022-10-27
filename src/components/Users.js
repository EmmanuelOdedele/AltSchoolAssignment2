import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

function Users() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch("https://randomuser.me/api/?results=100");
        const { results } = await res.json();
        setData(results);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // let page = 1;
  // const PER_PAGE = 10;
  // const total = data?.result?.legth;
  // const pages = Math.ceil(total / PER_PAGE);
  // const skip = page * PER_PAGE - PER_PAGE;

  // console.log(data);

  return (
    <section>
      <Navigation />

      {/* <ol>
        {data.slice(skip, skip + PER_PAGE).map((user, index) => {
          const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(" ", "")}>
              {`${index + 1}, ${name}`}
            </li>
          );
        })}
      </ol> */}

      <h1>Users</h1>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {data.map((user, index) => (
            <li key={index}>
              {user.name.title} {user.name.first} {user.name.last}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Users;

// const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios("https://randomuser.me/api/?results=100").then((response) => {
//       setPosts(response.data);
//     });
//   }, []);
//   console.log(posts);

//   return (
//     <section>
//       <Navigation />
//       <h1>Users</h1>
//     </section>
//   );

