import type { FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";

const PlayerForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="fixed z-10 w-screen h-screen inset-100 bg-black/20 backdrop-blur-sm flex items-center justify-center">
      <form className="max-w-sm w-full bg-white p-5" onSubmit={handleSubmit}>
        <p className="text-lg text-center mb-3">Create your profile</p>
        <label className="block mb-2">Enter your name</label>
        <Input placeholder="Ex: Jenesh" required />

        <Button fullWidth>Create</Button>
      </form>
    </div>
  );
};

export default PlayerForm;
