import { RoutesPath } from "@/app/providers/router/config/routeConfig";
import { Button, Input } from "@heroui/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full md:w-[400px] flex flex-col gap-6 px-10">
        <h1 className="text-3xl font-bold text-[#4E4F50]">Sign in</h1>

        <form className="flex flex-col gap-4">
          <Input name="email" size="sm" label="Email" type="email" />

          <Input name="password" size="sm" label="Password" type="password" />

          <Button type="submit">Sign in</Button>
        </form>

        <p className="text-sm">
          New User?{" "}
          <Link to={RoutesPath.register} className="text-[#647C90]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
