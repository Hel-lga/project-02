import { NavLink } from "react-router-dom";
import { MY_ROUTES } from "../../constants/myRoutes";
import styles from "./MyAccount.module.css";

export default function MyAccount() {
  return (
    <header className={styles.myAccount}>
      <nav>
        <NavLink to={MY_ROUTES.HOME} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={MY_ROUTES.MY_ACCOUNT} className={styles.link}>
          Мой личный кабинет
         
        </NavLink>
        <NavLink to={MY_ROUTES.ABOUT} className={styles.link}>
          About us
        </NavLink>
        <NavLink to={MY_ROUTES.CONTACT} className={styles.link}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
