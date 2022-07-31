import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import prisma from "../../../utils/prisma";

export const appRouter = trpc
  .router()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve: ({ input }) => ({
      greeting: `hello ${input?.text ?? "world"}`,
    }),
  })
  .mutation("createPlayer", {
    input: z.object({
      name: z.string(),
    }),
    resolve: async ({ input }) => {
      return await prisma.player.create({
        data: { name: input!.name },
      });
    },
  })
  .mutation("createGame", {
    input: z.object({
      playerId: z.number(),
    }),
    resolve: async ({ input }) => {
      const res = await fetch(
        "https://api.quotable.io/random?minLength=100&maxLength=200"
      );
      const data = await res.json();

      const newGame = await prisma.game.create({
        data: {
          hostId: input.playerId,
          words: data.content,
        },
      });

      await prisma.player.update({
        where: { id: input.playerId },
        data: {
          gameId: newGame.id,
        },
      });

      return newGame;
    },
  })
  .mutation("addPlayerInGame", {
    input: z.object({
      gameId: z.number(),
      playerId: z.number(),
    }),
    resolve: async ({ input }) => {
      const { gameId, playerId } = input;
      return await prisma.player.update({
        where: { id: playerId },
        data: {
          gameId,
        },
      });
    },
  });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
