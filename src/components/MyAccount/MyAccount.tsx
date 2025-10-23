import { NavLink } from "react-router-dom";
import styles from "./MyAccount.module.css";
import { ROUTES } from "../../constants/routes";

export default function MyAccount() {
  return (
    <header className={styles.myAccount}>
      <nav>
        <NavLink to={ROUTES.HOME} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={styles.link}>
          Мой личный кабинет
         
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={styles.link}>
          About us
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={styles.link}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
