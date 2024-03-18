> Warning: for some reason this project has unstable behavior with vercel.

<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/next.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center"></h1>
</p>
<p align="center">
    <em><code>► Poke App</code></em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. -->
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=default&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=default&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=default&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
</p>

<br><!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
</details>
<hr>

## Overview

<p>
   This projects is a POC app that aims to demonstrate a flow consuming the PokeAPI.
</p>

---

## Features

<ul>
   <li>Show a list of pokemons</li>
   <li>Show pokemon details</li>
   <li>Search pokemons</li>
   <li>Set pokemons as favorites</li>
   <li>Login</li>
</ul>

---

## Repository Structure

```sh
└── /
    ├── README.md
    ├── bun.lockb
    ├── components.json
    ├── jest.config.ts
    ├── jest.setup.ts
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── next.svg
    │   ├── placeholder-logo.svg
    │   └── vercel.svg
    ├── src
    │   ├── animations
    │   ├── app
    │   ├── components
    │   ├── hooks
    │   ├── lib
    │   ├── middleware.ts
    │   ├── providers
    │   ├── services
    │   └── store
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## Getting Started

**System Requirements:**

- **TypeScript**: `version 5.4.2`
- **Node**: `version 20+`
- **Bun**: `version 1.0.20+`

### Installation

<h4>From <code>source</code></h4>

> 1. Install the dependencies:
>
> ```console
> $ bun install
> ```
>
> 2. Run the application:
>
> ```console
> $ bun dev
> ```

### Tests

> Run the test suite using the command below:
>
> ```console
> $ bun run test
> ```



