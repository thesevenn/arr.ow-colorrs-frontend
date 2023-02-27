import {
	SkeletonText,
	SkeletonTextSmall,
} from "@/components/skeletons/SkeletonText";

export default function Page() {
	return (
		<div className="flex justify-center">
			<section className="flex flex-col justify-center">
				<section className="flex flex-col bg-gray-900 shadow-sm rounded-[8px] md:w-[60vw] max-w-[1200px] p-8 mt-10">
					<div>
						<div
							data-category="primary"
							className="flex flex-row justify-between my-4"
						>
							<SkeletonText />
							<div className="flex flex-row">
								<span className="inline-block w-7 aspect-square rounded-full bg-gray-700 animate-pulse"></span>
								<SkeletonTextSmall />
							</div>
						</div>
						<div className="w-[88vw] md:w-[55vw] max-w-[1000px] bg-gray-700 animate-pulse h-[72px] md:h-[96px] mb-4"></div>

						<div
							data-category="neutral"
							className="flex flex-row justify-between my-4"
						>
							<SkeletonText />
						</div>

						<div className="w-[88vw] md:w-[55vw] max-w-[1000px] bg-gray-700 animate-pulse h-[72px] md:h-[96px] mb-4"></div>

						<div
							data-category="accent"
							className="flex flex-row justify-between my-4"
						>
							<SkeletonText />
						</div>

						<div className="w-[88vw] md:w-[55vw] max-w-[1000px] bg-gray-700 animate-pulse h-[72px] md:h-[96px] mb-4"></div>
						<div className="w-[88vw] md:w-[55vw] max-w-[1000px] bg-gray-700 animate-pulse h-[72px] md:h-[96px] mb-4"></div>
						<div className="w-[88vw] md:w-[55vw] max-w-[1000px] bg-gray-700 animate-pulse h-[72px] md:h-[96px] mb-4"></div>
					</div>
				</section>
			</section>
		</div>
	);
}
