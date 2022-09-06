import React from 'react';

//UI
import CardGrid from '../Components/Organism/CardGrid';
import ViewTemplate from '../Layouts/Template/ViewTemplate';
import useGetPerson from '../Utils/useGetPerson';

/**
 * Renders the home page with the information of all the registered people
 * @returns The data is being returned as an object.
 */
function Home() {
	const { data, loading } = useGetPerson();

	return (
		<ViewTemplate>
			<div className='flex flex-col gap-4 w-full'>
				<div className='px-12 text-center text-sm font-semibold'>
					Bienvenido a la interface de manejo de personal registrado, puedes
					navegar para crear o buscar a alguna persona en especifico.
				</div>
				<button
					className={`rounded-xl p-2 ${
						loading ? 'bg-sky-200' : 'bg-emerald-200'
					} w-fit self-center`}
				>
					{loading ? 'Cargando...' : 'Carga completa!'}
				</button>
				<CardGrid personData={data.data} />
			</div>
		</ViewTemplate>
	);
}

export default Home;
