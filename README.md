


<div align="center">
	<img src="https://camo.githubusercontent.com/0c08043e4dc11c12f036cbec77e502de5f352b225028b1f45923bf3e5ab40853/68747470733a2f2f692e6962622e636f2f6d3433623779592f37626235363438662d316334372d343161332d613037622d3566396637326538663439372e6a7067"/>
</div>

[Design Document](https://antkeep.gitbook.io/game-design-doc)


## Tech Stack
- NX Integrated Mono Repo
- React, Typescript
- Excalibur.js


## Project Structure 
Given the context of creating a file tree for an Entity Component System (ECS) within an NX MonoRepo environment, and utilizing Excalibur.js for game development with TypeScript, we will adopt a functional programming paradigm. We’ll structure this within an NX Shell library organization, adhering to principles of clean architecture, DRY (Don't Repeat Yourself), and SOLID principles, albeit adjusted for functional programming as opposed to OOP (Object-Oriented Programming).

Project Structure
The NX standalone configuration allows for a modular approach, supporting multiple projects within a single repository. For an ECS system using Excalibur.js, the structure will need to accommodate components, systems, entities, and possibly utility libraries for the game logic, all while ensuring a clean separation of concerns.

File Tree
Below is a proposed file tree, considering a clean architecture and functional programming principles:


```
/libs
  /ecs-core
    /src
      /lib
        /components
          index.ts
          transform.ts
          renderable.ts
        /systems
          index.ts
          movementSystem.ts
          renderingSystem.ts
        /entities
          index.ts
          entityFactory.ts
        /utils
          index.ts
      index.ts
  /game-logic
    /src
      /lib
        /levels
          index.ts
          level1.ts
        /actors
          index.ts
          player.ts
          enemy.ts
        /hooks
          index.ts
          useGameLoop.ts
        /state
          index.ts
          gameState.ts
      index.ts
  /ui-components
    /src
      /lib
        /buttons
          index.ts
        /overlays
          index.ts
          gameOverOverlay.ts
      index.ts
/game-app
  /src
    main.ts
```


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


### Clean Architecture and SOLID Principles in Functional Programming
While SOLID principles are traditionally OOP concepts, their essence can be adapted to functional programming:

Single Responsibility: Functions and modules should have a single responsibility. This is naturally encouraged in functional programming by composing complex operations from smaller, reusable functions.
Open/Closed: Functions are open for extension but closed for modification. This can be achieved by designing functions that accept callbacks or higher-order functions for extensions.
Liskov Substitution: In a functional context, this translates to ensuring that function signatures are consistent and predictable, allowing functions to be replaced as needed without breaking the system.
Interface Segregation and Dependency Inversion: While interfaces and dependency inversion are OOP constructs, the essence is to depend on abstractions rather than concrete implementations. This can be achieved by using function signatures and higher-order functions.

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
