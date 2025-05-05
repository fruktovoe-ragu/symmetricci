import isPropValid from '@emotion/is-prop-valid';

// Crutch for Styled-components https://github.com/styled-components/styled-components/issues/4049

export const shouldForwardProp = (propName: string, target: any) => {
    if (typeof target === 'string') {
        return isPropValid(propName);
    }

    return true;
};