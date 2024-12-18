const User = require('../models/User');

const resolvers = {
    Query: {
        hello: () => 'Hello, world',
        getUser: async (_, { id }) => User.findById(id),
        getUsers: async () => User.find(),
    },
    Mutation: {
        addUser: async (_, { username, password }) => {
            const user = new User({ username, password });
            return user.save();
        },
        linkSpotify: async (_, { userId, spotifyId, accessToken, refreshToken }) => {
            const user = await User.findById(userId);
            if (user) {
                user.spotify = { spotifyId, accessToken, refreshToken };
                await user.save();
                return user;
            }
            throw new Error('User not found');
        },
    },
};

module.exports = resolvers;