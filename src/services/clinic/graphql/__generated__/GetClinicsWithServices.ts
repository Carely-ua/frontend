import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetClinicsWithServicesQueryVariables = Types.Exact<{
  filters: Types.ClinicFilterInputType;
}>;

export type GetClinicsWithServicesQuery = {
  __typename?: 'Query';
  getClinics?: Array<{
    __typename?: 'Clinic';
    id: string;
    name: string;
    rating?: number | null;
    address: string;
    mainImage?: string | null;
    images?: Array<string | null> | null;
    clinicType: Types.ClinicType;
    reviewsCount?: number | null;
    workingTime?: string | null;
    services?: Array<{
      __typename?: 'Service';
      id: string;
      name: string;
      price?: number | null;
      discountPrice?: number | null;
    } | null> | null;
    mapCoordinates: { __typename?: 'MapCoordinates'; lat: number; lng: number };
  } | null> | null;
};

export const GetClinicsWithServicesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetClinicsWithServices' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mainImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'images' } },
          { kind: 'Field', name: { kind: 'Name', value: 'clinicType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reviewsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'workingTime' } },
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
} as unknown as DocumentNode<GetClinicsWithServicesQuery, GetClinicsWithServicesQueryVariables>;
