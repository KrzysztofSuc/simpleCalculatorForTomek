import React from "react";
import { useField } from "informed";
import classNames from "classnames";

import defaultClasses from "./textInput.css";

const TextInput = (props) => {
  const { render, informed, fieldState } = useField({
    fieldType: "text",
    ...props,
  });
  const { options } = props;

  const { isRequired, title, ...rest } = informed;
  const getInputTypeVisualHtml =
    informed.type === "select"
      ? render(
          <select className={defaultClasses.select} {...rest}>
            <option hidden>Wybierz</option>
            {options
              ? options.map((opt, index) => (
                  <option
                    key={index}
                    value={opt.value}
                    className={defaultClasses.option}
                  >
                    {opt.label}
                  </option>
                ))
              : null}
          </select>
        )
      : render(<input className={defaultClasses.inputText} {...rest} />);

  return (
    <div className={defaultClasses.root}>
      <label
        className={classNames(defaultClasses.label, {
          [defaultClasses.labelOnTop]: fieldState.value?.length > 0,
          [defaultClasses.selectLabel]: informed.type === "select" || "range",
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
