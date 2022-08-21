import { shallowMount, mount } from "@vue/test-utils";

import PokemonPage from "@/pages/PokemonPage.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemonOptions } from "../mocks/pokemonOptions.mock";

describe("Pruebas en <PokemonPage />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(PokemonPage);
	});

	test("Debe de hacer match con el snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test("Debe de de llamar 'getPokemonOptionsArr' al montarse", () => {
		const getPokemonOptionsArrSpy = jest.spyOn(
			PokemonPage.methods,
			"getPokemonOptionsArr"
		);
		shallowMount(PokemonPage);
		expect(getPokemonOptionsArrSpy).toHaveBeenCalled();
	});

	test("Debe de hacer match con el snapshot cuando se cargan los pokémon", () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonOptions,
					pokemonOption: pokemonOptions[0],
					showPokemonOption: false,
					showSuccessPokemonOption: false,
					message: "",
				};
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	test("Debe de mostrar los componentes 'PokemonPicture' y PokemonOptions'", () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonOptions,
					pokemonOption: pokemonOptions[0],
					showPokemonOption: false,
					showSuccessPokemonOption: false,
					message: "",
				};
			},
		});
		const pokemonPictureStub = wrapper.find("pokemon-picture-stub");
		const pokemonOptionsStub = wrapper.find("pokemon-options-stub");
		expect(pokemonPictureStub.exists()).toBeTruthy();
		expect(pokemonOptionsStub.exists()).toBeTruthy();
		expect(pokemonPictureStub.attributes("pokemonoptionid")).toBe("1");
		expect(pokemonOptionsStub.attributes("pokemonoptions")).toBeTruthy();
	});

	test("Debe de probar 'checkPokemonOption'", async () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonOptions,
					pokemonOption: pokemonOptions[0],
					showPokemonOption: false,
					showSuccessPokemonOption: false,
					message: "",
				};
			},
		});
		await wrapper.vm.checkPokemonOption(1);
		expect(wrapper.find("h2").exists()).toBeTruthy();
		expect(wrapper.vm.showPokemonOption).toBeTruthy();
		expect(wrapper.find("h2").text()).toBe(`Es... ${pokemonOptions[0].name}`);
		await wrapper.vm.checkPokemonOption(3);
		expect(wrapper.vm.message).toBe(`No... es ${pokemonOptions[0].name}`);
	});
});
