FROM node:18

# Installa pnpm globalmente
RUN npm install -g pnpm

# Setta la directory
WORKDIR /app

# Copia tutti i file (compreso package.json, turbo.json, ecc.)
COPY . .

# Installa le dipendenze del monorepo
RUN pnpm install --frozen-lockfile

# Builda tutto
RUN pnpm build

# Espone la porta
EXPOSE 3000

# Avvia il server
CMD ["pnpm", "start"]
