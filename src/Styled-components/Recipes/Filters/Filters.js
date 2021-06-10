import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withTheme } from "styled-components";
import { AdvanceSearch } from "./FiltersCSS";

import { activeFilters } from "../../../redux/actions/filter_action";

const Filters = withTheme(({ theme }) => {
  const active_filter = useSelector(
    (state) => state.filter_reducer.active_filter
  );
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {active_filter ? (
        <AdvanceSearch
          type="button"
          onClick={(e) => {
            dispatch(activeFilters(!active_filter));
          }}
        >
          Close advance search
        </AdvanceSearch>
      ) : (
        <AdvanceSearch
          type="button"
          onClick={(e) => {
            dispatch(activeFilters(!active_filter));
          }}
        >
          Advance Search
        </AdvanceSearch>
      )}
    </React.Fragment>
  );
});

export default Filters;
