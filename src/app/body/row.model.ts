export class Table{
    team: string;
    wins: string;
    loss: string;
    OT: string;
    PTS: string;
    RW: string;
    RegRC: string;
    Regper: string;

    constructor({team, wins, loss, OT, PTS, RW, RegRC, Regper} :
        {team:string, wins:string, loss:string, OT:string, PTS:string, RW:string, RegRC:string, Regper:string}){
            this.team=team;
            this.wins=wins;
            this.loss=loss;
            this.OT=OT;
            this.PTS=PTS;
            this.RW=RW;
            this.RegRC=RegRC;
            this.Regper=Regper;
        }
        
        
        
    
  
}