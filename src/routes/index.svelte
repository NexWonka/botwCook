<script>
	import '../app.css';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width" />
	<title>Zelda BOTW Cooking Guide</title>
</svelte:head>

<section>
	<div
		class="flex flex-row p-10 items-center justify-center bg-main-bg min-h-screen bg-cover bg-top"
	/>
</section>

<section>
	<div class="flex min-h-screen p-10 items-center justify-center">
		<div
			class="flex flex-col gap-5 p-10 md:p-20 bg-base-300 card shadow-md items-center justify-center"
		>
			<h1 class="text-5xl font-bold text-center uppercase">
				Zelda Breath of The Wild Cooking Guides
			</h1>
			<p class="text-center">Welcome!</p>
			<p class="text-center">This site will help to explain the cooking system in Zelda BOTW</p>
			<p class="text-center">
				This guide is based on <a
					class="link italic"
					href="https://www.reddit.com/r/zelda/comments/61ccva/botw_cooking_math_complete/"
					target="_blank">this thread</a
				>
				on Reddit and also from
				<a
					class="link italic"
					href="https://www.zeldadungeon.net/wiki/Cooking_in_Breath_of_the_Wild#:~:text=Cooking%20is%20a%20game%20mechanic,around%20healing%20and%20stats%20boosting."
					target="_blank">zeldadungeon</a
				> website
			</p>
			<p class="text-center">Find this guide usefull? you can buy me a coffee! ☕</p>
		</div>
	</div>
</section>

