import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
	const { description, nombre, precio, url, imagen } = guitarra.attributes;
	const urlImagen = imagen.data.attributes.url;
	return (
		<div className={styles.guitarra}>
			<Image
				layout="responsive"
				width={180}
				height={350}
				src={urlImagen}
				alt={`Imagen guitarra ${nombre}`}
			/>
			<div className={styles.contenido}>
				<h3>{nombre}</h3>
				<p className={styles.descripcion}>{description}</p>
				<p className={styles.precio}>${precio}</p>
				<Link href={`/guitarras/${url}`}>
					<a className={styles.enlace}>Ver Producto</a>
				</Link>
			</div>
		</div>
	);
};

export default Guitarra;
