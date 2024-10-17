import { ProductDto } from "../dtos/producto.dto";
import asyncMiddleware from "../middlewares/async.middleware";
import { Request, Response } from  'express';

class ProductController {

    static createProduct = asyncMiddleware(
        async (req: Request, res: Response) => {
            const productoReq =  new ProductDto(req.body);
            console.log("request: ", productoReq)
            return res.status(201).json(productoReq.toPlainObject());
        }
    )

}

export default ProductController;