import { Router } from "express";

import userController from "../controllers/UserController";

const routes = Router();

routes.get("/", userController.index);
routes.post("/", userController.store);
routes.get("/:id", userController.show);
routes.put("/:id", userController.update);
routes.delete("/:id", userController.delete);

export default routes;
