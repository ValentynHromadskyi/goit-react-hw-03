import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export function ContactList({ items, onDelete }) {
  if (items.length !== 0)
    return (
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id}>
            <Contact item={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
}
