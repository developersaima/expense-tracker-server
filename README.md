<div align="center">

# 💸 ExpenseFlow

### Personal Finance Tracker — Track, Manage & Visualize Your Daily Expenses

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, full-stack web application for tracking and visualizing personal finances — built with a clean UI, interactive charts, and full CRUD support.

**[Client Repo](https://github.com/developersaima/expense-tracker-client)** · **[Server Repo](https://github.com/developersaima/expense-tracker-server)**

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Dashboard** | Real-time overview of your spending at a glance |
| 🍩 **Data Visualization** | Interactive Donut charts powered by Recharts |
| ✏️ **Full CRUD** | Create, read, update, and delete expenses seamlessly |
| 🔍 **Smart Filtering** | Category-based filtering for precise analytics |
| 🌗 **Dark / Light Mode** | Theme toggle built with DaisyUI + Tailwind CSS |
| 🔒 **Type Safety** | End-to-end TypeScript for reliable data management |

---

## 🏗️ Project Structure

```
expenseflow/
├── expense-tracker-client/   # Next.js frontend
└── expense-tracker-server/   # Node.js + Express backend
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **MongoDB** (local instance or MongoDB Atlas)

---

### Backend Setup

```bash
# 1. Clone and navigate to the server
git clone https://github.com/developersaima/expense-tracker-server.git
cd expense-tracker-server

# 2. Install dependencies
npm install express cors mongodb dotenv

# 3. Configure environment variables
cp .env.example .env
```

Create a `.env` file in the root of the server:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
# 4. Start the server
npm start
```

The server will be running at `http://localhost:5000`.

---

### Frontend Setup

```bash
# 1. Clone and navigate to the client
git clone https://github.com/developersaima/expense-tracker-client.git
cd expense-tracker-client

# 2. Install dependencies
npm install

# 3. Configure environment variables
```

Create a `.env.local` file in the root of the client:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

```bash
# 4. Run the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🛠️ Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) — Styling & theming
- [Recharts](https://recharts.org/) — Data visualization

**Backend**
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) — REST API
- [MongoDB](https://www.mongodb.com/) — Database
- [dotenv](https://www.npmjs.com/package/dotenv) — Environment configuration

---

## 📡 API Reference

Base URL: `http://localhost:5000`

### Expenses

**`POST /expenses`** — Create a new expense

```json
// Request Body
{
  "title": "Grocery Shopping",
  "amount": "1200",
  "category": "Food",
  "date": "2025-06-28"
}
```

---

**`GET /expenses`** — Get all expenses (optional category filter)

```
GET /expenses
GET /expenses?category=Food
```

```json
// Response
[
  {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "title": "Grocery Shopping",
    "amount": "1200",
    "category": "Food",
    "date": "2025-06-28"
  }
]
```

---

**`PUT /expenses/:id`** — Update an expense by ID

```
PUT /expenses/664f1a2b3c4d5e6f7a8b9c0d
```

```json
// Request Body
{
  "title": "Supermarket",
  "amount": "1500",
  "category": "Food",
  "date": "2025-06-28"
}
```

---

**`DELETE /expenses/:id`** — Delete an expense by ID

```
DELETE /expenses/664f1a2b3c4d5e6f7a8b9c0d
```

---

### Stats

**`GET /expenses-stats`** — Get total spending grouped by category (used for Recharts)

```json
// Response
[
  { "_id": "Food", "value": 4500 },
  { "_id": "Transport", "value": 1200 },
  { "_id": "Entertainment", "value": 800 }
]
```

---

## 👩‍💻 Developer

**Saima Akter**

[![GitHub](https://img.shields.io/badge/GitHub-@developersaima-181717?style=flat-square&logo=github)](https://github.com/developersaima)

---

<div align="center">
  <sub>Built with ❤️ for efficient financial management.</sub>
</div>