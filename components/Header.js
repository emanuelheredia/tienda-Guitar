import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import Carrito from "../pages/carrito";

const Header = ({ guitarra }) => {
	const router = useRouter();
	return (
		<header className={styles.header}>
			<div className="contenedor">
				<div className={styles.barra}>
					<Link href="/">
						<a>
							<Image
								priority="true"
								width={400}
								height={100}
								src="/img/logo.svg"
								alt="Imagen Logo"
							/>
						</a>
					</Link>
					<nav className={styles.navegation}>
						<Link href="/">Inicio</Link>
						<Link href="/nosotros">Nosotros</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/tienda">Tienda</Link>
						<Link href="/carrito">
							<a>
								<Image
									layout="fixed"
									width={30}
									height={25}
									src="/img/carrito.png"
									alt="imagen carrito"
								/>
							</a>
						</Link>
					</nav>
				</div>
				{guitarra && (
					<div className={styles.modelo}>
						<h2>Modelo {guitarra.attributes.nombre}</h2>
						<p>{guitarra.attributes.description}</p>
						<p className={styles.precio}>
							${guitarra.attributes.precio}
						</p>
						<Link href={`/guitarras/${guitarra.attributes.url}`}>
							<a className={styles.enlace}>Ver producto</a>
						</Link>
					</div>
				)}
			</div>
			{router.pathname === "/" && (
				<div className={styles.guitarra}>
					<Image
						width={500}
						height={1200}
						src="/img/header_guitarra.png"
						alt="guitarra header"
					/>
				</div>
			)}
		</header>
	);
};

export default Header;
