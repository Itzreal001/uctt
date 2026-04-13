# Deployment Guide

This guide provides detailed instructions for deploying the UCT Frontend to various platforms, with a focus on Vercel.

## Table of Contents

1. [Vercel Deployment](#vercel-deployment)
2. [Environment Variables](#environment-variables)
3. [Custom Domain](#custom-domain)
4. [Monitoring and Logs](#monitoring-and-logs)
5. [Rollback](#rollback)
6. [Alternative Platforms](#alternative-platforms)

## Vercel Deployment

### Prerequisites

1. **Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Free tier includes unlimited deployments

2. **Git Repository**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Vercel integrates directly with these platforms

3. **Vercel CLI** (Optional but recommended)
   ```bash
   npm install -g vercel
   ```

### Method 1: Using Vercel Dashboard (Easiest)

1. **Connect Repository**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Continue with GitHub" (or your Git provider)
   - Authorize Vercel to access your repositories
   - Select the `uct-frontend` repository

2. **Configure Project**
   - **Project Name**: `uct-frontend` (or your preferred name)
   - **Framework Preset**: Select "Other"
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (already configured)
   - **Output Directory**: `dist` (already configured)
   - **Install Command**: `pnpm install` (already configured)

3. **Environment Variables**
   - Click "Environment Variables"
   - Add all variables from `.env.example`:
     ```
     NODE_ENV=production
     PORT=3000
     VITE_API_URL=https://your-domain.com
     VITE_FIREBASE_API_KEY=xxx
     VITE_FIREBASE_AUTH_DOMAIN=xxx
     VITE_FIREBASE_PROJECT_ID=xxx
     VITE_FIREBASE_STORAGE_BUCKET=xxx
     VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
     VITE_FIREBASE_APP_ID=xxx
     VITE_GOOGLE_MAPS_API_KEY=xxx
     ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll receive a deployment URL like `https://uct-frontend-xxx.vercel.app`

### Method 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment (interactive)
   vercel

   # Subsequent deployments
   vercel --prod
   ```

4. **Add Environment Variables**
   ```bash
   vercel env add NODE_ENV
   vercel env add VITE_API_URL
   # ... add all other variables
   ```

5. **Redeploy with Variables**
   ```bash
   vercel --prod
   ```

### Method 3: Using GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10.4.1
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to Vercel
        uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          production: true
```

## Environment Variables

### Setting Environment Variables on Vercel

1. **Via Dashboard**
   - Project Settings → Environment Variables
   - Add variables for different environments (Development, Preview, Production)

2. **Via CLI**
   ```bash
   vercel env add VARIABLE_NAME
   # Enter the value when prompted
   ```

3. **Via `.env` files**
   - Create `.env.production` in root
   - Variables will be used during build

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `PORT` | Server port | `3000` |
| `VITE_API_URL` | API endpoint | `https://api.example.com` |
| `VITE_FIREBASE_API_KEY` | Firebase API key | `AIzaSy...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | `project.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | `project-id` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage | `project.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID | `123456789` |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | `1:123456789:web:abc...` |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API key | `AIzaSy...` |

## Custom Domain

### Connect Custom Domain

1. **Via Vercel Dashboard**
   - Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain name
   - Follow DNS configuration instructions

2. **DNS Configuration**
   - **Option A: Nameservers** (Recommended)
     - Update your domain registrar to use Vercel's nameservers
     - Vercel will handle DNS automatically

   - **Option B: CNAME Record**
     - Add CNAME record pointing to `cname.vercel.com`
     - Add TXT record for domain verification

3. **SSL Certificate**
   - Automatically provisioned by Let's Encrypt
   - Valid for 90 days, auto-renewed

### Example DNS Configuration

```
Type    Name    Value
CNAME   www     cname.vercel.com
A       @       76.76.19.132
AAAA    @       2606:4700:4700::1111
```

## Monitoring and Logs

### View Deployment Logs

1. **Via Vercel Dashboard**
   - Project → Deployments
   - Click on a deployment
   - View build and runtime logs

2. **Via CLI**
   ```bash
   vercel logs --follow
   ```

### Monitor Performance

1. **Web Analytics**
   - Project Settings → Analytics
   - View page performance metrics

2. **Function Metrics**
   - Monitor serverless function execution time
   - Check memory usage and errors

3. **Error Tracking**
   - Project Settings → Monitoring
   - Configure error alerts

## Rollback

### Rollback to Previous Deployment

1. **Via Vercel Dashboard**
   - Project → Deployments
   - Find the previous stable deployment
   - Click the three dots menu
   - Select "Promote to Production"

2. **Via CLI**
   ```bash
   vercel rollback
   ```

## Alternative Platforms

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Authorize and select repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Netlify automatically deploys on git push

### AWS Amplify

1. **Connect Repository**
   - AWS Amplify Console
   - Connect your Git repository

2. **Configure**
   - Build settings: `npm run build`
   - Output directory: `dist`

3. **Deploy**
   - Amplify handles build and deployment

### Heroku

1. **Create App**
   ```bash
   heroku create your-app-name
   ```

2. **Set Buildpacks**
   ```bash
   heroku buildpacks:add heroku/nodejs
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Docker + Any Cloud Provider

1. **Build Docker Image**
   ```bash
   docker build -t uct-frontend:latest .
   ```

2. **Push to Registry**
   ```bash
   docker tag uct-frontend:latest your-registry/uct-frontend:latest
   docker push your-registry/uct-frontend:latest
   ```

3. **Deploy to Cloud**
   - Google Cloud Run
   - AWS ECS
   - Azure Container Instances
   - DigitalOcean App Platform

## Troubleshooting Deployment

### Build Fails with "Cannot find module"

1. Check `pnpm-lock.yaml` is committed
2. Verify all dependencies in `package.json`
3. Clear Vercel cache:
   ```bash
   vercel env pull  # Pull current env vars
   vercel build --prod
   ```

### Environment Variables Not Loading

1. Verify variables are set in Vercel dashboard
2. Check variable names match exactly (case-sensitive)
3. Redeploy after adding variables:
   ```bash
   vercel --prod
   ```

### Slow Build Times

1. Check build logs for bottlenecks
2. Optimize dependencies (remove unused packages)
3. Use Vercel's cache:
   - Project Settings → Git
   - Enable "Automatic Git Caching"

### Runtime Errors

1. Check Vercel logs:
   ```bash
   vercel logs --follow
   ```

2. Verify environment variables are correct
3. Check server/index.ts for errors
4. Test locally: `npm run build && npm start`

## Performance Optimization

### Reduce Build Time

1. **Use pnpm** instead of npm
2. **Optimize dependencies**
   ```bash
   npm list --depth=0
   # Remove unused packages
   ```

3. **Enable Vercel Analytics**
   - Monitor real user metrics
   - Identify performance bottlenecks

### Reduce Bundle Size

1. **Analyze bundle**
   ```bash
   npm install -g vite-plugin-visualizer
   ```

2. **Tree-shake unused code**
   - Use ES modules
   - Remove unused imports

3. **Code splitting**
   - Vite handles this automatically
   - Check `dist/` output

## Security Best Practices

1. **Never commit secrets**
   - Use `.env.local` (in .gitignore)
   - Use Vercel environment variables

2. **Use HTTPS**
   - Automatically enabled on Vercel
   - Redirect HTTP to HTTPS

3. **CORS Configuration**
   - Configure in server/index.ts if needed
   - Restrict to trusted origins

4. **Rate Limiting**
   - Implement in Express middleware
   - Protect against abuse

## Next Steps

After successful deployment:

1. **Test Application**
   - Visit your deployed URL
   - Test all functionality

2. **Set Up Monitoring**
   - Enable Vercel Analytics
   - Configure error alerts

3. **Configure Custom Domain**
   - Add your domain
   - Update DNS records

4. **Set Up CI/CD**
   - Enable automatic deployments
   - Configure preview deployments

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- Project README: [README.md](README.md)
