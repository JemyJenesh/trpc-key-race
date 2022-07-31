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
  });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
