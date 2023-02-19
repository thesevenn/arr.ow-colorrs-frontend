import {ReactElement} from "react";
import {SkeletonText} from "./SkeletonText";

export function SkeletonCard(): ReactElement {
	return (
		<>
			<div className="w-[200px] h-[200px] bg-gray-900 rounded-[8px] animate-pulse">
				<SkeletonText />
			</div>
		</>
	);
}
