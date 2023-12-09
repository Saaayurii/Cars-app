import { useNavigate } from 'react-router-dom'
import styles from './HeaderNewCars.module.scss'
const HeaderNewCars = () => {
	const bgImg = '/public/images/newCars-bg.jpg'
	const Icon = '/public/images/AiOutlineLeft.svg'
	const navigate = useNavigate()
	return (
		<section
			className={styles.wrapper}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<button 
						aria-label='Go to Home'
							onClick={() => {
								navigate('/')
							}}
						>
							<img src={Icon} alt='Go back Icon' />
						</button>
			<h1 className={styles.h1}>NEW CARS</h1>
		</section>
	)
}


export default HeaderNewCars