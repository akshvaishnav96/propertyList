"use client";

import { useState } from "react";
import React from "react";
import InputElem from "../../InputElem";
import InputLable from "../../InputLable";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { v4 as uuidv4 } from "uuid";
import formSubmitHandler from "@/Handlers/FormSubmitHandler";

export default function Register({ action }) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const inputElem = [
    {
      lablefor: "username",
      labletext: "username",
      inputType: "text",
      id: "username",
      name: "username",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
      value: username,
      func: setUserName,
    },
    {
      lablefor: "email",
      labletext: "email",
      inputType: "email",
      id: "email",
      name: "email",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
      value: email,
      func: setEmail,
    },
    {
      lablefor: "mobile",
      labletext: "mobile",
      inputType: "tel",
      id: "mobile",
      name: "mobile",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
      value: mobile,
      func: setMobile,
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

  return (
    <form
      onSubmit={(e) =>
        formSubmitHandler(e, "/api/register", "POST", {
          email,
          mobile,
          username,
          password,
        })
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
      <FormSubmitBtn text={"Register"} />
    </form>
  );
}
