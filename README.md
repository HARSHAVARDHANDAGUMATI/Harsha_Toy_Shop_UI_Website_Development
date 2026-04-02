# ToySpark Shop UI

A modern, responsive toy shop frontend built with React, Vite, Tailwind CSS, and reusable component architecture.

This project focuses on a polished e-commerce UI experience for a toy store, with strong attention to visual design, responsiveness, reusable code structure, and production-style frontend practices.

## Overview

ToySpark Shop UI includes:

- A vibrant home page with hero sections, categories, featured products, offers, and carousel-style highlights
- Product listing with real-time search, sorting, category filtering, age-group filtering, discount filtering, and pagination
- Product detail flow with recommendations, quick view, and recently viewed items
- Cart, wishlist, and checkout experience with payment method selection
- Authentication pages with password show/hide and password strength feedback
- Light and dark mode support
- Local storage persistence for theme, cart, wishlist, auth state, and recently viewed products

## Tech Stack

- `React 19`
- `Vite`
- `Tailwind CSS`
- `React Router DOM`
- `Framer Motion`
- `React Icons`
- `React Hot Toast`

## Key Features

### Storefront Experience

- Responsive hero section and promotional layout
- Category-based navigation
- Featured toys and offer banners
- Product quick view modal
- Recently viewed and recommended products

### Product Discovery

- Real-time search filtering
- Category filter
- Age-group filter
- Discount-only filter
- Sorting options
- Pagination
- Loading states and empty states

### Shopping Flow

- Add to cart
- Remove from cart
- Quantity updates
- Wishlist add/remove
- Persistent cart and wishlist using local storage
- Checkout flow with:
  - `UPI`
  - `Credit / Debit Card`
  - `Cash on Delivery`
- Payment success confirmation state

### Authentication

- Login page
- Signup page
- Password show/hide toggle
- Password strength state with visual glow feedback
- Basic validation flow

### UI / UX

- Light and dark theme support
- Responsive layouts for desktop, tablet, and mobile
- Kid-friendly, colorful visual language
- Reusable cards, inputs, buttons, badges, and layout wrappers

## Project Structure

```text
src/
  App/           App shell, routes, providers
  assets/        Static assets
  components/    Reusable UI and feature components
  context/       Theme, auth, cart, wishlist, recent views
  data/          Fake product data
  hooks/         Shared custom hooks
  pages/         Route-level pages
  utils/         Constants, helpers, fake API, formatting
```

## Screens Included

- Home
- Product Listing
- Product Details
- Wishlist
- Cart
- Checkout
- Login
- Signup
- Not Found

## Getting Started

### Prerequisites

- `Node.js 18+`
- `npm`

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Implementation Notes

- Product data is currently powered by a local fake API layer for frontend development speed
- State is persisted using local storage for a more realistic demo experience
- The app is organized to keep route logic, shared UI, business state, and utility logic separated
- Styling is handled with Tailwind utility classes and responsive breakpoints
- The codebase is designed to be easy to extend with a real backend or API integration later

## Production-Ready Highlights

- Reusable component-based structure
- Route-based page separation
- Centralized providers and context management
- Verified build and lint workflow
- Clean GitHub-ready repository presentation

## Future Improvements

- Real backend/API integration
- Order history page
- User profile and saved addresses
- Payment gateway integration
- Advanced product filters
- Unit and integration tests

## Author

Built as a professional frontend UI project for a Toy Shop website with a focus on clean design, responsive behavior, and reusable architecture.
