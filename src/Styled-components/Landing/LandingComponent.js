import React from "react";

import {
  LayoutLanding,
  LayoutInnerCnt,
  TextCnt,
  Text,
  Title,
  Button,
} from "./LandingCSS";

const LandingComponent = ({
  theme,
  img,
  justifyContent,
  button,
  title,
  titleContent,
  textContent,
}) => {
  return (
    <React.Fragment>
      <LayoutLanding backgroundImage={img}>
        <LayoutInnerCnt justifyContent={justifyContent}>
          <TextCnt background={theme.backgroundColorLanding}>
            {title && (
              <Title
                data-testid="title"
                backgroundColor={theme.BackgroundColor}
              >
                {titleContent}
              </Title>
            )}
            <Text color={theme.textColor}>{textContent}</Text>
            {button && (
              <Button data-testid="button" to="/home">
                Let&apos;s cook
              </Button>
            )}
          </TextCnt>
        </LayoutInnerCnt>
      </LayoutLanding>
    </React.Fragment>
  );
};

export default LandingComponent;
