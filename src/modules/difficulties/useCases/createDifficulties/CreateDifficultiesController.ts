import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDifficultiesUseCase } from './CreateDifficultiesUseCase';

export class CreateDifficultiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;

      const createDifficultiesUseCase = container.resolve(CreateDifficultiesUseCase);
      await createDifficultiesUseCase.execute({ name });

      return response.status(201).json();
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message });
    }
  }
}