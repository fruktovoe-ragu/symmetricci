import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
    test('Render the Button component', () => {
        render(<Button>Hello World!</Button>);
    });
});
