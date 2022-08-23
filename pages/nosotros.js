import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
	return (
		<Layout pagina="Nosotros">
			<main className="contenedor">
				<h2 className="heading">Nosotros</h2>
				<div className={styles.contenido}>
					<Image
						layout="responsive"
						width={600}
						height={450}
						src="/img/nosotros.jpg"
						alt="Imagen sobre nosotros"
					/>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ut nec feugiat urna. Nulla rutrum hendrerit
							volutpat. Nam vel lacinia ex. Curabitur ligula ex,
							interdum blandit mi et, pretium lacinia nulla.
							Vestibulum scelerisque quis ipsum ac malesuada. Sed
							in accumsan turpis, id faucibus diam. Phasellus
							aliquam nibh non enim faucibus, non aliquet dolor
							mollis.
						</p>
						<p>
							Pellentesque vel feugiat eros, et dictum elit.
							Nullam id dolor at sem elementum mollis id et urna.
							Morbi quis nunc dignissim, fringilla sapien vel,
							pellentesque orci. Mauris eget augue est. Mauris id
							massa odio. Vestibulum eu nisi sit amet tellus
							efficitur commodo. Pellentesque habitant morbi
							tristique senectus et netus et malesuada fames ac
							turpis egestas. Mauris at pretium nunc. Donec vitae
							orci mollis neque tincidunt varius id eu magna. In
							congue nibh eros, sed volutpat enim ultrices non.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Nosotros;
