import { GraphQLError } from "graphql"
import { RestauranteModel } from "./types.ts";
import { Collection } from "mongodb";
import { ObjectId } from "mongodb";
import { getHorayMinuto } from "./utils.ts";
import { getTemperature } from "./utils.ts";
type Context = {
  ResturantsCollection: Collection<RestauranteModel>;
};


type AddRestaurantMutationArgs = {
  name: string;
  address: string;
  city: string;
  phone: string;
};
export const resolvers ={
    Restaurant: {
        id:(parent: RestauranteModel) => parent._id?.toString(),
        address:(parent: RestauranteModel) => `${parent.address},${parent.city}, ${parent.country}`,
        datetime:async (parent: RestauranteModel) => {
            return await getHorayMinuto(parent.latitude,parent.longitude)
        },
        temperature:async(parent: RestauranteModel) =>{
            return await getTemperature(parent.latitude,parent.longitude)
        },
    },
    Query :{
        getRestaurant:async(_:unknown, {id}:{id:string},ctx: Context): Promise<RestauranteModel|null> =>{
            return await ctx.ResturantsCollection.findOne({_id:new ObjectId(id)});
        },

        getRestaurants:async(_:unknown, {city}:{city: string},ctx:Context): Promise<RestauranteModel[]> =>{
            return await ctx.ResturantsCollection.find({city}).toArray(); 
        }
    },
    Mutation :{
    }
}