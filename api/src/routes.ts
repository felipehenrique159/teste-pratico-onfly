import express, { Request, Response } from 'express'
const routes = express.Router()

routes.get('/', async (request: Request, response: Response) => {
  response.send("Hello World")
});

export default routes
