import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`contenedor ${styles.contenido}`}>
				<nav className={styles.navegation}>
					<Link href="/">Inicio</Link>
					<Link href="/nosotros">Nosotros</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/tienda">Tienda</Link>
				</nav>
				<p className={styles.copiright}>
					Todos los archivos reservados
				</p>
			</div>
		</footer>
	);
};

export default Footer;
