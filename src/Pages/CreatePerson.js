import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

//UI
import ViewTemplate from '../Layouts/Template/ViewTemplate';
import axiosData from '../Utils/axiosData';

//BL
//import useCreatePerson from '../Utils/useCreatePerson';

/**
 * Renders the creation person form
 * @returns After complete the form should return a message of succes.
 */
function CreatePerson() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	return (
		<ViewTemplate>
			<div className='flex flex-col gap-4'>
				<p className='px-12 text-center text-sm font-semibold'>
					Bienvenido a la creación de persona, por favor llenar todos los campos
					requeridos.
				</p>
				<Formik
					initialValues={{
						document_type: '',
						document_id: '',
						first_name: '',
						last_name: '',
						hobbie: '',
					}}
					onSubmit={(values, actions) => {
						if (values) axiosData(values, setData, setLoading);
					}}
				>
					{({ isSubmitting }) => (
						<Form className='flex flex-col gap-4'>
							<div className='flex flex-col gap-1'>
								<div className=''>
									<label
										className='text-sm font-medium text-gray-900 dark:text-gray-300'
										htmlFor='document_type'
									>
										Tipo de documento:
									</label>
									<Field
										type='document_type'
										name='document_type'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
									/>
								</div>
								<ErrorMessage name='document_type' component='div' />

								<div className=''>
									<label
										className='text-sm font-medium text-gray-900 dark:text-gray-300'
										htmlFor='document_id'
									>
										# de documento:
									</label>
									<Field
										type='document_id'
										name='document_id'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
									/>
								</div>
								<ErrorMessage name='document_id' component='div' />

								<div className=''>
									<label
										className='text-sm font-medium text-gray-900 dark:text-gray-300'
										htmlFor='first_name'
									>
										Nombres:
									</label>
									<Field
										type='first_name'
										name='first_name'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
									/>
								</div>
								<ErrorMessage name='first_name' component='div' />

								<div className=''>
									<label
										className='text-sm font-medium text-gray-900 dark:text-gray-300'
										htmlFor='last_name'
									>
										Apellidos:
									</label>
									<Field
										type='last_name'
										name='last_name'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
									/>
								</div>
								<ErrorMessage name='last_name' component='div' />

								<div className=''>
									<label
										className='text-sm font-medium text-gray-900 dark:text-gray-300'
										htmlFor='hobbie'
									>
										Hobbies:
									</label>
									<Field
										type='hobbie'
										name='hobbie'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
									/>
								</div>
								<ErrorMessage name='hobbie' component='div' />
							</div>

							<button
								className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200 w-20 self-center'
								type='submit'
								disabled={isSubmitting}
							>
								Guardar
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</ViewTemplate>
	);
}

export default CreatePerson;
