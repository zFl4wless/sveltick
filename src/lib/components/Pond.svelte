<script>
	import { onMount } from 'svelte';

	const STARTING_FISH_COUNT = 20;

	let pondEl, pondWidth, pondHeight;

	onMount(() => {
		pondEl = document.querySelector('.pond');
		determinePondSize();

		window.addEventListener('resize', determinePondSize);
		pondEl.addEventListener('click', stirPond);

		spawnStartingFish();

		return () => {
			document.removeEventListener('resize', determinePondSize);
			pondEl.removeEventListener('click', stirPond);
		};
	});

	function determinePondSize() {
		pondWidth = pondEl.clientWidth;
		pondHeight = pondEl.clientHeight;
	}

	function spawnStartingFish() {
		for (let i = 0; i < STARTING_FISH_COUNT; i++) {
			spawnFish(getRandom(pondWidth), getRandom(pondHeight));
		}
	}

	function stirPond(event) {
		spawnFish(event.clientX, event.clientY);
	}

	function spawnFish(x, y) {
		const fish = document.createElement('div');
		fish.className = 'fish';
		fish.innerHTML = `
    <div class="fish-bob">
      <div class="fish-direction">
        <div class="fish-body"></div>
      </div>
    </div>
  `;

		const colors = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4];
		fish.classList.add(`fish-${colors[Math.floor(getRandom(15))]}`);
		if (getRandom(2) < 1) {
			fish.classList.add('fish-flip');
		}

		const fishBob = fish.querySelector('.fish-bob');
		fishBob.style.animationDelay = `-${getRandom(7)}s`;

		const fishBody = fish.querySelector('.fish-body');
		fishBody.addEventListener('click', (e) => {
			e.stopPropagation();
			pokeFish(fish);
		});

		positionFish(fish, x, y);

		// let fish go
		pondEl.appendChild(fish);
		setTimeout(() => doFishyThings(fish), getRandom(10000));
	}

	function pokeFish(fish) {
		fish.classList.toggle('fish-spin');
	}

	function doFishyThings(fish) {
		blowBubble(fish);
		moveFish(fish);

		clearTimeout(fish._timeout);
		fish._timeout = setTimeout(() => doFishyThings(fish), 10000 + getRandom(6000));
	}

	function blowBubble(fish) {
		const bubble = document.createElement('div');
		bubble.className = 'bubble';
		if (fish.classList.contains('fish-flip')) {
			bubble.classList.add('bubble-flip');
		}

		const x = fish.dataset.x ? parseFloat(fish.dataset.x) : 0;
		const y = fish.dataset.y ? parseFloat(fish.dataset.y) : 0;
		bubble.style.top = `${y}px`;
		bubble.style.left = `${x}px`;

		pondEl.prepend(bubble);
		setTimeout(() => popBubble(bubble), 4000);
	}

	function moveFish(fish) {
		const x = getRandom(pondWidth);
		const y = getRandom(pondHeight);

		const oldX = fish.dataset.x ? parseFloat(fish.dataset.x) : 0;
		if (x < oldX) {
			fish.classList.add('fish-flip');
		} else {
			fish.classList.remove('fish-flip');
		}

		positionFish(fish, x, y);
	}

	function positionFish(fish, x, y) {
		fish.style.transform = `translate(${x}px, ${y}px)`;
		fish.dataset.x = x;
		fish.dataset.y = y;
	}

	function popBubble(bubble) {
		bubble.remove();
	}

	function getRandom(upper) {
		return Math.random() * upper;
	}
</script>

<div class="pond"></div>