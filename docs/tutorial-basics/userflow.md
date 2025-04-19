---
sidebar_position: 5
---



# 🚶‍♂️ User Flow

EduFunding offers a seamless and intuitive experience for all users, from students and schools applying for funding, to donors contributing to the platform, and DAO members shaping the future of education. The following user flows describe each role's journey through the system.

---

## 1. Student / School Application Flow

### Step 1: Submit Application

#### Frontend

- **User selects role**: Student or School.
- **Form Submission**:
  - Personal Details (Name, ID, Address, etc.)
  - Academic Records (Transcripts, Grade Points, etc.)
  - Supporting Documents (ID Proof, Certificates, etc.)
- **Submit for Verification**: User clicks "Submit" to send data for AI verification.

#### Backend

- **AI Verification**: Data and documents are sent for real-time verification.
  - **Verified**: Move to next step.
  - **Not Verified**: The application is rejected, and the user receives feedback, without storing any on-chain data.

---

### Step 2: Create Application Hash

- **Hashing**: Verified data is hashed using **SHA256** for privacy.
- Optionally, **metadata** (such as documents) can be stored **off-chain** (e.g., on **IPFS**).

---

### Step 3: Smart Contract Submission

- The **application hash** and any metadata are stored on-chain through the **StudentFunding** or **SchoolFunding** smart contract.
- **Event Emitted**: `ApplicationSubmitted`.

---

### Step 4: Await DAO Voting

- **DAO Review**: The application is available for DAO members to review.
- **DAO Voting**:
  - If **approved**, funding proceeds, and the application is moved to the next phase.
  - If **rejected**, no funding is allocated, and the NFT is not minted.

---

## 2. Donor Flow

### Step 1: Connect Wallet

- **Wallet Connection**: Donor connects using **MetaMask** or **WalletConnect** via **wagmi**.

---

### Step 2: View Verified Applicants

- **Verified Applicants**: Donor views a list of verified applicants who have passed the DAO voting stage.
- The donor can filter through the list based on:
  - Academic needs
  - Funding required
  - Specific fields (e.g., STEM scholarships, rural schools)

---

### Step 3: Make Donation

- **Donation**: Donor chooses a student or school and sends a donation in **ETH** or **stablecoins** to the **DonationVault.sol** smart contract.
- The **DonationMade** event is triggered.

---

### Step 4: Receive EduTokens

- The donor receives **EduTokens**:
  - For each donation, **ERC20 EduTokens** are minted.
  - Tokens track the donor's contributions and are used for **reputation** and **DAO qualification**.

---

## 3. DAO Member Flow

### Step 1: Earn DAO Access

- **Accumulation of EduTokens**: Once donors accumulate enough EduTokens, they can stake their tokens to become DAO members.

---

### Step 2: Vote on Applications

- **DAO Review**: DAO members vote on whether to approve or reject pending funding applications.
  - Voting is done via **quadratic voting** or **token-weighted voting**.
  - **If approved**, NFTs are issued to students/schools, and funding is released.

---

### Step 3: Propose Ideas

- **Proposals**: DAO members can propose new categories, such as:
  - Tech scholarships, girls in STEM, etc.
  - Propose platform upgrades or changes.
  - Flag potential fraud or abuse in the system.

---

## 4. Loan Repayment & ZK Tracking (For Students)

### Step 1: NFT Issuance

- **Loan NFT**: Students who receive a loan are issued an **NFT** containing:
  - Loan amount
  - Repayment terms
  - Loan status

---

### Step 2: Monthly Repayment Verification

- **ZK Proofs**: Students submit **Zero-Knowledge Proofs** of income (e.g., proof of paycheck).
- **Smart Contract Updates**: The NFT's metadata is updated to reflect repayment progress.

---

### Step 3: Full Repayment Completion

- Once the loan is fully repaid, the NFT is marked as **"Cleared"**.
- This is reflected on-chain, and the student earns a reputation score for future funding eligibility.

---

## 5. Community Engagement & Impact Tracking

### Step 1: Reputation System

- **Trust Building**: Both students and schools build their **Reputation Score** based on:
  - Academic performance.
  - Loan repayment history (for students).
  - Community feedback and participation.

### Step 2: Impact Dashboard

- **Impact Metrics**: Donors and DAO members can view real-time metrics on:
  - Graduation rates.
  - Academic improvements.
  - School infrastructure upgrades.
  - Loan repayment status.

---

### Step 3: Forum & Voting

- **Community Forum**: A dedicated forum allows DAO members and users to discuss:

  - Platform improvements.
  - New scholarship categories.
  - Fraud prevention measures.

- **Community Voting**: Members vote on proposed changes to the platform or the funding logic.
  - Votes can directly impact how the platform evolves.

---

## Summary of User Flow

1. **Students/Schools**: Apply for funding, go through AI verification, and await DAO approval.
2. **Donors**: Connect wallets, choose applicants to fund, donate, and earn EduTokens.
3. **DAO Members**: Stake tokens, vote on funding applications, propose ideas, and guide platform governance.
4. **Students (Loans)**: Receive loans via NFT issuance, make repayments using ZK proofs, and work toward clearing their loans.

This decentralized, transparent, and community-driven flow ensures **fairness**, **accountability**, and **empowerment** for all users within the EduFunding ecosystem.

![EduFunding Mascot](/static/../img/student.png)
![EduFunding Mascot](/static/../img/donor.png)

---
