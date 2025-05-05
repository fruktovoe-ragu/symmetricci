import StyleDictionary from "style-dictionary";

StyleDictionary.registerFormat({
    name: 'javascript/colors-object',
    format: function({ dictionary }) {
        const semanticColorsData = dictionary.unfilteredTokens['semantic-colors'];
        const themeNames = ["light", "dark"];
        const categoryNames = ["foreground", "border", "background"];
        let colorValues = {
            lightTheme: { [categoryNames[0]]: {}, [categoryNames[1]]: {}, [categoryNames[2]]: {} },
            darkTheme: { [categoryNames[0]]: {}, [categoryNames[1]]: {}, [categoryNames[2]]: {} },
        };
        let colorTokens = {
            [categoryNames[0]]: [], [categoryNames[1]]: [], [categoryNames[2]]: [],
        };

        const toCamelCase = str => {
            return str
                .split(/[-_]/)
                .map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join('');
        }

        const processNestedObjects = (obj, theme, category = '', tokenName = '') => {
            const camelCaseThemeName = `${theme}Theme`;

            Object.keys(obj).forEach(key => {
                const data = obj[key];
                let colorTokenName = tokenName ? tokenName.concat(toCamelCase(key)) : key;

                const isObject = typeof data === 'object';
                const hasCategory = categoryNames.includes(key);

                if (isObject && data.$value === undefined) {
                    hasCategory
                    ? processNestedObjects(data, theme, key )
                    : processNestedObjects(data, theme, category, colorTokenName);
                }

                else {
                    colorValues[camelCaseThemeName][category][colorTokenName] = data.$value;

                    if (!colorTokens[category].includes(colorTokenName)) {
                        colorTokens[category].push(colorTokenName);
                    }
                }
            })
        };

        themeNames.forEach((themeName) => {
            processNestedObjects(semanticColorsData[themeName], themeName);
        });

        const typeScriptDeclaration = `
import { ColorThemes } from 'src/types/common';

export const ${categoryNames[0]}Tokens = [${colorTokens[categoryNames[0]].map((token) => `"${token}"`).join(', ')}] as const;

export const ${categoryNames[1]}Tokens = [${colorTokens[categoryNames[1]].map((token) => `"${token}"`).join(', ')}] as const;

export const ${categoryNames[2]}Tokens = [${colorTokens[categoryNames[2]].map((token) => `"${token}"`).join(', ')}] as const;
        `;
        const colorValuesJson = JSON.stringify(colorValues, null, 2);
        const exportString = `
${typeScriptDeclaration}
export const colorValues: ColorThemes = ${colorValuesJson};
        `;

        return exportString;
    }
});

const config = {
    source: ["src/**/*.json"],
    platforms: {
        ts: {
            transformGroup: 'js',
            buildPath: 'src/design-tokens/',
            files: [{
                destination: 'colors.ts',
                format: 'javascript/colors-object',
                filter: (token) => token.path[0] !== 'primitives-colors' && token.path[0] !== 'semantic-colors',
            }, {
                destination: 'breakpoints.ts',
                format: 'javascript/es6',
                filter: (token) => token.path[0] === 'breakpoints',
            }]
        },
    },
};

export default config;
