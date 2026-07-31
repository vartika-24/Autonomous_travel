from fastapi import FastAPI

app = FastAPI(
    title="Autonomous Travel Concierge API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Backend is running 🚀"
    }