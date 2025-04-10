import {jwtDecode} from "jwt-decode"
import { useEffect } from "react"
import { useNavigate } from "react-router"

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const now = Date.now() / 1000; // current time in seconds
  
          if (decoded.exp < now) {
            // Token expired
            localStorage.removeItem("token");
            localStorage.removeItem("username")
            navigate("/login");
          }
        } catch (err) {
          // Invalid token
          localStorage.removeItem("token");
          localStorage.removeItem("username")
          navigate("/login");
        }
      } else {
        // No token
        navigate("/login");
      }
    }, [navigate]);
  
    return children;
  };
  
  export default AuthGuard;