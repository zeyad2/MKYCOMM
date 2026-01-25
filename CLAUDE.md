# MKY Communications Landing Page - Project Documentation

## Project Overview

**Client:** MKY Communications
**Project Type:** Professional Landing Page Implementation
**Framework:** Next.js 16 with App Router
**Timeline:** Contract Evaluation Project
**Scope:** First 3 sections of landing page with pixel-perfect implementation

---

## Design System Specifications

### Color Palette

```css
/* Primary Colors */
--background-primary: #000000;          /* Pure black background */
--background-secondary: #0A0A0A;        /* Slightly lighter black for layering */
--text-primary: #FFFFFF;                /* White for headings */
--text-secondary: #A3A3A3;              /* Gray for body text */
--text-muted: #737373;                  /* Muted gray for secondary content */

/* Accent Colors */
--accent-yellow: #F5C842;               /* Yellow/gold for indicators & highlights */
--accent-blue-start: #1E40AF;           /* Blue gradient start */
--accent-blue-end: #3B82F6;             /* Blue gradient end */

/* Interactive States */
--hover-overlay: rgba(255, 255, 255, 0.1);
--button-hover: rgba(245, 200, 66, 0.2);
```

### Typography System

**Font Family:** Modern sans-serif (consider Inter, Outfit, or Space Grotesk for clean, professional look)

```css
/* Heading Scale */
--font-hero: 4rem;              /* 64px - Main hero headline */
--font-h1: 3rem;                /* 48px - Section headings */
--font-h2: 2.25rem;             /* 36px - Subsection headings */
--font-h3: 1.875rem;            /* 30px - Card headings */
--font-body-large: 1.25rem;     /* 20px - Large body text */
--font-body: 1rem;              /* 16px - Standard body text */
--font-small: 0.875rem;         /* 14px - Small text */

/* Font Weights */
--weight-bold: 700;
--weight-semibold: 600;
--weight-medium: 500;
--weight-regular: 400;

/* Line Heights */
--leading-tight: 1.1;           /* For large headlines */
--leading-normal: 1.5;          /* For body text */
--leading-relaxed: 1.75;        /* For large body paragraphs */
```

### Spacing System

```css
/* Spacing Scale (Tailwind-inspired) */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */

/* Section Spacing */
--section-padding-y: 6rem;      /* Vertical padding for sections */
--section-padding-x: 2rem;      /* Horizontal padding */
--container-max-width: 1280px;  /* Max content width */
```

### Breakpoints

```css
/* Mobile First Approach */
--mobile: 375px;        /* Mobile */
--tablet: 768px;        /* Tablet */
--desktop: 1024px;      /* Desktop */
--wide: 1280px;         /* Wide desktop */
--ultrawide: 1536px;    /* Ultra-wide */
```

---

## Section Specifications

### Section 1: Hero Section

**Layout:**
- Full viewport height (min-h-screen)
- Black background with video overlay
- Centered content with max-width container
- Navigation bar at top (fixed/sticky)

**Components:**
1. **Navigation Bar**
   - Logo: "MKYCOMM" (top-left)
   - Menu Items: MeetMKYCOMM, Our Work, Our Savvy, Careers, Blogs
   - CTA Button: "Let's Talk" (right side)
   - Mobile: Hamburger menu

