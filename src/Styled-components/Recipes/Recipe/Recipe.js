import React from "react";
import { withTheme } from "styled-components";

import { Layout, Card, Img, Tag, Title, TagCnt } from "./RecipeCSS";

const Recipe = withTheme(({ theme, recipes }) => {
  return (
    <Layout>
      {recipes?.map((recipe, index) => (
        <Card key={"CardDetailedRecipe" + recipe.id}>
          <Img
            key={"ImgDetailedRecipe" + recipe.id}
            src={recipe.img}
            alt="recipeImg"
          />
          <Title
            key={"TitleDetailedRecipe" + recipe.id}
            to={`/recipe/${recipe.id}`}
          >
            {recipe.name}
          </Title>
          <TagCnt key={"TagCntDetailedRecipe" + recipe.id}>
            {recipe.diets.map((diet, index) => (
              <Tag key={"TagDetailedRecipe" + index}>{diet.name}</Tag>
            ))}
          </TagCnt>
        </Card>
      ))}
    </Layout>
  );
});

export default Recipe;
