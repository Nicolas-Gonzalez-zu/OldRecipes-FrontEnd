import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withTheme } from "styled-components";

import { getRecipesDetailed } from "../../redux/actions/detailed_recipe_action";
import parse from "html-react-parser";
import DetailedRecipeIMG from "./img/DetailedRecipeIMG.png";
import {
  Layout,
  Tag,
  Img,
  Title,
  Span,
  CntGnrl,
  Tags,
  TagsLabel,
  P,
  Text,
} from "./DetailedRecipeCSS";

const DetailedRecipe = withTheme(({ theme, recipe }) => {
  var recipe_detailed = useSelector(
    (state) => state.detailed_recipe_reducer.recipe_detailed
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesDetailed(recipe));
  }, [dispatch, recipe]);

  return (
    <Layout backgroundImage={DetailedRecipeIMG}>
      <div>
        <CntGnrl background={theme.backgroundColorLanding}>
          <Title backgroundColor={theme.BackgroundColor}>
            {recipe_detailed.name}
          </Title>
          <Img src={recipe_detailed.img} alt="RecipeImg" />
        </CntGnrl>

        <Tags background={theme.backgroundColorLanding}>
          <TagsLabel color={theme.textColor}>
            <P color={theme.textColor}>Dish score:</P>
            {recipe_detailed?.score}
          </TagsLabel>
          <TagsLabel color={theme.textColor}>
            <P color={theme.textColor}>Healthy dish level:</P>
            {recipe_detailed?.healthy_level}
          </TagsLabel>
          <TagsLabel color={theme.textColor}>
            <P color={theme.textColor}>Diets:</P>
            {recipe_detailed.diets?.map((diet, index) => (
              <div key={index}>
                <Tag key={diet.id}>{diet.name}</Tag>
              </div>
            ))}
          </TagsLabel>
          <TagsLabel color={theme.textColor}>
            <P color={theme.textColor}>Dish type:</P>
            {recipe_detailed.dishtypes?.map((dishtypes, index) => (
              <div key={index}>
                <Tag key={dishtypes.id}>{dishtypes.name}</Tag>
              </div>
            ))}
          </TagsLabel>
        </Tags>
      </div>
      <CntGnrl
        color={theme.textColor}
        background={theme.backgroundColorLanding}
      >
        <Span backgroundColor={theme.BackgroundColor} color={theme.textColor}>
          Resume of the dish:
        </Span>
        <Text>
          {recipe_detailed?.dish_resume && parse(recipe_detailed.dish_resume)}
        </Text>
      </CntGnrl>

      <CntGnrl
        color={theme.textColor}
        background={theme.backgroundColorLanding}
      >
        <Span backgroundColor={theme.BackgroundColor} color={theme.textColor}>
          Recipe:
        </Span>
        <Text>{recipe_detailed?.recipe}</Text>
      </CntGnrl>
    </Layout>
  );
});

export default DetailedRecipe;
