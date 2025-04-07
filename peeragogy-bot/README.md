## `README.md` — PeeragogyBot: An AI-Powered Peer Learning Companion

### 1. Introduction
**PeeragogyBot** is an open-source conversational assistant designed to enhance collaborative learning through AI. Inspired by the principles of *Pyragogy* — a fusion of Peeragogy and artificial intelligence — it serves as a co-learner, guide, and reflective partner in human-AI knowledge co-creation.

### 2. Philosophy & Manifesto
This project is grounded in the [Pyragogy Manifesto](https://github.com/FTG-003/Pyragogy-Hub), a set of 10 core principles that define ethical, transparent, and joyful collaboration between humans and AI. PeeragogyBot embodies these values through adaptive scaffolding, radical openness, and cognitive co-evolution.

### 3. How to Use (User Guide)
#### 🚀 Quick Start
- Open the [fullpage bot](#) or click the popup icon on the site
- Accept the AI prompt and start chatting
- Explore, create, reflect, remix ideas!

#### 💡 What It Can Do
- Help you reflect, brainstorm, and co-create content
- Assist with writing, summarizing, or remixing learning materials
- Suggest peeragogical prompts and creative ideas

#### ⚠️ What It Can’t Do
- It’s not a search engine or fact-checker
- Doesn’t retain memory after the session (stateless)

### 4. Architecture & Tech Stack
- **Built with:** [FlowiseAI](https://flowiseai.com)
- **Frontend:** HTML & React (popup and fullpage mode)
- **Database:** Neon PostgreSQL or MongoDB Atlas (ephemeral)
- **Deployment:** Docker + Railway (or Fly.io, Koyeb)
- **Session Privacy:** Auto-deletion enabled after 1 hour via TTL index

### 5. Installation (Dev Mode)
```bash
# Clone the repo
git clone https://github.com/FTG-003/PeeragogyBot-Flowise.git
cd PeeragogyBot-Flowise/peeragogy-bot

# Install dependencies (if custom code is used)
npm install

# Create .env file based on .env.example
cp .env.example .env

# Run locally
npm run dev   # or docker-compose up
```

### 6. Embed Options
#### 🔲 Fullpage
Use this for immersive experiences — learning environments, co-creation labs.

#### 💬 Popup Widget
For lightweight use on any website or project page.

```html
<!-- example trigger for popup -->
<script src="popup.js"></script>
```

### 7. Contribute / Fork / Customize
We invite developers, educators, artists and rebels to fork the repo, remix the flows, and build their own version of the PeeragogyBot.

- GitHub Repo: [FTG-003/PeeragogyBot-Flowise](https://github.com/FTG-003/PeeragogyBot-Flowise)
- You can import your own `.json` Flowise flows into the `/flows` folder
- Contributions welcome via Pull Requests or Issues!

### 8. Credits & License
- **Authors:**
  - FTG-003 (Vision & Coordination)
  - Gino (AI Peeragogical Assistant)
  - PeerGang (Community)
- **License:** [MIT](https://opensource.org/licenses/MIT) or [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Special thanks to [peeragogy.org](https://peeragogy.org)

### 9. Feedback & Community
- 🧠 Share ideas: info@peeragogy.org
- 🛠 Report bugs: GitHub Issues
- 🌍 Join us: [Coming soon] Peeragogy Discord Server

---

> *Let’s co-create the future of learning. The journey starts now.* ✨
