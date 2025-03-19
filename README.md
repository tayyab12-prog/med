# MedXGPT - Medical Imaging Platform

A medical imaging platform that leverages AI for X-ray analysis and medical insights, providing a comprehensive and user-friendly interface for medical professionals and patients.

## Features

- AI-powered X-ray analysis
- Real-time chat interface for medical collaboration
- Secure file upload and viewing functionality
- User-friendly interface with dark mode
- Responsive design for all devices

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 20 or later)
- npm (comes with Node.js)
- A modern code editor (VS Code recommended)

## VS Code Setup

1. Install recommended VS Code extensions:
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features
   - Tailwind CSS IntelliSense

2. Clone the repository to your local machine:
```bash
git clone <your-repo-url>
cd medxgpt
```

3. Install dependencies:
```bash
npm install
```

4. Create required directories:
```bash
mkdir uploads
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── lib/          # Utility functions and configurations
│   │   └── hooks/        # Custom React hooks
├── server/                # Backend Express server
│   ├── routes.ts         # API routes
│   └── storage.ts        # Storage interface implementation
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schema and types
└── uploads/             # Directory for uploaded files
```

## Running in VS Code

1. Open the project folder in VS Code:
```bash
code .
```

2. Install the recommended extensions when prompted.

3. The integrated terminal in VS Code can be used to run all commands:
   - Press `` Ctrl+` `` to open the integrated terminal
   - Run `npm run dev` to start the development server
   - The terminal will show compilation errors and server logs

4. Debugging in VS Code:
   - Press F5 or use the Run and Debug sidebar to start debugging
   - Breakpoints can be set by clicking the line number gutter
   - Use the Debug Console to see variable values

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Run the production server
- `npm run check` - Run TypeScript type checking

## Environment Variables

The following environment variables are used in the project:

```env
NODE_ENV=development      # development or production
```

## Technology Stack

- Frontend:
  - React with TypeScript
  - TanStack Query for data fetching
  - Tailwind CSS for styling
  - Shadcn UI components
  - Framer Motion for animations

- Backend:
  - Express.js
  - Multer for file uploads
  - In-memory storage (can be extended to use a database)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.