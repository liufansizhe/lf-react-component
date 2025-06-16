import "./index.scss";

import { Root, createRoot } from "react-dom/client";

import classNames from "classnames";
import { v4 } from "uuid";

export interface MessageProps {
  message: string;
  duration?: number;
}
export interface MessageListItem extends MessageProps {
  id: string;
  visible?: boolean;
}
export interface LfMessageProps {
  list: MessageListItem[];
}
let container: Root | null = null;
let messageList: MessageListItem[] = [];
const LfMessage = (props: LfMessageProps) => {
  const { list } = props;
  return (
    <>
      {list.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className={classNames(
            "lf-message-item",
            item?.visible ? "lf-message-item-show" : "lf-message-item-hide"
          )}
        >
          {item.message}
        </div>
      ))}
    </>
  );
};
export const useLfMessage = () => {
  const renderHandle = () => {
    let dom = document.querySelector("#lf-message");
    if (!container) {
      if (!dom) {
        dom = document.createElement("div");
        dom.id = "lf-message";
        document.body.appendChild(dom);
      }
      container = createRoot(dom);
    }
    container?.render(<LfMessage list={messageList} />);

    if (messageList.length == 0 && container) {
      setTimeout(() => {
        container?.unmount();
        document.body.removeChild(document.querySelector("#lf-message")!);
        container = null;
      }, 300);
    }
  };
  const message = (props: MessageProps) => {
    const { duration = 3000 } = props;
    const id = "lf" + v4();
    messageList.push({ ...props, id, visible: true });
    renderHandle();
    if (duration > 0) {
      setTimeout(() => {
        messageList = messageList.map((item) => {
          if (item.id == id) {
            const fa = document.querySelector("#lf-message");
            const child = document.querySelector(`#${id}`)?.clientHeight;
            if (fa && child) {
              fa.setAttribute("style", `height:${fa.clientHeight - child}px`);
            }
            item.visible = false;
          }
          return item;
        });
        renderHandle();
        setTimeout(() => {
          messageList = messageList.filter((item) => item.id !== id);
          renderHandle();
        }, 250);
      }, duration);
    }
  };
  return { message };
};
