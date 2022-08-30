import React from "react";
import styles from "../../styles/Guitarra.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useState } from "react";

const Producto = ({ guitarra, agregarCarrito }) => {
	const { description, nombre, precio, imagen, id } =
		guitarra.data[0].attributes;
	const urlImagen = imagen.data.attributes.url;
	const [cantidad, setCantidad] = useState(1);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (cantidad < 1) {
			alert("Cantidad no válida");
			return;
		}
		const guitarraSeleccionada = {
			id: guitarra.data[0].id,
			imagen: urlImagen,
			nombre,
			precio,
			cantidad,
		};
		agregarCarrito(guitarraSeleccionada);
	};
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
					<form onSubmit={handleSubmit} className={styles.formulario}>
						<label>Cantidad:</label>
						<select
							value={cantidad}
							onChange={(e) =>
								setCantidad(parseInt(e.target.value))
							}
						>
							<option value="">-- Seleccione --</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<input type="submit" value="Agregar al Carrito" />
					</form>
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
