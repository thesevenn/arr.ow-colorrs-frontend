import {ReactElement} from "react";
import {SkeletonText, SkeletonTextSmall} from "./SkeletonText";

export function SkeletonCard(): ReactElement {
	return (
		<>
			<div className="w-[200px] h-[200px] bg-gray-900 rounded-[8px] space-y-2">
				<div className="w-[100%] h-[140px] rounded-t-[8px] bg-gray-700 animate-pulse"></div>
				<div className="flex items-center ml-4">
					<span className="inline-block w-7 aspect-square rounded-full bg-gray-700 animate-pulse"></span>
					<div className="">
						<SkeletonText />
						<SkeletonTextSmall />
					</div>
				</div>
			</div>
		</>
	);
}
