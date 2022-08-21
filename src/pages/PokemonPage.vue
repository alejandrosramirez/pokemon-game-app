<template>
	<h1 v-if="!pokemonOption">Espere por favor...</h1>
	<div v-else>
		<h1>¿Quién es ese Pokémon?</h1>

		<PokemonPicture
			:pokemonOptionId="pokemonOption.id"
			:showPokemonOption="showPokemonOption"
		/>

		<PokemonOptions
			:pokemonOptions="pokemonOptions"
			@selectedPokemon="checkPokemonOption"
		/>

		<template v-if="showSuccessPokemonOption">
			<h2>{{ message }}</h2>

			<button @click="newGame">
				Nueva partida
			</button>
		</template>
	</div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
	name: "PokemonPage",
	components: {
		PokemonPicture,
		PokemonOptions,
	},
	data() {
		return {
			pokemonOptions: [],
			pokemonOption: null,
			showPokemonOption: false,
			showSuccessPokemonOption: false,
			message: "",
		};
	},
	methods: {
		async getPokemonOptionsArr() {
			this.pokemonOptions = await getPokemonOptions();

			const randInt = Math.floor(Math.random() * 4);

			this.pokemonOption = this.pokemonOptions[randInt];
		},
		checkPokemonOption(pokemonOptionId) {
			this.showPokemonOption = true;
			this.showSuccessPokemonOption = true;

			if (pokemonOptionId === this.pokemonOption.id) {
				this.message = `Es... ${this.pokemonOption.name}`;
			} else {
				this.message = `No... es ${this.pokemonOption.name}`;
			}
		},
		async newGame() {
			this.pokemonOptions = [];
			this.pokemonOption = null;
			this.showPokemonOption = false;
			this.showSuccessPokemonOption = false;
			this.message = "";
			await this.getPokemonOptionsArr();
		}
	},
	mounted() {
		this.getPokemonOptionsArr();
	},
};
</script>
