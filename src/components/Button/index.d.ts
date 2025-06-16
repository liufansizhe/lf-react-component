import "./index.scss";
export interface LfButtonProps {
    /** 按钮类型 */
    type?: "primary" | "dashed" | "text" | "link";
    /** 按钮形状 */
    shape?: "round" | "default";
    /** 按钮加载*/
    loading?: boolean;
    /** 按钮禁用 */
    disabled?: boolean;
    /** 按钮背景颜色 */
    backgroundColor?: string;
    /** 按钮文案 */
    label: string;
    /** 点击事件 */
    onClick?: () => void;
}
export declare const LfButton: ({ backgroundColor, ...props }: LfButtonProps) => import("react/jsx-runtime").JSX.Element;
