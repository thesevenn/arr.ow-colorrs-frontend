"use client";
import {useState, useEffect} from "react";
import axios from "axios";

import {Preview} from "@/components/Main";
import Card from "@/components/Card";
import {SkeletonCard} from "@/components/skeletons/SkeletonCard";

type Filter = {
	filter?: string;
};

export default function Batches() {
	const [page, setPage] = useState<number>(2);
	const [left, setLeft] = useState<number>(1);
	const [list, setList] = useState<Preview[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const staticArray = Array(10).fill(0);

	// load data on page load
	useEffect(() => {
		setLoading(true);
		fetch(process.env.NEXT_PUBLIC_BASE_URL + "/list_batch?batches=10&page=1")
			.then(res => res.json())
			.then(data => setList(data.batches))
			.catch(err => console.log(err.message));
		setLoading(false);
	}, []);

	const fetchWithFilterPagination = async (filter: Filter = {}) => {
		setLoading(true);

		const response = await axios.get(
			process.env.NEXT_PUBLIC_BASE_URL + "/list_batch?batches=10&page=" + page
		);

		setPage(page + 1);
		setLeft(response.data.left);
		setList(prev => [...prev, ...response.data.batches]);
		setLoading(false);
	};
	return (
		<>
			<div className="flex flex-col justify-center m-8 text-3xl font-semibold text-gray-200 items-center gap-8">
				<h1 className="m-8 md:text-3xl text-xl text-gray-200 font-semibold">
					Choose From Our Colors Pallattes
				</h1>
				<section className="flex flex-row flex-wrap gap-8 -[90vw] lg:w-[1200px] justify-center">
					{list &&
						list.map(item => (
							<Card
								preview={item.preview.slice(4)}
								hue={item.hue}
								base={item.base}
								batch_id={item.base.substring(1)}
								key={item.batch_id}
							/>
						))}

					{loading &&
						staticArray.map((item, index) => <SkeletonCard key={index} />)}
				</section>
				{left > 0 && (
					<button
						className="px-4 py-2 bg-blue-900 text-blue-500 font-semibold rounded-[4px] text-base hover:border-[1px] hover:border-blue-500 border-solid transition-all m-8"
						onClick={() => fetchWithFilterPagination()}
					>
						Load More
					</button>
				)}
			</div>
		</>
	);
}
