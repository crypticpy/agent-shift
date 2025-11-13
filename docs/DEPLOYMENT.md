# Deployment Guide

Complete deployment instructions for Agent Shift - the AI agents platform transitioning professionals from doers to orchestrators.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Environment Configuration](#environment-configuration)
4. [Building for Production](#building-for-production)
5. [Deployment Options](#deployment-options)
6. [Production Server Setup](#production-server-setup)
7. [Monitoring and Maintenance](#monitoring-and-maintenance)
8. [Troubleshooting](#troubleshooting)
9. [Security Considerations](#security-considerations)

---

## Prerequisites

### Required Software

- **Node.js**: Version 18.x or higher (LTS recommended)
  - Check: `node --version`
  - Download: https://nodejs.org/

- **pnpm**: Version 8.0 or higher (package manager required for this project)
  - Install: `npm install -g pnpm`
  - Check: `pnpm --version`
  - Why pnpm: Faster, more efficient than npm; uses patched dependencies

- **Git**: For version control and deployment workflows
  - Check: `git --version`

### System Requirements

- **Disk Space**: Minimum 2GB (1GB for node_modules, 500MB for dist build)
- **RAM**: Minimum 2GB (4GB+ recommended for fast builds)
- **Internet**: Required for installing dependencies and deploying
- **OS Support**: macOS, Linux, Windows (with WSL2 recommended)

### Manus Platform Requirements (if using Manus deployment)

- Manus workspace with compute credits
- Allowed hosts configured in `vite.config.ts`
- `vite-plugin-manus-runtime` for platform-specific features

---

## Local Development Setup

### Step 1: Clone the Repository

```bash
# Clone from GitHub
git clone https://github.com/crypticpy/agent-shift.git
cd agent-shift/ai-agents-catalog

# Or if already in the directory
cd ai-agents-catalog
```

### Step 2: Install Dependencies

```bash
# Install all project dependencies using pnpm
pnpm install

# This creates node_modules and pnpm-lock.yaml file
# Takes 2-3 minutes on first install
```

### Step 3: Start Development Server

```bash
# Start the Vite dev server with hot module reload
pnpm dev

# Output: Vite v7.x.x ready in xxx ms
#         VITE v7.x.x Local: http://localhost:3000/
#         If port 3000 is busy, Vite finds next available port

# The dev server runs on port 3000 by default
# Open http://localhost:3000 in your browser
```

### Step 4: Verify Installation

- Homepage loads without errors
- Catalog displays 190+ AI tools
- Navigation works smoothly
- No console errors in DevTools

### Development Commands

```bash
# Type checking (no code generation)
pnpm check

# Format code with Prettier
pnpm format

# Preview production build
pnpm preview
```

---

## Environment Configuration

### Environment Variables

Create or update `.env` file in the project root:

```bash
# .env - Application Configuration

# App Display Settings
VITE_APP_TITLE=Agent Shift - AI Agents Catalog
VITE_APP_LOGO=/favicon.svg

# Analytics Configuration (optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-site-id

# Production Server Port (optional, defaults to 3000)
PORT=3000

# Environment (development or production)
NODE_ENV=production
```

### Configuration Files

**vite.config.ts**: Build configuration
- React and Tailwind plugins enabled
- Path aliases configured (@, @shared, @assets)
- Manus platform support enabled
- Allowed hosts for Manus deployment

**tsconfig.json**: TypeScript settings
- Strict mode enabled for type safety
- No code emission (type checking only)
- Module resolution set to "bundler"

**vercel.json**: Vercel-specific configuration
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Catalog Data

- **Primary data source**: `client/public/catalog_data_v2.json`
- **Learn content**: `client/public/learn-*.json`
- **Static assets**: `client/public/`

Update catalog data by modifying JSON files directly. Changes appear after rebuild.

---

## Building for Production

### Single Build Command

```bash
# Build both client and server
pnpm build

# Output:
# - Client: dist/public/ (static files)
# - Server: dist/index.js (Express server)
# Build time: 30-60 seconds on typical hardware
```

### Build Process Breakdown

1. **Client Build** (Vite)
   - Bundles React application
   - Tree-shakes unused code
   - Minifies CSS and JavaScript
   - Optimizes images and assets
   - Output: `dist/public/`

2. **Server Build** (esbuild)
   - Bundles Express.js server
   - Marks node dependencies as external
   - Creates ESM format bundle
   - Output: `dist/index.js`

### Build Output

```
dist/
├── public/              # Static files served to browser
│   ├── index.html       # Single-page app entry point
│   ├── assets/          # Minified JS, CSS, fonts
│   ├── images/          # Optimized images
│   └── catalog_data_v2.json  # Catalog data
└── index.js             # Express server (production)
```

### Verify Build

```bash
# Test the production build locally
pnpm preview

# Starts production server on http://localhost:5000
# Serves files exactly as they will in production
```

---

## Deployment Options

### Option 1: Manus Platform (Recommended)

**Best for**: Quick deployment with minimal configuration, platform-specific features

#### Prerequisites
- Manus workspace access
- Sufficient compute credits
- Domain/subdomain available

#### Steps

```bash
# 1. Build for production
pnpm build

# 2. Package application
tar -czf agent-shift.tar.gz dist/

# 3. Deploy via Manus dashboard or CLI
# Follow Manus documentation for deployment

# 4. Verify deployment
# Visit your-manus-domain.computer
```

#### Manus Configuration
- Allowed hosts in `vite.config.ts`: 
  - `.manuspre.computer`
  - `.manus.computer`
  - `.manus-asia.computer`
  - `.manuscomputer.ai`
  - `.manusvm.computer`
- `vite-plugin-manus-runtime` automatically enabled

---

### Option 2: Vercel (Zero-config Deployment)

**Best for**: Global CDN, serverless, automatic deployments from git

#### Prerequisites
- Vercel account (free tier available)
- GitHub repository (public or private)
- Domain configured (optional)

#### Steps

```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy to Vercel"
git push origin main

# 2. Connect to Vercel
# Visit https://vercel.com/new
# Select your GitHub repository
# Vercel auto-detects Node.js project

# 3. Configure build settings
# Build Command: pnpm build
# Output Directory: dist/public

# 4. Deploy
# Click "Deploy" - takes 1-2 minutes
```

#### Environment Variables in Vercel

```
VITE_APP_TITLE=Agent Shift - AI Agents Catalog
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-site-id
```

#### Automatic Deployments

```bash
# Enable automatic deployments
# Vercel automatically redeploys on push to main
# Preview deployments created for pull requests
```

---

### Option 3: Node.js/Express (Self-hosted)

**Best for**: Full control, on-premise deployment, cost optimization

#### Steps for VPS or Cloud VM

```bash
# 1. SSH into your server
ssh user@your-server.com

# 2. Install Node.js and pnpm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm

# 3. Clone repository
git clone https://github.com/crypticpy/agent-shift.git
cd agent-shift/ai-agents-catalog

# 4. Install dependencies
pnpm install

# 5. Build for production
pnpm build

# 6. Start production server
pnpm start

# Server runs on http://localhost:3000
```

#### Using PM2 Process Manager

```bash
# Install PM2 globally
npm install -g pm2

# Create ecosystem config file
cat > ecosystem.config.js << 'EOFPM2'
module.exports = {
  apps: [
    {
      name: 'agent-shift',
      script: './dist/index.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      max_memory_restart: '500M',
      error_file: './logs/error.log',
      out_file: './logs/out.log'
    }
  ]
};
EOFPM2

# Start with PM2
pm2 start ecosystem.config.js

# Enable auto-restart on system boot
pm2 startup
pm2 save

# Monitor in real-time
pm2 monit
```

#### Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/agent-shift

server {
    listen 80;
    server_name your-domain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### Option 4: Docker Container

**Best for**: Consistent environments, microservices, cloud deployments

#### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy manifest files
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Use dumb-init to handle signals properly
ENTRYPOINT ["/sbin/dumb-init", "--"]

# Start server
CMD ["node", "dist/index.js"]

EXPOSE 3000
```

#### Docker Commands

```bash
# Build image
docker build -t agent-shift:latest .

# Run container locally
docker run -p 3000:3000 -e NODE_ENV=production agent-shift:latest

# Run with environment variables
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e VITE_ANALYTICS_WEBSITE_ID=abc123 \
  agent-shift:latest

# Push to registry
docker tag agent-shift:latest your-registry/agent-shift:latest
docker push your-registry/agent-shift:latest
```

#### Docker Compose

```yaml
version: '3.8'

services:
  agent-shift:
    image: agent-shift:latest
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      PORT: 3000
      VITE_ANALYTICS_WEBSITE_ID: ${ANALYTICS_ID}
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - agent-shift
    restart: unless-stopped
```

---

### Option 5: Cloud Platforms

#### AWS Elastic Beanstalk

```bash
# Install AWS CLI and EB CLI
brew install awsebcli

# Initialize EB application
eb init -p "Node.js 20 running on 64bit Amazon Linux 2" agent-shift

# Create environment
eb create agent-shift-prod

# Deploy
eb deploy

# Monitor logs
eb logs
```

#### Azure App Service

```bash
# Install Azure CLI
brew install azure-cli

# Login
az login

# Create resource group
az group create --name agent-shift --location eastus

# Create App Service Plan
az appservice plan create --name agent-shift-plan \
  --resource-group agent-shift --sku B1 --is-linux

# Create web app
az webapp create --resource-group agent-shift \
  --plan agent-shift-plan --name agent-shift-app \
  --runtime "NODE|20"

# Deploy from local
az webapp deployment source config-zip \
  --resource-group agent-shift \
  --name agent-shift-app --src deploy.zip
```

#### Google Cloud Run

```bash
# Authenticate
gcloud auth login

# Build container
gcloud builds submit --tag gcr.io/your-project/agent-shift

# Deploy
gcloud run deploy agent-shift \
  --image gcr.io/your-project/agent-shift \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

---

## Production Server Setup

### Express Server Configuration

The production server (`server/index.ts`) handles:

1. **Static File Serving**
   - Serves all files from `dist/public/`
   - Includes CSS, JavaScript, images, JSON data

2. **Single-Page App Routing**
   - Returns `index.html` for all undefined routes
   - Enables client-side routing with Wouter
   - Handles deep links correctly

3. **Environment Detection**
   - Production: Serves from `dist/public/`
   - Development: Serves from `dist/public/` (after building)

### Server Configuration Best Practices

```javascript
// Recommended production configuration additions

// 1. Compression
import compression from 'compression';
app.use(compression());

// 2. Security headers
import helmet from 'helmet';
app.use(helmet());

// 3. Rate limiting
import rateLimit from 'express-rate-limit';
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// 4. CORS (if needed)
import cors from 'cors';
app.use(cors({
  origin: ['https://yourdomain.com'],
  credentials: true
}));

// 5. Logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${res.statusCode}`);
  next();
});
```

### Environment-Based Configuration

```bash
# Production environment variables
export NODE_ENV=production
export PORT=3000
export LOG_LEVEL=info

# Optional: Custom analytics
export VITE_ANALYTICS_ENDPOINT=https://your-analytics.com
export VITE_ANALYTICS_WEBSITE_ID=your-site-id
```

---

## Monitoring and Maintenance

### Health Checks

```bash
# Basic health check
curl http://your-domain.com/

# Detailed health check endpoint (optional)
curl http://your-domain.com/api/health

# Response should be: HTTP 200 with HTML content
```

### Logging

```bash
# With PM2
pm2 logs agent-shift

# With Docker
docker logs -f container-id

# With journalctl (systemd)
journalctl -u agent-shift -f
```

### Performance Monitoring

**Metrics to track:**
- Response time (should be <200ms for static files)
- Error rate (target: <0.1%)
- CPU usage (should be <30% average)
- Memory usage (should be <200MB)

**Tools:**
- New Relic: npm install newrelic
- Datadog: npm install datadog-browser-rum
- Sentry: npm install @sentry/node

### Updating Catalog Data

```bash
# 1. Update JSON files
# Edit client/public/catalog_data_v2.json with new tools

# 2. Test locally
pnpm dev
# Verify changes in browser (hot reload)

# 3. Rebuild for production
pnpm build

# 4. Deploy
pnpm start  # or deploy via your platform
```

### Deploying Changes

```bash
# Standard deployment workflow
git add .
git commit -m "Update catalog data"
git push origin main

# For platforms like Vercel, Heroku, Railway
# Automatic deployment triggered on push

# For manual deployment
pnpm build
pnpm start
```

---

## Troubleshooting

### Build Issues

**Problem**: `pnpm install` fails
```bash
# Solution: Clear cache and retry
pnpm store prune
pnpm install
```

**Problem**: Build output is empty
```bash
# Solution: Check Vite configuration
pnpm check  # Run type checking
pnpm build --verbose  # See detailed build info
```

**Problem**: Missing environment variables
```bash
# Solution: Verify .env file exists and has required variables
cat .env
# Should show: VITE_APP_TITLE, etc.
```

### Runtime Issues

**Problem**: Server crashes immediately
```bash
# Check Node.js version
node --version  # Should be 18+

# Check ports
lsof -i :3000  # See what's using port 3000

# Start with verbose logging
NODE_DEBUG=http node dist/index.js
```

**Problem**: Port already in use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process (macOS/Linux)
kill -9 <PID>

# Or use different port
PORT=3001 pnpm start
```

**Problem**: Static files not loading (404 errors)
```bash
# Verify build artifacts exist
ls -la dist/public/

# Check Express configuration serves from correct path
# Edit server/index.ts and verify staticPath

# Rebuild if needed
rm -rf dist
pnpm build
```

### Deployment Issues

**Problem**: Deployment succeeds but site shows blank page
```bash
# Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
# Check DevTools console for errors
# Verify index.html exists in build output

ls -la dist/public/index.html
```

**Problem**: Page loads but catalog is empty
```bash
# Verify catalog data file exists
ls -la dist/public/catalog_data_v2.json

# Check that fetch works in DevTools console
fetch('/catalog_data_v2.json').then(r => r.json()).then(console.log)
```

**Problem**: Environment variables not working
```bash
# Check .env file is in project root (not nested)
ls -la .env

# For production, verify variables are set
echo $VITE_APP_TITLE

# Rebuild after .env changes
rm -rf dist
pnpm build
```

---

## Security Considerations

### HTTPS/SSL

**Required for production:**
- Always use HTTPS (TLS 1.2+)
- Obtain certificate from Let's Encrypt (free) or your CA

**Via Certbot (Let's Encrypt)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-domain.com
```

### Security Headers

**Critical headers to set:**

```bash
# In Nginx configuration or app middleware
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
```

### Environment Secrets

```bash
# Never commit to Git
echo ".env" >> .gitignore
echo "*.key" >> .gitignore

# Use secure secret management
# Vercel Secrets: vercel env set KEY value
# AWS Secrets Manager: aws secretsmanager ...
# HashiCorp Vault: vault write secret/...
```

### Dependency Security

```bash
# Check for vulnerabilities
pnpm audit

# Update packages safely
pnpm update  # within semver constraints
pnpm upgrade  # to latest versions

# Review updates before committing
git diff pnpm-lock.yaml
```

### Government/Compliance Deployment

If deploying to government environments:

1. **Review GOVERNMENT_GUIDE.md** for specific requirements
2. **Compliance certifications**:
   - FedRAMP (federal systems)
   - HIPAA (health data)
   - CJIS (law enforcement)
   - SOC 2 (enterprise security)

3. **Deployment considerations**:
   - Air-gapped/offline environments
   - Restricted network access
   - Audit logging requirements
   - Data residency requirements

---

## Related Documentation

**Developer Documentation**:
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design and technical architecture
- [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) - UI components reference
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Development contribution guidelines
- [CLAUDE.md](../CLAUDE.md) - Project setup and commands

**User & Implementation Guides**:
- [QUICKSTART.md](./quickstart.md) - Fast onboarding (5-10 minutes)
- [USER_GUIDE.md](./user-guide.md) - Comprehensive user documentation
- [GOVERNMENT_GUIDE.md](./government-guide.md) - Government-specific deployment

**Government & Compliance**:
- [COMPLIANCE.md](./COMPLIANCE.md) - Security and regulatory requirements
- [PROCUREMENT.md](./PROCUREMENT.md) - Acquisition guidance

**Phase 2 Methodology**:
- [AI Agent Methodology](./methodology/AI_AGENT_METHODOLOGY.md) - How Agent Shift was built
- [Brand Story](./brand/BRAND_STORY.md) - Mission and values

**Main Resources**:
- [README.md](../README.md) - Project overview and features
- [ROADMAP.md](./ROADMAP.md) - Future development plans

---

## Support and Resources

- **GitHub Issues**: Report bugs and request features
- **GitHub Discussions**: Community support
- **Documentation**: Full docs at docs/
- **Email**: contact@yourdomain.com

---

**Last Updated**: November 2025
**Status**: Production Ready
**License**: MIT
