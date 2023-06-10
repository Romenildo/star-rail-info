import Character from "./Character";
import Player from "./Player";

export default interface Profile {
    player: Player,
    characters: Character[]
}