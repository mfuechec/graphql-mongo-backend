const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
        getUser(id: ID!): User
        getUsers: [User]
    }
    
    type User {
        id: ID!
        username: String!
        password: String!
        spotify: Spotify
    }
    
    type Spotify {
        spotifyId: ID
        accessToken: String
        refreshToken: String
    }

    type Mutation {
        addUser(username: String!, password: String!): User
        linkSpotify(userId: ID!, spotifyId: ID!, accessToken: String!, refreshToken: String!): User
    }
`;

module.exports = typeDefs;