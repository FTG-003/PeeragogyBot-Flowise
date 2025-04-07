# 🧠 PeeragogyBot – System Architecture

This document outlines the technical architecture of the PeeragogyBot.

## 🧰 Tech Stack

- **Flowise** – no-code AI orchestration
- **NeonDB** – cloud PostgreSQL for session logging (or MongoDB Atlas)
- **Frontend** – HTML/JS popup + fullpage
- **Deploy** – Docker + Railway (config-ready)

## 🗺 Flow Overview

1. User opens chatbot (popup or fullpage)
2. Flowise starts a stateless conversation
3. Messages (optionally) logged to database
4. Session expires after 1 hour

## 🌐 Deployment Options

- **Railway:** Easiest cloud deploy (recommended)
- **Fly.io:** For global edge presence
- **Koyeb:** Lightweight and simple, always-on free tier

> All session data is ephemeral unless logging is enabled.


