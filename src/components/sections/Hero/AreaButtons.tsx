"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

interface AreaButtonsProps {}

const AreaButtons: FC<AreaButtonsProps> = ({}) => {
	return (
		<div className='flex gap-4 justify-center flex-wrap mt-5'>
			<Button
				color='primary'
				className='text-[#021025] font-semibold w-[180px] min-w-[180px]'
				variant='solid'
				as={Link}
				target='_blank'
				rel='noopener noreferrer'
				href='https://meet.google.com/rbz-pffq-wra'
			>
				Empecemos mi King
			</Button>
			<Button
				color='primary'
				className='text-primary font-semibold w-[180px] min-w-[180px]'
				variant='bordered'
				as={Link}
				href='#team-masna'
			>
				Conocer Equipo
			</Button>
		</div>
	);
};

export default AreaButtons;
