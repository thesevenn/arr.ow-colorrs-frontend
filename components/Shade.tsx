import {ReactElement} from "react";
type PropType = {
	shade_lvl: string;
	shade_val: string;
	hex_val: string;
};
export default function Shade({
	shade_lvl,
	shade_val,
	hex_val,
}: PropType): ReactElement {
	return (
		<article className="mb-2">
			<div
				className="w-[72px] md:w-[96px] lg:w-[108px] aspect-square bg-blue-950 flex flex-col-reverse items-center"
				style={{backgroundColor: shade_val}}
			>
				<span className="bg-gray-300/40 text-gray-950 rounded px-3 m-1 text-[12px] font-normal">
					{shade_lvl == "1000" ? "950" : shade_lvl}
				</span>
			</div>
			<p className="text-center text-gray-600 text-xs md:text-[14px] font-normal">
				{hex_val}
			</p>
		</article>
	);
}
