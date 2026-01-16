import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function CountdownHome() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/finish");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "sans-serif" }}>
      <h1>Redirecting in...</h1>
      <h2 style={{ fontSize: "5rem", color: "#0b74ff" }}>{count}</h2>
    </div>
  );
}

const SuccessPage = () => (
  <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "sans-serif" }}>
    <h1>Reroute Successful!</h1>
    <p>You have reached the destination path.</p>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CountdownHome />} />
      <Route path="/finish" element={<SuccessPage />} />
    </Routes>
  );
}