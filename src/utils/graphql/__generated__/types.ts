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

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  services?: Maybe<Array<Maybe<Service>>>;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CategoryCreateInputType = {
  subTitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CategoryFilterInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateInputType = {
  id: Scalars['ID']['input'];
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  mapCoordinates: MapCoordinates;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  servicesWithCategories: Array<Maybe<Category>>;
};

export type ClinicServicesWithCategoriesArgs = {
  input?: InputMaybe<ServiceFilterInputType>;
};

export type ClinicCreateInputType = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  clinicType: ClinicType;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  mapCoordinates: MapCoordinatesInput;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type ClinicFilterInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clinicType?: InputMaybe<ClinicType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mapCoordinates?: InputMaybe<MapCoordinatesInput>;
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
  mapCoordinates?: InputMaybe<MapCoordinatesInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  clinic?: Maybe<Clinic>;
  clinicId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  services?: Maybe<Array<Maybe<Service>>>;
};

export type DoctorCreateInputType = {
  clinicId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type DoctorFilterInputType = {
  clinicId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorService = {
  __typename?: 'DoctorService';
  doctorId: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  serviceId: Scalars['ID']['output'];
};

export type DoctorUpdateInputType = {
  clinicId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type EditUser = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Sex>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type MapCoordinates = {
  __typename?: 'MapCoordinates';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type MapCoordinatesInput = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<Scalars['String']['output']>;
  createCategory?: Maybe<Category>;
  createClinic?: Maybe<Clinic>;
  createDoctor?: Maybe<Doctor>;
  createDoctorsService: Scalars['Boolean']['output'];
  createService?: Maybe<Service>;
  destroyCategory: Scalars['Boolean']['output'];
  destroyClinic: Scalars['Boolean']['output'];
  destroyDoctor: Scalars['Boolean']['output'];
  destroyDoctorService: Scalars['Boolean']['output'];
  destroyService: Scalars['Boolean']['output'];
  doctorsService: Scalars['Boolean']['output'];
  editUser?: Maybe<User>;
  register?: Maybe<Scalars['Boolean']['output']>;
  sendSms?: Maybe<Scalars['String']['output']>;
  signIn?: Maybe<Scalars['String']['output']>;
  updateCategory?: Maybe<Category>;
  updateClinic?: Maybe<Clinic>;
  updateDoctor?: Maybe<Doctor>;
  updateService?: Maybe<Service>;
  verifySms: Scalars['Boolean']['output'];
};

export type MutationAuthArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateCategoryArgs = {
  input: CategoryCreateInputType;
};

export type MutationCreateClinicArgs = {
  input: ClinicCreateInputType;
};

export type MutationCreateDoctorArgs = {
  input: DoctorCreateInputType;
};

export type MutationCreateDoctorsServiceArgs = {
  input?: InputMaybe<CreateDoctorService>;
};

export type MutationCreateServiceArgs = {
  input: ServiceCreateInputType;
};

export type MutationDestroyCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyClinicArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyDoctorArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyDoctorServiceArgs = {
  doctorId: Scalars['ID']['input'];
  serviceId: Scalars['ID']['input'];
};

export type MutationDestroyServiceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDoctorsServiceArgs = {
  input?: InputMaybe<CreateDoctorService>;
};

export type MutationEditUserArgs = {
  input?: InputMaybe<EditUser>;
};

export type MutationRegisterArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationSendSmsArgs = {
  phone: Scalars['String']['input'];
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationUpdateCategoryArgs = {
  input: CategoryUpdateInputType;
};

export type MutationUpdateClinicArgs = {
  input: ClinicUpdateInputType;
};

export type MutationUpdateDoctorArgs = {
  input: DoctorUpdateInputType;
};

export type MutationUpdateServiceArgs = {
  input: ServiceUpdateInputType;
};

export type MutationVerifySmsArgs = {
  code: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  clinic?: Maybe<Clinic>;
  doctor?: Maybe<Doctor>;
  getCategories?: Maybe<Array<Maybe<Category>>>;
  getClinics?: Maybe<Array<Maybe<Clinic>>>;
  getDoctors?: Maybe<Array<Maybe<Doctor>>>;
  getServices?: Maybe<Array<Maybe<Category>>>;
  health: Scalars['Boolean']['output'];
  service?: Maybe<Service>;
  user?: Maybe<User>;
};

export type QueryCategoryArgs = {
  filters: CategoryFilterInputType;
};

export type QueryClinicArgs = {
  filters: ClinicFilterInputType;
};

export type QueryDoctorArgs = {
  filters: DoctorFilterInputType;
};

export type QueryGetCategoriesArgs = {
  filters: CategoryFilterInputType;
};

export type QueryGetClinicsArgs = {
  filters: ClinicFilterInputType;
};

export type QueryGetDoctorsArgs = {
  filters: DoctorFilterInputType;
};

export type QueryGetServicesArgs = {
  filters: ServiceFilterInputType;
};

export type QueryServiceArgs = {
  filters: ServiceFilterInputType;
};

export type Service = {
  __typename?: 'Service';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  clinic?: Maybe<Clinic>;
  clinicId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  serviceType: ServiceType;
};

export type ServiceCreateInputType = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clinicId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceType: ServiceType;
};

export type ServiceFilterInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  categorySubtitle?: InputMaybe<Scalars['String']['input']>;
  categoryTitle?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clinicId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<ServiceType>;
};

export enum ServiceType {
  Analyse = 'analyse',
  Consultations = 'consultations',
  Diagnostic = 'diagnostic',
}

export type ServiceUpdateInputType = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clinicId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceType?: InputMaybe<ServiceType>;
};

export enum Sex {
  Female = 'female',
  Male = 'male',
}

export type SignInInput = {
  code: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type SmsSend = {
  __typename?: 'SmsSend';
  code: Scalars['String']['output'];
  expiresAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  birthday?: Maybe<Scalars['Date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  phoneConfirmed: Scalars['Boolean']['output'];
  sex?: Maybe<Sex>;
  surname?: Maybe<Scalars['String']['output']>;
};

export type CreateDoctorService = {
  doctorId: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceId: Scalars['ID']['input'];
};
