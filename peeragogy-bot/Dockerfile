FROM flowiseai/flowise:2.2.7-patch.1

ENTRYPOINT []

# Variabili d'ambiente - NIENTE FLAG CLI
ENV PORT=$PORT
ENV HOST=0.0.0.0

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f "http://localhost:$PORT/api/v1/health" || exit 1

# Comando semplificato SENZA flag
CMD ["flowise", "start"]
