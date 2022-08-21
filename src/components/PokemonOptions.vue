<template>
	<div class="pokemon-options-container">
		<ul>
			<li
				v-for="pokemonOption in pokemonOptions"
				:key="pokemonOption.id"
				@click="$emit('selectedPokemon', pokemonOption.id)"
			>
				{{ pokemonOption.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "PokemonOptions",
	props: {
		pokemonOptions: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.pokemon-options-container {
	display: flex;
	justify-content: center;
}
ul {
	list-style-type: none;
	margin: 20px 0 0 0;
	padding: 0;
}
li {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 250px;
}
li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}
</style>
