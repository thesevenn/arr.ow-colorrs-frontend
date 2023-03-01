import {ReactElement} from "react";
import Image from "next/image";
import Link from "next/link";
import {SiBuymeacoffee} from "react-icons/si";
import {AiFillHeart} from "react-icons/ai";

import logo from "../public/arr.ow.svg";

export default function Footer(): ReactElement {
	return (
		<footer className="bg-gray-200 flex flex-col items-center ">
			<div className="flex flex-row items-center gap-10 p-4">
				<Link href="/">
					<Image src={logo} alt="Arr.ow" className="w-14" />
				</Link>
				<ul className="flex flex-col gap-4 text-gray-900">
					<Link href="/feedback">Feedback</Link>
					<Link href="/about">About</Link>
					<Link
						href="http://buymeacoffee.com/sevenn/"
						className="flex flex-row items-center gap-2"
					>
						<SiBuymeacoffee />
						<span className="underline">Buy Me A Coffee</span>
					</Link>
				</ul>
			</div>
			<div className="flex flex-row gap-8 bg-gray-300 w-[100%] justify-center items-center text-gray-900 p-2">
				<p>© {new Date().getFullYear()} Sevenn</p>
				<p className="flex flex-row items-center gap-2 justify-center">
					<span>
						Designed and Developed with
						<span className="inline-block">
							<AiFillHeart className="text-red-500 text-lg mx-1" />
						</span>
						in India
					</span>
				</p>
			</div>
		</footer>
	);
}
