import { RoutesPath } from "@/app/providers/router/config/routeConfig";
import { Button, Input } from "@heroui/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[300px] flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-700">Sign up</h1>

        <form className="flex flex-col gap-4">
          <Input name="email" size="sm" label="Email" type="email" />

          <Input name="password" size="sm" label="Password" type="password" />

          <Button type="submit">Sign up</Button>
        </form>

        <p className="text-sm">
          Do you have account?{" "}
          <Link to={RoutesPath.register} className="text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
