import "./App.css";

import { LfButton, LfIcon, useLfMessage } from "./components";

function App() {
  const { message } = useLfMessage();
  const clickHandle = () => {
    message({ message: "Hello World" + new Date().getTime(), duration: 3000 });
  };
  return (
    <>
      <LfButton
        label="Click me"
        onClick={clickHandle}
        suffix={<LfIcon name="loading-dots" />}
      ></LfButton>
    </>
  );
}

export default App;
