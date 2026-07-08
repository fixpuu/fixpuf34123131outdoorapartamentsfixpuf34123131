from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Outdoor Apartments API")
api_router = APIRouter(prefix="/api")


# ---------- Apartments ----------
APARTMENTS_SEED = [
    {
        "id": "white-relax",
        "name": "White Relax",
        "location": "Località Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.6,
        "reviews_count": 6,
        "amenities": ["parking_free", "wifi_free", "ski_in_ski_out", "non_smoking"],
        "image_index": 0,
        "description": "Un rifugio luminoso ai piedi delle piste di Pila. White Relax ti accoglie con superfici chiare, dettagli in legno e ampie vetrate che catturano la luce delle Alpi. Ideale per chi cerca il comfort dello sci ai piedi senza rinunciare all'eleganza.",
    },
    {
        "id": "abete-n-10",
        "name": "Abete N 10",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.4,
        "reviews_count": 17,
        "amenities": ["wifi_free", "non_smoking"],
        "image_index": 1,
        "description": "Abete N 10 unisce il calore del legno alpino a un design contemporaneo. Un appartamento raccolto e curato nei dettagli, perfetto per una fuga di coppia o piccoli gruppi che vogliono immergersi nell'atmosfera di Pila.",
    },
    {
        "id": "pila-29",
        "name": "Pila 29",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.3,
        "reviews_count": 30,
        "amenities": ["parking_free", "family_rooms", "wifi_free", "non_smoking"],
        "image_index": 2,
        "description": "Spazioso e pensato per le famiglie, Pila 29 offre ambienti versatili e una posizione strategica nel cuore della frazione. Le camere familiari e il parcheggio gratuito lo rendono la scelta ideale per chi viaggia con bambini.",
    },
    {
        "id": "ski-sky-studio-85",
        "name": "Ski&Sky Studiò 85",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 10.0,
        "reviews_count": 12,
        "amenities": ["parking_free", "wifi_free", "non_smoking"],
        "image_index": 3,
        "description": "Un monolocale di design con affaccio sulle vette. Ski&Sky Studiò 85 celebra l'essenzialità alpina: materiali autentici, luce naturale e una vista che diventa protagonista di ogni soggiorno.",
    },
    {
        "id": "chalet-saint-salod",
        "name": "Chalet Saint Salod - Pila",
        "location": "Charvensod (AO), zona Pila",
        "short_location": "Charvensod, Valle d'Aosta",
        "rating": 8.8,
        "reviews_count": 0,
        "amenities": ["non_smoking", "parking_free", "wifi_free"],
        "image_index": 4,
        "description": "Un vero chalet di montagna immerso nella quiete di Charvensod, a pochi minuti da Pila. Chalet Saint Salod restituisce l'anima autentica della Valle d'Aosta con travi a vista, pietra e legno locale.",
    },
    {
        "id": "studio-pila-1800",
        "name": "Studiò Pila 1800",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.3,
        "reviews_count": 46,
        "amenities": ["parking_free", "wifi_free", "non_smoking"],
        "image_index": 5,
        "description": "Studiò Pila 1800 prende il nome dall'altitudine che lo circonda. Un rifugio contemporaneo con arredi selezionati, ideale per chi cerca uno spazio intimo dopo una giornata sulle piste.",
    },
    {
        "id": "pila-63",
        "name": "Pila 63",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.5,
        "reviews_count": 22,
        "amenities": ["parking_free", "ski_in_ski_out", "non_smoking"],
        "image_index": 6,
        "description": "Pila 63 è la definizione di ski-in ski-out. Apri la porta e sei già sulla neve. Un appartamento essenziale, elegante, pensato per chi vive la montagna con intensità.",
    },
    {
        "id": "pila-64",
        "name": "Pila64",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 10.0,
        "reviews_count": 2,
        "amenities": ["parking_free", "wifi_free", "ski_in_ski_out", "non_smoking"],
        "image_index": 7,
        "description": "Il gemello di Pila 63 con un'anima ancora più raccolta. Pila64 offre tutti i comfort di un appartamento moderno, con lo sci ai piedi e le luci del comprensorio a portata di sguardo.",
    },
]

APARTMENT_IMAGES = [
    "https://images.unsplash.com/photo-1634849662801-a00d83441092",
    "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
    "https://images.unsplash.com/photo-1545158535-c3f7168c28b6",
    "https://images.pexels.com/photos/15062485/pexels-photo-15062485.jpeg",
    "https://images.unsplash.com/photo-1696861080288-0cc2f1cd48d5",
    "https://images.pexels.com/photos/17181943/pexels-photo-17181943.jpeg",
    "https://images.unsplash.com/photo-1771824980188-abd59db07585",
    "https://images.unsplash.com/photo-1517404656827-b10222b9ec59",
]


class Apartment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    location: str
    short_location: str
    rating: float
    reviews_count: int
    amenities: List[str]
    description: str
    image: str


def _hydrate(apt: dict) -> Apartment:
    idx = apt.get("image_index", 0) % len(APARTMENT_IMAGES)
    return Apartment(
        id=apt["id"],
        name=apt["name"],
        location=apt["location"],
        short_location=apt["short_location"],
        rating=apt["rating"],
        reviews_count=apt["reviews_count"],
        amenities=apt["amenities"],
        description=apt["description"],
        image=APARTMENT_IMAGES[idx],
    )


@api_router.get("/")
async def root():
    return {"message": "Outdoor Apartments API", "status": "ok"}


@api_router.get("/apartments", response_model=List[Apartment])
async def list_apartments():
    return [_hydrate(a) for a in APARTMENTS_SEED]


@api_router.get("/apartments/{apartment_id}", response_model=Apartment)
async def get_apartment(apartment_id: str):
    for a in APARTMENTS_SEED:
        if a["id"] == apartment_id:
            return _hydrate(a)
    raise HTTPException(status_code=404, detail="Apartment not found")


# ---------- Host requests ("Affidaci il tuo immobile") ----------
class HostRequestCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=4, max_length=40)
    property_address: str = Field(min_length=4, max_length=300)
    email: EmailStr
    description: Optional[str] = Field(default=None, max_length=2000)


class HostRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    phone: str
    property_address: str
    email: EmailStr
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.post("/host-requests", response_model=HostRequest)
async def create_host_request(payload: HostRequestCreate):
    obj = HostRequest(**payload.model_dump())
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.host_requests.insert_one(doc)
    logger.info("New host request from %s <%s>", obj.full_name, obj.email)
    # NOTE: email delivery via Resend is planned but not enabled yet (placeholder email).
    return obj


@api_router.get("/host-requests", response_model=List[HostRequest])
async def list_host_requests():
    docs = await db.host_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    out = []
    for d in docs:
        if isinstance(d.get("created_at"), str):
            d["created_at"] = datetime.fromisoformat(d["created_at"])
        out.append(HostRequest(**d))
    return out


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
