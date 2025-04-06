# Social Network API

A simple social network API built with Node.js, Express, PostgreSQL, and Jest for testing. Database migrations are handled by `node-pg-migrate`.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (v12 or higher)

## Installation

```bash
git clone https://github.com/iamraihan/basic-express-postgres-api.git
cd social-repo
npm install
```

## Environment Setup

Create a `.env` file in the root directory (or use your terminal to set environment variables): not use for this example project.

```
DATABASE_URL=postgres://your-username@localhost:5432/your-database-name
```

Replace `your-username` and `your-database-name` with your actual PostgreSQL credentials.

## Running Migrations

To run the database migration (create tables, etc.), use:

```bash
DATABASE_URL=postgres://your-username@localhost:5432/your-database-name npm run migrate up
```

To roll back the last migration, use:

```bash
DATABASE_URL=postgres://your-username@localhost:5432/your-database-name npm run migrate down
```

## Starting the Server

```bash
npm start
```

Server will run on `http://localhost:3005` by default.

## Running Tests

```bash
npm run test
```

Runs the Jest test suite with Supertest for route testing.

## Project Structure

```
├── app.js               # Express app config
├── server.js            # Entry point to start the server
├── pool.js              # PostgreSQL connection pool
├── repos/               # Repository layer for DB access
├── routes/              # Express route handlers
├── migrations/          # Migration files for node-pg-migrate
└── test/                # Jest tests
```
