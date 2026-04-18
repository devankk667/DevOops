from fastapi import FastAPI
from routes.ai import router as ai_router

app = FastAPI()

app.include_router(ai_router, prefix="/ai", tags=["ai"])

# if __name__ == "__main__":