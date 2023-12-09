import { useState } from 'react'
import Cars from '../../ui/cars/Cars'
import Header from '../../ui/header/Header'

const Home = () => {
	const [searchText, setSearchText] = useState('');

  const handleInputChange = (text) => {
    setSearchText(text);
  };
	return (
		<>
			<Header onInputChange={handleInputChange} />
      <Cars searchText={searchText} />
		</>
	)
}

export default Home
