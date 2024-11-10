//Need add the bgImg
import iconSun from '../assets/logos/icon-sun.svg';
import iconMoon from '../assets/logos/icon-moon.svg';

import { useEffect, useState } from 'react';
const Switcher = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	useEffect(() => {
		if (isChecked) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isChecked]);

	return (
		<>
			<label className="flex gap-2 cursor-pointer select-none items-center">
				<img alt="icon Sun" className="w-5 h-5" src={iconSun} />
				<div className="relative">
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
						className="sr-only"
					/>
					<div className="box block h-5 w-10 rounded-full bg-white"></div>
					<div
						className={`absolute left-1 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-main transition ${
							isChecked ? 'translate-x-full' : ''
						}`}
					></div>
				</div>
				<img alt="icon Moon" className="w-5 h-5" src={iconMoon} />
			</label>
		</>
	);
};

const PageHeader = () => {
	return (
		<header className="flex items-center font-bold p-8 justify-between bg-[#5964E0] bg-header-mobile bg-no-repeat bg-center bg-cover h-32 md:rounded-bl-full">
			<h1 className="font-bold place-self-center md:ml-10 md:mb-1 text-amber-50 text-2xl">
				DevJobs
			</h1>
			<Switcher />
		</header>
	);
};

export default PageHeader;
