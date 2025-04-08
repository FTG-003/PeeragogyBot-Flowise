FROM flowiseai/flowise:latest

WORKDIR /app

# Copia la cartella .flowise dal percorso corretto
COPY ./peeragogy-bot/.flowise /root/.flowise/

# Definisci le variabili d'ambiente
ENV PORT=7860
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["sh", "-c", "flowise start --PORT=${PORT} --HOST=${HOST}"]
