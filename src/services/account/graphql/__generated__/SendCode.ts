import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type SendCodeMutationVariables = Types.Exact<{
  phone: Types.Scalars['String']['input'];
}>;

export type SendCodeMutation = { __typename?: 'Mutation'; sendSms?: string | null };

export const SendCodeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendCode' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sendSms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'phone' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SendCodeMutation, SendCodeMutationVariables>;
