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

    // Para crear y agregar un proyecto disponible
    create_project(info) {
        let project = new Project(info);
        if( this.projects[info.title] ){
            return false
        } else{
            this.projects[info.title] = project
            return true
        }
    }

    // Para obtener objeto con todos los proyectos del Hunter
    // Se agrega la propiedad "hunter" para poder saber a quién
    // pertenecen los proyectos fuera de la instancia
    get projects() {
        return Object.assign({hunter: this.email}, person);
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