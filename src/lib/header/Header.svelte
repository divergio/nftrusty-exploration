<script lang="ts">
	import { page } from '$app/stores';
	import { user } from '$lib/stores/user';
	import { connectWallet } from '$lib/utils/connect-wallet';
</script>

<header class="flex px-3 py-8  items-center">
	<div class="flex-grow font-bold heading">NFTrusty</div>

	{#if $user.walletAddress}
		<div class="px-2 lonk pretty-lonk">
			Connected as {$user.walletENSAddress ||
				`${$user.walletAddress.slice(0, 2)}...${$user.walletAddress.slice(-4)}`}
		</div>
	{:else}
		<button on:click={() => connectWallet()} class="px-2 lonk underline cursor-auto"
			>Connect Wallet</button
		>
	{/if}
	<a href="#scan-an-nft" class="px-2 lonk">Scan an NFT</a>
	<a href="#learn-more" class="px-2 lonk">Learn More</a>
	<div>
		<a href="#">
			<img class="w-6 h-6" src="/images/github.svg" />
		</a>
	</div>
</header>

<style>
	.lonk {
		@apply text-xs;
	}

	.pretty-lonk {
		@apply text-pink-600;
	}
</style>
