const UserRepository = require('./UserRepository');

module.exports = (knex) => {
    const userRepository = new UserRepository(knex);

    return async (ctx, next) => {
        ctx.userRepository = userRepository;

        await next();
    }
}