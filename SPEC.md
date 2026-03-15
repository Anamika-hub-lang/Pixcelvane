# Pixcelvane - Design Agency Website Specification

## 1. Project Overview

**Project Name:** Pixcelvane
**Type:** Full-stack Subscription-based Design Agency Website
**Core Functionality:** A premium design agency offering subscription plans for on-demand design services. Clients can submit requests, track progress, and download deliverables through a dashboard.
**Target Users:** Businesses and individuals seeking ongoing design services, and administrators managing the agency.

---

## 2. Tech Stack

- **Frontend:** React 19 + Next.js 16
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Backend:** Node.js + Express (API routes via Next.js)
- **Database:** PostgreSQL (using JSON file storage for demo)
- **Authentication:** JWT-based authentication

---

## 3. Color Palette

### Primary Colors
- **Maroon:** `#7A1E2C`
- **Orange Gradient:** `linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)`
- **Pink Gradient:** `linear-gradient(135deg, #FF4D94 0%, #FF7EB5 100%)`
- **Soft Beige Background:** `#FAF7F2`

### Additional Colors
- **Primary Dark:** `#5A1520`
- **Accent Purple:** `#8B5CF6`
- **Accent Cyan:** `#06B6D4`
- **Accent Yellow:** `#FBBF24`
- **Text Dark:** `#1A1A2E`
- **Text Muted:** `#6B7280`
- **White:** `#FFFFFF`
- **Card Background:** `#FFFFFF`
- **Border Light:** `#E5E0D8`

### Gradients
- **Hero Gradient:** `linear-gradient(135deg, #7A1E2C 0%, #FF6B35 50%, #FF4D94 100%)`
- **Card Glow:** `linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,77,148,0.1) 100%)`
- **Pricing Gradient:** `linear-gradient(180deg, #7A1E2C 0%, #5A1520 100%)`

---

## 4. Typography

### Font Families
- **Headings:** "Clash Display", sans-serif (from CDN)
- **Body:** "Satoshi", sans-serif (from CDN)
- **Accent:** "Space Grotesk", sans-serif (for numbers/stats)

### Font Sizes
- **Hero Title:** 96px (desktop), 48px (mobile)
- **Section Title:** 64px (desktop), 36px (mobile)
- **Card Title:** 28px
- **Body Large:** 20px
- **Body:** 16px
- **Small:** 14px

---

## 5. Page Structure

### 5.1 Landing Page (`/`)

#### Navigation Bar
- Logo: "Pixcelvane" with gradient text
- Links: Home, Services, Portfolio, Pricing, FAQ
- Buttons: Login, Get Started (gradient background)
- Sticky on scroll with backdrop blur

#### Hero Section
- Full viewport height
- Large headline: "Unlimited Design. One Subscription."
- Subheadline: "Transform your brand with premium design services. Get stunning visuals, fast turnaround, and unlimited revisions."
- Two CTA buttons:
  - "Start Creating" (gradient, large)
  - "See Our Work" (outline)
- Animated gradient orbs floating in background
- Creative abstract shapes (CSS-generated)

#### Trusted By Section
- Horizontal scrolling logos (placeholder images)
- Text: "Trusted by 450+ innovative companies"
- 6-8 company logos

#### How It Works Section
- Title: "How It Works"
- 3 steps with large animated illustrations:
  1. "Subscribe" - Choose your plan
  2. "Submit Request" - Tell us what you need
  3. "Receive Design" - Get your stunning design
- Each step has icon, title, description
- Connecting animated line between steps

#### Services Section
- Title: "Our Services"
- 5 service cards in grid:
  1. Website Design
  2. Branding
  3. UI/UX Design
  4. Social Media Creatives
  5. Motion Graphics
- Large image cards (300x400px) with gradient overlays
- Hover: scale up, show "Learn More" button

#### Portfolio Showcase
- Title: "Our Work"
- 6 large portfolio items in masonry grid
- Categories: Web, Branding, Social, Motion
- Hover: zoom effect, show project name overlay

