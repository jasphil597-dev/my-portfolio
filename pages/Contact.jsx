import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
	return (
		<Layout>
			<h1 className='text-3xl font-bold'>Contact Me</h1>
			<ContactForm />
		</Layout>
	);
};

export default Contact;