<section>
	<div class="flex min-h-screen p-10 items-center justify-center">
		<div class="flex flex-col p-10 md:p-20 gap-5 bg-base-300 card shadow-md justify-center">
			<h1 class="text-5xl font-bold uppercase">Cooking System</h1>
			<p class="text-justify">
				Cooking is a game mechanic in Breath of the Wild, where Link can throw up to five pieces of
				material into a lit Cooking Pot to create a cooked dish. Different combinations of items
				result in different dishes with different effects, mostly centered around healing and stats
				boosting. Cooking is a game mechanic in Breath of the Wild, where Link can throw up to five
				pieces of material into a lit Cooking Pot to create a cooked dish. Different combinations of
				items result in different dishes with different effects, mostly centered around healing and
				stats boosting.
			</p>
			<div class="flex flex-col md:flex-row gap-5 justify-evenly items-center">
				<div class="card shadow-md w-96 p-3 bg-neutral">
					<img
						class="card"
						src="data:image/jpeg;base64,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"
						alt=""
					/>
				</div>
				<div class="card shadow-md md:w-1/3 p-3 bg-neutral">
					<img class="card" src="https://i.ytimg.com/vi/1ZoOFW5Mumk/maxresdefault.jpg" alt="" />
				</div>
				<div class="card shadow-md md:w-1/3 p-3 bg-neutral">
					<img
						class="card"
						src="https://www.gamelivestory.com/images/article/breath-of-the-wild-12-best-cooking-recipes-main.webp"
						alt=""
					/>
				</div>
			</div>
			<div class="flex flex-row items-center gap-2">
				<a
					class="text-justify link italic"
					href="https://www.zeldadungeon.net/wiki/Cooking_in_Breath_of_the_Wild#:~:text=Cooking%20is%20a%20game%20mechanic,around%20healing%20and%20stats%20boosting."
					target="_blank">Source</a
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="flex min-h-screen p-10 items-center justify-center">
		<div class="flex flex-col gap-5 p-10 md:p-20 bg-base-300 card shadow-md justify-center">
			<h1 class="text-5xl font-bold uppercase">The Basics</h1>
			<p class="text-justify">
				There are three types of cooking items: <strong>Food</strong>, <strong>Animals</strong>, and
				<strong>Monster Parts</strong>. Animals and monster parts must be cooked together in order
				to make something other than Dubious Food. To start off, simply roasting (putting something
				next to a cooking pot or on a fire) a food item will multiply the amount of hearts that food
				item gives by 1.5x. <br /><br />Cooking (putting in a cooking pot) a food item will double
				the amount of hearts it gives when eaten; the same rule applies to cooking multiple items.
				There are 116 different meals you can make, though each one can have varying stats and
				effects. Some materials have special effect properties, which is noticeable in their name
				(e.g. an Electric Safflina will give you shock resistance if you cook it, while a Swift
				Carrot gives you more speed). <br /><br />Note that Link will not gain an effect if an
				effect-giving food is eaten raw. Also note that if two or more foods that give different
				effects are cooked together, the resulting meal will give no effect. All foods extend the
				duration of an effect. Animals, such as Warm Darners or Fireproof Lizards, and monster
				parts, such as Bokoblin Guts and Lynel Hooves can only be used in creating Elixirs. Animals
				and monster parts must be combined in order to create an elixir. Note that in some
				instances, food items can also be added without changing the final product into a meal.
				There are also a few other materials that are not in any category, namely dragon parts,
				ores, Fairies, Wood, Monster Extract, and Star Fragments, which all affect meals
				differently.
			</p>
			<div class="flex flex-col md:flex-row gap-5 justify-evenly items-center">
				<div class="card shadow-md md:w-1/3 p-3 bg-neutral">
					<img
						class="card"
						src="https://3u8dbs16f2emlqxkbc8tbvgf-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/IMG_55111-scaled.jpg"
						alt=""
					/>
				</div>
				<div class="card shadow-md md:w-1/3 p-3 bg-neutral">
					<img
						class="card"
						src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cdey57k2zrwofqc9f2eu.jpg"
						alt=""
					/>
				</div>
				<div class="card shadow-md md:w-1/3 p-3 bg-neutral">
					<img
						class="card"
						src="http://www.hxchector.com/wp-content/uploads/legend-of-zelda-breath-of-the-wild-cooking1.jpg"
						alt=""
					/>
				</div>
			</div>
			<p class="text-justify">More to note :</p>
			<ul class="list-disc md:list-inside">
				<li>
					Total health is equal to the sum of the health restoring ingredients' values multiplied by
					2 or Health = Total Health Values x 2
				</li>
				<li>
					An effect's duration is controlled by the sum of it's ingredient's time values (all cold
					resist/attack up/stealth up/etc share the same time) plus 30 seconds for every ingredient.
				</li>
				<li>
					Potency is controlled by a point system. To figure out the potency of a dish, you must sum
					up the potency points of the ingredients and check if you've passed a certain threshold.
				</li>
				<li>
					Dishes can "crit", you'll hear a musical cue to signify that it has occurred (you'll pick
					up on it pretty easily).
				</li>
			</ul>
			<div class="flex flex-row items-center gap-2">
				<a
					class="text-justify link italic"
					href="https://www.zeldadungeon.net/wiki/Cooking_in_Breath_of_the_Wild#:~:text=Cooking%20is%20a%20game%20mechanic,around%20healing%20and%20stats%20boosting."
					target="_blank">Source</a
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="flex min-h-screen p-10 items-center justify-center">
		<div class="flex flex-col gap-5 p-10 md:p-20 bg-base-300 card shadow-md justify-center">
			<h1 class="text-5xl font-bold uppercase">Food Buff Duration</h1>
			<p class="text-justify">
				The duration of an effect is handled by the effect, not the ingredient. All attack boosting
				ingredients, for example, contribute 20 seconds to the duration, totaling 50 seconds for
				counting as an ingredient.
			</p>
			<ul class="list-disc md:list-inside">
				<li>Attack Up 0:20</li>
				<li>Cold Resistance 2:00</li>
				<li>Defense Up 0:20</li>
				<li>Fireproof 2:00</li>
				<li>Heat Resistance 2:00</li>
				<li>Shock Resistance 2:00</li>
				<li>Speed Up 0:30</li>
				<li>Stealth Up 1:30</li>
			</ul>
			<p class="text-justify">
				With this we can calculate a dish's duration when using a voltfruit and two apples like
				this:
			</p>
			<ul class="list-decimal md:list-inside">
				<li>You get 2:00 for each voltfruit (1) in the dish.</li>
				<li>
					You add any time boosting ingredients (I'll talk about them later) of which there are
					none.
				</li>
				<li>Finally, add 0:30 for each ingredient (3) totaling 1:30.</li>
				<li>Add your 2:00 to the 1:30 and you get 3:30.</li>
				<li>If you get different results, make sure you listened for the crit music</li>
			</ul>
			<div class="flex flex-col md:flex-row gap-5 justify-center items-center">
				<div class="card shadow-md p-3 bg-neutral">
					<img
						class="card"
						src="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/05/Zelda-Breath-Of-The-Wild-Meals.jpg"
						alt=""
					/>
				</div>
			</div>
			<div class="flex flex-row items-center gap-2">
				<a
					class="text-justify link italic"
					href="https://www.reddit.com/r/zelda/comments/61ccva/botw_cooking_math_complete/"
					target="_blank">Source</a
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="flex min-h-screen p-10 items-center justify-center">
		<div class="flex flex-col gap-5 p-10 md:p-20 bg-base-300 card shadow-md justify-center">
			<h1 class="text-5xl font-bold uppercase">Food Buff Potency</h1>
			<p class="text-justify">
				For potency, it appears each ingredient has a specific "tier". Each tier provides X amount
				of "potency points" specific for each effect type.
			</p>
			<ul class="list-disc md:list-inside">
				<li>Tier 1 (Low) - X Points</li>
				<li>Tier 2 (Mid) - 2X Points</li>
				<li>Tier 3 (High) - 3X Points</li>
			</ul>
			<p class="text-justify">
				To reach a certain tier, you must accumulate a number of points. As such:
			</p>
			<ul class="list-disc md:list-inside">
				<li>Mid Threshold = 30 Points</li>
				<li>High Threshold = 45 Points</li>
			</ul>
			<p class="text-justify">
				For example, add a Mighty Porgy (21) to two Mighty Bananas (14 each) to get a High level
				Attack buff (potency of 49).
			</p>
			<div class="flex flex-col md:flex-row gap-5 justify-center items-center">
				<div class="card shadow-md p-3 bg-neutral">
					<img
						class="card"
						src="https://external-preview.redd.it/6sLGRIbgsZ1SXetbyEF47_CEmGyVJRYabDSfw9pDMwM.jpg?auto=webp&s=4db4adbc1652a5704936b5cdd74011a0f3c47e37"
						alt=""
					/>
				</div>
			</div>
			<p class="text-justify">
				For more information, check the "Potency" and "Effect Tier" column in the <a
					class="link italic"
					href="https://docs.google.com/spreadsheets/d/1PmZ_H8dAQnWS1rG8H-yWlfRVjBYjdx4Uj5WcD_bkJzA/edit#gid=1186507702"
					target="_blank">spreadsheet</a
				>.
			</p>
			<div class="flex flex-row items-center gap-2">
				<a
					class="text-justify link italic"
					href="https://www.reddit.com/r/zelda/comments/61ccva/botw_cooking_math_complete/"
					target="_blank">Source</a
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>
