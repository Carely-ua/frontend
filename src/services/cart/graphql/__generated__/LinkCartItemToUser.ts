import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type LinkCartItemToUserMutationVariables = Types.Exact<{
  ids?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars['ID']['input']>>
    | Types.InputMaybe<Types.Scalars['ID']['input']>
  >;
}>;

export type LinkCartItemToUserMutation = {
  __typename?: 'Mutation';
  linkCartItemToUser?: Array<{ __typename?: 'CartItem'; id: string } | null> | null;
};

export const LinkCartItemToUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LinkCartItemToUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'ids' } },
          type: {
            kind: 'ListType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linkCartItemToUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ids' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'ids' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LinkCartItemToUserMutation, LinkCartItemToUserMutationVariables>;
