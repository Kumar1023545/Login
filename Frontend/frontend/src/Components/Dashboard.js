// import { useContext } from "react"; 
// import { AuthContext } from "./AuthContext";
// import { Navigate } from "react-router-dom"; 

function Dashboard() {
  // const { token, loading } = useContext(AuthContext);
  // if (loading) {
  //   return null;
  // }

  // if (!token) {
  //   return <Navigate to={'/login'} replace />  }

  return <h1>Dashboard: Protected Content Here</h1>;
}

export default Dashboard;

// import { useEffect } from 'react';

// const Dashboard = () => {
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:3001/api/protected", {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log("Protected data:", data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return <div>Welcome to your Dashboard!</div>;
// };

// export default Dashboard;
