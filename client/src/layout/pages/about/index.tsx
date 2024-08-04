import { FC } from "react";

const AboutPage: FC = () => (
	<div className="relative h-[1000px] min-h-[1000px] w-full">
		<div className="bg-primary absolute left-2 top-14 h-36 w-96 rounded-full blur-[7rem] sm:w-80" />
		<div className="bg-primary absolute bottom-1/2 right-10 h-96 w-36 -rotate-45 rounded-full blur-[7rem] sm:w-80" />
		<div className="bg-hover absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 translate-y-1/2 rotate-12 rounded-full blur-[7rem] sm:w-80" />
		<div className="bg-hover absolute left-0 top-1/2 size-96 -translate-y-1/2 rounded-full blur-[7rem] sm:w-80" />
		<div className="absolute -top-0 right-8 size-44 rounded-full bg-yellow-300 blur-[2rem]" />
		<div className="absolute left-1/2 top-96 size-80 -translate-x-1/2 -rotate-45 rounded-full bg-purple-300 blur-[7rem]" />
		<div className="absolute bottom-0 right-0 size-64 -translate-x-1/2 rotate-45 rounded-full bg-blue-300 blur-[7rem]" />
		<div className="absolute bottom-16 left-36 size-64 rotate-45 rounded-full bg-red-300 blur-[7rem]" />
		<div className="absolute w-[calc(100vw-2rem)] space-y-4 rounded-3xl bg-transparent p-4 sm:left-16 sm:top-16 sm:w-auto sm:p-0">
			<p className="text-2xl">Hello! I am</p>
			<p className="text-3xl">
				<b>Oliver Plummer</b>
			</p>
			<p className="text-primary-accent text-xl">
				<u>Software Developer & Engineer</u>
			</p>
			<p className="max-w-96 text-sm leading-6">
				<i>
					Creative Software Developer and Engineer with 2 years of experience in
					developing and deploying dynamic, interactive user interfaces using React. My
					passion lies in crafting innovative solutions for software implementation across
					customer sites, focusing on enhancing user experiences and engagement through
					efficient, elegant, and maintainable code. I excel at supporting and maintaining
					software and operating systems, ensuring a seamless user experience. With
					expertise across the full software development life cycle, I can create
					pixel-perfect front-end UI designs and optimise database performance while
					designing secure back-end systems. I am dedicated to writing concise, readable,
					and maintainable code that addresses technical and business challenges
					efficiently. My strong analytical, problem-solving, and communication skills,
					combined with a commitment to continuous learning, enable me to deliver
					high-quality solutions under tight project deadlines.
				</i>
			</p>
		</div>
	</div>
);

export default AboutPage;
