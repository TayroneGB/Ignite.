import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1609741200064-2ef87d5eb200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" alt="" 
            />
            <div className={styles.profile}>
                <strong>Tayrone Guimarães</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#"> Editar seu Perfil</a>
            </footer>
        </aside>
    );
}