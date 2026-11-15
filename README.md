# Rishikesh Adventure X

Rishikesh Adventure X is a React website for exploring and booking outdoor activities in Rishikesh, Uttarakhand. It includes adventure listings and details, a gallery, company information, contact enquiries, and a booking modal.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and Run

From the project directory, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The development server is configured to use port `3000`.

## Available Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run the TypeScript check
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Main Pages

- Home
- About
- Adventures and individual adventure details
- Gallery
- Contact

## Technology

- React 19 and TypeScript
- Vite 8
- Material UI (MUI) and Emotion
- React Router for page routing
- Tailwind CSS Vite plugin
- Motion for animations
- Lucide and MUI icons

## Contact Form Delivery

The contact form submits enquiries to **Web3Forms**, which delivers form submissions by email. A valid Web3Forms access key is required for submissions to succeed. The current integration is implemented in `src/pages/Contact/contactController.ts`.

There is **no SMS provider or SMS-sending integration** in this project. The WhatsApp contact link opens a WhatsApp conversation; it does not send an SMS.