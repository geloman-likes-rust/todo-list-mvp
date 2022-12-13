import { useState } from "react";

export function useTodoForm({ visible }) {
  const [isFormVisible, setFormVisible] = useState(visible);

  const hideForm = (event) => {
    event.preventDefault();
    const isNotDone =
      event.target.tagName === "LABEL" ||
      event.target.tagName === "FORM" ||
      event.target.tagName === "TEXTAREA";
    if (isNotDone) return;
    setFormVisible(false);
  };

  const showForm = () => setFormVisible(true);
  return [isFormVisible, { showForm, hideForm }];
}