2. **Hero Content**
   - Headline: "With amplification and culture intelligence, comes MKYCOMM."
     - Font size: 64px (desktop), 48px (tablet), 36px (mobile)
     - Font weight: Bold (700)
     - Line height: Tight (1.1)
     - Max width: 900px
     - Yellow highlight on "intelligence"

   - Subheading: Agency description
     - Font size: 18px
     - Font weight: Regular (400)
     - Color: Gray (#A3A3A3)
     - Max width: 800px
     - Margin top: 24px

3. **Background Video**
   - Source: `/public/Home page video.mp4`
   - Autoplay, loop, muted
   - Overlay: Dark gradient for text readability
   - Position: Absolute, covers section
   - Z-index: Behind content

**Interactions:**
- Smooth scroll to next section
- Navigation menu with hover states
- Sticky/fixed navigation on scroll

---

### Section 2: Our Journey Section

**Layout:**
- Full-width section with black background
- Two-column layout (text + visual)
- Responsive: Stack on mobile/tablet

**Components:**

1. **Section Header**
   - Label: "● Our Journey" (yellow dot indicator)
   - Font size: 16px
   - Yellow accent color
   - Margin bottom: 32px

2. **Journey Content (Left Column)**
   - Heading: "Born from a single conviction in 2018..."
   - Font size: 20px
   - Line height: 1.75
   - Max width: 600px
   - Three paragraphs with consistent spacing (24px between)

3. **Visual Content (Right Column)**
   - Train/subway video or image
   - Rounded corners (8px)
   - Aspect ratio: 16:9 or as designed
   - Object-fit: cover

4. **Network Graph Visualization**
   - Interactive SVG or Canvas element
   - Animated connections between nodes
   - Yellow accent color for nodes and lines
   - Centered below content
   - Height: 300-400px

5. **Pull Offs Card**
   - "● Our Pull Offs" label
   - Metric: "15+" (large, bold)
   - Label: "Countries" (below)
   - Label: "Serving Across 15 Countries" (description)
   - Background: Semi-transparent card
   - Border: 1px solid rgba(255,255,255,0.1)
   - Padding: 32px
   - Border radius: 12px

**Interactions:**
- Scroll-triggered animations for text
- Animated network graph (on viewport entry)
- Parallax effect on video/image (optional)

---

### Section 3: MKY Creators Section

**Layout:**
- Full-width section with black background
- Centered content layout
- Card-based design with gradient

**Components:**

1. **Section Header**
   - Label: "● MKY Creators" (yellow dot)
   - Logo/Icon: MKY Creators brand mark
   - Margin bottom: 48px

2. **Main Card**
   - Background: Blue gradient (from #1E40AF to #3B82F6)
   - Border radius: 16px
   - Padding: 64px (desktop), 40px (tablet), 32px (mobile)
   - Max width: 800px
   - Centered

3. **Card Content**
   - Heading: "Welcome to MKY Creators"
     - Font size: 48px (desktop), 36px (tablet), 30px (mobile)
     - Font weight: Bold (700)
     - White color
     - Margin bottom: 24px

   - Description: "MKY Creators connects content creators..."
     - Font size: 18px
     - Font weight: Regular (400)
     - White color with 90% opacity
     - Max width: 600px
     - Line height: 1.75
     - Margin bottom: 40px

4. **Interactive Buttons**
   - Two-button layout (side-by-side on desktop, stacked on mobile)
   - Button 1: "If you are... Content Creator"
     - Background: White
     - Text color: Blue (#1E40AF)
     - Padding: 16px 32px
     - Border radius: 8px
     - Font weight: Semibold (600)

   - Button 2: "Looking for a Content creator"
     - Background: Transparent with white border
     - Text color: White
     - Border: 2px solid white
     - Padding: 16px 32px
     - Border radius: 8px
     - Font weight: Semibold (600)

5. **Explore CTA**
   - Link: "Explore Creators →"
   - Font size: 16px
   - White color
   - Margin top: 24px
   - Hover: Underline

**Interactions:**
- Button hover states (slight scale/glow)
- Card entrance animation (fade + slide up)
- Smooth transitions on interactive elements

---

## Component Architecture

### Proposed Component Structure

```
app/
├── page.tsx                          # Main landing page
├── layout.tsx                        # Root layout (already exists)
├── globals.css                       # Global styles with design tokens
│
components/
├── navigation/
│   ├── Navbar.tsx                    # Main navigation component
│   ├── MobileMenu.tsx                # Mobile hamburger menu
│   └── NavLink.tsx                   # Reusable nav link component
│
├── sections/
│   ├── HeroSection.tsx               # Section 1: Hero
│   ├── JourneySection.tsx            # Section 2: Our Journey
│   └── CreatorsSection.tsx           # Section 3: MKY Creators
│
├── ui/
│   ├── Button.tsx                    # Reusable button component
│   ├── Card.tsx                      # Card component for layouts
│   ├── SectionLabel.tsx              # Yellow dot + label component
│   └── VideoBackground.tsx           # Background video component
│
├── interactive/
│   ├── NetworkGraph.tsx              # Animated network visualization
│   └── ScrollAnimationWrapper.tsx   # Scroll-triggered animations
│
└── icons/
    └── Logo.tsx                      # MKYCOMM logo component
```

### Component Patterns

**Server Components (Default):**
- Static sections without client interactivity
- SEO-critical content (headings, text)
- Layout components

**Client Components ('use client'):**
- Navigation (mobile menu toggle)
- Interactive buttons
- Animated components (NetworkGraph)
- Video controls
- Scroll-triggered animations

---

## Technical Stack & Dependencies

### Core Dependencies (Already Installed)
- ✅ Next.js 16.1.4
- ✅ React 19.2.3
- ✅ TypeScript 5.x
- ✅ Tailwind CSS 4.x

### Additional Dependencies Needed

```json
{
  "dependencies": {
    "framer-motion": "^11.x",           // Animations & scroll effects
    "react-player": "^2.x",             // Video player component (optional)
    "clsx": "^2.x"                      // Utility for conditional classes
  },
  "devDependencies": {
    "@playwright/test": "^1.x"          // E2E testing (already available)
  }
}
```

### Fonts
- **Primary Font:** Inter or Space Grotesk (via next/font/google)
- **Fallback:** system-ui, sans-serif

---

## Development Guidelines

### Code Quality Standards

1. **TypeScript:**
   - Strict mode enabled
   - Proper type definitions for all props
   - No `any` types (use `unknown` if needed)
   - Interface for component props

2. **Component Structure:**
   - One component per file
   - Props interface above component
   - Clear prop naming
   - Default exports for page components
   - Named exports for utility components

3. **Styling:**
   - Tailwind utility classes (primary)
   - CSS modules for complex animations
   - CSS variables for theme tokens
   - Mobile-first responsive design
   - Dark mode considerations

4. **Performance:**
   - Image optimization with next/image
   - Video lazy loading
   - Code splitting for heavy components
   - Minimize client-side JavaScript
   - Use Server Components where possible

5. **Accessibility:**
   - Semantic HTML5 elements
   - ARIA labels where needed
   - Keyboard navigation support
   - Focus indicators
   - Alt text for images
   - Video captions (if applicable)
   - Color contrast ratio: 4.5:1 minimum

### Git Workflow

```bash
# Branch naming
feature/hero-section
feature/journey-section
feature/creators-section
fix/navigation-mobile
refactor/button-component

# Commit message format
feat: implement hero section with video background
fix: resolve mobile navigation overlay issue
refactor: extract button component for reusability
style: adjust spacing in journey section
test: add playwright tests for navigation
```

---

## Testing Strategy

### Manual Testing Checklist

**Responsive Design:**
- [ ] Mobile (375px): Layout stacks properly, text is readable
- [ ] Tablet (768px): Two-column layouts work correctly
- [ ] Desktop (1024px+): Full design displays as intended
- [ ] Ultra-wide (1536px+): Content max-width prevents stretching

**Browser Testing:**
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Functionality:**
- [ ] Navigation menu works on all devices
- [ ] Video autoplays and loops
- [ ] Buttons have hover/active states
- [ ] Animations trigger on scroll
- [ ] Network graph animates correctly
- [ ] All links navigate properly

**Performance:**
- [ ] Lighthouse score: 90+ Performance
- [ ] First Contentful Paint: < 1.5s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Total page size: < 5MB

### Playwright E2E Tests

```typescript
// tests/landing-page.spec.ts

// Navigation tests
test('navigation menu displays all items', async ({ page }) => {
  // Test navigation items are visible
});

test('mobile menu toggles correctly', async ({ page }) => {
  // Test hamburger menu on mobile
});

// Section tests
test('hero section displays with video background', async ({ page }) => {
  // Verify hero content loads
});

test('journey section animates on scroll', async ({ page }) => {
  // Test scroll-triggered animations
});

test('creators section buttons are interactive', async ({ page }) => {
  // Test button hover and click states
});

// Visual regression tests
test('hero section matches design', async ({ page }) => {
  // Screenshot comparison
});
```

---

## Quality Assurance Checklist

### Pre-Submission Checklist

**Code Quality:**
- [ ] No console.log statements in production code
- [ ] No TypeScript errors or warnings
- [ ] ESLint passes with no errors
- [ ] All components have proper TypeScript types
- [ ] Code is formatted consistently
- [ ] No unused imports or variables

**Design Fidelity:**
- [ ] Colors match design system exactly
- [ ] Typography scales correctly across breakpoints
- [ ] Spacing matches design specifications
- [ ] Interactive states (hover, active) work correctly
- [ ] Animations are smooth (60fps)

**Performance:**
- [ ] Images are optimized (next/image)
- [ ] Video is compressed and web-optimized
- [ ] No layout shift (CLS score)
- [ ] Fast initial load time

**Accessibility:**
- [ ] Semantic HTML structure
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast meets WCAG AA standards

**Responsive Design:**
- [ ] Mobile layout (375px - 767px)
- [ ] Tablet layout (768px - 1023px)
- [ ] Desktop layout (1024px+)
- [ ] No horizontal scroll on any breakpoint

**Browser Compatibility:**
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Mobile browsers tested

---

## Next.js 16 Best Practices

### App Router Patterns

1. **Server Components by Default:**
   ```tsx
   // components/sections/HeroSection.tsx
   // This is a Server Component (no 'use client' needed)
   export default function HeroSection() {
     return <section>...</section>;
   }
   ```

2. **Client Components When Needed:**
   ```tsx
   // components/navigation/MobileMenu.tsx
   'use client';

   import { useState } from 'react';

   export function MobileMenu() {
     const [isOpen, setIsOpen] = useState(false);
     // Client-side interactivity
   }
   ```

3. **Image Optimization:**
   ```tsx
   import Image from 'next/image';

   <Image
     src="/path/to/image.jpg"
     alt="Descriptive alt text"
     width={1920}
     height={1080}
     priority // For above-fold images
     placeholder="blur"
   />
   ```

4. **Font Optimization:**
   ```tsx
   // app/layout.tsx
   import { Inter } from 'next/font/google';

   const inter = Inter({ subsets: ['latin'] });
   ```

5. **Metadata for SEO:**
   ```tsx
   // app/page.tsx
   export const metadata = {
     title: 'MKYCOMM - Marketing Communications Agency',
     description: 'Dynamic and innovative marketing communications agency...',
   };
   ```

---

## File Organization

### Project Structure

```
next-tut/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles + design tokens
│   └── favicon.ico
│
├── components/
│   ├── navigation/
│   ├── sections/
│   ├── ui/
│   ├── interactive/
│   └── icons/
│
├── public/
│   ├── Home page video.mp4       # Hero background video
│   ├── Landing page black.pdf    # Design reference
│   └── images/                   # Optimized images
│
├── tests/
│   └── landing-page.spec.ts      # Playwright tests
│
├── lib/
│   └── utils.ts                  # Utility functions
│
└── types/
    └── index.ts                  # Shared TypeScript types
```

---

## Implementation Priority

### Phase 1: Setup & Foundation (30 minutes)
1. Install additional dependencies (framer-motion, clsx)
2. Set up design tokens in globals.css
3. Configure fonts (next/font)
4. Create component folder structure

### Phase 2: Section 1 - Hero (1 hour)
1. Build Navbar component
2. Implement VideoBackground component
3. Create HeroSection with content
4. Add responsive styles
5. Test across breakpoints

### Phase 3: Section 2 - Our Journey (1.5 hours)
1. Build JourneySection layout
2. Implement NetworkGraph component
3. Add PullOffs card
4. Implement scroll animations
5. Test interactions

### Phase 4: Section 3 - MKY Creators (1 hour)
1. Build CreatorsSection
2. Create gradient card design
3. Implement interactive buttons
4. Add entrance animations
5. Test responsive behavior

### Phase 5: Polish & Testing (1 hour)
1. Cross-browser testing
2. Mobile testing
3. Performance optimization
4. Accessibility audit
5. Final review

---

## Known Considerations

### Video Optimization
- The hero video (`Home page video.mp4`) should be:
  - Compressed for web (H.264 codec)
  - Resolution: 1920x1080 max
  - File size: < 5MB ideal
  - Format: MP4 with fallback to WebM

### Network Graph Animation
- Consider using Canvas API or SVG for performance
- Animate only visible nodes (viewport detection)
- Throttle animation on low-end devices
- Provide reduced-motion fallback

### Accessibility Notes
- Video must have controls option (for accessibility)
- Consider providing captions/transcripts
- Ensure keyboard navigation works for all interactive elements
- Test with screen readers (NVDA, JAWS, VoiceOver)

---

## Resources & References

### Design
- Figma file: https://www.figma.com/design/EjgMl6UNS8RUi5pECyWTIj/MKYCOMM?node-id=4930-9204
- PDF reference: `/public/Landing page black.pdf`

### Documentation
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools
- Lighthouse (Performance audit)
- Chrome DevTools (Responsive testing)
- Playwright (E2E testing)
- axe DevTools (Accessibility testing)

---

## Contact & Support

**Project Lead:** Claude Code
**Client:** MKY Communications
**Repository:** E:\projects\next-tut
**Documentation:** This file (CLAUDE.md)

---

*Last Updated: 2026-01-23*
*Version: 1.0*
