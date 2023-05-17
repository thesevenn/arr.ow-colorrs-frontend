"use client";
export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	console.log(error);

	return (
		<div>
			<h2>Something went Wrong</h2>
			<h3>{error.message}</h3>
			<button onClick={() => reset()}>Try Again</button>
		</div>
	);
}
