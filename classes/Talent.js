class Talent {
    constructor(info) {
      this.name = info.name;
      this.email = info.email;
      this.password = info.password;
      this.phone_num = info.phone_num;
      this.country = info.country;
      this.schedule = info.schedule;
      this.profession = info.profession;
      this.abilities = info.abilities;
      this.links = info.links;
      this.reputation = 0.0;
    }

    // Para actualizar la reputación de un Talent
    set reputation(score) {
        this.reputation = score;
    }

    sign_contract(contract) {
        contract.confirmation = true;
        return contract.confirmation;
    }

}