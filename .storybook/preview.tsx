import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/design-tokens/themes";

const lightBg = lightTheme.colors.background.generalMain;
const darkBg = darkTheme.colors.background.generalMain;

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "light", value: lightBg },
                { name: "dark", value: darkBg },
            ],
        },
        controls: {
          matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
          },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.backgrounds?.value === darkBg ? darkTheme : lightTheme;

            return (
                <ThemeProvider theme={theme} key={theme.colors.background.generalMain}>
                    <Story />
                </ThemeProvider>
            );
        },
    ],
  };

  export default preview;
