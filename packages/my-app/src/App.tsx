import React, { useEffect, useState } from "react";
import "./App.css";
import { Title } from "@app-dash/ui-components";
import { Emoji, getRandomEmoji } from "@app-dash/api";
function App() {
  const [emoji, setEmoji] = useState("");
  useEffect(() => {
    getRandomEmoji().then((result: Emoji | null) => {
      result && setEmoji(result.htmlCode[0]);
    });
  }, []);

  return (
    <div className="App">
      <Title>Hello World!</Title>
      <span style={{ fontSize: 64 }} dangerouslySetInnerHTML={{ __html: emoji }}></span>
    </div>
  );
}

export default App;
