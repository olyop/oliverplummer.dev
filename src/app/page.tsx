export default function AboutPage() {
	return (
		<div className="relative min-h-[60rem] w-full">
			<div className="bg-primary absolute left-2 top-14 h-36 w-96 rounded-full blur-[7rem] sm:w-80" />
			<div className="bg-primary absolute bottom-1/2 right-10 h-96 w-36 -rotate-45 rounded-full blur-[7rem] sm:w-80" />
			<div className="bg-hover absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 translate-y-1/2 rotate-12 rounded-full blur-[7rem] sm:w-80" />
			<div className="bg-hover absolute left-0 top-1/2 size-96 -translate-y-1/2 rounded-full blur-[7rem] sm:w-80" />
			<div className="absolute right-8 top-8 size-44 rounded-full bg-yellow-300 blur-[2rem]" />
			<div className="absolute left-1/2 top-96 size-80 -translate-x-1/2 -rotate-45 rounded-full bg-purple-300 blur-[7rem]" />
			<div className="absolute bottom-0 right-0 size-64 -translate-x-1/2 rotate-45 rounded-full bg-blue-300 blur-[7rem]" />
			<div className="absolute bottom-16 left-36 size-64 rotate-45 rounded-full bg-red-300 blur-[7rem]" />
			<div className="z-20 grid items-stretch gap-4 p-4 sm:gap-8 sm:p-0 md:grid-cols-[30rem,15rem] md:grid-rows-[40rem,15rem]">
				<div className="bg-elevated-hsla-low z-20 space-y-8 rounded-3xl p-4 shadow backdrop-blur-lg sm:p-8">
					<div className="space-y-2">
						<p className="text-2xl">Hello! I am</p>
						<p className="text-3xl">
							<b>Oliver Plummer</b>
						</p>
						<p className="text-primary-accent text-xl">
							<u>Software Developer & Engineer</u>
						</p>
					</div>
					<p className="leading-6">
						<i>
							Creative Software Developer with 2 years of professional experience,
							bringing flair to dynamic interfaces and crafting innovative solutions that
							enhance user satisfaction. I love to build things, tackling everything from
							pixel-perfect front-end designs to secure back-end systems, ensuring smooth
							and seamless user experiences. With considerable personal and professional
							experience writing code, I have a knack for problem-solving and streamlining
							software processes. I thrive in fast-paced environments, and my passion for
							clean, maintainable code and continuous learning drives me to deliver
							high-quality solutions that meet both technical and business challenges with
							style and efficiency.
						</i>
					</p>
				</div>
				<div className="flex flex-row gap-4 sm:flex-col sm:gap-8">
					<div className="bg-elevated-hsla-low rounded-3xl p-4 shadow backdrop-blur-lg sm:p-8">
						<p>
							<u>Location:</u>
						</p>
						<p>
							<b>🇦🇺 Sydney, Australia</b>
						</p>
					</div>
					<div className="bg-elevated-hsla-low rounded-3xl p-4 shadow backdrop-blur-lg sm:p-8">
						<p>
							<u>Currently:</u>
						</p>
						<p>
							<b>Open to work</b>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
