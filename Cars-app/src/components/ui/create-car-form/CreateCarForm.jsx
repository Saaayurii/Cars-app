import styles from './CreateCarForm.module.scss'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CarService } from '../../../services/car.service'

const CreateCarForm = () => {

	const { register, reset, handleSubmit } = useForm({
		mode: 'onChange',
	})

	const queryClient = useQueryClient()
	const { mutate } = useMutation({
		mutationKey: ['create car'],
		mutationFn: data => {
			CarService.create(data)},
		onSuccess: () => {
			queryClient.invalidateQueries('cars')
			reset()
		}
	})
	const createCar = data => {
		mutate(data)
		reset()
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				className={styles.input}
				{...register('name', { required: true })}
				placeholder='Name'
			/>
			<input
				className={styles.input}
				{...register('price', { required: true })}
				placeholder='Price'
			/>
			<input
				className={styles.input}
				{...register('image', { required: true })}
				placeholder='Image'
			/>
			<button className={styles.button}>CREATE</button>
		</form>
	)
}

export default CreateCarForm
