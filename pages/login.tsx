import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api/my-api";

type ValidForm = {
  username: string;
  code: string;
};

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ValidForm>();

  const usernameRef = useRef<string | null>(null);
  usernameRef.current = watch("username");

  const codeRef = useRef<string | null>(null);
  codeRef.current = watch("code");

  useEffect(() => {
    if (sessionStorage.getItem("code")) {
      router.push("/quizbooks?week=1");
    }
  }, [router]);

  const onLoginValid: SubmitHandler<ValidForm> = async (data) => {
    const { username, code } = data;
    const loginBody = {
      username,
      code,
    };
    await api
      .post("/login", loginBody)
      .then((res) => {
        sessionStorage.setItem("code", code);
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center pt-20 gap-10">
      <h1 className="font-summer text-4xl">깜지.</h1>
      <form
        onSubmit={handleSubmit(onLoginValid)}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label className="flex flex-col">
            이름
            <input
              type="text"
              {...register("username", {
                required: true,
                validate: (value) => value === usernameRef.current,
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          {errors.username && errors.username.type === "required" && (
            <em>이름을 입력해주세요.</em>
          )}
          <label className="flex flex-col">
            코드
            <input
              type="password"
              {...register("code", {
                required: true,
                minLength: 4,
                maxLength: 4,
                validate: (value) => value === codeRef.current,
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.code && errors.code.type === "required" && (
              <em>코드를 입력해주세요.</em>
            )}
            {errors.code &&
              (errors.code.type === "maxLength" ||
                errors.code.type === "minLength") && (
                <em>코드는 4자여야 합니다.</em>
              )}
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#5c3cde] hover:bg-[#4026ab] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
