# MedXGPT - Medical Imaging Platform

A medical imaging platform that leverages AI for X-ray analysis and medical insights, providing a comprehensive and user-friendly interface for medical professionals and patients.

## Core Features

- AI-powered X-ray analysis
- Real-time chat interface for medical collaboration
- Secure file upload and viewing functionality
- User-friendly interface with dark mode
- Responsive design for all devices
- Comprehensive pricing plans

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 20 or later)
- npm (comes with Node.js)
- VS Code

## VS Code Setup and Installation

1. Install these VS Code extensions:
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features
   - Tailwind CSS IntelliSense

2. Clone or download the project files and place them in your desired directory.

3. Open VS Code:
```bash
code <your-project-directory>
```

4. Open the integrated terminal in VS Code:
   - Press `` Ctrl+` `` (backtick) or use the Terminal menu
   - Make sure you're in the project root directory

5. Install dependencies:
```bash
npm install
```

6. Create required directories:
```bash
mkdir uploads
```

7. Start the development server:
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
│   │   ├── lib/          # Utility functions
│   │   └── hooks/        # Custom React hooks
├── server/                # Backend Express server
│   ├── routes.ts         # API routes
│   └── storage.ts        # Storage interface
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schema and types
└── uploads/             # Directory for uploaded files
```

## Development in VS Code

1. Editor Configuration:
   - The project includes TypeScript configuration
   - ESLint and Prettier will automatically format your code
   - Use the integrated terminal for running commands

2. Running the Project:
   - The development server runs both frontend and backend
   - Changes are automatically reloaded
   - Check the terminal for any compilation errors

3. Debugging:
   - Use VS Code's debugging features (F5)
   - Set breakpoints by clicking the line numbers
   - View variables in the Debug Console

## Navigation

The application has four main pages:
1. Home (/) - Landing page
2. Demo (/demo) - X-ray analysis demo
3. Pricing (/pricing) - Service plans
4. Contact (/contact) - Contact form

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Run production server
- `npm run check` - Run TypeScript checks

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
  - In-memory storage

## Troubleshooting

Common issues and solutions:

1. Port already in use:
   - Check if another application is using port 5000
   - Kill the process or change the port in server/index.ts

2. Module not found errors:
   - Run `npm install` again
   - Clear node_modules and package-lock.json and reinstall

3. TypeScript errors:
   - Check the types in shared/schema.ts
   - Ensure VS Code is using the workspace TypeScript version

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.