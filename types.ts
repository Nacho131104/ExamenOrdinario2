
import { OptionalId } from "mongodb";


export type RestauranteModel =OptionalId<{
  name: string;                                        
  address: string;
  country: string;
  city: string;
  phone: string;
  latitude: string;
  longitude: string;
}>                                                             



//obtener hora y minuto
export type APIworldtime ={
    hour: number,
    minute: number
}


//obtener temperatura
export type APIweather ={
    temp: number
}

