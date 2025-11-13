# Contributing to Agent Shift

Thank you for your interest in contributing to Agent Shift! This project demonstrates AI agent quality while serving as a community resource for public health, government, and enterprise professionals exploring agentic AI.

We welcome contributions of all kinds: bug reports, feature suggestions, documentation improvements, code contributions, and workflow examples.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
3. [Development Setup](#development-setup)
4. [Contribution Workflow](#contribution-workflow)
5. [Style Guidelines](#style-guidelines)
6. [Community](#community)

---

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

**Summary:** Be respectful, inclusive, and professional. We're here to learn and build together.

---

## How Can I Contribute?

### Reporting Bugs

**Before submitting a bug report:**
- Check the [existing issues](https://github.com/crypticpy/agent-shift/issues) to avoid duplicates
- Verify the bug exists in the latest version
- Collect information about your environment (browser, OS, Node version)

**Submitting a bug report:**
1. Open a [new issue](https://github.com/crypticpy/agent-shift/issues/new)
2. Use the bug report template
3. Include:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details (browser, OS, version)
   - Error messages or console logs

**Example:**
```
Title: Search filter fails with special characters

Steps to reproduce:
1. Navigate to Catalog page
2. Type "AI/ML" in search box (with slash)
3. Click search button

Expected: Show tools matching "AI/ML"
Actual: Search returns no results, console shows error

Environment: Chrome 120, macOS 14.1, Agent Shift v1.0.0
Error: TypeError: Cannot read property 'split' of undefined
```

### Suggesting Features

We love new ideas! Before suggesting a feature:
- Check [existing issues](https://github.com/crypticpy/agent-shift/issues) and [discussions](https://github.com/crypticpy/agent-shift/discussions) for similar suggestions
- Consider if the feature fits Agent Shift's mission (educational platform for agentic AI)

**Submitting a feature request:**
1. Open a [new discussion](https://github.com/crypticpy/agent-shift/discussions/new) in the "Ideas" category
2. Include:
   - Clear description of the feature
   - Why it's valuable (use case)
   - How it aligns with Agent Shift's mission
   - Mockups or examples (if applicable)

### Improving Documentation

Documentation contributions are highly valued! You can help by:
- Fixing typos or unclear explanations
- Adding examples or screenshots
- Expanding existing guides
- Translating documentation

**Documentation areas:**
- README.md
- User guides (USER_GUIDE.md, GOVERNMENT_GUIDE.md)
- Case studies (CASE_STUDIES.md)
- Code comments
- API documentation

**To contribute:**
1. Fork the repository
2. Make your changes
3. Submit a pull request (see [Contribution Workflow](#contribution-workflow))

### Adding AI Tools to the Catalog

Help expand the catalog by suggesting new AI tools!

**Requirements:**
- Tool must be publicly available (not closed beta)
- Clear use case for government, public health, or enterprise
- Documentation available (website, pricing, features)
- Bonus: Compliance certifications (FedRAMP, HIPAA, CJIS, SOC 2)

**Submission process:**
1. Fork the repository
2. Add tool to `client/public/catalog_data_v2.json`
3. Follow the existing schema:
   ```json
   {
     "name": "Tool Name",
     "description": "Brief description (2-3 sentences)",
     "capabilities": ["Capability 1", "Capability 2", "Capability 3"],
     "pricing": "Free/Subscription/Enterprise/Custom",
     "website": "https://example.com",
     "compliance": ["FedRAMP", "HIPAA", "SOC 2"],
     "use_cases": ["Use case 1", "Use case 2"],
     "government_fit": "Excellent/Good/Moderate - explanation"
   }
   ```
4. Submit a pull request with:
   - Tool details
   - Why it's valuable for Agent Shift users
   - Links to documentation/pricing

### Contributing Workflows

Share your AI workflows with the community!

**Good workflow contributions:**
- Solves a common problem
- Clear, step-by-step instructions
- Includes time savings estimate
- Applicable to multiple organizations
- Uses publicly available tools

**Submission process:**
1. Document your workflow:
   - Title and description
   - Prerequisites (tools, data, access)
   - Step-by-step instructions
   - Tips and best practices
   - Time savings estimate
   - Difficulty level (Beginner/Intermediate/Advanced)
2. Create a Markdown file in `/docs/workflows/your-workflow-name.md`
3. Submit a pull request

### Contributing Code

We welcome code contributions! Areas where you can help:
- Bug fixes
- New features (discuss first in GitHub Discussions)
- Performance improvements
- Accessibility improvements
- Test coverage
- Refactoring

**Before you start coding:**
1. Check [existing issues](https://github.com/crypticpy/agent-shift/issues) for "good first issue" or "help wanted" labels
2. Comment on the issue to indicate you're working on it
3. For new features, open a discussion first to validate the approach

---

## Development Setup

### Prerequisites

- **Node.js** 18.0 or higher
- **pnpm** 8.0 or higher (required, not npm or yarn)
- **Git**
- A code editor (VS Code recommended)

### Setup Steps

1. **Fork the repository**
   - Click "Fork" at the top right of this page
   - This creates a copy in your GitHub account

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/agent-shift.git
   cd agent-shift/ai-agents-catalog
   ```

3. **Add upstream remote** (to sync with main repository)
   ```bash
   git remote add upstream https://github.com/crypticpy/agent-shift.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```
   - Open http://localhost:3000 in your browser
   - Changes auto-reload

6. **Verify everything works**
   ```bash
   # Type checking
   pnpm check

   # Code formatting
   pnpm format
   ```

---

## Contribution Workflow

### 1. Create a Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create a feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation improvements
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `perf/` - Performance improvements

### 2. Make Your Changes

**Development workflow:**
```bash
# Make changes in your editor

# Check types (no errors)
pnpm check

# Format code
pnpm format

# Test your changes manually
pnpm dev
# Visit http://localhost:3000 and test

# Build for production (verify no errors)
pnpm build
```

**Git commit guidelines:**
- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issue numbers if applicable (#123)
- Keep commits focused (one logical change per commit)

**Good commit messages:**
```
Add HIPAA filter to catalog search

Users can now filter tools by HIPAA compliance.
Resolves #145
```

```
Fix: Search crashes with special characters

Escape regex special characters in search queries.
Fixes #234
```

### 3. Test Your Changes

**Manual testing checklist:**
- [ ] Feature works as expected
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari
- [ ] Mobile responsive (test on mobile or dev tools)
- [ ] Accessible (keyboard navigation, screen reader friendly)
- [ ] No TypeScript errors (`pnpm check`)
- [ ] Code formatted (`pnpm format`)

### 4. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

**Create pull request:**
1. Go to your fork on GitHub
2. Click "Pull Request"
3. Select your branch
4. Fill out the PR template:
   - **Title**: Clear, descriptive (e.g., "Add HIPAA compliance filter")
   - **Description**: What changed and why
   - **Related Issues**: Link to issues this PR addresses
   - **Screenshots**: If UI changes, include before/after
   - **Testing**: How you tested the changes
   - **Checklist**: Mark completed items

**Example PR description:**
```markdown
## Description
Adds a HIPAA compliance filter to the catalog search functionality.
Users can now filter tools to show only HIPAA-compliant options.

## Related Issues
Resolves #145

## Changes
- Added HIPAA checkbox to filter panel
- Updated search logic to filter by compliance
- Added tests for HIPAA filtering

## Screenshots
[Before] [After]

## Testing
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] TypeScript checks pass
- [ ] Code formatted
```

### 5. Code Review

**What to expect:**
- Maintainers will review your PR within 3-5 business days
- You may receive feedback or change requests
- This is a collaborative process—we'll work together to get it right
- Be responsive to feedback and questions

**Addressing feedback:**
```bash
# Make requested changes
# Commit and push
git add .
git commit -m "Address review feedback"
git push origin feature/your-feature-name
```

The PR will update automatically.

### 6. Merge

Once approved:
- Maintainers will merge your PR
- Your contribution is now part of Agent Shift!
- You'll be added to the contributors list

**After merge:**
```bash
# Sync your main branch
git checkout main
git pull upstream main
git push origin main

# Delete feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## Style Guidelines

### Code Style

**TypeScript:**
- Use TypeScript for all new code
- Leverage type inference (don't over-annotate)
- Use interfaces for object shapes
- Avoid `any` (use `unknown` if type is truly unknown)

**Example:**
```typescript
// Good
interface ToolFilter {
  category?: string;
  compliance?: string[];
  pricing?: string;
}

function filterTools(tools: Tool[], filter: ToolFilter): Tool[] {
  return tools.filter(tool => {
    // Filter logic
  });
}

// Bad
function filterTools(tools: any, filter: any): any {
  // Missing types
}
```

**React/Components:**
- Functional components (no class components)
- Use hooks (useState, useEffect, etc.)
- Keep components focused (< 200 lines ideal)
- Extract reusable logic to custom hooks

**Example:**
```typescript
// Good - Focused component
export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="card-lift">
      <CardHeader>
        <CardTitle>{tool.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{tool.description}</p>
      </CardContent>
    </Card>
  );
}

// Bad - Too many responsibilities
export function ToolCardWithSearchAndFilterAndPaginationAndEverything() {
  // 500 lines of mixed concerns
}
```

**Tailwind CSS:**
- Use Tailwind utility classes (avoid custom CSS)
- Follow existing patterns in the codebase
- Use the `.glass`, `.card-lift`, `.animated-gradient` utility classes
- Consistent spacing (use spacing scale: 1, 2, 4, 6, 8, 12, 16)

**Example:**
```tsx
// Good - Tailwind utilities
<div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg card-lift">
  <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
</div>

// Bad - Inline styles
<div style={{ display: 'flex', padding: '24px', backgroundColor: '#ffffff' }}>
  <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</h2>
</div>
```

### File Organization

**Directory structure:**
```
client/src/
├── components/        # Reusable components
│   ├── ui/           # shadcn/ui components
│   ├── guidance/     # Business case components
│   └── [feature]/    # Feature-specific components
├── pages/            # Route components
├── hooks/            # Custom React hooks
├── contexts/         # React contexts
├── lib/              # Utilities and helpers
└── App.tsx           # Main app component
```

**File naming:**
- Components: PascalCase (e.g., `ToolCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Hooks: camelCase with `use` prefix (e.g., `useToolFilter.ts`)

### Documentation

**Code comments:**
- Comment the "why," not the "what"
- Use TSDoc for public functions
- Keep comments updated when code changes

**Example:**
```typescript
// Good
/**
 * Filters tools based on user-selected criteria.
 * Uses fuzzy matching for search terms to improve discoverability.
 */
function filterTools(tools: Tool[], filter: ToolFilter): Tool[] {
  // Implementation
}

// Bad
// This function filters tools
function filterTools(tools: Tool[], filter: ToolFilter): Tool[] {
  // Loop through tools
  for (const tool of tools) {
    // Check if tool matches filter
  }
}
```

**Markdown documentation:**
- Use clear headings (H2, H3 hierarchy)
- Include code examples where applicable
- Add screenshots for UI-related docs
- Keep line length reasonable (80-100 chars)

### Accessibility

**Requirements:**
- Keyboard navigation (all interactive elements accessible via keyboard)
- Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- ARIA labels where needed
- Color contrast (WCAG 2.1 Level AA minimum)
- Alt text for images

**Example:**
```tsx
// Good
<button
  onClick={handleClick}
  aria-label="Filter by HIPAA compliance"
  className="btn-primary"
>
  Filter
</button>

// Bad
<div onClick={handleClick} className="btn-primary">
  Filter
</div>
```

---

## Community

### Communication Channels

**GitHub Discussions**
- Ask questions
- Share ideas
- Show off projects built with Agent Shift
- [Start a discussion](https://github.com/crypticpy/agent-shift/discussions)

**GitHub Issues**
- Bug reports
- Feature requests (after discussion)
- [View issues](https://github.com/crypticpy/agent-shift/issues)

### Getting Help

**Stuck on something?**
1. Check [documentation](./README.md) and [User Guide](./USER_GUIDE.md)
2. Search [existing issues](https://github.com/crypticpy/agent-shift/issues) and [discussions](https://github.com/crypticpy/agent-shift/discussions)
3. Ask in [GitHub Discussions](https://github.com/crypticpy/agent-shift/discussions)
4. Tag maintainers if urgent (but please be patient—we're volunteers!)

### Recognition

**Contributors are recognized:**
- In the [README](./README.md) contributors section
- In release notes for significant contributions
- With our gratitude and appreciation!

### Maintainers

Current maintainers:
- @crypticpy - Project lead

Interested in becoming a maintainer? Start by making consistent, high-quality contributions, then reach out!

---

## Additional Resources

**Project Documentation:**
- [README](./README.md) - Project overview
- [Quick Start](./QUICKSTART.md) - Get started fast
- [User Guide](./USER_GUIDE.md) - Comprehensive user documentation
- [Government Guide](./GOVERNMENT_GUIDE.md) - Government-specific guidance
- [Case Studies](./CASE_STUDIES.md) - Real-world examples
- [CLAUDE.md](./CLAUDE.md) - Project guide for AI assistants

**External Resources:**
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

## Questions?

If you have questions not covered here, please:
1. Check the [FAQ](./docs/FAQ.md)
2. Ask in [GitHub Discussions](https://github.com/crypticpy/agent-shift/discussions)
3. Open an [issue](https://github.com/crypticpy/agent-shift/issues/new)

---

<div align="center">

**Thank you for contributing to Agent Shift!**

Your contributions help public health, government, and enterprise professionals
discover and adopt agentic AI workflows.

[View Project](./README.md) • [Join Discussions](https://github.com/crypticpy/agent-shift/discussions) • [Report Issues](https://github.com/crypticpy/agent-shift/issues)

</div>
