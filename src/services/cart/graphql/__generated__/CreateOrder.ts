import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type CreateOrderMutationVariables = Types.Exact<{ [key: string]: never }>;

export type CreateOrderMutation = {
  __typename?: 'Mutation';
  createOrder?: { __typename?: 'Order'; id: string; number?: number | null } | null;
};

export const CreateOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOrder' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOrder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
