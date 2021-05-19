import { ISpecificationsRespository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRespository) {}

  execute({ name, description }: IRequest): void {
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
