import axios from "axios";

export let getCompendium = async () => {
    let response = await axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`);
    creature.set(response.data.data.food);
};
