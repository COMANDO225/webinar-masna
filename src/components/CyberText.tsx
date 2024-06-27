import { cn } from "@/lib/utils";
import { FC } from "react";

interface CyberTextProps {
	text: string;
	className?: string;
}

const CyberText: FC<CyberTextProps> = ({ text, className }) => {
	return (
		<h1 className={cn("cybertext", className)} data-text={text}>
			{text}
		</h1>
	);
};

export default CyberText;
