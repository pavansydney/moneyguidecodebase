# moneyguidecodebase

Financial Advisory Website for Youngsters

A modern, mobile-first financial advisory website targeted at Indian youngsters (18-35 years).

## Features

- 🏠 **Homepage** - Clear value proposition and trust-building
- 📊 **Financial Health Check** - Get personalized financial score and recommendations
- 🧮 **Smart Calculators** - SIP, EMI, Emergency Fund, Insurance, Retirement, Credit Score
- 📚 **Learning Hub** - Life-stage based financial education
- 🎯 **Goal-Based Planning** - Plan for car, home, marriage, travel, retirement
- 🛡️ **Insurance Simplifier** - Clear guidance on insurance needs
- 💳 **Debt & Credit Score** - EMI management and credit improvement tips

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form (ready for integration)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd financial-advisory
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
financial-advisory/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── calculators/       # Calculators page
│   ├── health-check/      # Health check page
│   ├── learn/             # Learning hub
│   └── ask/               # Ask questions page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Header, Footer
│   ├── homepage/          # Homepage sections
│   ├── calculators/       # Calculator components
│   └── health-check/      # Health check components
└── lib/
    └── calculations.ts    # Financial calculation logic
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Phase 2 Status

✅ Static Homepage (HTML/CSS)
✅ Calculator Components (Pure JS logic)
✅ Form Components (No submission yet)
✅ Basic Navigation
✅ Responsive Layout

## Next Steps (Phase 3)

- Database schema design
- API routes setup
- User authentication
- Save calculations feature
- User dashboard

## License

MIT

