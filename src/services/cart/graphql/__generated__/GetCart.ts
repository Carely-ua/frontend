import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetCartQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetCartQuery = {
  __typename?: 'Query';
  cart?: {
    __typename?: 'CartResponse';
    cartSum?: number | null;
    cartDiscountSum?: number | null;
    cartLength?: number | null;
    cartItems?: Array<{
      __typename?: 'CartItem';
      id: string;
      service?: {
        __typename?: 'Service';
        id: string;
        name: string;
        serviceType: Types.ServiceType;
        price?: number | null;
        discountPrice?: number | null;
        clinic?: { __typename?: 'Clinic'; image: string; name: string } | null;
      } | null;
    } | null> | null;
  } | null;
};

export const GetCartDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCart' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cart' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'cartSum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cartDiscountSum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cartLength' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cartItems' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'service' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'serviceType' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'clinic' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
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
      },
    },
  ],
} as unknown as DocumentNode<GetCartQuery, GetCartQueryVariables>;
