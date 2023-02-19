import {ReactElement} from "react";

export function SkeletonText(): ReactElement {
	return (
		<div className="w-[100px] h-4 bg-gray-800 rounded-lg animate-pulse"></div>
	);
}
