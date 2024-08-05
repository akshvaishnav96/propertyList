"use client";
import React, { useEffect, useState } from "react";
import InputElem from "../../InputElem";
import InputLable from "../../InputLable";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import formSubmitHandler from "@/Handlers/FormSubmitHandler";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const inputElem = [
    {
      lablefor: "username",
      labletext: "username",
      inputType: "text",
      id: "username",
      name: "username",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
      value: email,
      func: setEmail,
    },
    {
      lablefor: "password",
      labletext: "password",
      inputType: "password",
      id: "password",
      name: "password",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
      value: password,
      func: setPassword,
    },
  ];

  useEffect(() => {
    if (data.status) {
      router.push(data.redirect);
    }
  }, [data]);

  return (
    <form
      onSubmit={async (e) =>
        setData(
          await formSubmitHandler(e, "/api/login", "POST", {
            email,
            password,
          }),
          setEmail(""),
          setPassword("")
        )
      }
      method="POST"
    >
      {inputElem.map((item, index) => (
        <div className="mb-4" key={index}>
          <InputLable lablehtmlFor={item.lablefor} text={item.labletext} />
          <InputElem
            type={item.inputType}
            id={item.id}
            name={item.name}
            className={item.className}
            value={item.value}
            func={item.func}
          />
        </div>
      ))}

      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>

      <FormSubmitBtn text={"Login"} />
    </form>
  );
}
