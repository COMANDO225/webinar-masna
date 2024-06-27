import ByAlmeyda from "@/components/ByAlmeyda";
import Main from "@/components/layouts/main-layout";
import { HeroSection } from "@/components/sections";
import AboutSection from "@/components/sections/About";
import TeamSection from "@/components/sections/Team";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Main>
			<HeroSection />
			<AboutSection />
			<TeamSection />
			<ByAlmeyda />
		</Main>
	);
};

export default HomePage;
