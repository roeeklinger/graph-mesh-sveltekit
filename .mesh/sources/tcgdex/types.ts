// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TcgdexTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type Query = {
  /** Find the cards */
  cards?: Maybe<Array<Maybe<Card>>>;
  /** Find the sets */
  sets?: Maybe<Array<Maybe<Set>>>;
  /** Find the series */
  series?: Maybe<Array<Maybe<Serie>>>;
  /** Find one card (using the id and set is deprecated) */
  card?: Maybe<Card>;
  /** Find one set (using the id is deprecated) */
  set?: Maybe<Set>;
  /** Find one serie (using the id is deprecated) */
  serie?: Maybe<Serie>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycardsArgs = {
  filters?: InputMaybe<CardsFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerysetsArgs = {
  filters?: InputMaybe<SetFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryseriesArgs = {
  filters?: InputMaybe<SerieFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CardsFilters>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerysetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<SetFilters>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryserieArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<SerieFilters>;
};

/** Paginate the datas you fetch */
export type Pagination = {
  /** Indicate the page number (from 1) */
  page: Scalars['Int']['input'];
  /** Indicate the number of items in one page */
  itemsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Change how the data is sorted */
export type Sort = {
  /** Indicate which field it will sort using */
  field: Scalars['String']['input'];
  /** Indicate how it is sorted ("ASC" or "DESC) (default: "ASC") */
  order?: InputMaybe<Scalars['String']['input']>;
};

/** a Card filters */
export type CardsFilters = {
  /** Filter on the card's category (Pokemon, Trainer or Energy) */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card's decription */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the card energy type (normal or special) */
  energyType?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the previous evolution of the current pokémon */
  evolveFrom?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the Pokémon's HPs */
  hp?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the card id */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Filter for the card's local id */
  localId?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the pokémon national pokédex number */
  dexId?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the illustrator name */
  illustrator?: InputMaybe<Scalars['String']['input']>;
  /** Filter on ths Pokémon's level */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the Card's name */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter on the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card's regulation mark */
  regulationMark?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the Card evolution stage */
  stage?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card suffix */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the trainer type */
  trainerType?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the retreat point cost */
  retreat?: InputMaybe<Scalars['Int']['input']>;
};

/** Define what is a card for GraphQL */
export type Card = {
  /** The pokémon abilities */
  abilities?: Maybe<Array<Maybe<AbilitiesListItem>>>;
  /** The pokémon attacks */
  attacks?: Maybe<Array<Maybe<AttacksListItem>>>;
  /** The card category ('Pokemon' | 'Trainer' | 'Energy') */
  category: Scalars['String']['output'];
  /** The card description (mostly the Poédex description) */
  description?: Maybe<Scalars['String']['output']>;
  /** The pokémon(s) Pokédex IDs (Pokémons appearing on the card image & name) */
  dexId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** the energy/trainer effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** the energy type ('Normal' | 'Special') */
  energyType?: Maybe<Scalars['String']['output']>;
  /** the previous evolution of the current pokémon */
  evolveFrom?: Maybe<Scalars['String']['output']>;
  /** the Pokémon's HPs */
  hp?: Maybe<Scalars['Int']['output']>;
  /** the card id */
  id: Scalars['String']['output'];
  /** the illustrator name */
  illustrator?: Maybe<Scalars['String']['output']>;
  /** The card's image if available (see the docs for more details) */
  image?: Maybe<Scalars['String']['output']>;
  /** The Pokémon's item */
  item?: Maybe<Item>;
  /** The card legality in tournaments */
  legal: Legal;
  /** The Pokémon level */
  level?: Maybe<Scalars['Int']['output']>;
  /** the card's local id */
  localId: Scalars['String']['output'];
  /** the Card's name */
  name: Scalars['String']['output'];
  /**
   * the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity: Scalars['String']['output'];
  /** the card's regulation mark */
  regulationMark?: Maybe<Scalars['String']['output']>;
  /** The pokémon resistances */
  resistances?: Maybe<Array<Maybe<WeakResListItem>>>;
  /** The Card retreat cost */
  retreat?: Maybe<Scalars['Int']['output']>;
  /** The card's set */
  set: Set;
  /** the Card evolution stage */
  stage?: Maybe<Scalars['String']['output']>;
  /** the card suffix */
  suffix?: Maybe<Scalars['String']['output']>;
  /** the trainer type */
  trainerType?: Maybe<Scalars['String']['output']>;
  /** The pokémon type(s) (trivia: Even the TCG implemented at some point multiple types for a single card) */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The card variants */
  variants?: Maybe<Variants>;
  /** The pokémon weaknesses */
  weaknesses?: Maybe<Array<Maybe<WeakResListItem>>>;
};

/** define a single ability */
export type AbilitiesListItem = {
  /** The ability effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** The ability name */
  name?: Maybe<Scalars['String']['output']>;
  /** the ability type ('Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait') */
  type?: Maybe<Scalars['String']['output']>;
};

/** define a single attack */
export type AttacksListItem = {
  /** The attack cost in energies (can be affected by the effect) */
  cost?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The attack damage (can be affected by the effect) */
  damage?: Maybe<Scalars['String']['output']>;
  /** The attack additionnal effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** The attack name */
  name: Scalars['String']['output'];
};

/** Indicate the item a pokémon has on him */
export type Item = {
  /** the item effect */
  effect: Scalars['String']['output'];
  /** the item name */
  name: Scalars['String']['output'];
};

/** Indicate the legality of a card for official tournaments */
export type Legal = {
  /** Is the card playable in expanded tournaments? */
  expanded?: Maybe<Scalars['Boolean']['output']>;
  /** Is the card playable in standard tournaments? */
  standard?: Maybe<Scalars['Boolean']['output']>;
};

/** Definition for the Weakness and REsistance elements */
export type WeakResListItem = {
  /** the Weakness/resistance type */
  type: Scalars['String']['output'];
  /** the Weakness/resistance modifier (can be 2x or 30+ or nothing) */
  value?: Maybe<Scalars['String']['output']>;
};

/** All the card variants */
export type Variants = {
  /** is the card available in a first edition version? */
  firstEdition: Scalars['Boolean']['output'];
  /** can the card be found has an holo? */
  holo: Scalars['Boolean']['output'];
  /** can the card be found without special elements? */
  normal: Scalars['Boolean']['output'];
  /** Can the card be found a a reverse holo version? */
  reverse: Scalars['Boolean']['output'];
  /** was the card a wPromo card? */
  wPromo: Scalars['Boolean']['output'];
};

/** Describe a single set */
export type Set = {
  /** Indicate how much cards is in the set */
  cardCount: CardCount;
  /** list the cards in the set */
  cards: Array<Maybe<Card>>;
  /** The Set id */
  id: Scalars['String']['output'];
  /** The set logo if available */
  logo?: Maybe<Scalars['String']['output']>;
  /** The set's name */
  name: Scalars['String']['output'];
  /** The set's symbol if available */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The Set serie */
  serie: Serie;
  /** The set official release date */
  releaseDate: Scalars['String']['output'];
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: Maybe<Scalars['String']['output']>;
};

/** Filters for the set query */
export type SetFilters = {
  /** The Set id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The set's name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The Set serie */
  serie?: InputMaybe<Scalars['String']['input']>;
  /** The set official release date */
  releaseDate?: InputMaybe<Scalars['String']['input']>;
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Indicate how much cards a set contains
 *
 * It also indicate how much card for a specific variant
 */
export type CardCount = {
  /** The number of first edition cards in the set */
  firstEd?: Maybe<Scalars['Int']['output']>;
  /** The number of holo cards in the set */
  holo?: Maybe<Scalars['Int']['output']>;
  /** The number of normal cards in the set */
  normal?: Maybe<Scalars['Int']['output']>;
  /** The number of cards that are not hidden (generally in the bottom left/right) */
  official: Scalars['Int']['output'];
  /** The number of reverse cards in the set */
  reverse?: Maybe<Scalars['Int']['output']>;
  /** The total number of cards in the set */
  total: Scalars['Int']['output'];
};

/** A Pokémon TCG serie */
export type Serie = {
  /** The Serie ID */
  id: Scalars['String']['output'];
  /** The serie's logo if available */
  logo?: Maybe<Scalars['String']['output']>;
  /** the serie's name */
  name: Scalars['String']['output'];
  /** the list of sets that are part of the serie */
  sets: Array<Maybe<Set>>;
};

/** The Serie filters */
export type SerieFilters = {
  /** the serie's id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the serie */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** currently unused but is the general endpoint for every other elements */
export type StringEndpoint = {
  /** The list of cards that are available in the endpoint */
  cards: Array<Maybe<Card>>;
  /** The endpoint element name */
  name: Scalars['String']['output'];
};

  export type QuerySdk = {
      /** Find the cards **/
  cards: InContextSdkMethod<Query['cards'], QuerycardsArgs, MeshContext>,
  /** Find the sets **/
  sets: InContextSdkMethod<Query['sets'], QuerysetsArgs, MeshContext>,
  /** Find the series **/
  series: InContextSdkMethod<Query['series'], QueryseriesArgs, MeshContext>,
  /** Find one card (using the id and set is deprecated) **/
  card: InContextSdkMethod<Query['card'], QuerycardArgs, MeshContext>,
  /** Find one set (using the id is deprecated) **/
  set: InContextSdkMethod<Query['set'], QuerysetArgs, MeshContext>,
  /** Find one serie (using the id is deprecated) **/
  serie: InContextSdkMethod<Query['serie'], QueryserieArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["tcgdex"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
