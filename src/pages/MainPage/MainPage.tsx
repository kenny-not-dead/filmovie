import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'

function MainPage() {
	return (
		<>
			<Header/>
			<Slider autoPlay={false} autoPlayTime={5000}/>
			<Footer/>
		</>
	)
}

export default MainPage