import React from "react";
import { withTheme } from "styled-components";
import { Nav, Ul, Li, NavLinkStyled } from "./PaginationCSS";

const Pagination = withTheme(
  ({ theme, recipesPerPage, totalRecipes, paginate }) => {
    const pageNumbers = [];
    //Determina cuantos numeros de pagina tengo que tener
    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Nav>
        <Ul>
          {pageNumbers?.map((number) => (
            <Li key={number}>
              <NavLinkStyled
                onClick={() => paginate(number)}
                to={"#"}
                background={theme.BackgroundColor}
              >
                {number}
              </NavLinkStyled>
            </Li>
          ))}
        </Ul>
      </Nav>
    );
  }
);

export default Pagination;
