"use client";
import {JetBrains_Mono, Montserrat} from "@next/font/google";
import {FaDownload} from "react-icons/fa";
import {usePathname} from "next/navigation";
import useSwr from "swr";
import axios from "axios";

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

import Shade from "@/components/Shade";
import {SkeletonBatch} from "@/components/skeletons/SkeletonBatch";

const fetchBatch = async (pathname: string) => {
	const color = "#" + pathname.substring(1);
	return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/generate`, {
		color: color,
	});
};

export default function Batch() {
	const flag = true;
	const pathname = usePathname();
	const {data, error} = useSwr(pathname, fetchBatch);
	const batch = data?.data;
	console.log(batch);

	if (!data) return <SkeletonBatch />;

	return (
		<div className="flex justify-center">
			<section className="flex flex-col justify-center">
				<div className="flex flex-row justify-between items-center mt-16 mb-4">
					<h1
						className={
							montserrat.className +
							" md:text-2xl text-base font-semibold text-gray-300"
						}
					>
						Your Color is Ready
					</h1>
					<div className="flex items-center">
						<button
							className={
								montserrat.className +
								" underline font-medium text-gray-200 mx-2 md:block hidden"
							}
						>
							Save as .png
						</button>
						<button className="bg-blue-500 text-blue-950 px-3 md:px-4 py-2 rounded-[8px] font-medium shadow-sm mx-2 text-sm">
							Export .pdf
						</button>
					</div>
				</div>

				<section className="flex flex-col items-center bg-white shadow-sm rounded-[8px] w-[90vw] md:w-[78vw] max-w-[1200px] p-8 my-4">
					<div>
						{/* primary color section */}
						<div
							data-category="primary"
							className="flex flex-row justify-between my-4"
						>
							<h2
								className={
									montserrat.className + " text-gray-500 font-semibold"
								}
							>
								Primary Color
							</h2>
							<div className="flex flex-row">
								<span
									className="inline-block w-[24px] aspect-squar rounded-full mr-2"
									style={{backgroundColor: batch?.colors.hex.primary[4]}}
								></span>
								<p
									className={jetBrains.className + " text-gray-500 font-medium"}
								>
									Hue:{batch?.hue}
								</p>
							</div>
						</div>
						<div className="flex flex-row flex-wrap mb-10">
							{batch?.colors.hex.primary.map((item: string, index: number) => (
								<Shade
									key={item}
									shade_lvl={"" + (index + 1) * 100}
									hex_val={item}
									shade_val={item}
								/>
							))}
						</div>
						{/* Primary color section ends here */}

						{/* Neutral color section */}
						<div
							data-category="neutral"
							className="flex flex-row justify-between my-4"
						>
							<h2
								className={
									montserrat.className + " text-gray-500 font-semibold"
								}
							>
								Neutral Color
							</h2>
						</div>
						<div className="flex flex-row flex-wrap mb-10">
							{batch?.colors.hex.neutral.map((item: string, index: number) => (
								<Shade
									key={item}
									shade_lvl={"" + (index + 1) * 100}
									hex_val={item}
									shade_val={item}
								/>
							))}
						</div>
						{/* Neutral color section ends here */}

						{/* Accent colors section starts here */}
						<div
							data-category="accent"
							className="flex flex-row justify-between my-4"
						>
							<h2
								className={
									montserrat.className + " text-gray-500 font-semibold"
								}
							>
								Accent Colors
							</h2>
						</div>
						<div className="flex flex-row flex-wrap mb-10">
							{batch?.colors.hex.accent.map((item: string, index: number) => (
								<Shade
									key={item}
									shade_lvl={"" + (index + 1) * 100}
									hex_val={item}
									shade_val={item}
								/>
							))}
						</div>
						{/* accent colors section ends here */}
						<div className="flex flex-row flex-wrap mb-10">
							{batch?.colors.hex.red
								? batch?.colors.hex.red.map((item: string, index: number) => (
										<Shade
											key={item}
											shade_lvl={"" + (index + 1) * 100}
											hex_val={item}
											shade_val={item}
										/>
								  ))
								: null}
						</div>
						<div className="flex flex-row flex-wrap mb-10">
							{batch?.colors.hex.green
								? batch?.colors.hex.green.map((item: string, index: number) => (
										<Shade
											key={item}
											shade_lvl={"" + (index + 1) * 100}
											hex_val={item}
											shade_val={item}
										/>
								  ))
								: null}
						</div>
						<div className="flex flex-row flex-wrap mb-10">
							{batch?.colors.hex.yellow
								? batch?.colors.hex.yellow.map(
										(item: string, index: number) => (
											<Shade
												key={item}
												shade_lvl={"" + (index + 1) * 100}
												hex_val={item}
												shade_val={item}
											/>
										)
								  )
								: null}
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}
