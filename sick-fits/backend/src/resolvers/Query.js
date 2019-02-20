const { forwardTo } = require('prisma-binding')

const Query = {
    items: forwardTo('db'),
    //above function just forward us to db because below function items is the same as in prisma.graphql
    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items()
    //     return items
    // }
    item: forwardTo('db'),
};

module.exports = Query;
