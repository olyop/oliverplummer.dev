import { FC } from "react";

const AboutPage: FC = () => (
	<div className="flex flex-col justify-center gap-16 text-center">
		<h2 className="text-xl">
			<b>
				👋 Hello! 👋
				<br />
				My name is Oliver.
				<br />
			</b>
		</h2>
		<div className="flex flex-col items-center gap-8">
			<p className="text">
				I am a <b>fullstack</b> software developer
				<br />
				based in 🇦🇺 Sydney, Australia.
			</p>
			<p className="text">
				I specialize in
				<br />
				designing, developing, and deploying
				<br />
				fully featured <b>single-page applications </b>
				across the stack while scaling them in the cloud.
			</p>
			<p className="text">
				Need a <b>website</b>?<br />
				I can create and deploy a<br />
				<b> personal</b> or <b>business</b>
				<br />
				website with any requirements.
			</p>
		</div>
	</div>
);

export default AboutPage;
