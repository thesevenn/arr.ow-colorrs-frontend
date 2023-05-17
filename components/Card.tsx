import {ReactElement} from "react";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";
import {JetBrains_Mono} from "@next/font/google";

const jetBrains = JetBrains_Mono({
	weight: ["400", "500", "600", "700"],
	variable: "--font-jetBrains",
	subsets: ["latin"],
});

type PropType = {
	preview: Array<string>;
	base: string;
	hue: number;
	batch_id: string;
};

export default function Card({
	preview,
	base,
	hue,
	batch_id,
}: PropType): ReactElement {
	return (
		<>
			<Link href={"/" + batch_id}>
				<article
					className="bg-white w-[200px] aspect-square shadow-md rounded-[8px] cursor-pointer hover:scale-105 transition-transform"
					id="card"
				>
					<div className="flex flex-row flex-1 rounded-[8px]">
						{preview.map((item: string, index: number) => (
							<div
								key={index}
								className="h-[140px] w-[33.3px]"
								style={{backgroundColor: item || "gray"}}
							></div>
						))}
					</div>
					<div className="px-4 flex flex-row items-center mt-2">
						<div
							className="w-[24px] aspect-square bg-red-500 rounded-full mr-2"
							style={{backgroundColor: base || "gray"}}
						></div>
						<div>
							<h1
								className={
									jetBrains.className + " text-gray-400 font-medium text-base"
								}
							>
								Hue:{hue == 0 ? 360 : hue}
							</h1>
							<p
								className={
									jetBrains.className + " text-gray-700 text-xs font-medium"
								}
							>
								{base}
							</p>
						</div>
						<i id="arrow" className="align-self-end justify-end ml-8">
							<FaArrowRight className="text-gray-700 text-2xl" />
						</i>
					</div>
				</article>
			</Link>
		</>
	);
}
