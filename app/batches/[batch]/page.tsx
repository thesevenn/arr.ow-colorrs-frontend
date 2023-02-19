import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Batch({params}: Params) {
	return (
		<h1>
			<Link href="/">Home</Link>
		</h1>
	);
}
