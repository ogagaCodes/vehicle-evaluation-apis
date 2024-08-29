# Autochek Vehicle Valuation & Loan Application API

This project is a backend API developed for Autochek's vehicle valuation and financing services. The API provides endpoints for vehicle data ingestion, valuation model integration, loan application processing, and more.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Migrations](#database-migrations)
- [Running the Application](#running-the-application)
- [Database Seeding](#database-seeding)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

Autochek is a leading automotive technology company providing end-to-end solutions for vehicle financing and management. This project aims to support Autochek's mission by offering a robust API that handles vehicle data ingestion, valuation, and loan application processing.

## Features

- **Vehicle Data Ingestion:** Capture vehicle details like VIN, make, model, year, and mileage.
- **Vehicle Valuation:** Integrate with external services to provide estimated vehicle values.
- **Loan Application Processing:** Submit and track loan applications, and update loan status.
- **Error Handling:** Robust error handling and logging to ensure smooth operation.
- **Security:** Implements data security and privacy measures.
- **API Documentation:** Detailed API documentation using Swagger.
- **In-Memory Database:** Uses SQLite for a lightweight, in-memory database.

## Technologies

- **[NestJS](https://nestjs.com/):** A progressive Node.js framework for building efficient and scalable server-side applications.
- **[TypeORM](https://typeorm.io/):** An ORM that can run in Node.js, supporting multiple databases.
- **[SQLite](https://www.sqlite.org/index.html):** A lightweight, in-memory database for development and testing.
- **[TypeScript](https://www.typescriptlang.org/):** A statically typed superset of JavaScript that compiles to plain JavaScript.
- **[Swagger](https://swagger.io/):** API documentation and testing tool.
- **[Class-validator](https://github.com/typestack/class-validator):** A library for validating class properties in TypeScript.
- **[Jest](https://jestjs.io/):** A delightful JavaScript Testing Framework with a focus on simplicity.
- **[GitHub Actions](https://github.com/features/actions):** CI/CD tool for automated testing, linting, and deployment.
- **[Docker](https://www.docker.com/):** Containerization platform for building and managing applications.
- **[Kubernetes (K8s)](https://kubernetes.io/):** Container orchestration system for automating application deployment.

## Installation

### Prerequisites

- Node.js v14 or above
- Yarn or npm
- Docker (optional, for containerization)
- Kubernetes (optional, for deployment)

### Clone the Repository

```bash
git clone https://github.com/autochek/vehicle-valuation-loan-api.git
cd vehicle-valuation-loan-api

run the following command
yarn install
yarn typeorm migration:run
yarn build
yarn start:prod
yarn seed
visit http://localhost:3000/api-docs


```

