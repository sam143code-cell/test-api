from fastapi import FastAPI

app = FastAPI()

@app.get("/users")
def get_users():
    return {"message": "list of users"}

@app.post("/users/create")
def create_user(name: str):
    return {"status": "created", "name": name}

@app.get("/users/{user_id}/profile")
def get_profile(user_id: int):
    return {"id": user_id, "profile": "data"}
