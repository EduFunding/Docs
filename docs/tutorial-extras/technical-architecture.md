---
sidebar_position: 6
---


# 🏗️ Technical Architecture

The technical architecture of EduFunding is designed to ensure scalability, security, transparency, and efficiency. It leverages blockchain technology, decentralized finance (DeFi) principles, and modern web frameworks to provide a seamless and trustworthy experience for all stakeholders.

This document breaks down the system architecture, components, and their interactions to support the EduFunding platform's various functionalities.

---

## 1. **Overview**

The architecture of EduFunding is composed of multiple layers, each serving a specific purpose in the platform’s operations. The main layers include:

- **Frontend**: The user-facing interface, developed using the T3 stack (React, Next.js, TypeScript, Tailwind CSS).
- **Backend**: A decentralized backend leveraging blockchain for transaction processing, AI for verification, and a robust tRPC backend.
- **Blockchain Layer**: Smart contracts for handling donations, student applications, DAO voting, loan management, and NFT issuance.
- **AI Service**: Used for real-time verification of student and school documents.
- **Database Layer**: Off-chain storage of metadata, supporting documents, and application history.

---

## 2. **System Components**

### 2.1 **Frontend - T3 Stack**

- **React**: The core of the user interface, providing a dynamic and responsive experience.
- **Next.js**: Used for server-side rendering, static site generation, and API routes for interacting with the backend.
- **TypeScript**: Ensures type safety and better developer experience.
- **Tailwind CSS**: Provides the styling, ensuring a modern, responsive, and clean user interface.

The frontend interacts with the backend through API routes and Web3 integration to connect with the blockchain.

---

### 2.2 **Backend - tRPC & AI Integration**

- **tRPC**: A modern backend framework used to create typesafe APIs for communication between the frontend and backend. It facilitates seamless communication with blockchain smart contracts and off-chain data.
- **AI Integration**: The AI service is responsible for verifying students' and schools' credentials in real-time. It uses machine learning models to process uploaded documents and validate the authenticity of the data before it is stored on-chain.

  - This verification process ensures that only verified students and schools are eligible for funding.

---

### 2.3 **Blockchain Layer - Smart Contracts**

The blockchain layer is the backbone of EduFunding. It handles the decentralized operations of the platform, including donations, loan tracking, DAO governance, and NFT issuance.

#### Key Smart Contracts:

1. **DonationVault.sol**:
   - Handles donations in ETH/stablecoins.
   - Receives and stores donations securely.
   - Mints **EduTokens** for donors.
   - Emits the **DonationMade** event for tracking donations.
2. **StudentFunding.sol & SchoolFunding.sol**:
   - Store and manage student/school applications.
   - Use on-chain hashes of verified data for transparency.
   - Allow the DAO to vote on funding allocation.
3. **EduToken.sol**:
   - ERC20 token used for rewarding donors.
   - Tracks donor contributions.
   - Allows staking to become DAO members.
4. **NFTs for Loan Tracking**:
   - Issued to students who receive loans.
   - Contain the loan details (amount, terms, repayment status).
   - Updated based on Zero-Knowledge (ZK) proof of repayment.

#### Smart Contract Interaction Flow:

1. Users submit their applications via the frontend, which triggers the backend to initiate AI verification.
2. Verified data is hashed and sent to the **StudentFunding.sol** or **SchoolFunding.sol** smart contract.
3. Donors interact with the **DonationVault.sol** to contribute funds.
4. DAO members use **EduTokens** to vote on applications for funding.
5. If approved, NFTs are issued to the applicants, and funds are released from the vault.

---

### 2.4 **AI Verification Service**

- **Purpose**: Used to verify documents and academic records of students and schools in real-time. It checks the authenticity of the submitted documents and ensures that they meet the platform's standards.
- **Integration**: The AI service communicates with the backend via API requests. After the verification, the results are sent back to the backend, which triggers the next steps in the user flow.

---

### 2.5 **Off-Chain Data Storage (IPFS)**

While blockchain ensures immutability and transparency for critical data (such as funding approvals and NFTs), off-chain data is needed for large files like documents and metadata.

- **IPFS (InterPlanetary File System)**: A decentralized file storage system used to store off-chain data, such as academic records, transcripts, and identity documents.
- **Data is stored off-chain**, but metadata and hashes are stored on-chain, ensuring both privacy and security.

---

## 3. **Data Flow**

### 3.1 **User Application Process Flow**

1. The user (student or school) submits an application via the frontend.
2. The backend sends the submitted documents to the AI verification service for processing.
3. Upon successful verification, the data is hashed and stored on-chain in the appropriate **StudentFunding.sol** or **SchoolFunding.sol** contract.
4. DAO members review the application and vote on whether to approve or reject the funding.

### 3.2 **Donation Flow**

1. A donor connects their wallet via MetaMask or WalletConnect using **wagmi**.
2. They choose to donate to a verified applicant or school.
3. The donor sends their contribution to the **DonationVault.sol** contract.
4. The smart contract mints **EduTokens** for the donor, rewarding them for their contribution.

### 3.3 **Loan Repayment Flow**

1. Once a student receives a loan, an NFT is issued that tracks the loan's amount, term, and repayment progress.
2. Students submit **ZK proofs** of income (e.g., pay slips) to verify their ability to make monthly repayments.
3. The smart contract updates the NFT to reflect the repayment progress.
4. On full repayment, the NFT is marked as **"Cleared"** and the student earns a reputation score.

---

## 4. **Security Measures**

- **AI Verification**: Ensures that only valid applications are processed, preventing fraudulent entries.
- **Smart Contract Audits**: All smart contracts are regularly audited to ensure there are no vulnerabilities or exploits.
- **ZK Proofs**: Protects the privacy of students while verifying their loan repayment status, ensuring transparency without exposing sensitive information.
- **Off-Chain Data Encryption**: Documents stored off-chain on IPFS are encrypted to maintain privacy.

---

## 5. **Tech Stack Summary**

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS.
- **Backend**: tRPC, AI service integration.
- **Blockchain**: Ethereum-based smart contracts (DonationVault.sol, StudentFunding.sol, SchoolFunding.sol, EduToken.sol), NFTs, ZK proofs.
- **Storage**: IPFS for off-chain data storage.
- **Web3 Integration**: wagmi for wallet connection.

---

## 6. **Scalability & Future Improvements**

- **Layer-2 Solutions**: The platform can scale by integrating with Ethereum Layer-2 solutions like Optimism or Arbitrum, reducing transaction fees and increasing throughput.
- **AI Model Enhancements**: The AI service can be enhanced with more advanced document recognition algorithms, improving the accuracy of student/school verification.
- **DAO Voting Expansion**: The DAO voting mechanism could evolve to include more granular voting categories, such as token-weighted voting for different funding pools or specific educational causes.

---

## Conclusion

The EduFunding platform leverages cutting-edge technologies, including blockchain, AI, and decentralized finance, to solve real-world problems in education. By decentralizing funding and governance, EduFunding ensures transparency, fairness, and accessibility for students, schools, donors, and DAO members.

---
