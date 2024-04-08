


<div align="center">
	<img src="https://camo.githubusercontent.com/0c08043e4dc11c12f036cbec77e502de5f352b225028b1f45923bf3e5ab40853/68747470733a2f2f692e6962622e636f2f6d3433623779592f37626235363438662d316334372d343161332d613037622d3566396637326538663439372e6a7067"/>
</div>

[Design Document](https://antkeep.gitbook.io/game-design-doc)


## Tech Stack
- NX Integrated Mono Repo
- React, Typescript
- Excalibur.js


## Contribution Guidelines

To contribute to this project, please follow these steps:

1. **Clone the repository** - Clone the main repository to your local machine.
2. **Create a Feature Branch** - Create a branch from the `develop` branch for each new feature or fix. Name your branch `feature/<your-feature-name>`.
3. **Commit your changes** - Make your changes and commit them with clear, concise commit messages. Follow the git flow for managing your feature branch, illustrated below.
4. **Push to your branch** - Push your branch and changes back to the main repository.
5. **Open a Pull Request (PR)** - Submit a pull request from your feature branch to the `develop` branch of the main repository.
6. **Code Review** - Await code review and address any comments to improve the quality of your code.
7. **Merge the PR** - Once your PR is approved, it can be merged into the `develop` branch by a repository maintainer.

### Coding Guidelines

In this project, we adhere to the principles of functional programming and ES6 standards. Ensure your contributions reflect the following guidelines:

- **Functional Programming**: Utilize functional programming styles. Avoid side-effects in your functions, use pure functions wherever possible, and structure your code for immutability.
- **ES6 Standards**: Use ES6 syntax for more concise and clean code. This includes using `let` and `const` for variable declarations, arrow functions, template literals, destructuring, and the spread operator.
- **SOLID Principles**:
  - **Single Responsibility**: Each module or function should have responsibility over a single part of the functionality provided by the software.
  - **Open/Closed**: Modules should be open for extension but closed for modification.
  - **Liskov Substitution**: Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program.
  - **Interface Segregation**: Many client-specific interfaces are better than one general-purpose interface.
  - **Dependency Inversion**: Depend on abstractions, not on concretions.
- **DRY Principle**: Do not repeat yourself. Ensure that you don’t have duplicate code; abstract and reuse common logic where feasible.

### Feature Branch Workflow (Mermaid Diagram)

```mermaid
graph TD;
    A[Develop Branch] --> B[Create Feature Branch];
    B --> C{Work on Feature};
    C --> D[Commit Changes];
    D --> E[Push to Feature Branch];
    E --> F[Open Pull Request];
    F --> G[Code Review & Adjustments];
    G --> H{PR Approved?};
    H -->|Yes| I[Merge PR to Develop];
    H -->|No| C;
