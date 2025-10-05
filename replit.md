# Overview

This is a personalized birthday website built for Abhishek as a romantic digital gift. The application features a countdown screen that unlocks at midnight on October 6th, revealing interactive sections including memory calendars, photo galleries, flirty message cards, memory games, and sweet notes. The entire experience is designed with a soft purple theme and playful animations to create an intimate, loving atmosphere.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Client-side routing with Wouter for lightweight navigation
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom purple-themed color palette and CSS variables
- **State Management**: React Query for server state and local React state for component interactions
- **Animations**: Custom CSS animations and transitions with floating elements and interactive effects

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints serving birthday-related content (memories, gallery images, messages)
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **Development Tools**: Hot module reloading with Vite integration in development mode

## Data Storage Solutions
- **Current Implementation**: In-memory storage with TypeScript interfaces
- **Schema Definition**: Zod schemas for type validation of memories, messages, notes, and gallery images
- **Database Preparation**: Drizzle ORM configuration ready for PostgreSQL integration
- **Migration Support**: Database migration system configured with Drizzle Kit

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Express session infrastructure present but not actively used
- **Access Control**: Time-based access control through countdown mechanism

# External Dependencies

## Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL client for future database integration
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration toolkit for PostgreSQL

## UI and Styling
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority & clsx**: Dynamic className composition utilities
- **lucide-react**: Icon library for consistent visual elements
- **embla-carousel-react**: Touch-friendly carousel component

## Development Tools
- **@replit/vite-plugin-***: Replit-specific development plugins for enhanced debugging and banner display
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production builds

## Fonts and Assets
- **Google Fonts**: Poppins and Dancing Script fonts loaded from CDN for typography hierarchy
- **Unsplash Images**: External image URLs used for memory photos and gallery content