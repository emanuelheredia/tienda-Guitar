import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers/index";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entradas }) => {
	const { contenido, publishedAt, titulo, imagen } =
		entradas.data[0].attributes;
	const urlImagen = imagen.data.attributes.url;

	return (
		<Layout pagina={titulo}>
			<main className="contenedor">
				<h1 className="heading">{titulo}</h1>
				<article className={styles.entrada}>
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
	const url = `${process.env.API_URL}/api/blogs/?populate=*`;
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();
	const paths = entradas.data.map((entrada) => {
		return {
			params: { url: entrada.attributes.url },
		};
	});
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params: { url } }) {
	const urlBlog = `${process.env.API_URL}/api/blogs?filters[url][$eq]=${url}&&[populate]=*`;
	const respuesta = await fetch(urlBlog);
	const entradas = await respuesta.json();
	return { props: { entradas } };
}

/* export async function getServerSideProps({ query: { id } }) {
	const url = `${process.env.API.URL}/api/blogs/${id}/?populate=*`;
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();

	return {
		props: { entradas },
	};
} */
export default EntradaBlog;
