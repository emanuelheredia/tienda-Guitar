import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {
	return (
		<div className="">
			<Layout pagina="Inicio" guitarra={guitarras.data[3]}>
				<main className="contenedor">
					<h1 className="heading">Nuestra Coleccion</h1>
					<Listado guitarras={guitarras} />
				</main>
				<Curso curso={curso} />
				<section className="contenedor">
					<ListadoBlog entradas={entradas} />
				</section>
			</Layout>
		</div>
	);
}
export async function getServerSideProps() {
	const urlGuitarras = `${process.env.API_URL}/api/guitarras/?populate=*`;
	const urlCursos = `${process.env.API_URL}/api/curso/?populate=*`;
	const urlBlog = `${process.env.API_URL}/api/blogs/?pagination[pageSize]=3&&[populate]=*`;

	const [resGuitarras, resCursos, resBlogs] = await Promise.all([
		fetch(urlGuitarras),
		fetch(urlCursos),
		fetch(urlBlog),
	]);
	const [guitarras, curso, entradas] = await Promise.all([
		await resGuitarras.json(),
		await resCursos.json(),
		await resBlogs.json(),
	]);

	return {
		props: { guitarras, curso, entradas },
	};
}
