export { LfButton, type LfButtonProps } from "./Button";
export { LfIcon, type LfIconProps } from "./Icon";
export { useLfMessage, type MessageProps } from "./Message";
export const setTheme = (theme: string) => {
  const html = document.children[0];
  if (html) {
    html.setAttribute("lf-theme", theme);
  }
};
