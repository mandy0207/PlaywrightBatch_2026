const { expect } = require("@playwright/test");
const { UniqueGenerator } = require("./UniqueGenerator");
const headers = {};

const loginUrl = "https://kinship-api-staging.kinship.engineering/auth/v2-sign-in";
const petUrl = "https://kinship-api-staging.kinship.engineering/my-pet-profile";

class APIUtil {

    constructor(apiContext) {
        this.apiContext = apiContext;
    }


    async postCall(payload, URL, extraHeaders) {
        return await this.apiContext.post(URL, {
            data: payload,
            headers: {
                ...this.getKinshipHeaders(),
                ...extraHeaders    //spread operator to concatenate json objects
            }
        }
        )
    }

    async getAccessToken() {
        const response = await this.postCall(this.getLoginPaylad(), loginUrl);
        const jsonResponse = await response.json()
        return jsonResponse['tokens']['accessToken'];

    }

    getKinshipHeaders() {
        return {
            "accept-language": "en-GB",
        }
    }


    async addPet(token) {
        const petName = UniqueGenerator.getUniqueName();
        const response = await this.postCall(this.getPetPayLoad(petName), petUrl, this.createHeaders(token));
        await expect(response).toBeOK();
        return petName;
    }


    getLoginPaylad() {
        return { email: "vinodbhaiyajijaiho@yopmail.com", password: "qwerty123" };
    }

    getPetPayLoad(petName) {
        return {
            "name": petName,
            "animal_type": "DOG",
            "breed": "African Wild Dog",
            "birth_date": "2022-11-01",
            "gender": "MALE",
            "spayed_or_neutered": "true",
            "weight": "",
            "acquisition_date": "2025-05-04",
            "acquisition_date_precision": "DAY",
            "wisdom_breed_id_1": "198ff010-784f-44f3-8b52-b9d04068d343"
        }
    }


    createHeaders(token) {
        headers["Authorization"] = `Bearer ${token}`;
        return headers;
    }

}
module.exports = { APIUtil };