# ResumeAI — AI Resume & Portfolio Builder 🚀

A modern, AI-powered web app that lets you build a professional resume and personal portfolio website just by filling out a simple form. Built entirely using **prompt engineering** with **Antigravity (Google DeepMind's AI coding assistant)** and **Claude**.

> **Live Demo:** [https://vibhor-ai-resume-builder-fyq8i6xny-vibhorbansal98s-projects.vercel.app/](https://vibhor-ai-resume-builder-fyq8i6xny-vibhorbansal98s-projects.vercel.app/)

---

## 🎯 What It Does

- Fill out a guided 7-step form with your details (name, education, skills, projects, experience, certifications, achievements)
- Instantly see your resume rendered in one of **3 professional templates** — Classic, Modern, or Minimal
- **Download your resume as a PDF** with one click
- Get **AI-powered suggestions** to improve your resume (stronger action verbs, missing sections, related skills)
- Automatically generates a beautiful **personal portfolio webpage** from the same data — hero section, skills grid, project cards, experience timeline, and contact section
- Fully **mobile-responsive** with a sleek dark-themed UI

---

## 🖼️ Screenshots

| Landing Page | Form Wizard | Resume Preview |
|:---:|:---:|:---:|
| Hero + Features + CTA | 7-step guided form | Template switching + AI suggestions |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **Vite + React** | Frontend framework & dev server |
| **React Router v7** | Client-side routing |
| **React Context + useReducer** | Global state management |
| **html2pdf.js** | Client-side PDF generation (lazy-loaded) |
| **Lucide React** | Beautiful icon library |
| **Vanilla CSS** | Custom design system with CSS custom properties |

No backend. No API keys. Everything runs 100% in the browser.

---

## 🧠 How I Built This — The AI-Powered Workflow

This is where it gets interesting. I didn't write this app line by line in the traditional sense. Instead, I used **Antigravity** (an agentic AI coding assistant by Google DeepMind) combined with **Claude** to build the entire thing through **prompt engineering**. Here's exactly how I did it:

### Step 1: Setting Up the Environment

I started by enabling the experimental **Agent Teams** feature in Claude Code. This required creating a `settings.json` configuration file at `~/.claude/settings.json` and adding the right flags. I also made sure Node.js and npm were installed on my machine via Homebrew, since this was a fresh setup.

### Step 2: Writing the Master Prompt

I wrote a detailed prompt describing exactly what I wanted — an "AI Resume & Portfolio Builder" with specific features:

- A clean landing page
- A step-by-step form for entering resume details
- Multiple resume templates
- PDF download functionality
- AI suggestions for improving the resume
- An auto-generated portfolio page
- Mobile-friendly, modern, professional UI

The key was being **specific** about what I wanted. Instead of saying "build me a resume app," I listed out every section, every feature, and even the design aesthetic I was going for. The more detailed your prompt, the better the output.

### Step 3: Planning Phase — AI Creates the Architecture

Antigravity didn't just start coding right away. It first created a **detailed implementation plan** — the tech stack choices (Vite + React, no backend, vanilla CSS), the project structure, component hierarchy, and a verification plan. I reviewed and approved this plan before any code was written.

This is a huge advantage of working with AI — you get the planning and thinking phase done properly instead of just jumping into code and making a mess.

### Step 4: Building the Foundation

The AI set up the entire project structure:

1. Initialized a Vite + React project with `npx create-vite@latest`
2. Installed dependencies — `react-router-dom`, `html2pdf.js`, `lucide-react`
3. Created a full **design system** in `index.css` — color palette, typography (Inter + Outfit fonts), spacing scale, glassmorphism effects, animations, and responsive breakpoints
4. Set up **React Context** with `useReducer` for managing all resume data across the app
5. Configured **React Router** with routes for all four pages

### Step 5: Building the Pages — One by One

The AI built each page systematically:

- **Landing Page** — Animated hero section with gradient text, feature cards with hover effects, a "How It Works" three-step guide, and a CTA section. All with smooth `fadeInUp` animations.

- **Form Page** — A 7-step wizard with a visual progress bar. Each step has the right fields — text inputs, textareas, skill tag input (type and press Enter), and the ability to add/remove repeatable items like multiple education entries or projects. State updates flow through React Context.

- **Resume Templates** — Three distinct designs:
  - **Classic** — Traditional serif font, single-column, clean dividers
  - **Modern** — Two-column layout with a dark sidebar for contact/skills
  - **Minimal** — Lots of whitespace, monospace accents, subtle design

- **Preview Page** — Shows the live resume with a template selector at the top. You can switch between templates instantly. There's a "Download PDF" button (uses `html2pdf.js` loaded dynamically), a fullscreen preview mode, and an **AI Suggestions** sidebar.

- **Portfolio Page** — Auto-generated from your resume data. Includes a hero with your initials, About Me section, skills grid with animated bars, project cards with tech stack labels, an experience timeline with gradient dots, and a contact section with clickable email/LinkedIn/GitHub cards.

### Step 6: The AI Suggestions Engine

This was one of the coolest parts. The AI built a client-side heuristic engine that analyzes your resume data in real-time and gives you actionable suggestions:

- **Detects weak verbs** like "did," "made," "helped" and suggests stronger replacements like "Executed," "Developed," "Facilitated"
- **Identifies missing sections** — no summary? no skills? no experience? It tells you why they matter
- **Recommends related skills** — if you have "React," it suggests "TypeScript," "Next.js," "Redux"
- **Checks for missing profile links** — LinkedIn, GitHub

The best part? The suggestions are **clickable** — hit "Apply" and the AI automatically rewrites your content.

### Step 7: Verification — AI Tests Its Own Work

After building everything, Antigravity didn't just hand it off. It ran its own verification:

1. Started the dev server and confirmed zero errors
2. Ran a **full production build** — passed clean
3. Opened the app in a browser and **tested the entire flow end-to-end** — filling all 7 form steps, switching templates, checking the portfolio
4. **Resized the browser to mobile (375px)** and verified responsive layouts, hamburger menu, stacked forms

All automated. All through prompt engineering.

---

## 📂 Project Structure

```
src/
├── main.jsx                          # Entry point
├── App.jsx                           # Router setup
├── index.css                         # Design system + global styles
├── context/
│   └── ResumeContext.jsx             # Global state (useReducer)
├── components/
│   ├── Navbar.jsx / .css             # Navigation bar
│   ├── AISuggestions.jsx / .css      # AI suggestion engine
│   └── ResumeTemplates/
│       ├── ClassicTemplate.jsx / .css
│       ├── ModernTemplate.jsx / .css
│       └── MinimalTemplate.jsx / .css
└── pages/
    ├── LandingPage.jsx / .css        # Home page
    ├── FormPage.jsx / .css           # 7-step form wizard
    ├── PreviewPage.jsx / .css        # Resume preview + PDF download
    └── PortfolioPage.jsx / .css      # Auto-generated portfolio
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/vibhorbansal98/ai-resume-builder.git
cd ai-resume-builder

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser, or visit the [live demo](https://vibhor-ai-resume-builder-fyq8i6xny-vibhorbansal98s-projects.vercel.app/) to start building your resume!

---

## 🌐 Deploying to Vercel

This app is deployed on [Vercel](https://vercel.com/) — the easiest way to host a Vite + React project. Here's how:

### Option 1: Via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import the repo on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and sign in with your GitHub account
   - Click **"Import"** next to your `ai-resume-builder` repository

3. **Configure the project**
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - Leave everything else as default

4. **Click "Deploy"** — Vercel will build and deploy your app in under a minute. You'll get a live URL like:
   ```
   https://your-project-name.vercel.app
   ```

### Option 2: Via Vercel CLI

```bash
# Install the Vercel CLI globally
npm install -g vercel

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

The CLI will walk you through linking your project and choosing settings on the first run.

### Auto-Deployments

Once connected, every push to `main` will trigger an automatic production deployment. Pull requests get their own **preview deployments** with unique URLs — great for testing changes before they go live.

---

## 💡 What I Learned

1. **Prompt engineering is a real skill.** The quality of output is directly proportional to how well you describe what you want. Vague prompts = vague code. Specific prompts = production-ready code.

2. **AI is amazing at scaffolding.** Setting up project structure, design systems, repetitive form code, CSS layouts — AI handles these incredibly well and saves hours of boilerplate work.

3. **Planning matters even with AI.** Having the AI create an implementation plan first, then getting it approved before coding, led to a much more coherent codebase than just saying "build it."

4. **AI can self-verify.** The fact that Antigravity tested its own code in a real browser — filling forms, switching between pages, checking mobile layouts — was genuinely impressive.

5. **The human in the loop is still essential.** I guided the direction, made design decisions, approved the architecture, and asked for specific features. The AI was the builder, but I was the architect.

---

## 📝 License

MIT — feel free to use this for your own resume!

---

*Built with ❤️ using Antigravity + Claude + a lot of thoughtful prompts.*
