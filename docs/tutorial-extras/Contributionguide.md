---
sidebar_position: 8
---


# Contributing to EduFunding

Thank you for considering contributing to EduFunding!
We are excited to have you help us build a platform that empowers students and schools worldwide through decentralized finance.

This guide will walk you through the different ways you can contribute and the processes you should follow.

---

## Table of Contents

- [Contributing to EduFunding](#contributing-to-edufunding)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Ways to Contribute](#ways-to-contribute)
  - [Code Contribution Guidelines](#code-contribution-guidelines)
  - [Smart Contract Contribution Guidelines](#smart-contract-contribution-guidelines)
  - [Frontend Contribution Guidelines](#frontend-contribution-guidelines)
  - [Good First Issues](#good-first-issues)
  - [Pull Request Process](#pull-request-process)
  - [Community](#community)

---

## Getting Started

1. **Fork the Repository**  
   Click the **Fork** button on the repository page to copy the repo into your GitHub account.

2. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/edufunding.git
   cd edufunding
   ```

3. **Install Dependencies**

   ```bash
   cd frontend
   npm install
   cd ../contracts
   npm install
   ```

4. **Set Up Environment Variables**
   Create `.env.local` files for frontend and backend as necessary.
   Sample env variables will be provided in the README.

5. **Start Developing**
   - Run frontend: `npm run dev`
   - Deploy contracts locally using Hardhat: `npx hardhat node`

---

## Ways to Contribute

- Fix bugs
- Improve documentation
- Add new frontend features
- Add new smart contract features
- Write unit and integration tests
- Help with UI/UX improvements
- Assist in project management (issue triage, labeling, etc.)
- Security audits and vulnerability reports

---

## Code Contribution Guidelines

- Write clean, readable, and maintainable code.
- Follow the project's coding standards (Prettier, ESLint for frontend).
- Always include meaningful commit messages.
- Update or add tests for new features or bug fixes.
- Update documentation if your change affects APIs, contracts, or flows.

---

## Smart Contract Contribution Guidelines

- Follow Solidity style guide (0.8.x).
- Use OpenZeppelin libraries where possible.
- Write thorough tests using Hardhat and Chai.
- Gas optimization is a bonus.
- Keep contracts modular and minimal.
- Include NatSpec comments for functions.

Example NatSpec:

```solidity
/// @notice Transfers funds to a verified student.
function transferFunds(address student, uint256 amount) external onlyOwner { }
```

---

## Frontend Contribution Guidelines

- Use TypeScript.
- Follow T3 Stack structure (Next.js + tRPC + TailwindCSS).
- Reuse components where possible.
- Keep API functions inside `trpc/` folder.
- Ensure mobile responsiveness.
- Keep accessibility (a11y) in mind.

---

## Good First Issues

We label beginner-friendly issues with:

- `good first issue`
- `help wanted`

If you're new, start there!  
Feel free to comment on an issue and ask to be assigned.

---

## Pull Request Process

1. Fork and clone the repo.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes.
4. Run all tests and linters.
5. Push to your fork and submit a pull request (PR).
6. Write a clear PR description:

   - What does it fix/add?
   - Any relevant issues?
   - Screenshots or GIFs (if UI-related)?

7. Wait for a maintainer to review and merge!

---

## Code of Conduct

We are committed to providing a welcoming and respectful environment for all contributors.  
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

---

## Community

- Join our discussions on GitHub.
- Suggest features or report bugs via issues.
- Spread the word about EduFunding!

Together, we can create a platform that changes lives through education and technology.

✩ Thank you for being a part of this journey! ✩
