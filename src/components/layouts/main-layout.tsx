import { FC, ReactNode } from "react";
import BottomSheet from "../BottomSheet";

interface MainProps {
	children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
	return (
		<main className='webinar_app'>
			{children}
			<BottomSheet />
		</main>
	);
};

export default Main;
