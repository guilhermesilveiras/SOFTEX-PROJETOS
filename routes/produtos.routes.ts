import { Router } from "express";
import ProdutosC from "../controllers/produtos.controller";

class ProdutosRoutes {
  router = Router();
  controller = new ProdutosController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/produtos", this.controller.findAll);

   // this.router.get("/produto/:id", this.controller.findOne);

    this.router.post("/produto", this.controller.create);

   // this.router.put("/produto/:id", this.controller.update);

   //this.router.delete("/produto/:id", this.controller.delete);
  }
}
export default new ProdutosRoutes().router;