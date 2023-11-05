import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetDoctorPageQueryVariables = Types.Exact<{
  filters: Types.ServiceFilterInputType;
}>;

export type GetDoctorPageQuery = {
  __typename?: 'Query';
  service?: {
    __typename?: 'Service';
    id: string;
    price?: number | null;
    discountPrice?: number | null;
    doctors?: Array<{
      __typename?: 'Doctor';
      name: string;
      description: string;
      image: string;
      rating?: number | null;
      tags?: Array<string | null> | null;
      title?: string | null;
      experience?: number | null;
      id: string;
      price?: number | null;
      discountPrice?: number | null;
    } | null> | null;
    clinic?: {
      __typename?: 'Clinic';
      mainImage?: string | null;
      id: string;
      name: string;
      rating?: number | null;
      reviewsCount?: number | null;
      address: string;
      phone: string;
      workingTime?: string | null;
      mapCoordinates: { __typename?: 'MapCoordinates'; lat: number; lng: number };
      reviews?: Array<{
        __typename?: 'Review';
        id: string;
        text: string;
        rate?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export const GetDoctorPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetDoctorPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ServiceFilterInputType' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'service' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'doctors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'experience' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clinic' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'mainImage' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'reviewsCount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reviews' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'rate' } },
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
} as unknown as DocumentNode<GetDoctorPageQuery, GetDoctorPageQueryVariables>;
