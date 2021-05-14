import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

function verifyIfCategoryExists(request, response, next) {
  const { name } = request.body;

  const findCategory = categoriesRepository.findByName(name);

  if (findCategory) {
    return response.status(403).json({ error: "Category already exists!" });
  }

  return next();
}

categoriesRoutes.post("/", verifyIfCategoryExists, (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const list = categoriesRepository.list();

  return response.status(201).json(list);
});

export { categoriesRoutes };
