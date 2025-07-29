from fastapi import FastAPI
from app.api.v1.endpoints  import eggs

print("Hello World")

app = FastAPI(
    title="養鶏場管理API",
    description="卵のカウント、鶏舎情報、気象センサーデータを管理するAPI",
    version="1.0.0"
)

app.include_router(eggs.router, prefix="/api/v1", tags=["卵のカウント"]) # ✨ ここでeggsルーターを登録 ✨

@app.get("/", summary="APIのルートエンドポイント")
def read_root():
    return {"message": "養鶏場管理APIへようこそ！"}