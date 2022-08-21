import getPokemonOptions, {
	getPokemonArr,
	getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("Pruebas en getPokemonOptions", () => {
	test("Debe de retornar un arreglo de números", () => {
		const pokemonArr = getPokemonArr();
		expect(pokemonArr.length).toBe(650);
		expect(pokemonArr[0]).toBe(1);
		expect(pokemonArr[500]).toBe(501);
		expect(pokemonArr[649]).toBe(650);
	});

	test("Debe de retorna un arreglo de 4 elementos con nombres de pokemon", async () => {
		const pokemonNamesArr = await getPokemonNames([1, 2, 3, 4]);
		expect(pokemonNamesArr).toEqual([
			{ id: 1, name: "bulbasaur" },
			{ id: 2, name: "ivysaur" },
			{ id: 3, name: "venusaur" },
			{ id: 4, name: "charmander" },
		]);
	});

	test("Debe de retornar un arreglo de pokemon mezlcado", async () => {
		const pokemonOptions = await getPokemonOptions();
		expect(pokemonOptions.length).toBe(4);
		expect(pokemonOptions).toEqual([
			{ id: expect.any(Number), name: expect.any(String) },
			{ id: expect.any(Number), name: expect.any(String) },
			{ id: expect.any(Number), name: expect.any(String) },
			{ id: expect.any(Number), name: expect.any(String) },
		]);
	});
});
