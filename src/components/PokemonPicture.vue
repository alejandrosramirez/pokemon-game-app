<template>
	<div class="pokemon-picture-container">
		<img
			v-if="!showPokemonOption"
			:src="imageSrc"
			class="pokemon-picture-hidden"
			alt="pokemon"
		/>

		<img v-else :src="imageSrc" class="fade-in" alt="pokemon" />
	</div>
</template>

<script>
export default {
	name: "PokemonPicture",
	props: {
		pokemonOptionId: {
			type: Number,
			required: true,
		},
		showPokemonOption: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	computed: {
		imageSrc() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonOptionId}.svg`;
		},
	},
};
</script>

<style scoped>
.pokemon-picture-container {
	height: 200px;
}
img {
	height: 200px;
	margin-left: -50vw;
	position: absolute;
	width: 100vw;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
}
.pokemon-picture-hidden {
	filter: brightness(0);
}
</style>
