
import { OptionalId } from "mongodb";


export type RestauranteModel =OptionalId<{
  name: string;                                        
  address: string;
  city: string;
  country: string;
  phone: string;
  latitude: number;
  longitude: number;
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

