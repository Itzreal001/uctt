# UCT Frontend

A modern, full-stack web application built with Vite, React, TypeScript, and Express.

## Project Structure

```
uct-frontend/
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── contexts/    # React contexts
│   │   ├── lib/         # Utility functions
│   │   ├── App.tsx      # Main app component
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── server/              # Express backend
│   └── index.ts         # Server entry point
├── shared/              # Shared code between client and server
├── package.json         # Dependencies and scripts
├── pnpm-lock.yaml       # Locked dependencies (pnpm)
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment configuration
```

## Prerequisites

- **Node.js**: v18 or higher
- **pnpm**: v10.4.1 or higher (recommended) or npm v9+

## Installation

### Option 1: Using pnpm (Recommended - Faster)

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm@10.4.1

# Install dependencies
pnpm install
```

### Option 2: Using npm

```bash
npm install
```

## Development

Start the development server with hot module reloading:

```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:3000`

## Building

Build the application for production:

```bash
pnpm build
# or
npm run build
```

This will:
1. Build the React frontend with Vite
2. Bundle the Express server with esbuild
3. Output to the `dist/` directory

## Production

Run the production build:

```bash
pnpm start
# or
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### Available Variables

- `NODE_ENV`: Set to `production` for production builds
- `PORT`: Server port (default: 3000)
- `VITE_API_URL`: API endpoint URL
- `VITE_FIREBASE_*`: Firebase configuration (if using Firebase)
- `VITE_GOOGLE_MAPS_API_KEY`: Google Maps API key (if using maps)

## Deployment

### Vercel Deployment

This project is configured for easy deployment to Vercel.

#### Prerequisites

1. Create a [Vercel account](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

#### Deploy

1. **First-time deployment:**
   ```bash
   vercel
   ```

2. **Subsequent deployments:**
   ```bash
   vercel --prod
   ```

#### Environment Variables on Vercel

1. Go to your project settings on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add all required environment variables from `.env.example`
4. Redeploy after adding variables

#### Configuration

The `vercel.json` file contains:
- Build command: `npm run build`
- Install command: `pnpm install`
- Node.js runtime: 20.x
- Rewrites for client-side routing

### Manual Deployment

For other hosting platforms:

1. Build the project:
   ```bash
   pnpm build
   ```

2. Set `NODE_ENV=production`

3. Run the server:
   ```bash
   pnpm start
   ```

4. The server will listen on the `PORT` environment variable (default: 3000)

## Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Run production build
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## Troubleshooting

### Slow npm/pnpm installation

If you experience slow dependency downloads:

1. **Using pnpm** (recommended):
   ```bash
   pnpm install --shamefully-hoist
   ```

2. **Using npm**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Clear cache and retry**:
   ```bash
   pnpm store prune  # for pnpm
   npm cache clean --force  # for npm
   ```

### Build fails with "Cannot find module"

1. Delete `node_modules` and lockfile:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   ```

2. Reinstall dependencies:
   ```bash
   pnpm install
   ```

### Port already in use

The development server will automatically use the next available port if 3000 is busy. You can also specify a port:

```bash
PORT=3001 pnpm dev
```

## Technologies

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS
- **Backend**: Express, Node.js
- **UI Components**: Radix UI, shadcn/ui
- **Routing**: Wouter (client-side)
- **Forms**: React Hook Form, Zod
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Styling**: TailwindCSS, Tailwind Merge

## License

MIT

## Support

For issues or questions, please open an issue on the project repository.
