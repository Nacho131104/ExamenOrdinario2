import { GraphQLError } from "graphql"
import { RestauranteModel } from "./types.ts";
import { Collection } from "mongodb";
import { ObjectId } from "mongodb";

type Context = {
  ResturantsCollection: Collection<RestauranteModel>;
};

export const resolvers ={
    Query :{
        getRestaurant:async(_:unknown, {id}:{id:string},ctx: Context): Promise<RestauranteModel|null> =>{
            return await ctx.ResturantsCollection.findOne({_id:new ObjectId(id)});
        },

        getRestaurants:async(_:unknown, {city}:{city: string},ctx:Context): Promise<RestauranteModel[]> =>{
            return await ctx.ResturantsCollection.find({city}).toArray(); 
        }
    }
}