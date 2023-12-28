import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type CheckClinicAnalyseQueryVariables = Types.Exact<{
  filters: Types.ClinicFilterInputType;
}>;

export type CheckClinicAnalyseQuery = {
  __typename?: 'Query';
  clinic?: { __typename?: 'Clinic'; hasAnalyse?: boolean | null } | null;
};

export const CheckClinicAnalyseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CheckClinicAnalyse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ClinicFilterInputType' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clinic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'hasAnalyse' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CheckClinicAnalyseQuery, CheckClinicAnalyseQueryVariables>;
