import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { trpc } from "../utils/trpc";
import Button from "./Button";
import Input from "./Input";

const PlayerForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");

  const { mutate: createPlayer, isLoading: isPlayerLoading } =
    trpc.useMutation("createPlayer");
  const { mutate: createGame, isLoading: isGameLoading } =
    trpc.useMutation("createGame");
  const { mutate: updateGame, isLoading: isGameUpdating } =
    trpc.useMutation("addPlayerInGame");

  const isLoading = isPlayerLoading || isGameLoading || isGameUpdating;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createPlayer(
      { name },
      {
        onSuccess(data) {
          if (router.pathname === "/") {
            createGame({ playerId: data.id });
          } else if (id) {
            updateGame({ gameId: +id, playerId: data.id });
          }
        },
      }
    );
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

        <Button disabled={isLoading} fullWidth isSpinning={isLoading}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default PlayerForm;
