import "./index.scss";

import { LfIcon } from "../Icon";
import { ReactNode } from "react";
import classNames from "classnames";

export interface LfButtonProps {
  /** 按钮前缀 */
  prefix?: ReactNode;
  /** 按钮后缀 */
  suffix?: ReactNode;
  /** 按钮自定义类名 */
  className?: string;
  /** 按钮类型 */
  type?: "primary" | "dashed" | "text" | "link";
  /** 按钮形状 */
  shape?: "round" | "default";
  /** 按钮加载*/
  loading?: boolean;
  /** 按钮禁用 */
  disabled?: boolean;
  /** 按钮文案 */
  label: string;
  /** 点击事件 */
  onClick?: () => void;
}
export const LfButton = (props: LfButtonProps) => {
  const {
    prefix,
    suffix,
    label,
    loading = false,
    shape = "default",
    type = "primary",
    disabled = false,
    className = "",
    ...rest
  } = props;
  const renderDom = () => {
    if (loading || suffix || prefix) {
      if (loading) {
        return (
          <>
            <div className="lf-button-loading">
              <LfIcon name="loading-circle" disabled={disabled} loop autoplay />
            </div>
            {label}
          </>
        );
      } else if (suffix) {
        return (
          <>
            {label}
            <div className="lf-button-icon-right">{suffix}</div>
          </>
        );
      } else if (prefix) {
        return (
          <>
            <div className="lf-button-icon-left">{prefix}</div>
            {label}
          </>
        );
      }
    }
    return label;
  };
  return (
    <button
      type="button"
      className={classNames("lf-button", type ? `lf-button-${type}` : "", {
        "lf-button-round": shape === "round",
        "lf-disable": disabled,
        "lf-loading": loading,
        [className]: className,
      })}
      disabled={disabled || loading}
      {...rest}
    >
      <div className="lf-button-body">{renderDom()}</div>
    </button>
  );
};
