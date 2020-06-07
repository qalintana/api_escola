import { Router } from "express";

import fotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";

const routes = new Router();

routes.post("/", loginRequired, fotoController.store);

export default routes;
