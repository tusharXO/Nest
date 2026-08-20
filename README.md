# NestJS Projects

This repository contains two NestJS projects built while learning and practicing backend development with TypeScript.

## Projects

### `nest-basic`

A standalone NestJS REST API that demonstrates common backend patterns, including:

- Profile CRUD operations
- MongoDB integration with Mongoose
- DTO validation and data transformation
- API-key middleware
- Role-based authorization guard
- Logging and response transformation interceptor
- Unit and end-to-end tests

### `uber-service`

A NestJS monorepo prototype for an Uber-style backend. It currently contains separate applications for:

- `rider`: Provides rider data through a NestJS microservice message pattern.
- `logging`: Stores rider coordinates in MongoDB and communicates with the rider service through NestJS microservices.

The project also includes Docker Compose configuration for local supporting services.

## Technology Stack

- NestJS
- TypeScript
- MongoDB and Mongoose
- NestJS microservices
- Docker Compose
- Jest and Supertest

## Getting Started

Each project has its own dependencies and scripts. Run commands from the relevant project directory.

### Basic project

```bash
cd nest-basic
npm install
npm run start:dev
```

Run its tests with:

```bash
npm test
npm run test:e2e
```

### Uber service

```bash
cd uber-service
npm install
docker compose up -d
npm run start:dev
```

Run its tests with:

```bash
npm test
npm run test:e2e
```

## Repository Structure

```text
Nest/
├── nest-basic/       # Standalone REST API practice project
└── uber-service/     # Uber-style microservices prototype
```

