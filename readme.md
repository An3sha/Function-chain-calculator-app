# Function Chain Calculator

A React-based web application that allows users to create and visualize a chain of mathematical functions, where the output of one function serves as the input for the next.

## Features

- Chain of 5 interconnected mathematical functions
- Real-time calculation and updates
- Visual representation of function connections
- Support for basic arithmetic operations and exponents
- Fixed execution order: 1 → 2 → 4 → 5 → 3

## Demo

- <img src="./src/utils/img.png" width="30%">

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite


## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter an initial value in the "Initial value of x" input
2. Modify function equations using basic arithmetic operators:
   - Addition: `+`
   - Subtraction: `-`
   - Multiplication: `*`
   - Division: `/`
   - Exponents: `^`
3. The result will automatically update and flow through the chain

## Function Chain Order

The functions are executed in the following order:
1. Function 1 (receives initial x value)
2. Function 2 (receives output from Function 1)
3. Function 4 (receives output from Function 2)
4. Function 5 (receives output from Function 4)
5. Function 3 (receives output from Function 5 and produces final result)

## Development Guidelines

- Each component is focused on a single responsibility
- State management is handled through custom hooks
- Utility functions are separated for better maintainability
- TypeScript interfaces ensure type safety
- Constants are centralized in the config folder



