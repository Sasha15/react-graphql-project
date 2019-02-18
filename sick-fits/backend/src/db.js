//This File connects to the remote prisma DB and gives us the ability to query it with JS
//Using prisma-binding to make all the actions which are in prisma.graphql through out the JS
//prisma.graphql was generated automatically and thankfully to hook post-deploy in prisma.yml. if we omit this hook we will not get new generated file and can't connect to Yoga Graphql Server
const { Prisma } = require('prisma-binding')

const db = new Prisma({
    //telling where is prisma.graphql file
    typeDefs: 'src/generated/prisma.graphql',
    //giving access to Prisma database
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false,
})

module.exports = db