# OrangeHRM Web Test Automation Framework

## Project Overview

A comprehensive test automation framework built with Cypress and TypeScript, implementing the Page Object Model pattern for robust and maintainable tests.

## Tech Stack

- **Cypress**
- **TypeScript**
- **Node.js**

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── login.spec.ts
│   ├── support/
│   │   ├── factory/
│   │   │   ├── BaseElement.ts
│   │   │   └── elements/
│   │   │       ├── Button.ts
│   │   │       └── Input.ts
│   │   ├── pages/
│   │   │   └── LoginPage.ts
│   │   └── data/
│   │       └── TestData.ts
```

## Features

- Page Object Model implementation
- Custom element factory pattern
- Dynamic test data generation
- Role-based testing capabilities
- Comprehensive login flow validation

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Installation

Install the project dependencies:

```bash
npm install
```

## Running Tests

To run the tests, you can use the following commands:

To open the Cypress graphical interface:

```bash
npm run cypress:open
```

To run the tests in headless mode:

```bash
npm run cypress:run
```

## Test Scenarios

- Login with valid credentials
- Validation of invalid credentials
- Dynamic user authentication
- Role-based access testing
- Form field validation

## Best Practices

- Modular and reusable components
- Strong typing with TypeScript
- Clean code architecture
- Comprehensive logging
- Data-driven testing approach





## License

This project is licensed under the [MIT License](LICENSE).
