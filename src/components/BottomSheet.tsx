"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import CountTextDown from "./CountTextDown";

interface BottomSheetProps {}

const BottomSheet: FC<BottomSheetProps> = ({}) => {
	const [mostrado, setMostrado] = useState(true);

	useEffect(() => {
		// si llega al final de la pagina se elimina el bottom sheet
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight
			) {
				setMostrado(false);
			} else {
				if (!mostrado) {
					setMostrado(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [mostrado]);

	return (
		<AnimatePresence>
			{mostrado && (
				<motion.div
					initial={{ y: "100%" }}
					animate={{ y: -40 }}
					exit={{ y: "100%" }}
					transition={{ delay: 0.25 }}
					className='fixed bottom-0 flex justify-center z-[999] w-full h-fit'
				>
					<div
						className={cn(
							"w-[90%] max-w-[380px] bg-[rgba(6,19,34,0.3)] backdrop-blur-md rounded-[3rem] h-[68px] shadow-md",
							"border-1 border-default-400 border-opacity-20 hover:ring-1 hover:ring-[#25E4BB] transition-all hover:shadow-[#25E4BB] hover:shadow-sm",
							"px-3"
						)}
					>
						<CountTextDown date='2024-06-27T21:00:00' />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BottomSheet;
