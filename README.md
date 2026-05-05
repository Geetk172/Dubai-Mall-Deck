# Dubai Mall® — Interactive Sales Deck

A world-class, fully interactive browser-based sales deck 
built for The Dubai Mall. Designed to replace the fragmented 
manual pitch process with a cinematic, self-contained sales 
experience for prospective tenants, sponsors, and event partners.

## 🔗 Live Demo
https://dubaimalldeck.netlify.app/

## 🛠️ Tech Stack
- React + Vite + TypeScript
- GSAP 3 (scroll animations)
- Tailwind CSS (styling)
- Google Veo 3 (AI video generation)
- Netlify (deployment)

## ✨ Features
- Cinematic hero with autoplay background video
- AI-generated videos using Google Veo 3
- Non-linear navigation across 8 sections
- GSAP scroll animations and custom gold cursor
- Sponsorship tiers, leasing tabs, event booking CTAs
- Fully responsive desktop and tablet design

## 🎨 Design Decisions
- Luxury gold and black color palette inspired by 
  Apple, Tesla, and Louis Vuitton
- Cormorant Garamond display font for editorial feel
- Cinematic full-screen video sections
- Non-linear navigation so viewers control their journey
- Every section drives toward a business action:
  leasing inquiry, sponsorship, or event booking

## 🤖 AI Tools Used
- Google Veo 3 — AI cinematic video generation
- Claude AI — Development and architecture assistance
- Gemini — Image and visual reference generation

## 📦 Setup Instructions
1. Clone the repo
   git clone https://github.com/Geetk172/Dubai-Mall-Deck
2. Install dependencies
   npm install
3. Run locally
   npm run dev
4. Build for production
   npm run build

## 📁 Project Structure
src/
  components/
    Hero.tsx
    WhySection.tsx
    RetailSection.tsx
    LuxurySection.tsx
    DiningSection.tsx
    AttractionsSection.tsx
    EventsSection.tsx
    CTASection.tsx
    Footer.tsx
    Navbar.tsx
    Loader.tsx
  App.tsx
  main.tsx
dist/ ← Built files served by Netlify

## 🔮 What I Would Improve With More Time
- Add real AI-generated videos for all sections
- Build deeper sub-modules for each leasing category
- Add analytics tracking for CTA clicks
- Improve mobile experience
- Add smooth page transitions between sections

## 👤 Author
Geet 