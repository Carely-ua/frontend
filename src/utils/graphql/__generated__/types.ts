export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type Clinic = {
  __typename?: 'Clinic';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  clinicType: ClinicType;
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  mapCoordinates: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
};

export type ClinicCreateInputType = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  clinicType: ClinicType;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  mapCoordinates: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type ClinicFilterInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clinicType?: InputMaybe<ClinicType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mapCoordinates?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum ClinicType {
  Clinic = 'clinic',
  Laboratory = 'laboratory',
}

export type ClinicUpdateInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clinicType?: InputMaybe<ClinicType>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  mapCoordinates?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClinic?: Maybe<Clinic>;
  destroyClinic: Scalars['Boolean']['output'];
  updateClinic?: Maybe<Clinic>;
};

export type MutationCreateClinicArgs = {
  input: ClinicCreateInputType;
};

export type MutationDestroyClinicArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateClinicArgs = {
  input: ClinicUpdateInputType;
};

export type Query = {
  __typename?: 'Query';
  clinic?: Maybe<Clinic>;
  getClinics?: Maybe<Array<Maybe<Clinic>>>;
  health: Scalars['Boolean']['output'];
  me: Scalars['String']['output'];
};

export type QueryClinicArgs = {
  filters: ClinicFilterInputType;
};

export type QueryGetClinicsArgs = {
  filters: ClinicFilterInputType;
};
