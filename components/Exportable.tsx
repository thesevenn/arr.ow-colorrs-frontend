import {LegacyRef, ReactElement} from "react";

interface color {
	primary: Array<string>;
	neutral: Array<string>;
	accent?: Array<string>;
	red?: Array<string>;
	green?: Array<string>;
	yellow?: Array<string>;
}
interface propType {
	print: LegacyRef<HTMLDivElement>;
	batch: {
		colors: {
			hsl: color;
			hex: color;
			rgb: color;
		};
	};
}
export default function Exportable({print, batch}: propType): ReactElement {
	let hex: color = batch.colors.hex;
	let rgb: color = batch.colors.rgb;
	let hsl: color = batch.colors.hsl;

	return (
		<div className="flex flex-col items-center" ref={print} id="export">
			<h1 className="text-2xl font-semibold text-gray-400 mt-16 mb-16">
				Your Color Pallete:Hue
			</h1>
			<section className="flex flex-row flex-wrap gap-20 m-6">
				<div className="flex flex-col">
					{hsl.primary.map((item, index) => (
						<ShadePrint
							key={item.substring(2)}
							hex={hex.primary[index]}
							rgb={rgb.primary[index]}
							hsl={hsl.primary[index]}
						/>
					))}
				</div>
				<div className="flex flex-col">
					{hsl.neutral.map((item, index) => (
						<ShadePrint
							key={item.substring(2)}
							hex={batch.colors.hex.neutral[index]}
							rgb={batch.colors.rgb.neutral[index]}
							hsl={batch.colors.hsl.neutral[index]}
						/>
					))}
				</div>
				<div className="flex flex-col">
					{hsl.accent &&
						hsl.accent.map((item, index) => (
							<ShadePrint
								key={item.substring(2)}
								hex={(hex.accent && hex.accent[index]) || ""}
								rgb={(rgb.accent && rgb.accent[index]) || ""}
								hsl={(hsl.accent && hsl.accent[index]) || ""}
							/>
						))}
				</div>
				<div className="flex flex-col">
					{hsl.red &&
						hsl.red.map((item, index) => (
							<ShadePrint
								key={item.substring(2)}
								hex={(hex.red && hex.red[index]) || ""}
								rgb={(rgb.red && rgb.red[index]) || ""}
								hsl={(hsl.red && hsl.red[index]) || ""}
							/>
						))}
				</div>
				<div className="flex flex-col">
					{hsl.green &&
						hsl.green.map((item, index) => (
							<ShadePrint
								key={item.substring(2)}
								hex={(hex.green && hex.green[index]) || ""}
								rgb={(rgb.green && rgb.green[index]) || ""}
								hsl={(hsl.green && hsl.green[index]) || ""}
							/>
						))}
				</div>
				<div className="flex flex-col">
					{hsl.yellow &&
						hsl.yellow.map((item, index) => (
							<ShadePrint
								key={item.substring(2)}
								hex={(hex.yellow && hex.yellow[index]) || ""}
								rgb={(rgb.yellow && rgb.yellow[index]) || ""}
								hsl={(hsl.yellow && hsl.yellow[index]) || ""}
							/>
						))}
				</div>
			</section>
		</div>
	);
}

interface Proptype {
	hsl: string;
	rgb: string;
	hex: string;
}

function ShadePrint({hsl, rgb, hex}: Proptype): ReactElement {
	return (
		<article className="flex flex-row items-center justify-between gap-2">
			<div className="w-20 aspect-square" style={{backgroundColor: hsl}}></div>
			<div className="flex flex-col items-start gap-[2px] text-gray-400 font-medium text-sm">
				<p>{hsl}</p>
				<p>{rgb}</p>
				<p>{hex}</p>
			</div>
		</article>
	);
}
