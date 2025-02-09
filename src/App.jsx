import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume.jsx';
import Contact from '../pages/Contact';
import Layout from '../components/Layout';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Layout>
	);
};

export default App;
