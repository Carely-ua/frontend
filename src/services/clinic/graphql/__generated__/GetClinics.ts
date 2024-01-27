import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetClinicsQueryVariables = Types.Exact<{
  filters: Types.ClinicFilterInputType;
}>;

export type GetClinicsQuery = {
  __typename?: 'Query';
  getClinics?: Array<{
    __typename?: 'Clinic';
    specializations?: Array<string | null> | null;
    id: string;
    name: string;
    rating?: number | null;
    mainImage?: string | null;
    images?: Array<string | null> | null;
    clinicType: Types.ClinicType;
    reviewsCount?: number | null;
    phone?: Array<string | null> | null;
    clinicDepartments?: Array<{
      __typename?: 'ClinicDepartment';
      id: string;
      title?: string | null;
      workingTime?: string | null;
      address?: string | null;
      specializations?: Array<string | null> | null;
      mapCoordinates?: { __typename?: 'MapCoordinates'; lat: number; lng: number } | null;
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Clinic' } },
                { kind: 'Field', name: { kind: 'Name', value: 'specializations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Clinic' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Clinic' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mainImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'images' } },
          { kind: 'Field', name: { kind: 'Name', value: 'clinicType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reviewsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clinicDepartments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'workingTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'specializations' } },
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
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetClinicsQuery, GetClinicsQueryVariables>;
