import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListFrequenciesUseCase } from './ListFrequenciesUseCase';


export class ListFrequenciesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listFrequenciesUseCase = container.resolve(ListFrequenciesUseCase);
      const frequencies = await listFrequenciesUseCase.execute();

      return response.json(frequencies);
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message });
    }
  }
}