import Field from '../Field/Field'
import styles from './Header.module.scss'

const Header = ({onInputChange}) => {
	const bgImg = '/images/car-bg.jpg'
	return (
		<section
			className={styles.wrapper}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<Field onInputChange={onInputChange} />
		</section>
	)
}

export default Header
