<script lang="ts">
	const posts = [
		{
			id: 1,
			title: 'Getting Started with SvelteKit',
			description: 'A comprehensive guide to building modern web applications with SvelteKit.',
			date: 'December 2024',
			category: 'Development',
			readTime: '5 min read',
			gradient: 'from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20'
		},
		{
			id: 2,
			title: 'Design Principles for Web',
			description: 'Essential principles every web designer should know for creating better interfaces.',
			date: 'November 2024',
			category: 'Design',
			readTime: '7 min read',
			gradient: 'from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20'
		},
		{
			id: 3,
			title: 'TypeScript Best Practices',
			description: 'Tips and tricks for writing clean and maintainable TypeScript code.',
			date: 'October 2024',
			category: 'Development',
			readTime: '6 min read',
			gradient: 'from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
		},
		{
			id: 4,
			title: 'Responsive Design Patterns',
			description: 'Modern approaches to building responsive layouts that work everywhere.',
			date: 'September 2024',
			category: 'Design',
			readTime: '8 min read',
			gradient: 'from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20'
		},
		{
			id: 5,
			title: 'State Management in React',
			description: 'Understanding different state management solutions and when to use them.',
			date: 'August 2024',
			category: 'Development',
			readTime: '10 min read',
			gradient: 'from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20'
		},
		{
			id: 6,
			title: 'Accessibility Matters',
			description: 'Why web accessibility is crucial and how to implement it effectively.',
			date: 'July 2024',
			category: 'Design',
			readTime: '6 min read',
			gradient: 'from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20'
		}
	];
</script>

<svelte:head>
	<title>Skills - Portfolio</title>
	<meta name="description" content="Articles and thoughts on design, development, and technology" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-4xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				Skills & Writing
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				Thoughts on design, development, and building great products. Sharing knowledge and experiences from my journey.
			</p>
		</div>

	<!-- Posts/Articles -->
	<div class="space-y-12">
		{#each posts as post}
			<article class="group">
				<div class="block">
					<!-- Visual Element -->
					<div class="aspect-[2/1] rounded-2xl bg-gradient-to-br {post.gradient} mb-6 overflow-hidden">
						<div class="w-full h-full group-hover:scale-105 transition-transform duration-300"></div>
					</div>

					<!-- Post Info -->
					<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
						<span>{post.date}</span>
						<span>·</span>
						<span>{post.category}</span>
						<span>·</span>
						<span>{post.readTime}</span>
					</div>

					<!-- Title & Description -->
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
						{post.title}
					</h2>
					<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						{post.description}
					</p>
				</div>
			</article>
		{/each}
	</div>

	<!-- CTA -->
	<div class="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
			Want to learn more?
		</h2>
		<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
			I regularly share insights and tutorials on my blog and social media.
		</p>
		<div class="flex flex-wrap gap-4">
			<button
				type="button"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				Subscribe to Newsletter
			</button>
			<button
				type="button"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
			>
				Follow on Twitter
			</button>
		</div>
	</div>
</div>
</div>
