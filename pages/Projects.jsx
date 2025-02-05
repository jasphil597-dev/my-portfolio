import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
	<Layout>
		<h1 className='text-3xl font-bold'>My Projects</h1>
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
			<ProjectCard
				title='FilmFav Frontend'
				description='A movie review app built with React & Django.'
				link='https://github.com/jasphil597-dev/filmFav_frontend'
			/>
		</div>
	</Layout>
);

export default Projects;
