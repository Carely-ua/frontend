import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetUnAuthCartQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars['ID']['input']>>
    | Types.InputMaybe<Types.Scalars['ID']['input']>
  >;
}>;

export type GetUnAuthCartQuery = {
  __typename?: 'Query';
  cartUnAuth?: {
    __typename?: 'CartResponse';
    cartLength?: number | null;
    cartItems?: Array<{
      __typename?: 'CartItem';
      id: string;
      doctor?: { __typename?: 'Doctor'; id: string; name: string; image: string } | null;
      service?: {
        __typename?: 'Service';
        id: string;
        name: string;
        serviceType: Types.ServiceType;
        price?: number | null;
        discountPrice?: number | null;
        clinic?: {
          __typename?: 'Clinic';
          mainImage?: string | null;
          name: string;
          clinicType: Types.ClinicType;
          id: string;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export const GetUnAuthCartDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUnAuthCart' },
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
            name: { kind: 'Name', value: 'cartUnAuth' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ids' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'ids' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'cartLength' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cartItems' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'doctor' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                          ],
                        },
                      },
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
                            { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'clinic' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'mainImage' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'clinicType' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
      },
    },
  ],
} as unknown as DocumentNode<GetUnAuthCartQuery, GetUnAuthCartQueryVariables>;
