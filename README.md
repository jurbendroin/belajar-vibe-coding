# Project: Bun + ElysiaJS + Drizzle ORM + MySQL

A modern, lightweight, high-performance web service built with [Bun](https://bun.sh/), [ElysiaJS](https://elysiajs.com/), [Drizzle ORM](https://orm.drizzle.team/), and MySQL.

## Prerequisites
- [Bun](https://bun.sh/) (v1.0+)
- MySQL Server

## Setup

1. **Clone repository & navigate to project folder:**
   ```bash
   cd belajar-vibe-coding
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Configure environment:**
   Copy `.env.example` to `.env` and fill in your MySQL credentials:
   ```bash
   cp .env.example .env
   ```

4. **Database Migrations (Optional / Drizzle Kit):**
   Push schema changes directly or generate migration files:
   ```bash
   bun run db:push
   # or
   bun run db:generate
   ```

## Running the Application

- **Development mode (with auto-reload):**
  ```bash
  bun run dev
  ```
- **Production start:**
  ```bash
  bun run start
  ```
- **Run tests:**
  ```bash
  bun test
  ```
- **Build production bundle:**
  ```bash
  bun run build
  ```

## Available Endpoints

- `GET /` - Root status message
- `GET /health` - Health check status
- `GET /users` - List users via Drizzle ORM from MySQL
