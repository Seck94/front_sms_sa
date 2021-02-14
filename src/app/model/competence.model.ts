export class Competence {
    id: number ;
    Libelle: string ;
    Descriptif: string ;

    constructor(
        id: number,
        Libelle: string,
        Descriptif: string
    )
     {
      this.id = id ;
      this.Descriptif = Descriptif ;
      this.Libelle = Libelle ;
    }
}
