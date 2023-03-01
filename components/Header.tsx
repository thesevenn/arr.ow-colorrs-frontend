"use client";
import Image from "next/image";
import Link from "next/link";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../public/arr.ow.svg";
import {ReactElement, useState} from "react";

export default function Header(): ReactElement {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	return (
		<>
			<nav className="flex flex-row justify-between items-center bg-blue-800/25 backdrop-blur-sm top-0 border-b-[0.5px] border-blue-100/25 relative border-solid shadow-md py-2 px-4 md:px-10 z-10">
				<Link href="/" className="flex  flex-row items-center">
					<Image src={logo} className="w-12" alt="Arr.ow" priority />
					<strong className="text-sm font-bold uppercase font-montserrat text-blue-100 hidden md:block">
						Arr.ow
					</strong>
				</Link>
				<ul
					className={` sm:flex flex-col sm:flex-row items-center text-base font-semibold gap-4 text-blue-300 fixed sm:static top-16 bg-blue-800/50 w-[100%] h-[100svh] sm:h-auto sm:bg-transparent sm:w-auto transition-all duration-300 delay-500 backdrop-blur-lg sm:backdrop-blur-0 
					${showMenu ? "right-0 flex opacity-100" : "-right-full hidden opacity-0"}
					`}
					id="nav-ul"
				>
					<li className="text-xl sm:text-lg font-semibold text-blue-100 mt-6 sm:mt-0">
						About
					</li>
					<li className="text-xl sm:text-lg font-semibold text-blue-100">
						How to
					</li>
					<li className="text-xl sm:text-lg font-semibold text-blue-100">
						Shades
					</li>
				</ul>
				<i className="sm:hidden text-xl text-blue-400 cursor-pointer transition-all">
					{!showMenu ? (
						<FaBars
							onClick={() => {
								setShowMenu(true);
								document.body.style.overflowY = "hidden";
							}}
						/>
					) : (
						<FaTimes
							onClick={() => {
								setShowMenu(false);
								document.body.style.overflowY = "";
								document.body.style.overflowX = "hidden";
							}}
						/>
					)}
				</i>
			</nav>
		</>
	);
}
