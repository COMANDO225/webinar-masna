import BurbujitasMasna from "@/components/BurbujitasMasna";
import { LampContainer } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import { FC } from "react";
import { FaVideo } from "react-icons/fa6";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
	return (
		<section
			id='about-masna'
			className='section-masna bg-[hsl(213,71%,10%)] text-[#fafafa] overflow-hidden'
		>
			<div className='absolute w-full h-[1px] bg-primary top-0'></div>
			<div className='wrapper-masna grid justify-center gap-10'>
				<div
					className={cn(
						"relative grid items-center",
						"grid-cols-1 gap-6 circuit-1",
						"md:grid-cols-2 md:0"
					)}
				>
					<div className='order-2 md:-order-none relative h-[490px] sm:h-[550px] flex'>
						<div className='pieza cerebrosky pointer-events-none select-none w-[220px] h-fit left-[1px]'>
							<Image
								src={"assets/svgs/brain.svg"}
								width={250}
								height={200}
								alt='cerebrosky'
								draggable='false'
							/>
						</div>
						<div className='pieza select-none pointer-events-none h-full z-10'>
							<Image
								src={"assets/svgs/contenedor.svg"}
								alt='contenedorosky'
								fill
								draggable='false'
							/>
						</div>
						<BurbujitasMasna />
					</div>
					<div className=''>
						<div className=''>
							<h3 className='text-center md:text-start uppercase font-semibold text-primary text-2xl md:text-3xl lg:text-4xl pathway mb-2 lg:mb-4'>
								BENEFICIOS DE...
							</h3>
							<h2 className='text-center md:text-start text-4xl md:text-5xl font-semibold !leading-[1.2]'>
								Arquitecturas de Software
								<span className='text-3xl md:text-4xl'>🔥</span>
							</h2>
						</div>
						<div className='mt-5'>
							<p className='text-center md:text-start '>
								Una buena arquitectura de software mejora la
								escalabilidad, rendimiento, mantenibilidad y
								flexibilidad.
							</p>
							<br />
							<p className='text-center md:text-start text-primary'>
								Únete a nuestro webinar para aprender a
								implementar arquitecturas que aporten valor a
								tus proyectos y te ayuden a alcanzar tus
								objetivos.
							</p>
						</div>
					</div>
				</div>
				<div className='stream-container md:mx-auto grid sm:grid-cols-2'>
					<StreamItem
						className='stream-start'
						icon={
							<Avatar
								alt='Perú 🇵🇪'
								className='w-6 min-w-6 min-h-[25px] h-[25px]'
								src='https://flagcdn.com/pe.svg'
							/>
						}
					>
						<p className='text-xs'>INICIO</p>
						<span className='text-sm text-primary'>
							9:00 PM Lima - Perú
						</span>
					</StreamItem>
					<StreamItem
						className='stream-end'
						icon={<FaVideo fill='white' size={22} />}
					>
						<p className='text-xs'>Transmisión</p>
						<span className='hidden md:block text-sm text-primary'>
							Facebook Live y Google Meet
						</span>
						<span className='md:hidden text-sm text-primary'>
							Facebook y Google Meet
						</span>
					</StreamItem>
				</div>
			</div>
		</section>
	);
};

interface StreamItemProps {
	icon: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}
const StreamItem = ({ icon, children, className }: StreamItemProps) => {
	return (
		<div
			className={cn(
				"relative grid p-[18px_25px] w-full max-w-[350px] grid-cols-[auto_1fr] justify-start md:justify-center items-center gap-2 mx-auto",
				className
			)}
		>
			<div className='relative overflow-hidden w-12 h-12 min-w-12 min-h-12 rounded-full bg-[#07182C] flex justify-center items-center'>
				{icon}
			</div>
			<div className=''>{children}</div>
		</div>
	);
};

export default AboutSection;
