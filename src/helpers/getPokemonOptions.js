import pokemonApi from "@/api/pokemonApi";

export const getPokemonArr = () => {
	const pokemonArr = Array.from(Array(650));
	return pokemonArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
	const mixedPokemonArr = getPokemonArr().sort(() => Math.random() - 0.5);
	const pokemonOptionsArr = await getPokemonNames(mixedPokemonArr.splice(0, 4));
	return pokemonOptionsArr;
};

export const getPokemonNames = async ([a, b, c, d] = []) => {
	const pokemonNamesPromisesArr = [
		pokemonApi.get(`/${a}`),
		pokemonApi.get(`/${b}`),
		pokemonApi.get(`/${c}`),
		pokemonApi.get(`/${d}`),
	];

	const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(pokemonNamesPromisesArr);

	return [
		{
			id: pokemon1.data.id,
			name: pokemon1.data.name,
		},
		{
			id: pokemon2.data.id,
			name: pokemon2.data.name,
		},
		{
			id: pokemon3.data.id,
			name: pokemon3.data.name,
		},
		{
			id: pokemon4.data.id,
			name: pokemon4.data.name,
		}
	];
};

export default getPokemonOptions;
