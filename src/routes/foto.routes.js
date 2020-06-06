import { Router } from "express";
import multer from "multer";

import fotoController from "../controllers/FotoController";

import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig);

const routes = new Router();

routes.post("/", upload.single("arquivo"), fotoController.store);

export default routes;
