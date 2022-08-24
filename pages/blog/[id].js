import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers/index";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entradas }) => {
	console.log(entradas);
	const { contenido, publishedAt, titulo, imagen } = entradas.data.attributes;
	const urlImagen = imagen.data.attributes.url;

	return (
		<Layout>
			<main className="contenedor">
				<h1 className="heading">{titulo}</h1>
				<article>
					<Image
						layout="responsive"
						src={urlImagen}
						width={800}
						height={600}
						alt={`Imagen entrada ${titulo}`}
					/>
					<div className={styles.contenido}>
						<p className={styles.fecha}>
							{formatearFecha(publishedAt)}
						</p>
						<p className={styles.texto}>{contenido}</p>
					</div>
				</article>
			</main>
		</Layout>
	);
};

export async function getStaticPaths() {
	const url = `http://localhost:1337/api/blogs/?populate=*`;
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();
	const paths = entradas.data.map((entrada) => ({
		params: { id: entrada.id.toString() },
	}));
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params: { id } }) {
	const url = `http://localhost:1337/api/blogs/${id}/?populate=*`;
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();
	return { props: { entradas } };
}

/* export async function getServerSideProps({ query: { id } }) {
	const url = `http://localhost:1337/api/blogs/${id}/?populate=*`;
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();

	return {
		props: { entradas },
	};
} */
export default EntradaBlog;
