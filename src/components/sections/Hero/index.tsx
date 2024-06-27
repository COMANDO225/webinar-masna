import { FC } from "react";
import CyberText from "../../CyberText";
import AreaButtons from "./AreaButtons";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<section
			id='header-masna'
			className='bg-gradient-masna relative flex justify-center items-center w-full h-screen min-h-[100%]'
		>
			<div className='circuitosbg'>
				<div className='circuitos__left'></div>
				<div className='circuitos__right'></div>
			</div>
			<div className='w-full px-[3%] h-full'>
				<div className='relative z-10 w-full h-full flex justify-center items-center'>
					<div className='text-center py-24'>
						<h2 className='uppercase font-semibold text-primary text-2xl md:text-3xl lg:text-4xl pathway mb-4 lg:mb-5'>
							&lt; sé parte del webinar /&gt;{" "}
						</h2>
						<div className='relative text-center grid'>
							<CyberText
								className='text-[28px] sm:text-4xl md:text-6xl lg:text-7xl'
								text='Arquitecturas de'
							/>
							<CyberText
								className='text-[28px] sm:text-4xl md:text-5xl lg:text-7xl mt-[-4px] md:mt-2'
								text='Software'
							/>
						</div>
						<div className='uppercase font-semibold text-primary text-2xl md:text-3xl lg:text-4xl pathway mt-4 lg:mt-6'>
							Construye sistemas escalables y de alto rendimiento
						</div>
						<p className='text-sm md:text-base text-[#fafafa] mx-auto max-w-[680px] mt-2'>
							Conoce las últimas tendencias y tecnologías en
							arquitectura de software, y cómo aplicarlas en tus
							proyectos. ¡No te lo pierdas!
						</p>
						{/* <div className='mt-5 mx-auto'>
							<CountTextDown date='2024-06-27T20:00:00' />
						</div> */}
						<AreaButtons />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
