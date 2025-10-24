<script lang="ts">
	import { Mail, MapPin, Calendar } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About - Portfolio</title>
	<meta name="description" content="Learn more about my journey, experience, and what drives my work" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-4xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				About Me
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				I'm a designer and developer with a passion for creating beautiful, functional digital experiences. Based in Jakarta, working with clients worldwide.
			</p>
		</div>

	<!-- Profile Section -->
	<div class="mb-20">
		<div class="flex items-start gap-8 mb-12">
			<!-- Avatar -->
			<div class="flex-shrink-0">
				<div class="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
					Y
				</div>
			</div>

			<!-- Contact Info -->
			<div class="space-y-3 pt-2">
				<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
					<MapPin size={18} />
					<span>Jakarta, Indonesia</span>
				</div>
				<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
					<Mail size={18} />
					<a href="mailto:hello@example.com" class="hover:text-gray-900 dark:hover:text-white transition-colors">
						hello@example.com
					</a>
				</div>
				<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
					<Calendar size={18} />
					<span>Available for freelance</span>
				</div>
			</div>
		</div>

		<!-- Bio -->
		<div class="prose prose-lg dark:prose-invert max-w-none">
			<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
				With over 5 years of experience in web development and design, I've had the privilege of working with startups and established companies to bring their digital visions to life.
			</p>
			<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
				My approach combines technical expertise with a deep understanding of user experience. I believe that great design is not just about aesthetics—it's about creating intuitive, accessible solutions that solve real problems.
			</p>
			<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
				When I'm not coding or designing, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
			</p>
		</div>
	</div>

	<!-- Experience -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
		<div class="space-y-8">
			<div>
				<div class="flex items-baseline justify-between mb-2">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Senior Frontend Developer</h3>
					<span class="text-sm text-gray-600 dark:text-gray-400">2021 - Present</span>
				</div>
				<p class="text-gray-600 dark:text-gray-400 mb-2">Company Name</p>
				<p class="text-gray-700 dark:text-gray-300">
					Leading frontend development for enterprise applications. Building scalable component libraries and mentoring junior developers.
				</p>
			</div>

			<div>
				<div class="flex items-baseline justify-between mb-2">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Full Stack Developer</h3>
					<span class="text-sm text-gray-600 dark:text-gray-400">2019 - 2021</span>
				</div>
				<p class="text-gray-600 dark:text-gray-400 mb-2">Previous Company</p>
				<p class="text-gray-700 dark:text-gray-300">
					Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality products.
				</p>
			</div>

			<div>
				<div class="flex items-baseline justify-between mb-2">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Junior Developer</h3>
					<span class="text-sm text-gray-600 dark:text-gray-400">2018 - 2019</span>
				</div>
				<p class="text-gray-600 dark:text-gray-400 mb-2">Startup Inc.</p>
				<p class="text-gray-700 dark:text-gray-300">
					Started my professional journey building responsive websites and learning modern development practices.
				</p>
			</div>
		</div>
	</div>

	<!-- Skills Overview -->
	<div>
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Tools</h2>
		<div class="grid sm:grid-cols-2 gap-6">
			<div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Development</h3>
				<p class="text-gray-700 dark:text-gray-300">
					JavaScript, TypeScript, React, Vue, Svelte, Node.js, Python, PHP
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Design</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Figma, Adobe XD, Photoshop, Illustrator, UI/UX Design
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tools</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Git, Docker, AWS, Vercel, CI/CD, Testing Frameworks
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Other</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Agile, Scrum, Code Review, Technical Writing, Mentoring
				</p>
			</div>
		</div>
	</div>
</div>
</div>
