import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import UserRecord from "./UserRecord";
import Pagination from "./Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <section>
      <Navigation />
      <h1>Users</h1>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserRecord data={currentRecords}/>
      )}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
