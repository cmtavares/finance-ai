# Finance AI
**Finance AI** is an advanced micro SaaS platform that helps users take control of their personal finances. With an intuitive interface, it allows users to track expenses, manage budgets, and generate AI-powered reports. The AI analyzes financial transactions and provides valuable insights to optimize spending, identify patterns, and make smarter financial decisions.

## 📌 Features

📊 **Interactive financial dashboard** - Clearly and dynamically visualize your income and expenses.\
🤖 **AI-powered expense analysis** - Identify patterns and discover savings opportunities.\
📈 **Detailed reports and insights** - Generate custom reports to better understand your finances.\
💳 **Transaction entries** - Allows you to register and manage an unlimited number of financial transactions, including expenses, income, and transfers.\

## 🚀 How to Run

### 1️⃣ Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2️⃣ Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/cmtavares/finance-ai.git
cd finance-ai

# Install dependencies
npm install  # or yarn install
```

### 3️⃣ Configuration

Create a `.env` file in the project's root directory and configure the required environment variables. Example:

```ini
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Stripe
STRIPE_PREMIUM_PLAN_PRICE_ID="your_price_id"
STRIPE_SECRET_KEY="your_stripe_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_publishable_key"
STRIPE_WEBHOOK_SECRET="your_webhook_secret"
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="your_customer_portal_url"

# OpenAI
OPENAI_API_KEY="your_openai_api_key"

APP_URL="http://localhost:3000"
```

### 4️⃣ Running the Project

To start the project in development mode:

```bash
npm run dev  # or yarn dev
```

The project will be available at: [http://localhost:3000](http://localhost:3000) 🚀

### 5️⃣ Building for Production

To generate an optimized production version:

```bash
npm run build
npm start
```

## 🛠️ Technologies Used

This project was developed using the following technologies:

- **Next.js** - Modern and efficient React framework.
- **TypeScript** - Static typing for better security and productivity.
- **Tailwind CSS** - Responsive and minimalist styling.
- **Prisma** - Powerful ORM for databases.
- **ESLint & Prettier** - Code quality and standardization.
- **Clerk** - Authentication and user management.
- **OpenAI API** - AI-powered features for expense analysis and insights.
- **Stripe** - Payment processing for premium subscriptions.
