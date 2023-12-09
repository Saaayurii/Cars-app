// Cars.jsx
import { useEffect, useMemo, useState } from 'react'
import styles from './Cars.module.scss'
import Error from '../Error/Error'
import CreateCarForm from '../create-car-form/CreateCarForm'
import { CarService } from '../../../services/car.service'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useQuery } from '@tanstack/react-query'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
}

const Cars = ({ searchText }) => {
	const { data, isLoading } = useQuery({
		queryKey: ['cars'],
		queryFn: () => CarService.getAll(),
	})
	if (isLoading) return <div className={styles.wrapper}><h1>Loading...</h1></div>

	const filteredCars = data.filter(car =>
		car.name.toLowerCase().includes(searchText.toLowerCase())
	)

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Popular Cars</h1>
			{/* <Button /> */}

			<Slider {...settings}>
				{filteredCars.length ? (
					filteredCars.map(car => (
						<div key={car.id} className={styles.carItem}>
							<div
								className={styles.image}
								style={{ backgroundImage: `url(${car.image})` }}
								alt={`Car: ${car.name}`}
							/>
							<h5 className={styles.stringName}>{car.name}</h5>
							<p className={styles.string}>
								{new Intl.NumberFormat('en-Us', {
									style: 'currency',
									currency: 'USD',
									currencyDisplay: 'narrowSymbol',
								}).format(car.price)}
							</p>
							<Link to={`/cars-item/${car.id}`}>
								<button className={styles.button}>Read More</button>
							</Link>
						</div>
					))
				) : (
					<Error />
				)}
			</Slider>
			<CreateCarForm />
		</div>
	)
}

export default Cars
