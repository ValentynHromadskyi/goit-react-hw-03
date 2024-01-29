import css from "./Contact.module.css";
import { BsPersonCircle, BsTelephoneFill } from "react-icons/bs";

export function Contact({ item: { id, name, number }, onDelete }) {
  {
    return (
      <div className={css.contact}>
        <div className={css.info}>
          <p className={css.name}>
            <BsPersonCircle /> {name}
          </p>
          <span>
            <BsTelephoneFill /> {number}
          </span>
        </div>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
}
