const ProjectCard = ({ title, description, link }) => {
	return (
		<div className='bg-white p-4 rounded-lg shadow-md'>
			<h3 className='text-xl font-bold'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
			<a href={link} className='text-blue-500'>
				View Project
			</a>
		</div>
	);
};

export default ProjectCard;
