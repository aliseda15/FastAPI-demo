from pydantic import BaseModel
from uuid import UUID, uuid4
from typing import Optional, List
from enum import Enum

class Genero(str, Enum):
    Hombre = "Hombre"
    Mujer = "Mujer"

class Rol(str, Enum):
    Estudiante = "Estudiante"
    Profesor = "Profesor"
    Mantenimiento = "Mantenimiento"

class Usuario(BaseModel):
    id: Optional[UUID] = uuid4()
    Nombre: str
    Apellido: str
    Genero: Optional[str]
    Rol: List[Rol]

class Actualizacion(BaseModel):
    Nombre: Optional[str] 
    Apellido: Optional[str]
    Rol: Optional[List[Rol]] 

class Actualization(BaseModel):
    Nombre: str
    Apellido: str
    Trabajo: str