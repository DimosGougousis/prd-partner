# PRD Kanban

AI-powered Product Requirements Document management with Kanban workflow.

## Project Overview

PRD Kanban is a comprehensive tool for Product Managers to create, track, and manage Product Requirements Documents with AI-assisted workflows, stakeholder collaboration, and visual Kanban boards.

## Features

- **PRD Creation**: Template-based PRD creation with guided wizard
- **Kanban Board**: Visual workflow management with drag-and-drop
- **Stakeholder Management**: RACI matrices and intelligent assignments
- **AI Insights**: Bottleneck detection and recommendations
- **Conflict Resolution**: Timeline and resource conflict detection
- **Dashboard & Reporting**: Real-time metrics and executive summaries

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router
- TanStack Query
- @dnd-kit (drag and drop)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd prd-kanban

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at http://localhost:8080/

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # React components
│   ├── prd/       # PRD-specific components
│   ├── ui/        # shadcn/ui components
│   └── layout/    # Layout components
├── pages/         # Route pages
├── context/       # React context
├── data/          # Mock data and utilities
├── types/         # TypeScript types
└── hooks/         # Custom hooks
```

## AI Agents

The project includes 7 specialized agents:

1. **PRD Creation Agent** - Template-based PRD creation
2. **Stakeholder Intelligence Agent** - RACI matrices and assignments
3. **AI Insights Agent** - Bottleneck detection and recommendations
4. **Workflow Automation Agent** - Kanban and progress tracking
5. **Conflict Resolution Agent** - Timeline and resource conflicts
6. **Content & Documentation Agent** - Rich text editing and search
7. **Dashboard & Reporting Agent** - Metrics and reporting

See `.agents/` directory for agent configurations.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


Rebuild and redeploy
