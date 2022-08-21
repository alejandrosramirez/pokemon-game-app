import { shallowMount } from "@vue/test-utils";

import PokemonPicture from "@/components/PokemonPicture.vue";

describe("Pruebas en <PokemonPicture />", () => {
	test("Debe de hacer match con el snapshot", () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonOptionId: 1,
				showPokemonOption: false,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	test("Debe de mostrar la imagen oculta y el pokemon 100", () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonOptionId: 100,
				showPokemonOption: false,
			},
		});
		const [image1, image2] = wrapper.findAll("img");
		expect(image1.exists()).toBeTruthy();
		expect(image2).toBe(undefined);
		expect(image1.classes("pokemon-picture-hidden")).toBeTruthy();
		expect(image1.attributes("src")).toContain(
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
		);
	});

	test("Debe de mostrar el pokemon si el showPokemonOption es true", () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonOptionId: 100,
				showPokemonOption: true,
			},
		});
		const image = wrapper.find("img");
		expect(image.exists()).toBeTruthy();
		expect(image.classes("pokemon-picture-hidden")).toBeFalsy();
		expect(image.classes("fade-in")).toBeTruthy();
	});
});
