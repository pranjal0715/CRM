# Basic CRM System

A simple CRM system built with Next.js (frontend) and Express.js (backend) to manage client data and interactions with modern dashboard and reporting facilities.

## Features

- Client Management (Add, Edit, View, Delete)
- Contact Information Tracking
- Notes & Interactions
- Basic Dashboard
- Authentication
- Search & Filter Clients

## Tech Stack

- Frontend: Next.js 13+ with TypeScript
- Backend: Express.js
- Database: MongoDB
- Authentication: JWT
- UI: Tailwind CSS & shadcn/ui
- Form Handling: react-hook-form & zod

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd crm-system
```

2. Install dependencies for both frontend and backend:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:

Create `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crm
JWT_SECRET=your-secret-key
```

Create `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Start MongoDB:
- Install MongoDB Compass
- Connect to mongodb://localhost:27017

5. Run the application:

In backend directory:
```bash
npm run dev
```

In frontend directory:
```bash
npm run dev
```

6. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
crm-system/
├── frontend/                # Next.js frontend
│   ├── app/                # Next.js app router
│   ├── components/         # React components
│   ├── lib/               # Utilities and helpers
│   └── types/             # TypeScript types
│
└── backend/               # Express.js backend
    ├── controllers/       # Route controllers
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    └── middleware/       # Custom middleware
```

## API Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout

### Clients
- GET /api/clients
- GET /api/clients/:id
- POST /api/clients
- PUT /api/clients/:id
- DELETE /api/clients/:id

### Notes
- GET /api/clients/:id/notes
- POST /api/clients/:id/notes
- PUT /api/clients/:id/notes/:noteId
- DELETE /api/clients/:id/notes/:noteId

## Default Admin Account
```
Email: admin@example.com
Password: admin123
