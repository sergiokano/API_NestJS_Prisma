<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# API Project Documentation

This document provides a comprehensive guide to installing, running, and understanding the functionalities of our API project, which leverages the power of NestJS and Prisma for building efficient and scalable server-side applications.

## Technologies Used

- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript, making database access easy with an auto-generated query builder.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Swagger](https://swagger.io/)**: An open-source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful web services.
![image](https://github.com/user-attachments/assets/400c820d-c17b-4daa-8eb7-2715f5b7e68e)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete functionalities for product entities.
- **API Documentation**: Automatically generated API documentation using Swagger, accessible via `/api`.
- **Database Integration**: Utilizes Prisma as an ORM for seamless database operations.
- **Validation and Error Handling**: Robust validation and error handling mechanisms for reliable API endpoints.

## Getting Started

### Prerequisites

Ensure you have Node.js (>= 12.x) and npm installed on your system. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <project-name>
```

3. Install the dependencies:
   
```bash
npm install
```

4. Running the project
- Development Mode:
   
```bash
npm run start:dev
```

### API Documentation
After starting the application, the API documentation can be accessed at /api endpoint. This documentation provides a detailed overview of all the available API endpoints, their request parameters, and response formats. Is possible to try the endpoints from there.
```bash
http://localhost:4000/api
```
