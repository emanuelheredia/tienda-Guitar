import Guitarra from "./Guitarra";
import styles from "../styles/Listado.module.css";

const Listado = ({ guitarras }) => {
	return (
		<div className={styles.listado}>
			{guitarras?.data.map((guitarra) => (
				<Guitarra key={guitarra.id} guitarra={guitarra} />
			))}
		</div>
	);
};

export default Listado;
