import { Form } from "@remix-run/react";

export default function Signup() {
  return (
    <div className="m-auto w-2/5 h-96  flex flex-col p-5 bg-blue-300 rounded-md justify-center items-center shadow-xl">
      <h1 className="mb-10 p-4">Welcome!</h1>
      <Form method="post" className="flex flex-col w-4/5 gap-10">
        <input
          type="email"
          name="email"
          placeholder="email"
          className="border-b-2 bg-blue-300 focus:outline-none focus:border-red-300"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border-b-2 bg-blue-300 focus:outline-none focus:border-red-300"
        />
        <button
          type="submit"
          className="bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white hover:outline-none hover:ring-2 hover:ring-white"
        >
          Sign Up
        </button>
      </Form>
    </div>
  );
}
