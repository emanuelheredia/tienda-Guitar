import React from "react";
import styles from "../../styles/Guitarra.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";

const Producto = ({ guitarra }) => {
	const { description, nombre, precio, imagen } = guitarra.data[0].attributes;
	const urlImagen = imagen.data.attributes.url;
	return (
		<Layout pagina={`Guitarra ${nombre}`}>
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
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ query: { url } }) {
	const urlGuitarra = `${process.env.API_URL}/api/guitarras?filters[url][$eq]=${url}&&[populate]=*`;
	const respuesta = await fetch(urlGuitarra);
	const guitarra = await respuesta.json();
	return {
		props: { guitarra },
	};
}

export default Producto;
