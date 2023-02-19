import {ReactElement} from "react";

import Inputs from "./Inputs";
import Card from "./Card";
import {SkeletonCard} from "./skeletons/SkeletonCard";

export default function Main(): ReactElement {
	return (
		<>
			<div className="flex flex-col items-center">
				<h1 className="text-8xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md m-4">
					Create Palettes
				</h1>
				<h2 className="text-4xl font-bold uppercase text-gray-200 m-2">
					Bring Ideas to Life
				</h2>
				<h3 className="text-xl font-medium uppercase text-blue-600 m-2">
					Design Brand of Yours
				</h3>

				<Inputs />
				<p className="text-[18px] font-medium text-gray-500 m-2 mt-10">
					Don’t Have Any Brand Idea Yet? Choose from Our Curated Pallattes
					Instead.
				</p>
				<h2 className="text-[20px] font-semibold text-gray-200 m-4">
					Choose From Our Colors Pallattes
				</h2>
				<div className="flex flex-wrap flex-row gap-4">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<SkeletonCard />
				</div>
			</div>
		</>
	);
}
