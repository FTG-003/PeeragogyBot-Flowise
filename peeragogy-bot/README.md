# PeeragogyBot Easy Deploy (Flowise)

Questa è una configurazione minimale e stabile per deployare Flowise come PeeragogyBot, senza build complessi, e con persistenza via Neon.

## Contenuto

- `docker-compose.yml` — usa immagine ufficiale di Flowise
- `.env` — variabili d'ambiente (da non committare su GitHub)
- `.dockerignore` — per proteggere file sensibili
- `README.md` — guida rapida

## Istruzioni

1. Clona questa struttura come base per il tuo progetto
2. Inserisci le chiavi reali in Railway → Settings > Variables
3. Esegui `docker-compose up` in locale, oppure deploya su Railway

Se usi Railway, **non servono volumi**: assicurati solo di usare `DATABASE_URI` con Neon.
