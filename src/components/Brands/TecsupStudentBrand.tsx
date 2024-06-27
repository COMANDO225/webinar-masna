import { FC } from "react";
import TecsupLogoBrand from "./TecsupLogoBrand";
import TecsupTextBrand from "./TecsupTextBrand";

interface TecsupStudentBrandProps {}

const TecsupStudentBrand: FC<TecsupStudentBrandProps> = ({}) => {
	return (
		<div className='mt-10 grid grid-cols-[1fr] justify-center items-center'>
			<div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] justify-center'>
				{/* brand logo */}
				<div className='row-'>
					<TecsupLogoBrand />
				</div>
				{/* brand text */}
				<div className=''>
					<TecsupTextBrand />
				</div>
				<span>student</span>
			</div>
			<div className=''>
				<div className=''>sede</div>
				<div className=''></div>
				<div className=''>lima</div>
			</div>
		</div>
	);
};

export default TecsupStudentBrand;
