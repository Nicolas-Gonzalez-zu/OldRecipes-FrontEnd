export function sorter(diets_filter, recipes, order_name, order_score) {
  var filtered_recipes = [];
  var sorted_recipes = [];

  if (diets_filter.length === 0) {
    recipes.data?.forEach((recipe) => {
      filtered_recipes.push(recipe);
    });
  } else {
    //Filtra por dieta
    recipes.data?.forEach((recipe) => {
      recipe.diets.forEach((diet) => {
        if (diets_filter.includes(diet.name)) {
          filtered_recipes.push(recipe);
        }
      });
    });

    //Evito que se generen 2 iguales, esto lo hago al comprobar si un elemento se repite 2 veces con diferentes indices. (Explicar con ejemplo dibujado talvez xd)
    for (var i = filtered_recipes.length - 1; i >= 0; i--) {
      if (filtered_recipes.indexOf(filtered_recipes[i]) !== i)
        filtered_recipes.splice(i, 1);
    }
  }
  switch (order_name) {
    case "None":
      sorted_recipes = filtered_recipes;
      break;
    case "ASC":
      //Explicar mediante la documentacion https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      sorted_recipes = filtered_recipes.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      break;
    case "DESC":
      sorted_recipes = filtered_recipes.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      break;

    default:
      sorted_recipes = filtered_recipes;
      break;
  }

  switch (order_score) {
    case "None":
      sorted_recipes = filtered_recipes;
      break;
    case "ASC":
      sorted_recipes = filtered_recipes.sort((a, b) => {
        if (a.score < b.score) {
          return -1;
        }
        if (a.score > b.score) {
          return 1;
        }
        return 0;
      });
      break;
    case "DESC":
      sorted_recipes = filtered_recipes.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        return 0;
      });
      break;

    default:
      sorted_recipes = filtered_recipes;
      break;
  }
  return [sorted_recipes, filtered_recipes];
}
