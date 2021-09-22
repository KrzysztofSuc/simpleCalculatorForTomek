import React from "react";
import { useField } from "informed";
import classNames from "classnames";

import defaultClasses from "./textInput.css";

const TextInput = (props) => {
  const { render, informed, fieldState } = useField({
    fieldType: "text",
    ...props,
  });

  const { isRequired, title, ...rest } = informed;

  const getInputTypeVisualHtml =
    informed.type === "textarea"
      ? render(<textarea className={defaultClasses.inputTextArea} {...rest} />)
      : render(<input className={defaultClasses.inputText} {...rest} />);

  return (
    <div className={defaultClasses.root}>
      <label
        className={classNames(defaultClasses.label, {
          [defaultClasses.labelOnTop]: fieldState.value?.length > 0,
          [defaultClasses.labelRequired]: isRequired,
        })}
      >
        {title}
      </label>
      {getInputTypeVisualHtml}
    </div>
  );
};

export default TextInput;
