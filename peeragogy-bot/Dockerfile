FROM flowiseai/flowise:latest

WORKDIR /app

# Copia i flussi nella home del container
COPY ./peeragogy-bot/Chatflows /root/.flowise


# Configurazione compatibile Railway
ENV PORT=7860
ENV HOST=0.0.0.0

EXPOSE 3000

# Avvio Flowise sulla porta dinamica
CMD ["sh", "-c", "flowise start --PORT=${PORT} --HOST=${HOST}"]
