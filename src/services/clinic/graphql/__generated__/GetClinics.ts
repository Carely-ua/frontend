import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetClinicsQueryVariables = Types.Exact<{
  filters: Types.ClinicFilterInputType;
}>;

export type GetClinicsQuery = {
  __typename?: 'Query';
  getClinics?: Array<{
    __typename?: 'Clinic';
    id: string;
    name: string;
    rating?: number | null;
    address: string;
    image: string;
    clinicType: Types.ClinicType;
    reviewsCount?: number | null;
    workingTime?: string | null;
    mapCoordinates: { __typename?: 'MapCoordinates'; lat: number; lng: number };
    specializations?: Array<{
      __typename?: 'Specialization';
      id: string;
      title: string;
    } | null> | null;
  } | null> | null;
};

export const GetClinicsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetClinics' },
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
            name: { kind: 'Name', value: 'getClinics' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'clinicType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mapCoordinates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reviewsCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'specializations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'workingTime' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetClinicsQuery, GetClinicsQueryVariables>;
