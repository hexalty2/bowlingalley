# GoldenLane Bowl - Product Requirements Document

## Original Problem Statement
Build a landing page and a reservation page for a bowling alley. Sleek design suitable for elderly people and parents. Reservation features: date, time, number of lanes, shoe rental, party packages. Landing page sections: pricing, hours, location, services, gallery, and contact. No integrations needed - use placeholder business name.

## User Personas
1. **Senior Bowlers** - Elderly customers who need accessible, high-contrast UI with large text and simple navigation
2. **Parents/Families** - Planning bowling trips with kids, interested in party packages and group bookings
3. **Event Planners** - Booking corporate events or birthday parties, need comprehensive package options

## Core Requirements
- [x] Landing page with hero, services, pricing, hours, gallery, contact sections
- [x] Responsive design with accessibility focus (large fonts, high contrast)
- [x] Reservation wizard with step-by-step flow
- [x] Lane quantity selection (1-10 lanes)
- [x] Shoe rental count
- [x] Party package options (Kids, Adult, Premium)
- [x] Contact information collection
- [x] Price calculation
- [x] Confirmation page with booking ID

## What's Been Implemented
**Date: January 2026**

### Backend (FastAPI + MongoDB)
- `POST /api/reservations` - Create new reservation
- `GET /api/reservations` - List all reservations
- `GET /api/reservations/{id}` - Get single reservation
- `DELETE /api/reservations/{id}` - Cancel reservation
- `GET /api/pricing` - Get pricing information
- Automatic price calculation with party package support

### Frontend (React)
- **Landing Page** (`/`)
  - Sticky navigation with mobile menu
  - Hero section with CTA buttons
  - Services bento grid (4 services)
  - Pricing cards (3 standard + 3 party packages)
  - Hours & Location section
  - Photo gallery (6 images)
  - Contact section
  - Footer with social links

- **Reservation Page** (`/reserve`)
  - 4-step wizard flow
  - Calendar date picker (shadcn/ui)
  - Time slot grid selection
  - Lane quantity selector
  - Shoe rental counter
  - Party package dropdown
  - Contact form
  - Summary & confirmation
  - Success screen with booking ID

### Design System
- Brand: "GoldenLane Bowl"
- Primary: #E63946 (Red)
- Secondary: #1D3557 (Navy)
- Background: #F1FAEE (Off-white)
- Fonts: Chivo (headings), Manrope (body)
- Accessible: WCAG 2.1 AA compliant contrast

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] Landing page with all sections
- [x] Reservation booking flow
- [x] Price calculation
- [x] MongoDB persistence

### P1 (High Priority)
- [ ] Email confirmation to customers
- [ ] Admin dashboard for viewing/managing reservations
- [ ] Availability checker (prevent double-booking)

### P2 (Medium Priority)
- [ ] Payment integration (Stripe)
- [ ] Google Maps embed for location
- [ ] Customer reviews/testimonials from database
- [ ] Loyalty program / returning customer discounts

### P3 (Nice to Have)
- [ ] SMS reminders before booking
- [ ] Online cancellation with refund
- [ ] Group booking discount calculator
- [ ] League registration system

## Tech Stack
- **Frontend**: React 19, React Router, Tailwind CSS, shadcn/ui
- **Backend**: FastAPI, Motor (async MongoDB)
- **Database**: MongoDB
- **Deployment**: Kubernetes (Emergent platform)

## Next Tasks
1. Add email notifications for reservations (SendGrid/Resend)
2. Build admin dashboard for reservation management
3. Implement availability/slot checker to prevent overbooking
