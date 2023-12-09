import HeaderNewCars from './headerNewCars/HEaderNewCars'
import styles from './NewCars.module.scss'
import CreateCarForm from '../../ui/create-car-form/CreateCarForm'
const NewCars = () => {
	
	return (
		<>
			<HeaderNewCars />
			<div className={styles.wrapper}>
				<CreateCarForm/>
			</div>
		</>
	)
}

export default NewCars
