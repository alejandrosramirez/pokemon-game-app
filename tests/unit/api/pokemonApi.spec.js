import pokemonApi from "@/api/pokemonApi";

describe("Pruebas en pokemonApi", () => {
	test("Debe de estar configurado correctamente", () => {
		expect(pokemonApi.defaults.baseURL).toBe(
			"https://pokeapi.co/api/v2/pokemon"
		);
	});
});
