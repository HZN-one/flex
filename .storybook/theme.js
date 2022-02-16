import { create } from '@storybook/theming';
import logo from "./logo.png";

export default create({
    base: 'light',
    colorPrimary: '#DC3931',
    colorSecondary: '#525252',
    fontBase: '"Inter", sans-serif',
    fontCode: 'monospace',
    textColor: '#253858',
    textInverseColor: '#FFFFFF',
    barSelectedColor: '#DC3931',
    brandTitle: 'HZN Flex Design',
    brandUrl: 'https://www.hzn.one/',
    brandImage: logo,
});
