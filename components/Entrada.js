import { formatearFecha } from "../helpers/index";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
	const { contenido, description, titulo, publishedAt, url } =
		entrada.attributes;
	let urlImagen = entrada.attributes.imagen.data.attributes.url;
	return (
		<article>
			{urlImagen ? (
				<Image
					width={800}
					height={600}
					src={urlImagen}
					alt={`Imagen blog ${titulo}`}
				/>
			) : null}
			<div className={styles.contenido}>
				<h3>{titulo}</h3>
				<p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
				<p className={styles.resumen}>{description}</p>
				<Link href={`/blog/${url}`}>
					<a className={styles.enlace}>Leer Entrada</a>
				</Link>
			</div>
		</article>
	);
};

export default Entrada;
