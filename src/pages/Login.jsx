import React, { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import Button from "../components/Button";
import useAuth from "../hooks/use-Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-[#2d3439]">
      <PageNav className={`pt-12 ${styles.nav}`} />
      <div className="w-[90%] mx-auto flex justify-center items-center min-h-[500px] xl:min-h-[700px] ">
        <form
          className="bg-[#42484d] w-full md:w-[50%] lg:w-[40%] xl:w-[35%] p-6 lg:p-12 space-y-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1">
            <label className="text-white font-bold text-sm lg:text-lg">
              Email:
            </label>
            <br />
            <input
              className="w-full outline-none px-3 lg:px-6 lg:py-2 rounded-lg"
              type="text"
              placeholder="fahimarefin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-white font-bold text-sm lg:text-lg">
              Password:
            </label>
            <br />
            <input
              className="w-full outline-none px-3 lg:px-6 lg:py-2 rounded-lg"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button
              success
              className="shadow-none p-1 lg:py-2 lg:px-4 text-center rounded-lg text-[#2d3439] font-semibold"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
