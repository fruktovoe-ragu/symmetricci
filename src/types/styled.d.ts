import 'styled-components';
import { StyleTheme } from "src/types/common";

declare module 'styled-components' {
  export interface DefaultTheme extends StyleTheme {}
}
