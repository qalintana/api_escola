import { Router } from "express";
import alunoController from "../controllers/AlunoController";

import loginRequired from "../middlewares/loginRequired";

const routes = Router();

routes.get("/", alunoController.index);
routes.post("/", loginRequired, alunoController.store);
routes.get("/:id", alunoController.show);
routes.put("/:id", loginRequired, alunoController.update);
routes.delete("/:id", loginRequired, alunoController.delete);

export default routes;
