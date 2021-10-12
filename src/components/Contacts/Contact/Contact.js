import PropTypes from "prop-types";
import s from "./Contact.module.css";

const Contact = ({ name, number, onClick }) => (
  <li className={s.item}>
    <p className={s.name}>{name}</p>
    <p className={s.name}>{number}</p>
    <button className={s.btn} type="button" onClick={onClick}>
      Delete
    </button>
  </li>
);
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
