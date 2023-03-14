// import "./App.scss";
import "./App.css";

import { useState } from "react";

import Accardion from "./Accardion";

function App() {
  // const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>Questions</h1>
      <Accardion
        title="Do I Have To Allow The Use Of Cookies?"
        text="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
      />
      <Accardion
        title="How Do I Change My My Page Password?"
        text="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
      />
      <Accardion
        title="What Is BankID?"
        text="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
      />
      <Accardion
        title="Whose Birth Number Can I Use? "
        text="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
      />
      <Accardion
        title="When Do I Recieve A Password Ordered By Letter?"
        text="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
      />
    </div>
  );
}

export default App;
