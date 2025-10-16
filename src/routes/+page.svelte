<script>
	import Digit from '$lib/components/Digit.svelte';
	import { onMount } from 'svelte';

	let digits = [0, 0, 0, 0, 0, 0]; // H,H,M,M,S,S

	function updateTime() {
		const now = new Date();

		const h = String(now.getHours()).padStart(2, '0');
		const m = String(now.getMinutes()).padStart(2, '0');
		const s = String(now.getSeconds()).padStart(2, '0');

		digits = [...h, ...m, ...s].map(Number);
	}

	onMount(() => {
		updateTime();

		const timer = setInterval(updateTime, 1000);

		return () => clearInterval(timer);
	});
</script>

<main class="flex justify-center items-center h-screen overflow-hidden">
	<div class="h-16 overflow-visible w-full flex justify-center gap-16">
		<div class="flex gap-6">
			<div class="relative">
				<div class="focus-glass z-50"></div>

				<Digit value={digits[0]} limit={2} />
			</div>

			<div class="relative">
				<div class="focus-glass z-50"></div>

				<Digit value={digits[1]} />
			</div>
		</div>

		<div class="flex gap-6">
			<div class="relative">
				<div class="focus-glass z-50"></div>

				<Digit value={digits[2]} limit={5} />
			</div>

			<div class="relative">
				<div class="focus-glass z-50"></div>

				<Digit value={digits[3]} />
			</div>
		</div>

		<div class="flex gap-6">
			<div class="relative">
				<div class="focus-glass z-50"></div>

				<Digit value={digits[4]} limit={5} />
			</div>

			<div class="relative">
				<div class="focus-glass z-50"></div>

				<Digit value={digits[5]} />
			</div>
		</div>
	</div>
</main>