"use client";
import {ReactElement} from "react";
import Link from "next/link";
import useSwr from "swr";
import axios from "axios";
import {JetBrains_Mono, Montserrat} from "@next/font/google";

import Inputs from "./Inputs";
import Card from "./Card";
import {SkeletonCard} from "./skeletons/SkeletonCard";

const fetchPreview = async () => {
	return await axios.get(
		process.env.NEXT_PUBLIC_BASE_URL + "/list_batch?page=1&batches=15"
	);
};

const jetBrains = JetBrains_Mono({
	weight: ["400", "500", "600", "700"],
	variable: "--font-jetBrains",
	subsets: ["latin"],
});
const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export interface Preview {
	batch_id: string;
	hue: number;
	saturation: number;
	lightness: number;
	preview: Array<string>;
	base: string;
}

export default function Main(): ReactElement {
	const {data, error} = useSwr("preview", fetchPreview);
	const preview_list = data?.data.batches || [];
	if (error) {
		return <div>Something went wrong</div>;
	}

	return (
		<>
			<div className="flex flex-col items-center">
				<h1
					className={
						montserrat.className +
						" text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md m-4 text-center"
					}
				>
					Create Palettes
				</h1>
				<h2
					className={
						montserrat.className +
						" text-2xl md:text-2xl lg:text-4xl font-bold uppercase text-gray-200 m-2 text-center"
					}
				>
					Bring Ideas to Life
				</h2>
				<h3
					className={
						montserrat.className +
						"text-base md:text-xl font-medium uppercase text-blue-600 md:m-2 text-center"
					}
				>
					Design Brand of Yours
				</h3>

				<Inputs />
				<p
					className={
						montserrat.className +
						"text-[18px] font-medium text-gray-500 m-2 mt-10 text-center"
					}
				>
					Dont Have Any Brand Idea Yet? Choose from Our Curated Pallattes
					Instead.
				</p>
				<h2
					className={
						montserrat.className +
						" text-[20px] font-semibold text-gray-200 m-4 text-center"
					}
				>
					Choose From Our Colors Pallattes
				</h2>
				<div className="flex flex-wrap flex-row gap-8 w-[90vw] lg:w-[1200px] items-end justify-center mt-8 ">
					{data ? (
						preview_list.length &&
						preview_list.map((preview: Preview, index: number) => (
							<Card
								key={index}
								preview={preview.preview.slice(4)}
								base={preview.base}
								hue={preview.hue}
								batch_id={preview.base.substring(1)}
							/>
						))
					) : (
						<>
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</>
					)}
				</div>
				<Link href="/batches">
					<button
						className={
							montserrat.className +
							" px-4 py-2 bg-blue-900 text-blue-500 font-medium rounded-[4px] m-10"
						}
					>
						Load More
					</button>
				</Link>
			</div>
		</>
	);
}
