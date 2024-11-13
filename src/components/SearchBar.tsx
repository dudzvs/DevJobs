import searchIcon from '../../public/images/desktop/icon-search.svg';
import locationIcon from '../../public/images/desktop/icon-location.svg';
import filterIcon from '../../public/images/mobile/icon-filter.svg';
import { useState } from 'react';

const SearchBar = () => {
	const [showFilterForm, setShowFilterForm] = useState(false);

	return (
		<>
			<form className="flex dark:text-amber-50 bg-primary-bgMains dark:bg-primary-secondary rounded-[6px] ml-4 mr-4 justify-center items-center p-4 pt-2 pb-2 shadow-2xl sm:gap-2">
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
				<div
					className={`gap-4 shadow-2xl rounded absolute top-56 flex ${!showFilterForm ? 'invisible' : ''} pt-6 pb-6 pl-12 pr-12 flex-col sm:items-center sm:flex sm:flex-row sm:relative sm:top-0 sm:shadow-none sm:visible`}
				>
					<label className="relative" htmlFor="filterLocation">
						<img
							className="mr-2.5 absolute top-4 left-[-30px] sm:block sm:relative sm:top-0 sm:left-0"
							src={locationIcon}
						/>
					</label>
					<input
						className="h-6 outline-none dark:bg-primary-secondary "
						type="text"
						id="filterLocation"
						name="filterLocation"
						placeholder="Filter by location..."
					/>
					<div className="min-w-full border-b-2 block sm:hidden bg-gray-50"></div>
					<input
						type="checkbox"
						id="fullTimeJobs"
						name="fullTimeJobs"
						className=" absolute bottom-24 left-4 sm:relative sm:left-0 sm:bottom-0 flex-shrink-0 dark:bg-primary-secondary appearance-none w-5 h-5 bg-primary-tertiary grayscale brightness-150 opacity-80 cursor-pointer rounded checked:bg-iconChecked bg-no-repeat bg-center bg-contain"
					/>
					<label
						className="text-sm flex-shrink-0 font-bold "
						htmlFor="fullTimeJobs"
					>
						Full Time Only
					</label>

					<button className="block sm:hidden text-amber-50 rounded p-2 bg-primary-main w-full self-center mt-4">
						Search
					</button>
				</div>
				<button
					type="button"
					onClick={() => setShowFilterForm(!showFilterForm)}
					className=" sm:hidden block"
				>
					<img src={filterIcon} className="mr-3.5" />
				</button>
				<button
					type="submit"
					className=" flex justify-center items-center bg-primary-main sm:ml-3 sm:pl-4 sm:pr-4 sm:pt-2 sm:pb-2 p-3 pl-3 pr-3 text-amber-50 font-bold rounded text-transparent sm:text-amber-50"
				>
					<span className="hidden sm:inline">Search</span>
					<img
						src={searchIcon}
						className="sm:hidden w-5 h-5 filter invert brightness-0"
					/>
				</button>
			</form>
		</>
	);
};

export default SearchBar;
