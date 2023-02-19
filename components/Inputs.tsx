"use client";
import {ReactElement, useState} from "react";
import {IoRocketSharp} from "react-icons/io5";

export default function Inputs(): ReactElement {
	const [color, setColor] = useState<string>("");
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	return (
		<>
			<section className="flex flex-col items-center">
				<div className="bg-white rounded-[8px] p-[4px] m-2 flex flex-row gap-2 items-center justify-between shadow-md">
					<input
						type="text"
						name="text_color"
						id="text_color"
						placeholder="Enter code here"
						className="p-2 appearance-none outline-none"
						onChange={handleInput}
						value={color}
					/>
					<span className="text-xs font-semibold bg-blue-900 rounded-full p-2 text-blue-200">
						OR
					</span>
					<button className="relative bg-blue-500 text-white px-2 rounded-[8px] text-sm font-semibold cursor-pointer w-[200px] h-[48px]">
						Choose a Color
						<input
							type="color"
							name="color"
							id="color"
							className="bg-transparent appearance-none opacity-0 absolute inset-0 w-[100%] h-[100%] cursor-pointer"
							onChange={handleInput}
							value={color}
						/>
					</button>
				</div>
				<button className="bg-gradient-to-br from-blue-500 to-blue-300 text-white flex flex-row items-center justify-center px-4 py-2 w-[240px] h-[48px] rounded-[8px] gap-2 text-base font-semibold m-2 shadow-md">
					<span> Generate</span>
					<IoRocketSharp className="text-white text-lg" />
				</button>
			</section>
		</>
	);
}
