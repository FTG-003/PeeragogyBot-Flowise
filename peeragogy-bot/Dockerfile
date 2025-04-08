FROM flowiseai/flowise:latest

WORKDIR /app

# Copia il tuo flow nella home di Flowise
COPY ./peeragogy-bot /root/.flowise

# Railway assegna la porta dinamicamente via env variable $PORT
ENV PORT=${PORT}
ENV HOST=0.0.0.0

# Facoltativo, espone comunque la porta di default
EXPOSE 3000

# Avvia Flowise usando le variabili d'ambiente
CMD ["sh", "-c", "flowise start --PORT=${PORT} --HOST=0.0.0.0"]

