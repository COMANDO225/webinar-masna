"use client";
import { cn } from "@/lib/utils";
/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from "react";

interface TeamItemProps {
	nombre: string;
	prefix: string;
	numero: number;
	puesto: string;
	imagen?: string;
}

const TeamItem: FC<TeamItemProps> = ({
	nombre,
	prefix,
	numero,
	puesto,
	imagen,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.2;
			audioRef.current.playbackRate = 2;
		}
	}, []);

	const handleMouseEnter = () => {
		setIsHovered(true);
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

	const pad = (n: number) => {
		if (!n) return "";
		return n < 10 ? `0${n}` : n;
	};

	return (
		<div
			className='cursor-pointer group flex flex-col justify-center relative w-full max-w-[320px] mx-auto'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={() => setIsHovered(false)}
		>
			<audio
				className='hidden'
				ref={audioRef}
				src='/assets/sounds/onHover.mp3'
			/>
			{/* wrapper */}
			<div className='flex flex-col h-full w-full team-clipath transition-all duration-400'>
				{/* superior */}
				<div className='grid grid-rows-[1fr_auto] bg-[#0d2645] w-full p-1.5'>
					{/* imagen */}
					<div className='relative h-fit w-full object-cover team-clipath-interno overflow-hidden'>
						<img
							src={imagen || "assets/images/jurado-gomez.jpg"}
							alt='imagen de jurado'
							width='100%'
							height='100%'
							className='object-cover object-center aspect-square'
						/>
						<div className='team-overlay opacity-0 group-hover:opacity-100'>
							<h2 className='text-center text-xl font-semibold text-[#fafafa]'>
								{puesto}
							</h2>
						</div>
						<div className='team-overlay-front'></div>
					</div>
					{/* titulo */}
					<div className='relative team-nombre font-bold group-hover:text-primary flex justify-center items-center p-[10px_20px_8px_20px] w-full'>
						<h1>{nombre}</h1>
					</div>
				</div>

				{/* inferior */}
				<div className='flex flex-col items-center w-full h-full'>
					<div className='relative flex justify-center items-center bg-[#0d2645] h-[22px] w-full team-clip-card'>
						<div
							className={cn(
								"absolute w-[70px] h-1.5 bg-gradient-luz",
								isHovered && "active"
							)}
						/>
					</div>
				</div>
			</div>
			<div className='absolute bottom-0 w-full h-2.5'>
				<div className='absolute text-[10px] bottom-[-8px] right-[62px] font-semibold text-primary'>
					{prefix ? `${prefix.toUpperCase()}-${pad(numero)}` : ""}
				</div>
			</div>
		</div>
	);
};

export default TeamItem;
