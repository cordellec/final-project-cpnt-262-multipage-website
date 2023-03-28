<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	let currentYear = new Date().getFullYear();
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase pl-8"><a href="/"><img src="/images/currency-exchange-svgrepo-com.svg" alt="" class="text-white w-16 h-auto object-cover object-center"></a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-md variant-ghost-surface"
					href="/"
					rel="noreferrer"
				>
					Charts
				</a>
				<a
					class="btn btn-md variant-ghost-surface"
					href="/crypto"
					rel="noreferrer"
				>
					Crypto
				</a>
				<a
					class="btn btn-md variant-ghost-surface"
					href="/contact"
					rel="noreferrer"
				>
					Contact
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">

	<div class="fixed bottom-0 left-0 w-full bg-surface-100-800-token p-4  border-gray-300 text-center">
    <div class=" bg-surface-100-800-token rounded-lg px-4 py-2">
      &copy; {currentYear} All rights reserved.
    </div>
  </div>
		
	</svelte:fragment>
	
</AppShell>
