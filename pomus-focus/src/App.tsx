import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

import "./styles/thema.css";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laborum molestias expedita nisi eveniet minus voluptate. Corrupti ad
        perspiciatis fuga quo dolores non alias mollitia consequuntur quaerat
        veritatis, quibusdam sunt.
      </p>
    </div>
  );
}
