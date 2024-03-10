import AppNav from '../components/AppNav';
import styles from './AppLayout.module.css';

function AppLayout(){
    return (
        <div className={styles.app}>
            <AppNav />
            <p>App</p>
        </div>
    )
}

export default AppLayout