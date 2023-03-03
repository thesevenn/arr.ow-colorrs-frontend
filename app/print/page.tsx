import {ReactElement} from "react";

export default function Print(): ReactElement {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl font-semibold text-gray-400 mt-4">
				Your Color Pallete:Hue
			</h1>
			<section className="flex flex-row flex-wrap">
				<div className="flex flex-col">
					<ShadePrint />
				</div>
			</section>
		</div>
	);
}

function ShadePrint(): ReactElement {
	return (
		<article className="flex flex-row items-center justify-between gap-2">
			<div className="bg-blue-500 w-20 aspect-square"></div>
			<div className="flex flex-col items-start gap-[2px] text-gray-400 font-medium text-sm">
				<p>hsl(120,45%,56%)</p>
				<p>rgb(120,45,56)</p>
				<p>#ac1cff</p>
			</div>
		</article>
	);
}
