FROM flowiseai/flowise:2.2.7-patch.1

# Override ENTRYPOINT del base image
ENTRYPOINT []

ENV PORT=$PORT

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:$PORT/api/v1/health || exit 1

# Usa la forma esplicita exec (array) per evitare sh -c
CMD ["flowise", "start", "--PORT=$PORT", "--HOST=0.0.0.0"]
