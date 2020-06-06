import { Router } from "express";

import userController from "../controllers/UserController";

const routes = Router();

routes.post("/", userController.create);
routes.get("/", userController.index);
routes.get("/:id", userController.show);

export default routes;
