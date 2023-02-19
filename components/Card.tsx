import {ReactElement} from "react";
import {FaArrowRight} from "react-icons/fa";

export default function Card(): ReactElement {
	return (
		<>
			<article
				className="bg-white w-[200px] aspect-square shadow-md rounded-[8px] cursor-pointer"
				id="card"
			>
				<div className="flex flex-row flex-1 rounded-[8px]">
					<div className="h-[140px] w-[33.3px] bg-red-600 rounded-tl-[8px]"></div>
					<div className="h-[140px] w-[33.3px] bg-red-500"></div>
					<div className="h-[140px] w-[33.3px] bg-red-400"></div>
					<div className="h-[140px] w-[33.3px] bg-red-300"></div>
					<div className="h-[140px] w-[33.3px] bg-red-200"></div>
					<div className="h-[140px] w-[33.3px] bg-red-100 rounded-tr-[8px]"></div>
				</div>
				<div className="px-4 flex flex-row items-center mt-2">
					<div className="w-[24px] h-[24px] bg-red-500 rounded-full mr-2"></div>
					<div>
						<h1 className="text-gray-300 font-medium text-base">Hue:360</h1>
						<p className="text-gray-700 text-xs font-medium">#FF2A1A</p>
					</div>
					<i id="arrow" className="align-self-end justify-end ml-8">
						<FaArrowRight className="text-gray-700 text-2xl" />
					</i>
				</div>
			</article>
		</>
	);
}
