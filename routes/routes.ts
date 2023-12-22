import { Application } from "express";
import homeRoutes from "./home.routes";
import produtosRoutes from "./produtos.routes";
import userRoutes from "./user.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/", homeRoutes); 
    app.use("/produtos", produtosRoutes); 
    app.use("/", userRoutes); 
  }
}