import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "./ViewTransition.css";

function ViewTransition({ children, transitionName }) {
  const [component, setComponent] = useState(children);
  const [vwTransitionName, setViewTranstionName] = useState("");

  //Will write this whole view transition wrapper later there are lots of idea on this
  useEffect(() => {
    if (document.startViewTransition) {
      setViewTranstionName(transitionName);
      const vTransition = document.startViewTransition(() => {
        flushSync(() => {
          setComponent(children);
        });
      });

      vTransition.finished.finally(() => {
        setViewTranstionName("");
      });
    } else {
      setComponent(children);
    }
  }, [children]);

  return (
    <div style={{ viewTransitionName: vwTransitionName }}>{component}</div>
  );
}

export default ViewTransition;
