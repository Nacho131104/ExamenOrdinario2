export const schema = `#graphql
    type Restaurant {
        id: ID!
        name: String!
        address: String!
        country: String!
        city: String!
        phone: String!
        latitude: Float!
        longitude: Float!
    }
    type Query {
        getRestaurant(id: ID!): Restaurant
        getRestaurants(city: String!): [Restaurant!]!

    }
    type Mutation {
        addRestaurant(name: String!, address: String!, city: String!, phone: String!): Restaurant
        deleteRestaurant(id: ID!): Boolean!

    }

`;