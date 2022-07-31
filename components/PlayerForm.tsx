import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { trpc } from "../utils/trpc";
import Button from "./Button";
import Input from "./Input";

const PlayerForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const mutation = trpc.useMutation("createPlayer");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({ name });

    if (router.pathname === "/") {
      console.log("Create player then create a new game");
    } else {
      console.log("Create player then join the id game");
    }
  };

  return (
    <div className="fixed z-10 w-screen h-screen inset-100 bg-black/20 backdrop-blur-sm flex items-center justify-center">
      <form className="max-w-sm w-full bg-white p-5" onSubmit={handleSubmit}>
        <p className="text-lg text-center mb-3">Create your profile</p>
        <label className="block mb-2">Enter your name</label>
        <Input
          placeholder="Ex: Jenesh"
          value={name}
          onChange={handleChange}
          required
        />

        <Button fullWidth>Create</Button>
      </form>
    </div>
  );
};

export default PlayerForm;
