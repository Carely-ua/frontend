import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from '../../../../utils/graphql/__generated__/types';

export type ClinicFragment = {
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
};

export const ClinicFragmentDoc = {
  kind: 'Document',
  definitions: [
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
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
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
} as unknown as DocumentNode<ClinicFragment, unknown>;
