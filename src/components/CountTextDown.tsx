"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Countdown, {
	CountdownRendererFn,
	CountdownRenderProps,
} from "react-countdown";

interface CountTextDownProps {
	date: string;
}

const CountTextDown: FC<CountTextDownProps> = ({ date }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const renderer: CountdownRendererFn = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}: CountdownRenderProps) => {
		if (completed) {
			return (
				<div className='w-full h-full flex items-center justify-center'>
					<Button
						as={Link}
						href='https://meet.google.com/rbz-pffq-wra'
						variant='solid'
						color='primary'
						fullWidth
						className='text-[#021025] font-bold text-lg min-h-[calc(100%-1rem)] h-[calc(100%-4rem)] rounded-full'
					>
						Ir al Webinar
					</Button>
				</div>
			);
		} else {
			return (
				<div className='text-center w-full h-full grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center text-[#f5f5f5]'>
					<CountItem value={hours} label='horas' />
					<div className='w-[1px] h-full bg-[#fafafa] opacity-10'></div>
					<CountItem value={minutes} label='min.' />
					<div className='w-[1px] h-full bg-[#fafafa] opacity-10'></div>
					<CountItem value={seconds} label='seg.' />
				</div>
			);
		}
	};

	if (!isClient) {
		return (
			<div className='text-center w-full h-full grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center'>
				<CountItem value={0} label='horas' />
				<div className=''>:</div>
				<CountItem value={0} label='min.' />
				<div className=''>:</div>
				<CountItem value={0} label='seg.' />
			</div>
		);
	}

	return <Countdown date={date} renderer={renderer} />;
};

const CountItem = ({ value, label }: { value: number; label: string }) => {
	const pad = (num: number) => String(num).padStart(2, "0");
	return (
		<div className='flex w-full h-full flex-col justify-center items-center text-[#f5f5f5] text-center'>
			<div className='text-3xl font-medium md:font-semibold md:text-4xl'>
				{pad(value)}
			</div>
			<div className='text-[#f5f5f5] text-[10px] uppercase text-center'>
				{label}
			</div>
		</div>
	);
};

export default CountTextDown;
