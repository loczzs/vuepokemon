export interface Pokemon {
  id: string;
  name: string;
  img: string;
  type: string;
  hp: number;
  damge: number;
  damgeSkill: number;
  price: number;
  color: string;
  hp100: number;
}
export interface Data {
  visible: boolean;
  rival: Pokemon;
  myPokemonz: Pokemon;
  ShowAttack1: boolean;
  ShowAttack2: boolean;
  injured2: boolean;
  injured1: boolean;
  attack: string;
  skills: string[];
  showButton: boolean
 
  inturn: boolean;
  PlayerHp: number;
  rivalHp: number;
  heal1: boolean;
  heal2: boolean;
  heal: string;
  buttonData: button[];
  result:string
  showResult: boolean;
  showmorphing:boolean;
  showMoney:boolean;
  showVs:boolean;
  animatbutton:boolean;
  showplusMoney:boolean
}
interface button {
  name: string;
  disabled: boolean;
  fc: void;
}
