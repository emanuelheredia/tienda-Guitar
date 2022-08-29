import React from "react";
import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
	const { titulo, contenido, imagen } = curso.data.attributes;
	const urlImagen = imagen.data.attributes.url;
	return (
		<section>
			<div className={`contenedor ${styles.grid}`}>
				<div className={styles.contenido}>
					<h2 className="heading">Aprende a tocar Guitarra</h2>
					<p className={styles.texto}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse facilisis odio a est lobortis imperdiet non
						at risus. Vivamus odio sapien, rutrum at metus quis,
						faucibus pretium odio. Proin sem erat, feugiat et
						feugiat vitae, lacinia ac tellus. Fusce rutrum semper
						tortor quis viverra. Ut iaculis elit eget nisi ornare,
						ut vulputate metus rhoncus.{" "}
					</p>
					<a className={styles.enlace} href="">
						Mas información
					</a>
				</div>
			</div>
			<style jsx>
				{`
					section {
						padding: 10rem 0;
						margin-top: 10rem;
						background-image: linear-gradient(
								to right,
								rgb(0 0 0 / 0.65),
								rgb(0 0 0 / 0.7)
							),
							url(${urlImagen});
						background-size: cover;
						background-position: 50%;
					}
				`}
			</style>
		</section>
	);
};

export default Curso;
