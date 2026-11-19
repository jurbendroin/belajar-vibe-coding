import { Elysia } from "elysia";
import { db, schema } from "./db";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia + Bun + Drizzle + MySQL API",
  }))
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .group("/users", (usersApp) =>
    usersApp
      .get("/", async () => {
        try {
          const allUsers = await db.select().from(schema.users);
          return { data: allUsers };
        } catch (error) {
          return {
            error: "Database error or connection not established",
            details: error instanceof Error ? error.message : String(error),
          };
        }
      })
  );

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`🦊 Elysia server is running at http://localhost:${port}`);
  });
}
