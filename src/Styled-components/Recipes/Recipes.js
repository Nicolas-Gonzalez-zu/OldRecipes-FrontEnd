import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withTheme } from "styled-components";
import Recipe from "./Recipe/Recipe";
import Pagination from "./Pagination/Pagination";

import { sorter } from "./Sorter/Sorter";

const Recipes = withTheme(({ theme }) => {
  var recipes = useSelector((state) => state.search_reducer.recipe);

  //Estado para filtrar primero por dieta
  var diets_filter = useSelector((state) => state.filter_reducer.diet_filter);

  //estado para ordernar
  var order_score = useSelector((state) => state.filter_reducer.order_score);
  var order_name = useSelector((state) => state.filter_reducer.order_name);

  //Recibe los estados anteriores y los pasa por la funcion sorter almacenada en ./Sorter
  let [sorted_recipes] = sorter(diets_filter, recipes, order_name, order_score);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(10);

  //indices de recetas
  const indexLastRecipe = currentPage * recipesPerPage;
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;

  //Corta el array de recetas sorteadas depen diendo de la pagina actual debido a su relacion con los indices de arriba
  //Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length). Extraido de la docu importante recalcar
  const currentRecipes = sorted_recipes?.slice(
    indexFirstRecipe,
    indexLastRecipe
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={sorted_recipes?.length}
        paginate={paginate}
      />
      <Recipe recipes={currentRecipes} />
    </React.Fragment>
  );
});

export default Recipes;
