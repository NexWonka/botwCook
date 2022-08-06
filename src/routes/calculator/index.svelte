<script>
	import { getCompendium } from './getCompendium';
	import { writable } from 'svelte/store';

	let btnToggle = true;
	let btnToggle2 = false;

	function toggle() {
		btnToggle = !btnToggle;
		btnToggle2 = !btnToggle2;
	}
</script>

<section>
	<div class="flex min-h-screen p-10 items-center justify-center">
		<div
			class="flex flex-col gap-5 p-10 md:p-20 bg-base-300 card shadow-md items-center justify-center overflow-visible"
		>
			<img
				class="w-1/2 card shadow-md"
				src="https://64.media.tumblr.com/4359d36a97e2c4a613db66655113b811/tumblr_ptmwpqXore1rjb7lwo1_540.jpg"
				alt=""
			/>
			<h1 class="text-5xl font-bold text-center uppercase">Calculator</h1>
			<p class="text-center">
				This calculator will help to detirmine the food/elixir effect result!
			</p>

			<div class="flex flex-row items-center justify-center">
				<button
					class="btn md:btn-wide rounded-r-none {btnToggle ? 'btn-primary' : ''}"
					on:click={toggle}
				>
					Food
				</button>
				<button
					class="btn md:btn-wide rounded-l-none {btnToggle2 ? 'btn-primary' : ''}"
					on:click={toggle}
				>
					Elixir
				</button>
			</div>

			<div class="flex flex-row flex-wrap items-center justify-evenly md:gap-5">
				<div class="dropdown">
					<label tabindex="0" class="btn m-1">Click</label>
					<ul
						tabindex="0"
						class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
						on:click={''}
					>
						<li><img src="" alt="" /></li>
					</ul>
				</div>

				<p>+</p>

				<div class="dropdown">
					<label tabindex="0" class="btn m-1">Click</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</div>

				<p>+</p>

				<div class="dropdown">
					<label tabindex="0" class="btn m-1">Click</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</div>

				<p>+</p>

				<div class="dropdown">
					<label tabindex="0" class="btn m-1">Click</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</div>

				<p>+</p>

				<div class="dropdown">
					<label tabindex="0" class="btn m-1">Click</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</div>
			</div>
			<button class="btn btn-wide btn-primary uppercase">
				<a href="/calculator"> Cook! </a>
			</button>
		</div>
	</div>
</section>
