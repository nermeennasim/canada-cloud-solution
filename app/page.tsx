import CanadaCloudHomePage from "./components/CanadaCloudHomePage";

export default function Home() {
	return (
		//fix css padding only 10px or margin 10 from all sides
		<div className="flex min-h-screen flex-col items-center justify-center pl-10 pr-10 pb-5 pt-5">
			<CanadaCloudHomePage />
		</div>
	);
}
