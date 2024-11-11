import searchIcon from '../../public/images/desktop/icon-search.svg';
import locationIcon from '../../public/images/desktop/icon-location.svg';
import filterIcon from '../../public/images/mobile/icon-filter.svg';

const SearchBar = () => {
	return (
		<>
			<form className="flex dark:text-amber-50 bg-primary-bgMains dark:bg-primary-secondary rounded-[6px] justify-center items-center p-4 pt-2 pb-2 shadow-2xl sm:gap-2">
				<label htmlFor="filterByTitle">
					<img className="mr-2.5" src={searchIcon} />
				</label>
				<input
					className="h-12 outline-none dark:bg-primary-secondary"
					type="text"
					id="filterByTitle"
					name="filterByTitle"
					placeholder="Filter by title..."
				/>
				<label htmlFor="filterLocation">
					<img
						className="mr-2.5 hidden sm:block"
						src={locationIcon}
					/>
				</label>
				<input
					className="h-12 outline-none dark:bg-primary-secondary hidden sm:block"
					type="text"
					id="filterLocation"
					name="filterLocation"
					placeholder="Filter by location..."
				/>
				<input
					type="checkbox"
					id="fullTimeJobs"
					name="fullTimeJobs"
					className="hidden sm:block flex-shrink-0 dark:bg-primary-secondary appearance-none w-5 h-5 bg-primary-tertiary grayscale brightness-150 opacity-80 cursor-pointer rounded checked:bg-iconChecked bg-no-repeat bg-center bg-contain"
				/>
				<label
					className="font-bold text-sm flex-shrink-0  hidden sm:block"
					htmlFor="fullTimeJobs"
				>
					Full Time Only
				</label>

				<button type="button" className="sm:hidden block">
					<img src={filterIcon} className="mr-3.5" />
				</button>

				<button
					type="submit"
					className=" flex justify-center items-center bg-primary-main sm:ml-3 sm:pl-4 sm:pr-4 sm:pt-2 sm:pb-2 p-3 pl-3 pr-3 text-amber-50 font-bold rounded text-transparent sm:text-amber-50"
				>
					<span className="hidden sm:inline">Search</span>
					<img
						src={searchIcon}
						className="sm:hidden  w-5 h-5 filter invert brightness-0"
					/>
				</button>
			</form>
		</>
	);
};

export default SearchBar;
