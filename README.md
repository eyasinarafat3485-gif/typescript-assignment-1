# TypeScript & OOP Assignment 1

## Project Overview
This repository contains solutions for the **Problem Solving with TypeScript & OOP** assignment covering core concepts from Modules 1, 2, and 3: basic types, optional/default/rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises, and Object-Oriented Programming (OOP).

---

## File Structure
```text
├── solutions.ts
├── type-vs-interface.md
├── type-narrowing.md
└── README.md
```

---

## Deliverables & Breakdown

### 1. Problem Solving (solutions.ts - 50 Marks)
All 8 problems must be written inside `solutions.ts`:
- **Problem 1 (`multiplyValue`):** Function with an optional parameter, handling multiplication by 0 correctly and defaulting to 2.
- **Problem 2 (`processInput`):** Type narrowing using `typeof` for `string | number | boolean`.
- **Problem 3 (`formatCoordinate`):** Readonly tuple `[number, number, string]` to formatted string.
- **Problem 4 (`concatenateArrays`):** Generic function `<T>` with rest parameters `...arrays: T[][]`.
- **Problem 5 (`Course` & `getPopularCourses`):** Interface definition and non-mutating filtering.
- **Problem 6 (`pluckValues`):** Generic function using key constraint `<T, K extends keyof T>`.
- **Problem 7 (`Employee` & `Manager`):** OOP inheritance with `protected` and `private` access modifiers.
- **Problem 8 (`validateAgeAsync`):** Asynchronous function returning `Promise<string>` with timer and error rejection.

> **Important Strict Rules for `solutions.ts`:**
> - Explicit parameter and return types for all functions and methods.
> - Exact naming matching problem specifications.
> - No `any` type allowed.
> - **No Noise**: Do not include problem comments (e.g., `// Problem 1`) or `console.log` / sample test calls in the final `solutions.ts`.

---

### 2. Technical Blogs (2 Posts - 10 Marks)
Each blog post must be written in its own Markdown file (`[blog-name].md`), structured with Title, Introduction, Body with Code Examples, and Conclusion (150–300 words each):

**Blog Language:**
- `type-vs-interface.md`: Bangla
- `type-narrowing.md`: English

## Blog Posts

1. [Type vs Interface (Bangla)](./type-vs-interface.md)
2. [Type Narrowing (English)](./type-narrowing.md)