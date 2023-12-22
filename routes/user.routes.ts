import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes {
  router = Router();
  controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/user", this.controller.get);
    this.router.post("/user", this.controller.create); 
    this.router.post("/login", this.controller.login); 

  }
}

export default new UserRoutes().router;