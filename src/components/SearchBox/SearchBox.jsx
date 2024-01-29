import css from "./SearchBox.module.css";
import { nanoid } from "nanoid";

export function SearchBox({ value, onChange }) {
  const inputId = nanoid(2);
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
