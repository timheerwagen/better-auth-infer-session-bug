import { customSessionClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from ".";

export const authClient = createAuthClient({
  basePath: "/api/internal/auth",
  plugins: [customSessionClient<typeof auth>()],
});

export const useSession = authClient.useSession;

export type ClientSession = typeof authClient.$Infer.Session;

const date = new Date();

const fakeSession: ClientSession = {
  session: {
    createdAt: date,
    expiresAt: date,
    id: "1",
    token: "1",
    updatedAt: date,
    userId: "1",
  },
  user: { some: "thing" },
};