#### Statistics Section
- Animated counters (triggered on viewport enter):
  - 450+ Clients
  - 1200+ Designs Delivered
  - 5+ Years Experience
  - 98% Satisfaction Rate
- Large numbers with gradient text
- Animated counting effect

#### Testimonials Section
- Title: "What Our Clients Say"
- Carousel with client reviews
- Each card: quote, avatar, name, company
- Auto-sliding with manual controls

#### Pricing Section
- Title: "Simple, Transparent Pricing"
- 3 pricing cards:
  1. **Starter** - $299/month
     - 5 Design Requests
     - 24hr Delivery
     - Commercial License
  2. **Growth** - $499/month (Popular tag)
     - 15 Design Requests
     - 12hr Delivery
     - Priority Support
     - Unlimited Revisions
  3. **Unlimited** - $899/month
     - Unlimited Requests
     - 6hr Delivery
     - Dedicated Manager
     - All File Formats
- Cards have gradient borders on hover

#### FAQ Section
- Title: "Frequently Asked Questions"
- Accordion style with 6 questions:
  - "How does the subscription work?"
  - "What file formats will I receive?"
  - "How long does each design take?"
  - "Can I cancel anytime?"
  - "Do you offer refunds?"
  - "What if I'm not satisfied?"
- Smooth expand/collapse animation

#### Final CTA Section
- Full-width gradient background
- Title: "Ready to Transform Your Brand?"
- Subtitle: "Join 450+ companies already creating stunning designs"
- Large "Get Started Now" button
- Animated background shapes

#### Footer
- 4 columns: About, Services, Resources, Contact
- Social media icons
- Copyright text

### 5.2 Client Dashboard (`/dashboard`)

#### Layout
- Sidebar navigation (collapsible)
- Main content area
- Top bar with user info

#### Sections
1. **Overview** - Recent requests, quick stats
2. **Submit Request** - Form with file upload
3. **My Requests** - List of all requests with status
4. **Downloads** - Available files to download
5. **Account Settings** - Profile management

### 5.3 Admin Panel (`/admin`)

#### Layout
- Sidebar navigation
- Main content area
- Stats overview

#### Sections
1. **Dashboard** - Overview stats, recent activity
2. **Clients** - List all clients
3. **Requests** - Manage all design requests
4. **Upload Deliverable** - Upload final files

### 5.4 Authentication Pages

#### Login (`/login`)
- Email/password form
- "Remember me" checkbox
- "Forgot password?" link
- Sign up link

#### Register (`/register`)
- Name, email, password
- Plan selection
- Terms acceptance

---

## 6. Animations

### Scroll Reveal
- Elements fade in and slide up on scroll
- Staggered delays for grouped elements
- Threshold: 0.1

### Floating Elements
- Gradient orbs floating with subtle animation
- Continuous motion, random speeds

### Card Hover Effects
- Scale: 1.02
- Box shadow increase
- Gradient border glow

### Image Hover
- Scale: 1.05
- Smooth transition: 0.3s

### Page Transitions
- Fade in on load
- Slide between pages

### Animated Counters
- Count from 0 to target
- Duration: 2s
- Easing: ease-out

### Button Micro-interactions
- Scale on hover: 1.05
- Gradient shift on hover

---

## 7. Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 8. Acceptance Criteria

### Landing Page
- [ ] Hero section displays with animated background
- [ ] All sections scroll reveal on viewport enter
- [ ] Statistics animate counting when visible
- [ ] Pricing cards have hover effects
- [ ] FAQ accordion works smoothly
- [ ] Fully responsive on all breakpoints

### Client Dashboard
- [ ] Can submit design request with file upload
- [ ] Can view all requests with status
- [ ] Can download deliverables
- [ ] Dashboard shows overview stats

### Admin Panel
- [ ] Can view all clients
- [ ] Can manage requests (change status)
- [ ] Can upload deliverables
- [ ] Dashboard shows overview stats

### General
- [ ] JWT authentication works
- [ ] No console errors
- [ ] Page loads under 3 seconds
- [ ] All animations smooth (60fps)
