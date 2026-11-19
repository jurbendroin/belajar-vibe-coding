import { describe, expect, it } from "bun:test";
import { app } from "../src/server";

describe("Elysia Server Endpoints", () => {
  it("GET /health should return status ok", async () => {
    const response = await app.handle(new Request("http://localhost/health"));
    expect(response.status).toBe(200);

    const body = (await response.json()) as { status: string; timestamp: string };
    expect(body.status).toBe("ok");
    expect(body.timestamp).toBeDefined();
  });

  it("GET / should return welcome message", async () => {
    const response = await app.handle(new Request("http://localhost/"));
    expect(response.status).toBe(200);

    const body = (await response.json()) as { message: string };
    expect(body.message).toContain("Welcome");
  });
});
