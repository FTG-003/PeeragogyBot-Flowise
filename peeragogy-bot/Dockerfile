FROM flowiseai/flowise:2.2.7-patch.1

# Resetta qualsiasi ENTRYPOINT ereditato dal base image
ENTRYPOINT []

# Imposta esplicitamente PORT come variabile (necessario per la forma exec)
ENV PORT=$PORT
ENV HOST=0.0.0.0

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f "http://localhost:$PORT/api/v1/health" || exit 1

# Forma exec per evitare l'iniezione di "sh -c"
CMD ["flowise", "start", "--PORT=${PORT}", "--HOST=${HOST}"]
