import { ThemeProviderWrapper as MUIThemeProvider } from '../src/Components/Layout/Initiator';
import { ThemeProvider } from '@storybook/theming';
import { baseTheme } from '../src/Definitions/Theme';

export const parameters = {
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Atom', 'Molecules', 'Organisms', 'Layout', '*'],
        },
    },
    viewMode: "docs",
    previewTabs: {
        "storybook/docs/panel": {
            index: -1
        },
        canvas: { title: "Playground" }
    },
};

export const decorators = [
    (Story) => (
        <MUIThemeProvider>
            <ThemeProvider theme={baseTheme}>
                {Story()}
            </ThemeProvider>
        </MUIThemeProvider>
    )
];