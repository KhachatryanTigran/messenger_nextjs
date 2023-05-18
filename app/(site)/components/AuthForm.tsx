"use client";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Button } from "@/app/components/Button";
import Input from "@/app/components/inputs/input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
type Inputs = {
  name: string;
  email: string;
  password: string;
};
type Variant = "LOGIN" | "REGISTER";
function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isloading, setIsloading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    if (variant === "LOGIN") {
      console.log(data, "LOGIN");
    }
    if (variant === "REGISTER") {
      console.log(data, "REGISTER");
    }
  };

  const socialAction = (action: string) => {
    setIsloading(true);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 dhadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              label="Name"
              register={register}
              id="name"
              errors={{ errors }}
              disabled={isloading}
            />
          )}{" "}
          <Input
            label="Email Address"
            type="email"
            register={register}
            id="email"
            errors={{ errors }}
            disabled={isloading}
          />
          <Input
            label="Password"
            type="password"
            register={register}
            id="password"
            errors={{ errors }}
            disabled={isloading}
          />
          <div>
            <Button disabled={isloading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              onClick={() => socialAction("github")}
              icon={BsGithub}
            />
            <AuthSocialButton
              onClick={() => socialAction("google")}
              icon={BsGoogle}
            />
          </div>
        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
