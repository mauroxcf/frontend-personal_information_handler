import CardGrid from './Components/Organism/CardGrid';
import ViewTemplate from './Layouts/Template/ViewTemplate';

function App() {
	return (
		<ViewTemplate>
			<div className='flex flex-col gap-4 w-full'>
				<div className='px-12 text-center text-sm font-semibold'>
					Bienvenido a la interface de manejo de personal registrado, puedes
					navegar para crear o buscar a alguna persona en especifico.
				</div>
				<button className='cursor-pointer rounded-xl p-2 bg-sky-200 w-fit self-center'>
					Mostrar personas registradas
				</button>
			</div>
			<CardGrid />
		</ViewTemplate>
	);
}

export default App;
