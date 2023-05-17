import * as htmlToImage from "html-to-image";

export function generateImage(
	node: HTMLElement | null,
	filename: string
): void {
	if (node) {
		console.log(node);

		htmlToImage.toJpeg(node).then(dataUrl => {
			console.log(dataUrl);

			let link = window.document.createElement("a");
			link.href = dataUrl;
			link.download = filename;
			link.style.display = "none";
			(document.body || document.documentElement).appendChild(link);
			if (typeof link.click == "function") {
				link.click();
			} else {
				link.target = "_blank";
				link.dispatchEvent(
					new MouseEvent("click", {
						view: window,
						bubbles: true,
						cancelable: true,
					})
				);
				URL.revokeObjectURL(link.href);
				link.remove();
			}
		});
	}
}
