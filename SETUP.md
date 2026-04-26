# AGRICET MOCKS — Setup Guide

## Prerequisites

Install **Node.js** (v18 or later) from: https://nodejs.org/en/download

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
# Edit .env.local with your Firebase & Razorpay credentials

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## Firebase Setup (Free)

1. Go to https://console.firebase.google.com
2. Create a new project (e.g., "agricet-mocks")
3. Enable **Authentication** → Email/Password provider
4. Create **Firestore Database** (Start in test mode)
5. Go to Project Settings → Your Apps → Web App → Copy config
6. Paste values into `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=agricet-mocks.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=agricet-mocks
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=agricet-mocks.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### Firestore Security Rules
In Firebase Console → Firestore → Rules, set:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /testResults/{doc} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## Razorpay Setup

1. Sign up at https://dashboard.razorpay.com
2. Go to Settings → API Keys → Generate Test Key
3. Add to `.env.local`:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_here
```

> Use `rzp_test_` keys for testing. Switch to `rzp_live_` for production.

---

## Adding More Questions

Questions are in `src/data/questions/`. Each file exports an array of `Question` objects:

```typescript
{
  id: "unique_id",
  subject: "agronomy",
  question: "The question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0,  // 0-indexed: 0=A, 1=B, 2=C, 3=D
  explanation: "Detailed explanation here."
}
```

Currently provided:
- **Agronomy**: 100 full AGRICET-standard questions
- **Soil Science**: 55 full questions  
- **Horticulture**: 25 full questions
- **All other 14 subjects**: Placeholder questions (replace with real content)

---

## Production Deployment (Vercel — Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              ← Landing page
│   ├── login/page.tsx        ← Login
│   ├── signup/page.tsx       ← Signup
│   ├── demo/page.tsx         ← Free demo test
│   ├── dashboard/page.tsx    ← Student dashboard
│   ├── previous-years/       ← Previous year papers list
│   └── test/
│       ├── [subjectId]/      ← Subject mock test
│       └── previous-year/[year]/ ← PYP test
├── components/
│   ├── Navbar.tsx
│   └── PaymentButton.tsx
├── contexts/
│   └── AuthContext.tsx       ← Firebase auth
├── data/
│   ├── subjects.ts           ← 17 subjects list
│   ├── previousYearPapers.ts ← PYP metadata + questions
│   └── questions/            ← MCQ bank
├── lib/
│   └── firebase.ts
└── types/
    └── index.ts
```
