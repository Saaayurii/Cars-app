import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CarService } from '../../../services/car.service'
import styles from './CarItem.module.scss'

const CarsItem = () => {
	const { id } = useParams()
	const [car, setCars] = useState([])
	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await CarService.getById(id)
			setCars(data)
		}
		fetchData()
	}, [id])
	if (!car?.name) return <p>Loading...</p>
	return (
		<div className={styles.wrapper}>
			<h1>{car.name}</h1>
			<h2>${car.price}</h2>
			<Link to={`/`}><button className={styles.button}>BACK</button></Link>
		</div>
	)
}

export default CarsItem
