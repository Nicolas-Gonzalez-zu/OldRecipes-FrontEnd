import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getDishTypes } from "../../redux/actions/create_recipe_action";
import { getFilters } from "../../redux/actions/filter_action";
import { withRouter } from "react-router";

import {
  Layout,
  InputCnt,
  DietTypesCnt,
  Title,
  Form,
  Label,
  Button,
  Input,
  Textarea,
  CntButton,
  DishTypesCnt,
  TagsText,
  Tags,
  TagsLabel,
  TitleTags,
} from "./CreateRecipeCSS";

import CreateRecipeIMG from "./img/CreateRecipe.jpg";
const CreateRecipe = withTheme(({ theme, history }) => {
  const dispatch = useDispatch();
  var diets = useSelector((state) => state.filter_reducer.diet_type);
  var dish_types = useSelector(
    (state) => state.create_recipe_reducer.dish_types
  );

  const [errors, setErrors] = useState({});
  const [new_recipe, setRecipe] = useState({
    name: "",
    img: null,
    dish_resume: "",
    score: 0,
    healthy_level: 0,
    recipe: "",
    dishtypes: [],
    diets: [],
  });

  useEffect(() => {
    if (diets.length === 0) {
      dispatch(getFilters());
    }
    if (dish_types.length === 0) {
      dispatch(getDishTypes());
    }
  }, [new_recipe, diets, dispatch, dish_types]);

  const fileSelectedHandler = (event) => {
    console.log();
    setRecipe({ ...new_recipe, img: event.target.files[0] });
  };

  const handleInputChange = function (e) {
    setRecipe({ ...new_recipe, [e.target.name]: e.target.value });

    setErrors(
      validate({
        ...new_recipe,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <Layout backgroundImage={CreateRecipeIMG}>
      <Form
        background={theme.backgroundColorLanding}
        enctype="multipart/form-data"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();

          if (
            errors.name ||
            errors.dish_resume ||
            new_recipe.name.length <= 0 ||
            new_recipe.dish_resume.length <= 0
          ) {
            return alert("We need a name and a dish resume");
          }
          const fd = new FormData();
          fd.append("img", new_recipe.img);
          fd.append("name", new_recipe.name);
          fd.append("dish_resume", new_recipe.dish_resume);
          fd.append("score", new_recipe.score);
          fd.append("healthy_level", new_recipe.healthy_level);
          fd.append("recipe", new_recipe.recipe);

          new_recipe.dishtypes.forEach((dishtype) => {
            fd.append("dishtypes", dishtype);
          });
          new_recipe.diets.forEach((diet) => {
            fd.append("diets", diet);
          });
          axios
            .post("http://localhost:3001/recipe", fd)
            .then((res) => console.log(res));

          history.push("/home");
        }}
      >
        <Title backgroundColor={theme.BackgroundColor}>Share your recipe</Title>
        <InputCnt>
          <Label color={theme.navbarColor}>
            Recipe Name:
            <Input
              type="text"
              name="name"
              value={new_recipe.name}
              onChange={handleInputChange}
            />
          </Label>
          {errors.name && <p>{errors.name}</p>}
          <Label color={theme.navbarColor}>
            Recipe resume:
            <Textarea
              value={new_recipe.dish_resume}
              onChange={handleInputChange}
              name="dish_resume"
            />
          </Label>
          {errors.dish_resume && <p>{errors.dish_resume}</p>}
          <Label color={theme.navbarColor}>
            Recipe:
            <Textarea
              value={new_recipe.recipe}
              name="recipe"
              onChange={handleInputChange}
            />
          </Label>
          <Label color={theme.navbarColor}>
            Recipe Score:
            <Input
              type="number"
              value={new_recipe.score}
              name="score"
              onChange={handleInputChange}
            />
          </Label>
          <Label color={theme.navbarColor}>
            Healtyh food score:
            <Input
              type="number"
              value={new_recipe.healthy_level}
              name="healthy_level"
              onChange={handleInputChange}
            />
          </Label>
        </InputCnt>
        <Label color={theme.navbarColor}>
          Image:
          <Input
            name="img"
            type="file"
            onChange={(e) => fileSelectedHandler(e)}
          />
        </Label>

        <DietTypesCnt background={theme.backgroundColorLanding}>
          <TitleTags backgroundColor={theme.BackgroundColor}>
            Diet types
          </TitleTags>
          {diets?.data?.map((diet) => (
            <Tags key={diet.id + 2}>
              <TagsLabel key={diet.id + 1} htmlFor={diet.id}>
                <Input
                  key={diet.id}
                  id={diet.id}
                  name={diet.id}
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRecipe({
                        ...new_recipe,
                        diets: [...new_recipe.diets, diet.name],
                      });
                    } else {
                      setRecipe({
                        ...new_recipe,
                        diets: new_recipe.diets.filter(
                          (elem) => elem !== diet.name
                        ),
                      });
                    }
                  }}
                />
                <TagsText color={theme.textColor}>{diet.name}</TagsText>
              </TagsLabel>
            </Tags>
          ))}
        </DietTypesCnt>

        <DishTypesCnt background={theme.backgroundColorLanding}>
          <TitleTags backgroundColor={theme.BackgroundColor}>
            Dish types
          </TitleTags>
          {dish_types?.data?.map((dish_type) => (
            <Tags key={dish_type.id + 2}>
              <TagsLabel key={dish_type.id + 1} htmlFor={dish_type.id}>
                <Input
                  key={dish_type.id}
                  id={dish_type.id}
                  name={dish_type.id}
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRecipe({
                        ...new_recipe,
                        dishtypes: [...new_recipe.dishtypes, dish_type.name],
                      });
                    } else {
                      setRecipe({
                        ...new_recipe,
                        dishtypes: new_recipe.dishtypes.filter(
                          (elem) => elem !== dish_type.name
                        ),
                      });
                    }
                  }}
                />
                <TagsText color={theme.textColor}>{dish_type.name}</TagsText>
              </TagsLabel>
            </Tags>
          ))}
        </DishTypesCnt>
        <CntButton>
          <Button backgroundColor={theme.BackgroundColor} type="submit">
            Share recipe
          </Button>
        </CntButton>
      </Form>
    </Layout>
  );
});

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "We need a name for the recipe";
  }

  if (!input.dish_resume) {
    errors.dish_resume = "A resume for the recipe is required";
  }
  return errors;
}

export default withRouter(CreateRecipe);
