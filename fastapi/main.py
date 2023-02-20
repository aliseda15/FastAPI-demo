from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse
from starlette.responses import FileResponse
from typing import List
from models import Usuario, Genero, Rol, Actualizacion
from uuid import uuid4, UUID
from database import *

app = FastAPI()


db: List[Usuario] = [
    Usuario(
        id=UUID("ed45c11e-31b5-4662-89e9-67e6e27154da"),
        Nombre="Iker",
        Apellido="Aliseda",
        Genero=Genero.Hombre,
        Rol=[Rol.Estudiante]
    ),
    Usuario(
        id=UUID("28271ad4-57c4-479d-8e5c-10473efe3120"),
        Nombre="Kepa",
        Apellido="Perez",
        Genero=Genero.Hombre,
        Rol=[Rol.Mantenimiento]
    )
]

@app.get("/")
async def root():
    return FileResponse("index.html")

@app.get("/style.css")
async def root():
    return FileResponse("style.css")

@app.get("/index.js")
async def root():
    return FileResponse("index.js")

@app.get("/api/v1/usuarios")
async def pillar_usuarios():   
    return db

@app.post("/api/v1/usuarios")
async def registrar_usuario(usuario:Usuario):
    db.append(usuario)
    return {"id":usuario.id}

@app.delete("/api/v1/usuarios/{usuario_id}")
async def borrar_usuario(usuario_id:UUID):
    for usuario in db:
        if usuario.id == usuario_id:
            db.remove(usuario)
            return 
    raise HTTPException(
        status_code=404,
        detail=f"El id de usuario: {usuario_id} no existe"
    )

@app.put("/api/v1/usuarios/ejercicio")
async def actualizar_usuario(usuario_id:UUID, cambios:Actualizacion):
    for Usuario in db:
        if Usuario.id == usuario_id:
            Usuario.Nombre = cambios.Nombre
            Usuario.Apellido = cambios.Apellido
            Usuario.Rol = cambios.Rol
            return
    raise HTTPException(
        status_code=404,
        detail=f"EL usuario con id {usuario_id} no existe"
    )

@app.get("/app/v1/usuarios/prueba_conexion")
async def recuperar_datos(id:int):
    with conexion.cursor() as cursor:
        sql = "SELECT * FROM usuarios WHERE id = %s"
        cursor.execute(sql, id)
        resultado = cursor.fetchall()
        return resultado