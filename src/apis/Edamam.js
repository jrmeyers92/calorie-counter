import axios from "axios";
const appId = "4b30167a";
const appKey = "a63e746fe6fe1ea55aeb0f0cfeec9022";

export default axios.create({
	baseURL:
		"https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&",
	params: {
		app_id: appId,
		app_key: appKey,
	},
});
