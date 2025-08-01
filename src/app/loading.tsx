import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div>
			<div>
				<Loader2
					size={64}
					className="animate-spin text-gray-400 mx-auto mt-20"
				/>
			</div>

			<div className=" absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-cyan-100 animate-[spin_3s_linear_infinite]"></div>
		</div>
	);
}
