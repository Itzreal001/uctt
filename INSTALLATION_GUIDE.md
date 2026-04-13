# Installation Guide

This guide provides detailed instructions for setting up the UCT Frontend project on your local machine.

## Quick Start

### For macOS and Linux

```bash
# Make the installation script executable
chmod +x scripts/install.sh

# Run the installation script
./scripts/install.sh
```

### For Windows

```bash
# Run the installation script
scripts/install.bat
```

### Manual Installation

If you prefer to install manually, follow the steps below.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm**: Comes with Node.js
  - Verify installation: `npm --version`

- **pnpm** (Optional but Recommended):
  - Install globally: `npm install -g pnpm@10.4.1`
  - Verify installation: `pnpm --version`

## Installation Methods

### Method 1: Using pnpm (Recommended - Fastest)

**Advantages:**
- Faster installation (uses hard links and symlinks)
- More efficient disk space usage
- Better dependency resolution
- Supports monorepos

**Steps:**

1. Install pnpm globally (if not already installed):
   ```bash
   npm install -g pnpm@10.4.1
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Verify installation:
   ```bash
   pnpm --version
   pnpm list
   ```

### Method 2: Using npm (Standard)

**Advantages:**
- Comes with Node.js
- No additional installation needed
- Widely supported

**Steps:**

1. Install dependencies:
   ```bash
   npm install
   ```

   If you encounter peer dependency warnings, use:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Verify installation:
   ```bash
   npm list
   ```

### Method 3: Using Yarn (Alternative)

**Steps:**

1. Install Yarn globally (if not already installed):
   ```bash
   npm install -g yarn
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Troubleshooting Installation Issues

### Issue: Slow Download Speed

**Solution 1: Use a faster npm registry**

```bash
# For pnpm
pnpm config set registry https://registry.npmjs.org/

# For npm
npm config set registry https://registry.npmjs.org/
```

**Solution 2: Clear cache and reinstall**

```bash
# For pnpm
pnpm store prune
pnpm install

# For npm
npm cache clean --force
npm install
```

**Solution 3: Install with specific concurrency**

```bash
# For pnpm (reduce concurrency for slow connections)
pnpm install --max-workers=2

# For npm (increase concurrency)
npm install --max-sockets=10
```

### Issue: "Cannot find module" or "ERESOLVE unable to resolve dependency tree"

**Solution:**

```bash
# Delete node_modules and lockfile
rm -rf node_modules pnpm-lock.yaml  # for pnpm
# or
rm -rf node_modules package-lock.json  # for npm

# Reinstall dependencies
pnpm install  # or npm install
```

### Issue: "peer dep missing" warnings

**Solution:**

```bash
# For npm, use legacy peer deps flag
npm install --legacy-peer-deps

# For pnpm, it usually handles this automatically
# If issues persist, check pnpm-lock.yaml for conflicts
```

### Issue: Port 3000 already in use

**Solution:**

```bash
# Use a different port
PORT=3001 pnpm dev

# Or kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Out of memory during build

**Solution:**

```bash
# Increase Node.js memory limit
NODE_OPTIONS=--max-old-space-size=4096 pnpm build
```

## Post-Installation

After successful installation, verify everything is working:

1. **Check TypeScript compilation:**
   ```bash
   pnpm check
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

4. **Build for production:**
   ```bash
   pnpm build
   ```

## Dependency Information

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| React | 19.2.1 | UI library |
| Vite | 7.1.7 | Build tool |
| TypeScript | 5.6.3 | Type safety |
| TailwindCSS | 4.1.14 | Styling |
| Express | 4.21.2 | Backend server |
| Radix UI | Latest | Accessible components |
| Zod | 4.1.12 | Schema validation |

### Total Dependencies

- **Direct Dependencies**: ~40
- **Total Dependencies**: ~500+ (including transitive)
- **Approximate Size**: 400-500 MB (node_modules)

## Optimizing Installation

### For CI/CD Pipelines

Use frozen lockfile to ensure reproducible builds:

```bash
# pnpm
pnpm install --frozen-lockfile

# npm
npm ci
```

### For Docker

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.4.1

# Copy lockfile
COPY pnpm-lock.yaml .
COPY package.json .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN pnpm build

# Expose port
EXPOSE 3000

# Start
CMD ["pnpm", "start"]
```

### For Monorepo Setups

If using this in a monorepo, ensure:

1. Root `pnpm-lock.yaml` is committed
2. Use `pnpm install` from root directory
3. Each workspace has its own `package.json`

## Getting Help

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting-installation-issues) section
2. Review the main [README.md](README.md)
3. Check Node.js and npm versions: `node --version && npm --version`
4. Clear cache and reinstall: `rm -rf node_modules && pnpm install`

## Next Steps

After successful installation:

1. **Development**: `pnpm dev`
2. **Type Checking**: `pnpm check`
3. **Formatting**: `pnpm format`
4. **Building**: `pnpm build`
5. **Deployment**: See [README.md](README.md#deployment)
