import Deck from '../entities/Deck';
import IListDecksDTO from "@modules/decks/dtos/IListDecksDTO";
import ICreateDecksDTO from "@modules/decks/dtos/ICreateDecksDTO";
import IIndexDecksDTO from "@modules/decks/dtos/IIndexDecksDTO";
import IRemoveDecksDTO from "@modules/decks/dtos/IRemoveDecksDTO";

export interface IDecksRepository {
  list(data: IListDecksDTO): Promise<Deck[]>;
  index(data: IIndexDecksDTO): Promise<Deck>;
  create(data: ICreateDecksDTO): Promise<Deck>;
  remove(data: IRemoveDecksDTO): Promise<void>;
}