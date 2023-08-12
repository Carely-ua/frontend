import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetCartQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetCartQuery = {
  __typename?: 'Query';
  cart?: Array<{
    __typename?: 'CartItem';
    id: string;
    amount?: number | null;
    service?: {
      __typename?: 'Service';
      id: string;
      name: string;
      serviceType: Types.ServiceType;
      price?: number | null;
      clinic?: { __typename?: 'Clinic'; image: string; name: string } | null;
    } | null;
  } | null> | null;
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
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
} as unknown as DocumentNode<GetCartQuery, GetCartQueryVariables>;
