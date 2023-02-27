import {ReactElement} from "react";

export function SkeletonText(): ReactElement {
	return (
		<div className="w-[100px] h-2 bg-gray-700 rounded animate-pulse m-2"></div>
	);
}

export function SkeletonTextSmall(): ReactElement {
	return (
		<div className="w-[50px] h-2 bg-gray-800 rounded animate-pulse m-2"></div>
	);
}
