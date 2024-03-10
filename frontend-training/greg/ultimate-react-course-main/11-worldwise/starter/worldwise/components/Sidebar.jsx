import AppNav from "./AppNav.jsx";
import Logo from './Logo.jsx'
import styles from './Sidebar.module.css'


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <p>List of cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by WorldWise Inc. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Sidebar;