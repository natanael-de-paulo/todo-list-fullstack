import Cors from 'cors'

const allowedOrigins = true

const options: Cors.CorsOptions = {
	origin: allowedOrigins,
	optionsSuccessStatus: 200
}

const cors = Cors(options)

export default cors