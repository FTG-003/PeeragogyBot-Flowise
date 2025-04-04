FROM flowiseai/flowise:2.2.7-patch.1

# Configurazioni obbligatorie per Railway
ENV HOST=0.0.0.0
ENV PORT=3000  # Valore di fallback
EXPOSE $PORT

# Healthcheck per i deploy Railway
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:$PORT/api/v1/health || exit 1

# Avvia Flowise SENZA flag CLI
CMD ["flowise", "start"]
