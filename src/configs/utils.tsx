import type { ReactElement } from "react";
import userEvent from "@testing-library/user-event";
import { render as rtlRender } from "@testing-library/react";

export function render(
  el: ReactElement,
  options = {}
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } {
  const result = rtlRender(el, options);
  return {
    ...result,
    user: userEvent.setup(),
  };
}
