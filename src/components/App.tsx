import PageHeader from './PageHeader.tsx';
import SearchBar from './SearchBar.tsx';

function App() {
	return (
		<div className="flex flex-col font-sans">
			<PageHeader />
			<main className="flex justify-center mt-[-2em]">
				<SearchBar />
			</main>
		</div>
	);
}

export default App;
