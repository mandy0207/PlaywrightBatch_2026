const loginUrl ="https://kinship-api-staging.kinship.engineering/auth/v2-sign-in";


class APIUtil{

    constructor(apiContext){
        this.apiContext= apiContext;
    }

    
async postCall(payload, URL) {
    return await this.apiContext.post(URL, {
        data: payload,
        headers : this.getKinshipHeaders()
    }
)
}

async  getAccessToken(){
   const response= await this.postCall(this.getLoginPaylad(), loginUrl);
  const jsonResponse =await response.json()
  return jsonResponse['tokens']['accessToken'];
   
}

 getKinshipHeaders(){
    return {
        "accept-language" : "en-GB"
    }
}

async addPet(){
  const response= await this.postCall(this.getLoginPaylad(), loginUrl);
}


getLoginPaylad(){
return {email: "vinodbhaiyajijaiho@yopmail.com", password: "qwerty123"};
}

}
module.exports={APIUtil};