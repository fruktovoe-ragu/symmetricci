import { ForegroundType } from 'src/constants/common';
import { foregroundTokens } from 'src/design-tokens/colors';

// Preloader props types
export interface IPreloaderProps {
    /**
     * Indicates whether the preloader should be delayed
     */
    delay?: boolean;
    /**
     * Color of the preloader
     */
    color?: ForegroundType | 'inherit';
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
}

export const defaultProps = {
    delay: false,
    color: foregroundTokens[0],
};
