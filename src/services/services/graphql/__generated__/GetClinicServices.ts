import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetServicesQueryVariables = Types.Exact<{
  filters: Types.ServiceFilterInputType;
}>;

export type GetServicesQuery = {
  __typename?: 'Query';
  getServices?: Array<{
    __typename?: 'Category';
    id: string;
    title: string;
    subTitles?: Array<{
      __typename?: 'CategoriesSubTitle';
      id: string;
      title: string;
      services?: Array<{
        __typename?: 'Service';
        id: string;
        name: string;
        price?: number | null;
        discountPrice?: number | null;
      } | null> | null;
    } | null> | null;
    services?: Array<{
      __typename?: 'Service';
      id: string;
      name: string;
      price?: number | null;
      discountPrice?: number | null;
      doctors?: Array<{
        __typename?: 'Doctor';
        id: string;
        name: string;
        rating?: number | null;
        reviewsCount?: number | null;
        image: string;
        tags?: Array<string | null> | null;
        experience?: string | null;
        price?: number | null;
        discountPrice?: number | null;
        title?: string | null;
      } | null> | null;
    } | null> | null;
  } | null> | null;
};

export const GetServicesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetServices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ServiceFilterInputType' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getServices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subTitles' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'services' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'services' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'doctors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'reviewsCount' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'experience' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
