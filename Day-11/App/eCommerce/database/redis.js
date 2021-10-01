// Things needed to estabish connection with Redis :- 
    // Redis Store
    // Redis Client
const redis=require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");//ye express session as a middleware act karta hai and req.session me redis ko set kar deta hai.

const RedisStore = connectRedis(session);//Redis store for particular session.

// yahan pe host aur port daal diya jiske liye redis connect karna hai.
const redisClient = redis.createClient({
    host: "localhost",
    port: 6379,
})

// for error handling while connecting to redis.
redisClient.on('error', function(err){
    console.error('could not connect to redis', err);
});

// when redis is connected succesfully
redisClient.on('connect', function(){
    console.log("Connected to redis");
})

module.exports = {
    redisClient,
    RedisStore,
    session,
}