
const mongoose = require('mongoose')

module.exports = () => {
    const evaserver ='mongodb://nurjanahevs:nurjanahves@dbeva-shard-00-00.3gs73.mongodb.net:27017,dbeva-shard-00-01.3gs73.mongodb.net:27017,dbeva-shard-00-02.3gs73.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-hc0xp4-shard-0&authSource=admin&retryWrites=true&w=majority'
    // `mongodb://localhost:27017/Evashop`
    mongoose.connect(evaserver, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    const db = mongoose.connection
    db.once('open', () => {
        console.log('connect mongoose on ', evaserver)
    })
}