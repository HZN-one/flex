
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
// export const parameters = {
//     // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
//     actions: { argTypesRegex: '^on.*' },
// }

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@storybook/theming'
import { baseTheme } from '../src/Definitions/Theme';

export const decorators = [
    (Story) => (
        <MUIThemeProvider theme={baseTheme}>
            <ThemeProvider theme={baseTheme}>
                {Story()}
            </ThemeProvider>
        </MUIThemeProvider>
    )
];