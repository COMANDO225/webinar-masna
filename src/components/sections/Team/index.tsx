import { FC } from "react";
import TeamItem from "./TeamItem";

const equipo = [
	{
		id: 1,
		nombre: "Deysi Lloja Lucero",
		puesto: "Profesional de diseño y desarrollo de software",
		image: "/assets/images/deysi.webp",
		prefix: "P",
	},
	{
		id: 2,
		nombre: "Antony Laurente Ramirez",
		puesto: "Profesional de diseño y desarrollo de software",
		image: "/assets/images/antony.webp",
		prefix: "P",
	},
	{
		id: 3,
		nombre: "Sharon Rudas Diaz",
		puesto: "Profesional de diseño y desarrollo de software",
		image: "/assets/images/sharon.webp",
		prefix: "P",
	},
	{
		id: 4,
		nombre: "Anderson Almeyda Torres",
		puesto: "Desarrollador Backend en Panderosky",
		image: "/assets/images/almeyda.jpg",
		prefix: "P",
	},
];

interface TeamSectionProps {}

const TeamSection: FC<TeamSectionProps> = ({}) => {
	return (
		<section
			id='team-masna'
			className='section-masna bg-[#061322] text-[#fafafa] overflow-hidden'
		>
			<div className='wrapper-masna'>
				<div className='w-fit mx-auto'>
					<h2 className='uppercase text-primary pathway font-semibold text-center pb-6 text-2xl md:text-4xl'>
						Presentadores
					</h2>
					<div className='h-[1px] w-[60%] bg-primary mx-auto'></div>
				</div>
				<div className='w-full mt-14'>
					<div className='flex gap-5 flex-wrap w-fit mx-auto'>
						{equipo?.map((miembro) => (
							<TeamItem
								key={miembro.id}
								nombre={miembro.nombre}
								puesto={miembro.puesto}
								prefix={miembro.prefix}
								numero={miembro.id}
								imagen={miembro.image}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
