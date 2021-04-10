import { Router } from "express";

import { ensureAuthenicated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenicated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
