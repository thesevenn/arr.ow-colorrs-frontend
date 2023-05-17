"use client";
import {ReactElement, useState} from "react";
import {IoRocketSharp} from "react-icons/io5";
import Link from "next/link";
import {JetBrains_Mono} from "@next/font/google";

import {validateHex} from "@/utils/validate";

const jetBrains = JetBrains_Mono({
	weight: ["400", "500", "600", "700"],
	variable: "--font-jetBrains",
	subsets: ["latin"],
});

export default function Inputs(): ReactElement {
	const [color, setColor] = useState<string>("");
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(color);

		setColor(e.target.value);
	};

	return (
		<>
			<section className="flex flex-col items-center">
				<div className="bg-white rounded-[8px] p-[4px] sm:gap-2 m-4 flex sm:flex-row items-center justify-between shadow-md flex-col gap-4 relative">
					<input
						type="text"
						name="text_color"
						id="text_color"
						placeholder="Enter code here"
						className={
							jetBrains.className +
							" p-2 pl-4 appearance-none outline-none sm:w-[160px] w-[140px] placeholder:text-sm"
						}
						onChange={handleInput}
						onBlur={() => {
							let valid = validateHex(color);
							if (!valid) console.log("not valid");
						}}
						value={color}
					/>
					<span className="text-xs font-semibold bg-blue-900 rounded-full p-2 text-blue-200">
						OR
					</span>
					<button className="relative bg-blue-500 text-white px-2 rounded-[8px] text-sm font-semibold cursor-pointer w-[160px] sm:w-[200px] h-[48px]">
						Choose a Color
						<input
							type="color"
							name="color"
							id="color"
							className="bg-transparent appearance-none opacity-0 absolute inset-0 w-[100%] h-[100%] cursor-pointer"
							onChange={handleInput}
							onInput={handleInput}
							value={color}
						/>
					</button>
					<div
						className="absolute w-8 aspect-square  rounded-full -right-12"
						style={{backgroundColor: color}}
					></div>
				</div>
				<Link
					href={validateHex(color) ? color.substring(1) : ""}
					prefetch={false}
				>
					<button className="bg-gradient-to-br from-blue-500 to-blue-300 text-white flex flex-row items-center justify-center px-4 py-2 w-[240px] h-[48px] rounded-[8px] gap-2 text-base font-semibold m-2 shadow-md">
						<span> Generate</span>
						<IoRocketSharp className="text-white text-lg" />
					</button>
				</Link>
			</section>
		</>
	);
}
