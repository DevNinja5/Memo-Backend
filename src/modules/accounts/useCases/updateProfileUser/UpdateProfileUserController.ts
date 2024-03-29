import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateProfileUserUseCases from "./UpdateProfileUserUseCases";

class UpdateProfileUserController {
   async handle(request: Request, response: Response): Promise<Response> {
      try {
         const { id } = request.user;
         const { name } = request.body;

         const updateProfileUserUseCases = container.resolve(UpdateProfileUserUseCases);
         await updateProfileUserUseCases.execute({ id, name });

         return response.status(200);
      } catch (error) {
         return response.status(error.statusCode).json({ error: error.message });
      }
   }
}

export default UpdateProfileUserController;