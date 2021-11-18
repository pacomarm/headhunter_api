class Hunter {
    constructor(info) {
      this.name = info.name;
      this.email = info.email;
      this.password = info.password;
      this.phone_num = info.phone_num;
      this.country = info.country;
      this.company = info.company;
      this.projects = {};
      this.reputation = 0.0;
    }

    create_project(info) {
        let project = new Project(info);
        if( this.projects[info.title] ){
            return false
        } else{
            this.projects[info.title] = project
            return true
        }
    }

    // Para actualizar la reputación de un Hunter
    set reputation(score) {
        this.reputation = score;
    }

    create_contract(info) {
        let contract = new Contract(info);
        delete this.projects[info.title];
        return contract
    }


}