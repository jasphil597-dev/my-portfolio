const ContactForm = () => {
	return (
		<form className='space-y-4 bg-white p-6 rounded-lg shadow-md'>
			<div>
				<label htmlFor='name' className='block text-sm font-bold'>
					Name
				</label>
				<input
					id='name'
					name='name'
					type='text'
					className='w-full border p-2 rounded'
				/>
			</div>
			<div>
				<label htmlFor='email' className='block text-sm font-bold'>
					Email
				</label>
				<input
					id='email'
					name='email'
					type='email'
					className='w-full border p-2 rounded'
				/>
			</div>
			<div>
				<label htmlFor='message' className='block text-sm font-bold'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					className='w-full border p-2 rounded'
				></textarea>
			</div>
			<button type='submit' className='bg-blue-600 text-white p-2 rounded'>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
