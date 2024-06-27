import { FC, Fragment } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

interface ByAlmeydaProps {}

const ByAlmeyda: FC<ByAlmeydaProps> = ({}) => {
	return (
		<Fragment>
			<div className='sticky bottom-0 almeydaBar'>
				<div className='byAlmeyda'>
					<span className='font-medium text-xs mr-1 select-none'>
						Powered by
					</span>
					<div className=''>
						<AiFillThunderbolt />
					</div>
					<span className='font-medium text-xs select-none'>
						Almeyda
					</span>
				</div>
			</div>
			<div className='w-full bg-black'>
				{/* texto de pagina web todos los derechos reservados */}
				<div className='container mx-auto text-center text-white py-2'>
					<p className='text-[10px]'>Todos los derechos reservados</p>
				</div>
			</div>
		</Fragment>
	);
};

export default ByAlmeyda;
