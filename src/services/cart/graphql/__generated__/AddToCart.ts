import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type AddToCartMutationVariables = Types.Exact<{
  input: Types.CartItemCreateInputType;
}>;

export type AddToCartMutation = {
  __typename?: 'Mutation';
  createCartItem?: {
    __typename?: 'CartItem';
    id: string;
    amount?: number | null;
    userId: string;
    serviceId?: string | null;
  } | null;
};

export const AddToCartDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddToCart' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CartItemCreateInputType' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCartItem' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'serviceId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddToCartMutation, AddToCartMutationVariables>;
