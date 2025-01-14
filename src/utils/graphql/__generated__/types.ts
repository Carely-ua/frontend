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

export type CallInput = {
  doctorId?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
};

export type CartItem = {
  __typename?: 'CartItem';
  amount?: Maybe<Scalars['Float']['output']>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CartItemCreateInputType = {
  doctorId?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type CartResponse = {
  __typename?: 'CartResponse';
  cartDiscountSum?: Maybe<Scalars['Float']['output']>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  cartLength?: Maybe<Scalars['Float']['output']>;
  cartSum?: Maybe<Scalars['Float']['output']>;
};

export type CategoriesSubTitle = {
  __typename?: 'CategoriesSubTitle';
  category?: Maybe<Category>;
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  services?: Maybe<Array<Maybe<Service>>>;
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  serviceType?: Maybe<ServiceType>;
  services?: Maybe<Array<Maybe<Service>>>;
  subTitles?: Maybe<Array<Maybe<CategoriesSubTitle>>>;
  title: Scalars['String']['output'];
};

export type CategoryCreateInputType = {
  serviceType?: InputMaybe<ServiceType>;
  title: Scalars['String']['input'];
};

export type CategoryFilterInputType = {
  id?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<ServiceType>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySubTitleCreateInputType = {
  categoryId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CategorySubTitleFilterInputType = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySubTitleUpdateInputType = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateInputType = {
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Clinic = {
  __typename?: 'Clinic';
  city: Scalars['String']['output'];
  clinicDepartments?: Maybe<Array<Maybe<ClinicDepartment>>>;
  clinicType: ClinicType;
  description: Scalars['String']['output'];
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  email: Scalars['String']['output'];
  hasAnalyse?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mainImage?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  reviewsCount?: Maybe<Scalars['Float']['output']>;
  services?: Maybe<Array<Maybe<Service>>>;
  servicesWithCategories: Array<Maybe<Category>>;
  specializations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ClinicServicesWithCategoriesArgs = {
  input?: InputMaybe<ServiceFilterInputType>;
};

export type ClinicCreateInputType = {
  city: Scalars['String']['input'];
  clinicType: ClinicType;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  images: Array<InputMaybe<Scalars['String']['input']>>;
  mainImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Array<InputMaybe<Scalars['String']['input']>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  specializations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClinicDepartment = {
  __typename?: 'ClinicDepartment';
  address?: Maybe<Scalars['String']['output']>;
  clinic?: Maybe<Clinic>;
  clinicId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  mapCoordinates?: Maybe<MapCoordinates>;
  specializations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  workingTime?: Maybe<Scalars['String']['output']>;
};

export type ClinicDepartmentCreateInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  clinicId: Scalars['ID']['input'];
  mapCoordinates?: InputMaybe<MapCoordinatesInput>;
  specializations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  workingTime?: InputMaybe<Scalars['String']['input']>;
};

export type ClinicDepartmentFilterInputType = {
  clinicId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ClinicDepartmentUpdateInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mapCoordinates?: InputMaybe<MapCoordinatesInput>;
  specializations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  workingTime?: InputMaybe<Scalars['String']['input']>;
};

export type ClinicFilterInputType = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  categorySubTitleId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clinicType?: InputMaybe<ClinicType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  specializations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClinicSearch = {
  __typename?: 'ClinicSearch';
  clinics?: Maybe<Array<Maybe<Clinic>>>;
  specializations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export enum ClinicType {
  Clinic = 'clinic',
  Laboratory = 'laboratory',
}

export type ClinicUpdateInputType = {
  city?: InputMaybe<Scalars['String']['input']>;
  clinicType?: InputMaybe<ClinicType>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainImage?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  specializations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Doctor = {
  __typename?: 'Doctor';
  associations?: Maybe<Scalars['String']['output']>;
  clinic?: Maybe<Clinic>;
  clinicId: Scalars['String']['output'];
  conferences?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  discountPrice?: Maybe<Scalars['Float']['output']>;
  experience?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  profActivity?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  reviewsCount?: Maybe<Scalars['Float']['output']>;
  scientificWorks?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<Service>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type DoctorCreateInputType = {
  associations?: InputMaybe<Scalars['String']['input']>;
  clinicId: Scalars['String']['input'];
  conferences?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  experience?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  profActivity?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  scientificWorks?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorFilterInputType = {
  clinicId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorService = {
  __typename?: 'DoctorService';
  discountPrice?: Maybe<Scalars['Float']['output']>;
  doctorId: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  serviceId: Scalars['ID']['output'];
};

export type DoctorUpdateInputType = {
  associations?: InputMaybe<Scalars['String']['input']>;
  clinicId?: InputMaybe<Scalars['String']['input']>;
  conferences?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profActivity?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  scientificWorks?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DoneOrderItemResponse = {
  __typename?: 'DoneOrderItemResponse';
  message?: Maybe<Scalars['String']['output']>;
  orderItem?: Maybe<OrderItem>;
};

export type EditUser = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Sex>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type MainSearchInputType = {
  city?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MainSearchResponseType = {
  __typename?: 'MainSearchResponseType';
  categories?: Maybe<Array<Maybe<Category>>>;
  clinics?: Maybe<Array<Maybe<Clinic>>>;
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
  activateOrderItem?: Maybe<OrderItem>;
  auth?: Maybe<Scalars['String']['output']>;
  cancelOrderItem?: Maybe<OrderItem>;
  createCartItem?: Maybe<CartItem>;
  createCartItemUnAuth?: Maybe<CartItem>;
  createCategory?: Maybe<Category>;
  createCategorySubTitle?: Maybe<CategoriesSubTitle>;
  createClinic?: Maybe<Clinic>;
  createClinicDepartment?: Maybe<ClinicDepartment>;
  createDoctor?: Maybe<Doctor>;
  createDoctorsService: DoctorService;
  createOrder?: Maybe<Order>;
  createReview?: Maybe<Review>;
  createService?: Maybe<Service>;
  createSubTitleService: Scalars['Boolean']['output'];
  destroyCartItem: Scalars['Boolean']['output'];
  destroyCategory: Scalars['Boolean']['output'];
  destroyCategorySubTitle: Scalars['Boolean']['output'];
  destroyClinic: Scalars['Boolean']['output'];
  destroyClinicDepartment: Scalars['Boolean']['output'];
  destroyDoctor: Scalars['Boolean']['output'];
  destroyDoctorService: Scalars['Boolean']['output'];
  destroyReview: Scalars['Boolean']['output'];
  destroyService: Scalars['Boolean']['output'];
  destroySubTitleService: Scalars['Boolean']['output'];
  doctorsService: Scalars['Boolean']['output'];
  doneOrderItem?: Maybe<DoneOrderItemResponse>;
  editUser?: Maybe<User>;
  linkCartItemToUser?: Maybe<Array<Maybe<CartItem>>>;
  orderCall?: Maybe<Scalars['Boolean']['output']>;
  register?: Maybe<Scalars['Boolean']['output']>;
  sendSms?: Maybe<Scalars['String']['output']>;
  signIn?: Maybe<Scalars['String']['output']>;
  subTitleService: Scalars['Boolean']['output'];
  updateCategory?: Maybe<Category>;
  updateCategorySubTitle?: Maybe<CategoriesSubTitle>;
  updateClinic?: Maybe<Clinic>;
  updateClinicDepartment?: Maybe<ClinicDepartment>;
  updateDoctor?: Maybe<Doctor>;
  updateService?: Maybe<Service>;
  verifySms: Scalars['Boolean']['output'];
};

export type MutationActivateOrderItemArgs = {
  orderItemId?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAuthArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCancelOrderItemArgs = {
  adminComment: Scalars['String']['input'];
  orderItemNumber: Scalars['Int']['input'];
};

export type MutationCreateCartItemArgs = {
  input: CartItemCreateInputType;
};

export type MutationCreateCartItemUnAuthArgs = {
  input: CartItemCreateInputType;
};

export type MutationCreateCategoryArgs = {
  input: CategoryCreateInputType;
};

export type MutationCreateCategorySubTitleArgs = {
  input: CategorySubTitleCreateInputType;
};

export type MutationCreateClinicArgs = {
  input: ClinicCreateInputType;
};

export type MutationCreateClinicDepartmentArgs = {
  input: ClinicDepartmentCreateInputType;
};

export type MutationCreateDoctorArgs = {
  input: DoctorCreateInputType;
};

export type MutationCreateDoctorsServiceArgs = {
  input?: InputMaybe<CreateDoctorService>;
};

export type MutationCreateReviewArgs = {
  input: ReviewCreateInputType;
};

export type MutationCreateServiceArgs = {
  input: ServiceCreateInputType;
};

export type MutationCreateSubTitleServiceArgs = {
  input?: InputMaybe<CreateSubTitleService>;
};

export type MutationDestroyCartItemArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyCategorySubTitleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyClinicArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyClinicDepartmentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyDoctorArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyDoctorServiceArgs = {
  doctorId: Scalars['ID']['input'];
  serviceId: Scalars['ID']['input'];
};

export type MutationDestroyReviewArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroyServiceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDestroySubTitleServiceArgs = {
  serviceId: Scalars['ID']['input'];
  subTitleId: Scalars['ID']['input'];
};

export type MutationDoctorsServiceArgs = {
  input?: InputMaybe<CreateDoctorService>;
};

export type MutationDoneOrderItemArgs = {
  orderItemNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationEditUserArgs = {
  input?: InputMaybe<EditUser>;
};

export type MutationLinkCartItemToUserArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationOrderCallArgs = {
  input?: InputMaybe<CallInput>;
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

export type MutationSubTitleServiceArgs = {
  input?: InputMaybe<CreateSubTitleService>;
};

export type MutationUpdateCategoryArgs = {
  input: CategoryUpdateInputType;
};

export type MutationUpdateCategorySubTitleArgs = {
  input: CategorySubTitleUpdateInputType;
};

export type MutationUpdateClinicArgs = {
  input: ClinicUpdateInputType;
};

export type MutationUpdateClinicDepartmentArgs = {
  input: ClinicDepartmentUpdateInputType;
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

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['Int']['output']>;
  orderItems: Array<OrderItem>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  adminComment?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  cancelledAt?: Maybe<Scalars['Date']['output']>;
  clinicId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId?: Maybe<Scalars['String']['output']>;
  doneAt?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  reviewed?: Maybe<Scalars['Boolean']['output']>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
};

export enum OrderStatus {
  Active = 'active',
  Cancelled = 'cancelled',
  Done = 'done',
  UnActive = 'unActive',
}

export type Query = {
  __typename?: 'Query';
  cart?: Maybe<CartResponse>;
  cartUnAuth?: Maybe<CartResponse>;
  category?: Maybe<Category>;
  categorySubTitle?: Maybe<CategoriesSubTitle>;
  clinic?: Maybe<Clinic>;
  doctor?: Maybe<Doctor>;
  getCategories?: Maybe<Array<Maybe<Category>>>;
  getCategorySubTitles?: Maybe<Array<Maybe<CategoriesSubTitle>>>;
  getClinicDepartments?: Maybe<Array<Maybe<ClinicDepartment>>>;
  getClinics?: Maybe<Array<Maybe<Clinic>>>;
  getDoctors?: Maybe<Array<Maybe<Doctor>>>;
  getDoneOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  getServices?: Maybe<Array<Maybe<Category>>>;
  health: Scalars['Boolean']['output'];
  mainSearch?: Maybe<MainSearchResponseType>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  scriptRun: Scalars['Boolean']['output'];
  searchClinics: ClinicSearch;
  service?: Maybe<Service>;
  user?: Maybe<User>;
};

export type QueryCartUnAuthArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QueryCategoryArgs = {
  filters: CategoryFilterInputType;
};

export type QueryCategorySubTitleArgs = {
  filters: CategorySubTitleFilterInputType;
};

export type QueryClinicArgs = {
  filters: ClinicFilterInputType;
};

export type QueryDoctorArgs = {
  filters: DoctorFilterInputType;
};

export type QueryGetCategoriesArgs = {
  filters: ServiceFilterInputType;
};

export type QueryGetCategorySubTitlesArgs = {
  filters: CategorySubTitleFilterInputType;
};

export type QueryGetClinicDepartmentsArgs = {
  filters?: InputMaybe<ClinicDepartmentFilterInputType>;
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

export type QueryMainSearchArgs = {
  filters?: InputMaybe<MainSearchInputType>;
};

export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySearchClinicsArgs = {
  filters: ClinicFilterInputType;
};

export type QueryServiceArgs = {
  filters: ServiceFilterInputType;
};

export type Review = {
  __typename?: 'Review';
  clinic?: Maybe<Clinic>;
  clinicId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rate?: Maybe<Scalars['Float']['output']>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ReviewCreateInputType = {
  clinicId?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['String']['input']>;
  orderItemId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type Service = {
  __typename?: 'Service';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  clinic?: Maybe<Clinic>;
  clinicId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discountPrice?: Maybe<Scalars['Float']['output']>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  serviceType: ServiceType;
};

export type ServiceCreateInputType = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  clinicId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceType: ServiceType;
};

export type ServiceFilterInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  categorySubTitleId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clinicId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<ServiceType>;
  tag?: InputMaybe<Scalars['String']['input']>;
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
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
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

export type SubTitleService = {
  __typename?: 'SubTitleService';
  serviceId: Scalars['ID']['output'];
  subTitleId: Scalars['ID']['output'];
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
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  doctorId: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceId: Scalars['ID']['input'];
};

export type CreateSubTitleService = {
  serviceId: Scalars['ID']['input'];
  subTitleId: Scalars['ID']['input'];
};
