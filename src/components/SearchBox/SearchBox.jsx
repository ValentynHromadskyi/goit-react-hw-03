import { useId } from "react";
import css from "./SearchBox.module.css";

export function SearchBox({ value, onChange }) {
  const inputId = useId();
  return (
    <div className={css.searchForm}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.search}
        id={inputId}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
