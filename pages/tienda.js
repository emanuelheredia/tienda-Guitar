import React from "react";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ guitarras }) => {
	console.log(guitarras);
	return (
		<div>
			<Layout pagina="Tienda virtual">
				<main className="contenedor">
					<h1 className="heading">Nuestra Coleccion</h1>
					<Listado guitarras={guitarras} />
				</main>
			</Layout>
		</div>
	);
};

export async function getServerSideProps() {
	const url = `${process.env.API_URL}/api/guitarras/?populate=*`;
	const respuesta = await fetch(url);
	const guitarras = await respuesta.json();
	return {
		props: { guitarras },
	};
}
export default Tienda;
