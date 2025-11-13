# Quick Start Guide

**Get up and running with Agent Shift in under 10 minutes**

This guide provides fast onboarding for both non-technical users and developers.

---

## 🎯 Choose Your Path

<table>
  <tr>
    <td width="50%">
      <h3>📱 I want to use the platform</h3>
      <p>Browse AI tools, explore workflows, calculate ROI</p>
      <p><strong>Time: 5 minutes</strong></p>
      <p><a href="#for-non-technical-users">→ Start here</a></p>
    </td>
    <td width="50%">
      <h3>💻 I want to run it locally</h3>
      <p>Set up development environment, modify code</p>
      <p><strong>Time: 10 minutes</strong></p>
      <p><a href="#for-developers">→ Start here</a></p>
    </td>
  </tr>
</table>

---

## 📱 For Non-Technical Users

### Step 1: Access the Platform

**Option A: Visit the Live Site**
- Navigate to [your-deployed-url.com]
- No installation required
- Works on any modern browser

**Option B: Request a Demo**
- Contact us for a guided walkthrough
- Perfect for teams and organizations
- Includes Q&A session

### Step 2: Explore the Catalog (2 minutes)

1. **Browse by Category**
   - Click "Catalog" in the navigation
   - View 18 categories of AI tools
   - Filter by government relevance, compliance, pricing

2. **Search for Specific Tools**
   - Use the search bar at the top
   - Try searching: "document automation", "data analysis", "chatbot"
   - Click any tool card to see details

3. **Filter by Your Needs**
   - **Compliance**: FedRAMP, HIPAA, CJIS, SOC 2
   - **Pricing**: Free, Subscription, Enterprise
   - **Category**: Select your sector (Government, Healthcare, etc.)

### Step 3: Try a Workflow (3 minutes)

1. Navigate to **"Workflows"** section
2. Choose a beginner-friendly workflow:
   - "Daily Email Summary" (5 min setup)
   - "Meeting Notes Automation" (10 min setup)
   - "Document Analysis" (15 min setup)
3. Follow the step-by-step instructions
4. Calculate time savings for your use case

### Step 4: Calculate Your ROI (2 minutes)

1. Go to **"ROI Calculator"**
2. Enter your information:
   - Current time spent on repetitive tasks
   - Number of team members
   - Average hourly cost
3. View results:
   - Time reclaimed per week
   - Annual cost savings
   - Productivity improvements

### Step 5: Learn the Concepts (5-10 minutes)

Visit the **"Learn"** section to understand:
- **Conversational AI basics**: How to interact with AI agents
- **Workflow orchestration**: Chaining tasks together
- **Best practices**: Tips for effective AI delegation

---

## 💻 For Developers

### Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **pnpm** 8.0 or higher ([Install guide](https://pnpm.io/installation))
- **Git** ([Download](https://git-scm.com/downloads))
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

**Check your versions:**
```bash
node --version  # Should show v18.0.0 or higher
pnpm --version  # Should show 8.0.0 or higher
git --version   # Any recent version
```

### Step 1: Clone the Repository (1 minute)

```bash
# Clone the repository
git clone https://github.com/yourusername/agent-shift.git

# Navigate to the project directory
cd agent-shift/ai-agents-catalog

# Verify you're in the right place
ls -la  # Should see package.json, client/, server/, etc.
```

### Step 2: Install Dependencies (2 minutes)

```bash
# Install all dependencies using pnpm
pnpm install

# This will install:
# - React, TypeScript, Vite
# - Tailwind CSS, shadcn/ui components
# - Express.js server
# - All other dependencies
```

**Troubleshooting:**
- If `pnpm install` fails, try: `pnpm install --force`
- If you see peer dependency warnings, you can safely ignore them
- Make sure you're using pnpm, NOT npm or yarn

### Step 3: Start Development Server (1 minute)

```bash
# Start the Vite development server
pnpm dev

# Server will start on http://localhost:3000
# Open your browser and navigate to the URL
```

**You should see:**
```
VITE v5.4.11  ready in 423 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Troubleshooting:**
- **Port already in use**: Kill the process or change the port in `vite.config.ts`
- **Module not found errors**: Run `pnpm install` again
- **Blank page**: Check the browser console for errors

### Step 4: Explore the Codebase (5 minutes)

Key directories to understand:

```
ai-agents-catalog/
├── client/src/           # Frontend React application
│   ├── pages/            # Route components (Home, Learn, Catalog, etc.)
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # shadcn/ui components (53 components)
│   │   ├── guidance/     # Business case components
│   │   └── tool-strategy/ # Tool comparison components
│   ├── hooks/            # Custom React hooks
│   ├── contexts/         # React contexts (Theme)
│   └── lib/              # Utility functions
│
├── client/public/        # Static assets & JSON data
│   ├── catalog_data_v2.json     # 190+ AI tools
│   ├── learn-*.json             # Educational content
│   └── tool-strategy-data.json  # Tool comparisons
│
├── server/               # Express.js server
│   └── index.ts          # Static file server + SPA fallback
│
└── shared/               # Shared code (constants, types)
```

**Important files:**
- `client/src/App.tsx` - Main app component with routing
- `client/src/pages/Home.tsx` - Catalog page with tool grid
- `CLAUDE.md` - Project documentation for AI assistants
- `package.json` - Dependencies and scripts

### Step 5: Make Your First Change (2 minutes)

Let's modify the homepage hero text:

1. Open `client/src/pages/Index.tsx` in your editor
2. Find the hero section (around line 50)
3. Change the text to something new
4. Save the file
5. Watch your browser automatically reload with the changes

**Example change:**
```typescript
// Before
<h1 className="text-5xl font-bold">From Doer to Orchestrator</h1>

// After
<h1 className="text-5xl font-bold">Welcome to Agent Shift!</h1>
```

### Step 6: Run Type Checking (1 minute)

```bash
# Check for TypeScript errors
pnpm check

# Format code with Prettier
pnpm format
```

**Expected output:**
```
✓ No TypeScript errors found
✓ Code formatted successfully
```

### Step 7: Build for Production (2 minutes)

```bash
# Build both client and server
pnpm build

# This creates:
# - dist/public/  (static files)
# - dist/index.js (server bundle)
```

**Test the production build:**
```bash
# Start the production server
pnpm start

# Open http://localhost:3000
```

---

## 🎓 What's Next?

### For Non-Technical Users

**Immediate Next Steps:**
1. **Bookmark key workflows** that apply to your role
2. **Share the platform** with your team
3. **Calculate ROI** for your specific use cases
4. **Join our community** - GitHub Discussions

**Dive Deeper:**
- [User Guide](./USER_GUIDE.md) - Comprehensive walkthrough
- [Use Cases](./docs/USE_CASES.md) - Real-world applications
- [FAQ](./docs/FAQ.md) - Common questions
- [Government Guide](./GOVERNMENT_GUIDE.md) - Gov-specific guidance

**Get Help:**
- [GitHub Discussions](https://github.com/yourusername/agent-shift/discussions)
- [Report an issue](https://github.com/yourusername/agent-shift/issues)
- [Contact us](#) for consulting

### For Developers

**Immediate Next Steps:**
1. **Read the architecture docs** - [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)
2. **Explore components** - [docs/COMPONENT_LIBRARY.md](./docs/COMPONENT_LIBRARY.md)
3. **Check contributing guidelines** - [CONTRIBUTING.md](./CONTRIBUTING.md)
4. **Pick an issue** to work on

**Key Development Tasks:**
```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm check            # Type checking (no emit)
pnpm format           # Format code with Prettier

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm start            # Start production server

# Common workflows
pnpm dev              # Most common - daily development
pnpm check && pnpm build  # Pre-commit checks
```

**Dive Deeper:**
- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - System design
- [COMPONENT_LIBRARY.md](./docs/COMPONENT_LIBRARY.md) - UI components
- [DEPLOYMENT.md](./docs/DEPLOYMENT.md) - Production deployment
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution workflow

**Get Help:**
- Read [CLAUDE.md](./CLAUDE.md) - Project overview for AI assistants
- [GitHub Issues](https://github.com/yourusername/agent-shift/issues) - Bug reports
- [GitHub Discussions](https://github.com/yourusername/agent-shift/discussions) - Questions

---

## 🚨 Common Issues & Solutions

### For Everyone

**Issue: Page not loading**
- **Solution**: Check your internet connection, try refreshing the page
- **Solution**: Clear browser cache and cookies
- **Solution**: Try a different browser (Chrome, Firefox, Safari)

**Issue: Search not working**
- **Solution**: Make sure JavaScript is enabled in your browser
- **Solution**: Check browser console for errors (F12)

### For Developers

**Issue: `command not found: pnpm`**
```bash
# Install pnpm globally
npm install -g pnpm

# Or use Node.js Corepack (recommended)
corepack enable
corepack prepare pnpm@latest --activate
```

**Issue: Port 3000 already in use**
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
```

**Issue: Module not found errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
pnpm install
```

**Issue: TypeScript errors after pulling new code**
```bash
# Restart your editor's TypeScript server
# In VS Code: Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"

# Or reinstall dependencies
pnpm install
```

**Issue: Vite build fails with memory error**
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" pnpm build
```

---

## 💡 Pro Tips

### For Non-Technical Users

1. **Start Small**: Don't try to automate everything at once. Pick one workflow and master it.
2. **Document Your Process**: Before automating, document your current manual process. This helps identify what to delegate.
3. **Review AI Output**: AI agents execute work, but you should always review and refine the results.
4. **Share Success**: When you find a great workflow, share it with your team and community.

### For Developers

1. **Use TypeScript**: The codebase is fully typed. Leverage TypeScript for better developer experience.
2. **Follow Tailwind Patterns**: Use existing Tailwind utility classes instead of custom CSS.
3. **Leverage shadcn/ui**: Before building a new component, check if shadcn/ui has it.
4. **Read CLAUDE.md**: Contains essential project conventions and patterns.
5. **Hot Reload**: Vite's hot reload is fast. Save often and see changes instantly.

---

## 📚 Learning Resources

### Understanding Agentic AI

- **[Learn Section](http://localhost:3000/learn)** - In-app educational content
- **[Use Cases](./docs/USE_CASES.md)** - Real-world examples
- **[Research Findings](./docs/RESEARCH_FINDINGS.md)** - Market analysis
- **[AI Agent Methodology](./docs/AI_AGENT_METHODOLOGY.md)** - How this was built

### Technical Documentation

- **[React Docs](https://react.dev/)** - React 18 features
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript guide
- **[Vite Guide](https://vitejs.dev/guide/)** - Vite documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library

---

## 🤝 Get Involved

### Ways to Contribute

- **Report bugs** - [Create an issue](https://github.com/yourusername/agent-shift/issues/new)
- **Suggest features** - [Start a discussion](https://github.com/yourusername/agent-shift/discussions)
- **Improve docs** - Submit a PR with documentation improvements
- **Add workflows** - Share your AI workflows with the community
- **Spread the word** - Star the repo, share on social media

### Community

- **GitHub Discussions** - Ask questions, share ideas
- **Discord** - Real-time chat with the community [Coming Soon]
- **Newsletter** - Monthly updates on new tools and workflows [Coming Soon]

---

## ✅ Quick Start Checklist

### Non-Technical Users

- [ ] Access the live site or request a demo
- [ ] Browse the catalog and filter by your needs
- [ ] Try one workflow from start to finish
- [ ] Calculate ROI for your use case
- [ ] Read the Learn section
- [ ] Share with your team
- [ ] Join GitHub Discussions

### Developers

- [ ] Install Node.js 18+ and pnpm 8+
- [ ] Clone the repository
- [ ] Run `pnpm install`
- [ ] Start dev server with `pnpm dev`
- [ ] Explore the codebase structure
- [ ] Make a test change and see hot reload
- [ ] Run `pnpm check` for type checking
- [ ] Build for production with `pnpm build`
- [ ] Read CONTRIBUTING.md
- [ ] Pick an issue to work on

---

## 📞 Need Help?

**Can't find what you're looking for?**

- 📖 [Full User Guide](./USER_GUIDE.md)
- 💬 [GitHub Discussions](https://github.com/yourusername/agent-shift/discussions)
- 🐛 [Report an Issue](https://github.com/yourusername/agent-shift/issues)
- 📧 [Contact Us](#)

**For Government & Public Health:**
- 🏛️ [Government Guide](./GOVERNMENT_GUIDE.md)
- 📋 [Compliance Documentation](./docs/COMPLIANCE.md)
- 💼 [Procurement Guidance](./docs/PROCUREMENT.md)

---

<div align="center">

**You're all set! 🎉**

Return to [README](./README.md) • Browse [Documentation](#) • Join [Community](#)

</div>
