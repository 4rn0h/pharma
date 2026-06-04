# Pharma Redistribution Platform - Project Guidelines

## Overview
Enterprise-grade web application for pharmaceutical redistribution. Licensed intermediary sourcing surplus inventory and reselling to healthcare facilities.

## Tech Stack
- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Backend:** NestJS (Node.js), TypeScript.
- **Database:** PostgreSQL with Prisma ORM.
- **Auth:** RBAC (Super Admin, Operations, Sales, Warehouse, Compliance, Finance, Buyer, Supplier, Logistics, Auditor).

## Standards
- **Naming:** CamelCase for functions/variables, PascalCase for components/classes.
- **Architecture:** Modular architecture in NestJS, Component-based architecture in Next.js.
- **Validation:** Zod for schema validation.
- **API:** RESTful API with Swagger documentation.
- **Compliance:** All transactions must be logged in an immutable audit trail.
- **Testing:** Jest for unit/integration tests, Playwright for E2E.

## File Structure (Planned)
- `/frontend`: Next.js application
- `/backend`: NestJS application
- `/shared`: Common types and validation schemas
- `/infrastructure`: Docker, CI/CD, and deployment scripts
