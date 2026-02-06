# Personal Portfolio Website

## Project Overview
This is a personal portfolio website built to showcase work, skills, and experience.
- **Purpose**: Personal branding and professional presence
- **Target Audience**: Potential employers, clients, and professional network
- **Design Philosophy**: Modern, minimal aesthetic with clean lines and subtle elegance

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **UI Library**: React 19+
- **Styling**: Tailwind CSS
- **Language**: TypeScript (preferred for type safety)
- **Package Manager**: npm or pnpm
- **Deployment**: Vercel (recommended) or Netlify

## Design Preferences

### Visual Style
- Clean, minimal design with lots of whitespace
- Subtle, refined animations and transitions
- Professional and elegant feel
- Typography-focused with careful hierarchy
- Sophisticated visual presentation

### Color Approach
- Neutral color palette (grays, blacks, whites)
- Single accent color for highlights (blue or similar)
- Subtle gradients where appropriate
- Ensure accessibility (WCAG AA minimum)
- Focus on contrast and readability

### Components
- Prefer custom components over pre-built UI libraries
- Use Tailwind's utility classes extensively
- Implement subtle, refined animations
- Responsive design is mandatory (mobile-first approach)
- Emphasize clean layouts and generous spacing

## Project Structure
```
/app                 # Next.js App Router pages
/components          # Reusable React components
  /ui               # Base UI components (buttons, cards, etc.)
  /sections         # Page sections (hero, about, projects, contact)
  /layout           # Layout components (header, footer, nav)
/lib                # Utility functions and helpers
/public             # Static assets (images, fonts, etc.)
/styles             # Global styles and Tailwind config
```

## Key Features to Include
- [ ] Hero section with impactful introduction
- [ ] About section with bio and skills
- [ ] Projects/Portfolio showcase with images
- [ ] Contact form or contact information
- [ ] Responsive navigation
- [ ] Smooth scrolling and animations
- [ ] SEO optimization (metadata, Open Graph tags)
- [ ] Performance optimization (image optimization, lazy loading)

## Coding Standards

### File Naming
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Pages: lowercase with hyphens (e.g., `about-me/page.tsx`)

### Component Structure
- Use functional components with TypeScript
- Implement proper prop typing with interfaces
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks

### Styling Guidelines
- Mobile-first responsive design
- Use Tailwind utility classes directly in JSX
- Extract repeated patterns into components
- Use Tailwind's built-in animation utilities
- Custom animations can use Framer Motion

### Code Quality
- Write clean, readable code
- Add comments only when logic is complex
- Prefer composition over prop drilling
- Use meaningful variable and function names

## Development Workflow

### Git Workflow
- Main branch: `main` (production-ready code)
- Feature branches: `feature/feature-name`
- Commit messages: Use conventional commits
  - `feat:` for new features
  - `fix:` for bug fixes
  - `style:` for styling changes
  - `refactor:` for code refactoring

### Testing & Quality
- Test in multiple browsers and devices
- Validate responsive design at common breakpoints
- Check accessibility with browser tools
- Optimize images before committing

### Deployment
- Deploy to Vercel for seamless Next.js integration
- Enable automatic deployments from main branch
- Use preview deployments for feature branches

## Content Guidelines
- Keep copy concise and impactful
- Use active voice and strong verbs
- Highlight achievements and unique value
- Include clear calls-to-action
- Proofread all content

## Performance Goals
- Lighthouse score: 90+ across all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total bundle size: Keep minimal

## Accessibility Requirements
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast ratios
- ARIA labels where needed

## Notes for AI Assistant
- Prioritize modern, performant code
- Suggest bold design choices aligned with the colorful aesthetic
- Recommend animations that enhance UX without being distracting
- Ensure all code follows Next.js 15 best practices (App Router)
- Use Tailwind's latest features and patterns
- Focus on creating a memorable, standout portfolio
