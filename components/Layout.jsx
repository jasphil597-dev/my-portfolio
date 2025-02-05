import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
	<div className='min-h-screen flex flex-col bg-gray-100 text-gray-900'>
		{/* Navigation Bar */}
		<nav className='bg-blue-600 text-white p-8 flex justify-between items-center'>
			<h1 className='text-xl font-bold'>My Portfolio</h1>

			<div className='space-x-4'>
				<Link to='/' className='hover:underline'>
					Home
				</Link>

				<Link to='/about' className='hover:underline'>
					About
				</Link>

				<Link to='/projects' className='hover:underline'>
					Projects
				</Link>

				<Link to='/resume' className='hover:underline'>
					Resume
				</Link>

				<Link to='/contact' className='hover:underline'>
					Contact
				</Link>
			</div>
		</nav>

		{/* Main Content */}
		{/* <main className='p-6'>{children}</main> */}
	</div>
);

export default Layout;
