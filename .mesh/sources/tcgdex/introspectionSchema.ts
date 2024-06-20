// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "locale"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The language to use",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lang"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD"
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Every queries available on the GraphQL API\n\nIf you have more queries that you would like added, make a new issue here\n\nhttps://github.com/tcgdex/cards-database/issues/new/choose",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find the cards",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cards"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "filters"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "CardsFilters"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "pagination"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Pagination"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Sort"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Card"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find the sets",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sets"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "filters"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "SetFilters"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "pagination"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Pagination"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Sort"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Set"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find the series",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "filters"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "SerieFilters"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "pagination"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Pagination"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Sort"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Serie"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find one card (using the id and set is deprecated)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "card"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "set"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The new way to filter",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filters"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "CardsFilters"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Card"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find one set (using the id is deprecated)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "set"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The new way to filter",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filters"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "SetFilters"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Set"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find one serie (using the id is deprecated)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "serie"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The new way to filter",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filters"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "SerieFilters"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Serie"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Paginate the datas you fetch",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Pagination"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicate the page number (from 1)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "page"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicate the number of items in one page",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "itemsPerPage"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Change how the data is sorted",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Sort"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicate which field it will sort using",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "field"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicate how it is sorted (\"ASC\" or \"DESC) (default: \"ASC\")",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "order"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "a Card filters",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CardsFilters"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the card's category (Pokemon, Trainer or Energy)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "category"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the card's decription",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter for the card energy type (normal or special)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "energyType"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter for the previous evolution of the current pokémon",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "evolveFrom"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the Pokémon's HPs",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hp"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the card id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter for the card's local id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "localId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the pokémon national pokédex number",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dexId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the illustrator name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "illustrator"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on ths Pokémon's level",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "level"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the Card's name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the card's rarity\n\nsee: https://api.tcgdex.net/v2/en/rarities for the full list",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rarity"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the card's regulation mark",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "regulationMark"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the Card evolution stage",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stage"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the card suffix",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "suffix"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the trainer type",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "trainerType"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filter on the retreat point cost",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "retreat"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Define what is a card for GraphQL",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Card"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The pokémon abilities",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "abilities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AbilitiesListItem"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The pokémon attacks",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attacks"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AttacksListItem"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The card category ('Pokemon' | 'Trainer' | 'Energy')",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "category"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The card description (mostly the Poédex description)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The pokémon(s) Pokédex IDs (Pokémons appearing on the card image & name)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dexId"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the energy/trainer effect",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "effect"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the energy type ('Normal' | 'Special')",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "energyType"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the previous evolution of the current pokémon",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "evolveFrom"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the Pokémon's HPs",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the card id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the illustrator name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "illustrator"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The card's image if available (see the docs for more details)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "image"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Pokémon's item",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "item"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Item"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The card legality in tournaments",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "legal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Legal"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Pokémon level",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "level"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the card's local id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "localId"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the Card's name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the card's rarity\n\nsee: https://api.tcgdex.net/v2/en/rarities for the full list",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rarity"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the card's regulation mark",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "regulationMark"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The pokémon resistances",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "resistances"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WeakResListItem"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Card retreat cost",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "retreat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The card's set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "set"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Set"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the Card evolution stage",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the card suffix",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "suffix"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the trainer type",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "trainerType"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The pokémon type(s) (trivia: Even the TCG implemented at some point multiple types for a single card)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "types"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The card variants",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "variants"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Variants"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The pokémon weaknesses",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "weaknesses"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WeakResListItem"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "define a single ability",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "AbilitiesListItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ability effect",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "effect"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ability name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the ability type ('Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait')",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "define a single attack",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "AttacksListItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The attack cost in energies (can be affected by the effect)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cost"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The attack damage (can be affected by the effect)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "damage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The attack additionnal effect",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "effect"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The attack name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Indicate the item a pokémon has on him",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Item"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the item effect",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "effect"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the item name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Indicate the legality of a card for official tournaments",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Legal"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Is the card playable in expanded tournaments?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "expanded"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Is the card playable in standard tournaments?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "standard"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Definition for the Weakness and REsistance elements",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "WeakResListItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the Weakness/resistance type",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the Weakness/resistance modifier (can be 2x or 30+ or nothing)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "All the card variants",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Variants"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "is the card available in a first edition version?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "firstEdition"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "can the card be found has an holo?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "holo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "can the card be found without special elements?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "normal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Can the card be found a a reverse holo version?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "reverse"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "was the card a wPromo card?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wPromo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Describe a single set",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Set"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicate how much cards is in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cardCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CardCount"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "list the cards in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cards"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Card"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Set id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set logo if available",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set's name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set's symbol if available",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "symbol"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Set serie",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "serie"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Serie"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set official release date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "releaseDate"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set tcgOnline code if available in the APP",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tcgOnline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filters for the set query",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SetFilters"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Set id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set's name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Set serie",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "serie"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set official release date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "releaseDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The set tcgOnline code if available in the APP",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tcgOnline"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Indicate how much cards a set contains\n\nIt also indicate how much card for a specific variant",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CardCount"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of first edition cards in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "firstEd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of holo cards in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "holo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of normal cards in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "normal"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of cards that are not hidden (generally in the bottom left/right)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "official"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of reverse cards in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "reverse"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of cards in the set",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "total"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A Pokémon TCG serie",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Serie"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Serie ID",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The serie's logo if available",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the serie's name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the list of sets that are part of the serie",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sets"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Set"
                }
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The Serie filters",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SerieFilters"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "the serie's id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the serie",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "currently unused but is the general endpoint for every other elements",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "StringEndpoint"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The list of cards that are available in the endpoint",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cards"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Card"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The endpoint element name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});