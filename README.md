# ENINNOV - Engineering Innovation Solutions

## Project info

Professional website for ENINNOV, showcasing engineering consulting, data modernization, project management, and staffing services.

**Live URL**: https://abh2050.github.io/eninnov-gradient-pulse/

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at: https://abh2050.github.io/eninnov-gradient-pulse/

### Manual Deployment

You can also deploy manually using the provided script:

```sh
# Make sure you're in the project directory
cd eninnov-gradient-pulse

# Run the deployment script
./deploy.sh
```

Or run the commands directly:

```sh
# Build the project
bun run build

# Deploy to GitHub Pages
bun run deploy
```

### GitHub Pages Setup

To set up GitHub Pages for your repository:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will handle the rest automatically

## Development

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js & npm
- Git

### Local Development Setup

```sh
# Step 1: Clone the repository
git clone https://github.com/abh2050/eninnov-gradient-pulse.git

# Step 2: Navigate to the project directory
cd eninnov-gradient-pulse

# Step 3: Install dependencies (using Bun)
bun install

# Step 4: Start the development server
bun run dev
```

The site will be available at http://localhost:8080

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run deploy` - Deploy to GitHub Pages (manual)
- `bun run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Navigation.tsx  # Site navigation
│   ├── HeroSection.tsx # Landing section
│   └── ...            # Other sections
├── pages/              # Page components
├── lib/                # Utilities
└── assets/             # Static assets
```

### Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icons
- **React Router** - Routing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is private and proprietary to ENINNOV.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2b037702-9b5c-4d35-b9bd-518b55867bbd) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
