# Concierge Frontend

AI-powered concierge management platform for businesses (B2B SaaS).

## Project Overview
A service where companies (e.g., Airbnb hosts, clinics, hotels) can configure their AI concierge by providing company-specific documentation (manuals, FAQs, house rules). The concierge then assists guests/customers based on this data.

## Core Features
1. Onboarding & Auth: Business registration and login.
2. Concierge Dashboard: Overview of active agents.
3. Knowledge Base (RAG) Management:
 - Upload PDF/Markdown docs.
 - Manual text entry for quick info (e.g., "Wi-Fi password: 123").
 - Link scrapers (optional).
4. Agent Personalization:
 - Tone of voice (Friendly, Professional, Concise).
 - Widget branding (Colors, Logo, Greeting message).
5. Preview Tool: Test the concierge in a sandbox before "publishing".
6. Deployment: Get a script tag to embed the chat on their own site.

## Technical Stack
- Framework: React 18+ (Vite)
- Language: TypeScript
- Styling: Tailwind CSS
- State: Zustand (Auth & UI state), React Query (Data fetching)
- Icons: Lucide React

## Directory Structure
Follows the standard defined in AGENTS.md:
- src/components/ - Shared UI (Buttons, Inputs, Modals).
- src/features/ - Logic for knowledge-base, chat-editor, analytics.
- src/pages/ - Login, Dashboard, Settings, AgentDetails.
- src/services/ - API client for backend communication.
