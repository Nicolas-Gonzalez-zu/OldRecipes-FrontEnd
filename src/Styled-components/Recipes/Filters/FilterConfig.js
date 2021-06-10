import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withTheme } from "styled-components";
import {
  DietTypeCnt,
  Layout,
  Diet,
  LabelDiet,
  CheckBox,
  Sorter,
} from "./FiltersCSS";

import {
  getFilters,
  addFilter,
  removeFilter,
  orderScore,
  orderName,
} from "../../../redux/actions/filter_action";

const FilterConfig = withTheme(({ theme }) => {
  var diets = useSelector((state) => state.filter_reducer.diet_type);
  var dietsFilter = useSelector((state) => state.filter_reducer.diet_filter);
  const active_filter = useSelector(
    (state) => state.filter_reducer.active_filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (diets.length === 0) {
      dispatch(getFilters());
    }
  }, [dispatch, diets, dietsFilter]);

  function checkBoxHandler(checked, name) {
    if (checked) {
      dispatch(addFilter(name));
    } else {
      dispatch(removeFilter(name));
    }
  }

  return (
    <React.Fragment>
      <Layout active={active_filter}>
        <DietTypeCnt>
          {diets?.data?.map((diet) => (
            <Diet key={diet.id + 2}>
              <LabelDiet key={diet.id + 1} htmlFor={diet.id}>
                <CheckBox
                  key={diet.id}
                  id={diet.id}
                  name={diet.id}
                  type="checkbox"
                  onChange={(e) => checkBoxHandler(e.target.checked, diet.name)}
                />
                {diet.name}
              </LabelDiet>
            </Diet>
          ))}
        </DietTypeCnt>
        <Sorter>
          Order by score
          <select onChange={(e) => dispatch(orderScore(e.target.value))}>
            <option>None</option>
            <option>ASC</option>
            <option>DESC</option>
          </select>
        </Sorter>

        <Sorter>
          Order by name
          <select onChange={(e) => dispatch(orderName(e.target.value))}>
            <option>None</option>
            <option>ASC</option>
            <option>DESC</option>
          </select>
        </Sorter>
      </Layout>
    </React.Fragment>
  );
});

export default FilterConfig;
