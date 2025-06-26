import type { APIweather,APIworldtime } from "./types.ts";



export const getHorayMinuto = async(latitude: string, longitude: string): Promise<string> =>{

    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY){
        throw new Error("No api key disponible")
    }
    const url =`https://api.api-ninjas.com/v1/worldtime?lat=${latitude}&lon=${longitude}`;
    const response = await fetch(url,{
        Headers:{
            "X-API-KEY":API_KEY,
        },
    })

    if(!response.ok){
        throw new Error("Error en la api ninja")
    }

    const data : APIworldtime = await response.json();

    return `${data.hour}: ${data.minute}`;
};


export const getTemperature = async(latitude: string, longitude: string): Promise<number> =>{
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY){
        throw new Error("No api key disponible")
    }
    const url =`https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`;
    const response = await fetch(url,{
        Headers:{
            "X-API-KEY":API_KEY,
        },
    })

    if(!response.ok){
        throw new Error("Error en la api ninja")
    }
    const data : APIweather = await response.json();
    return data.temp;
}