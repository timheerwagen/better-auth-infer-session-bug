import { betterAuth } from "better-auth";
import { customSession } from "better-auth/plugins";

export const auth = betterAuth({
  basePath: "/api/internal/auth",
  plugins: [
    customSession(async ({ session }) => {
      const ownUser = { some: "thing" } as const;

      return {
        user: ownUser,
        session,
      };
    }),
  ],
});

export type ServerSession = typeof auth.$Infer.Session;

const date = new Date();

const fakeSession: ServerSession = {
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

// It doesn't work anymore in the latest version of Better-Auth (1.3.16).
export type WorkaroundServerSession = Awaited<
  ReturnType<typeof auth.api.getSession>
>;

const workaroundSession: WorkaroundServerSession = {
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
