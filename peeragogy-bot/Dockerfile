FROM flowiseai/flowise:2.2.7

# Ambiente di produzione
ENV NODE_ENV=production
ENV SKIP_HUSKY=1
ENV HUSKY=0

# Questo aiuta con problemi di permessi
USER root

# Creare directory se non esiste
RUN mkdir -p /root/.flowise

# Copiare i file di configurazione
COPY ./peeragogy-bot /root/.flowise

# Le porte da esporre
EXPOSE 3000

# Assicurarsi che ci siano i permessi corretti
RUN chown -R node:node /app
RUN chown -R node:node /root/.flowise

# Tornare all'utente node per sicurezza
USER node

# Avviare Flowise
CMD ["flowise", "start", "--PORT", "3000", "--DISABLE_FLOWISE_TELEMETRY", "true"]
