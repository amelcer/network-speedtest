import dotenv from "dotenv"

dotenv.config()

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false,
}

const MONGO_DB_NAME = process.env.MONGO_DB_NAME

const MONGO = {
    options: MONGO_OPTIONS,
    url: `mongodb://mongodb:27017/${MONGO_DB_NAME}`,
}

const SERVER_HOSTNAME = process.env.API_HOSTNAME || "localhost"
const SERVER_PORT = process.env.API_PORT || 1337

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
}

const config = {
    mongo: MONGO,
    server: SERVER,
}

export default config
