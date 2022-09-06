import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

//UI
import ViewTemplate from '../Layouts/Template/ViewTemplate';

function CreatePerson() {
	return (
		<ViewTemplate>
			<div className='flex flex-col gap-4'>
				<p className='px-12 text-center text-sm font-semibold'>
					Bienvenido a la creación de persona, por favor llenar todos los campos
					requeridos.
				</p>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Field type='email' name='email' />
							<ErrorMessage name='email' component='div' />
							<Field type='password' name='password' />
							<ErrorMessage name='password' component='div' />
							<button
								className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'
								type='submit'
								disabled={isSubmitting}
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</ViewTemplate>
	);
}

export default CreatePerson;
