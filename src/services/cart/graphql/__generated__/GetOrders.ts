import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type GetOrdersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetOrdersQuery = {
  __typename?: 'Query';
  orders?: Array<{
    __typename?: 'Order';
    id: string;
    number?: number | null;
    createdAt?: any | null;
    orderItems: Array<{
      __typename?: 'OrderItem';
      id: string;
      number?: number | null;
      endDate?: any | null;
      createdAt?: any | null;
      status?: Types.OrderStatus | null;
      doctor?: {
        __typename?: 'Doctor';
        id: string;
        name: string;
        tags?: Array<string | null> | null;
        image: string;
        price?: number | null;
        discountPrice?: number | null;
      } | null;
      service?: {
        __typename?: 'Service';
        serviceType: Types.ServiceType;
        name: string;
        price?: number | null;
        discountPrice?: number | null;
        clinic?: {
          __typename?: 'Clinic';
          id: string;
          mainImage?: string | null;
          clinicType: Types.ClinicType;
          name: string;
        } | null;
      } | null;
    }>;
  } | null> | null;
};

export const GetOrdersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOrders' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orderItems' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'doctor' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'service' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'serviceType' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discountPrice' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'clinic' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'mainImage' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'clinicType' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
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
} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
