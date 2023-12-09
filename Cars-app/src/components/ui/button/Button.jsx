// import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ onClick }) => {
	return (
		<div className={styles.wrapper}>
			<p>Add a new car</p>
			{/* <Link to='/new-cars'> */}
			<button className={styles.button} onClick={onClick}>
				ADD
			</button>
			{/* </Link> */}
		</div>
	)
}

export default Button 
