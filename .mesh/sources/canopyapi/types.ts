// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CanopyapiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
  Date: { input: any; output: any; }
  TimeWithoutTz: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Any: { input: any; output: any; }
};

export type Query = {
  addOn?: Maybe<AddOn>;
  calendarWidget: CalendarWidget;
  calendarWidgets: Array<Maybe<CalendarWidget>>;
  categories: Array<Category>;
  commissionCodes: Array<CommissionCode>;
  discount: Discount;
  /** Discounts created for a given event and discount codes that match a searchQuery */
  discountCodes?: Maybe<DiscountConnection>;
  event: Event;
  eventSet: EventSet;
  getStripeTerminalLocation?: Maybe<StripeTerminalLocation>;
  getStripeTerminalReader?: Maybe<StripeTerminalReader>;
  getStripeTerminalReaders?: Maybe<StripeTerminalReaderCollection>;
  host: Host;
  listingAttractions?: Maybe<Array<Attraction>>;
  manageBasics: ManageBasics;
  manageChannelPartnerSales: Array<ManageChannelPartnerSales>;
  manageCustomize: ManageCustomize;
  manageCustomizeTickets: ManageCustomizeTickets;
  manageTickets: ManageTickets;
  manageWhenRegularEntry: ManageWhenRegularEntry;
  manageWhenTimedEntry: ManageWhenTimedEntry;
  order: Order;
  orderItem: OrderItem;
  orderItems: Array<OrderItem>;
  partnerOffers: Array<PartnerOffers>;
  profile: Profile;
  rateUpgrade: RateUpgrade;
  settlementCurrency?: Maybe<CurrencyCode>;
  ticketmasterAttractions: TicketmasterAttractionConnection;
  ticketmaster_venues: TicketmasterVenuesConnection;
  timeSlotSelect: TimeSlotSelect;
  timeslotFilter: TimeslotFilter;
  timezone?: Maybe<Scalars['String']['output']>;
  transactionCurrency?: Maybe<CurrencyCode>;
  transfer: Transfer;
  upgradableOrder: UpgradableOrder;
  userExternalEmails: Array<Scalars['String']['output']>;
  viewer: Viewer;
  whitelistedCountries: Array<Country>;
  wrstbndIntegration?: Maybe<WrstbndIntegration>;
  wrstbndPasstype?: Maybe<WrstbndPasstype>;
};


export type QueryaddOnArgs = {
  id: Scalars['ID']['input'];
};


export type QuerycalendarWidgetArgs = {
  id: Scalars['ID']['input'];
  startingDate: Scalars['String']['input'];
};


export type QuerycalendarWidgetsArgs = {
  hostId: Scalars['ID']['input'];
  startingDate: Scalars['String']['input'];
};


export type QuerycategoriesArgs = {
  keywords?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycommissionCodesArgs = {
  code?: InputMaybe<PricingPlan>;
  currencies: Array<CurrencyCode>;
};


export type QuerydiscountArgs = {
  id: Scalars['ID']['input'];
};


export type QuerydiscountCodesArgs = {
  eventId: Scalars['ID']['input'];
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type QueryeventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryeventSetArgs = {
  id: Scalars['ID']['input'];
};


export type QuerygetStripeTerminalLocationArgs = {
  listingId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<CurrencyCode>;
};


export type QuerygetStripeTerminalReaderArgs = {
  stripeTerminalReaderId: Scalars['ID']['input'];
  currency?: InputMaybe<CurrencyCode>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerygetStripeTerminalReadersArgs = {
  listingId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  paginationAttributes?: InputMaybe<StripePaginationAttributesInputType>;
};


export type QueryhostArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylistingAttractionsArgs = {
  listingId: Scalars['ID']['input'];
};


export type QuerymanageBasicsArgs = {
  id: Scalars['ID']['input'];
};


export type QuerymanageChannelPartnerSalesArgs = {
  id: Scalars['ID']['input'];
};


export type QuerymanageCustomizeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerymanageCustomizeTicketsArgs = {
  id: Scalars['ID']['input'];
  startingDate: Scalars['String']['input'];
};


export type QuerymanageTicketsArgs = {
  id: Scalars['ID']['input'];
};


export type QuerymanageWhenRegularEntryArgs = {
  id: Scalars['ID']['input'];
};


export type QuerymanageWhenTimedEntryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryorderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryorderItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryorderItemsArgs = {
  id: Scalars['ID']['input'];
};


export type QuerypartnerOffersArgs = {
  id: Scalars['ID']['input'];
  channelPartnerId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryprofileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryrateUpgradeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerysettlementCurrencyArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


export type QueryticketmasterAttractionsArgs = {
  match?: InputMaybe<Scalars['String']['input']>;
  hostId?: InputMaybe<Scalars['ID']['input']>;
};


export type Queryticketmaster_venuesArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Scalars['JSON']['input']>;
};


export type QuerytimeSlotSelectArgs = {
  id: Scalars['ID']['input'];
};


export type QuerytimeslotFilterArgs = {
  id: Scalars['ID']['input'];
  startTimeBefore?: InputMaybe<Scalars['String']['input']>;
  startTimeAfter?: InputMaybe<Scalars['String']['input']>;
};


export type QuerytimezoneArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


export type QuerytransactionCurrencyArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


export type QuerytransferArgs = {
  token: Scalars['String']['input'];
};


export type QueryupgradableOrderArgs = {
  id: Scalars['ID']['input'];
  orderItemId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerywrstbndPasstypeArgs = {
  id: Scalars['ID']['input'];
};

/** A user who is selling tickets to Events on Universe */
export type Host = User & {
  /** Account balance of the host */
  accountBalance?: Maybe<AccountBalanceConnection>;
  /** Add on order items */
  addOnOrderItems?: Maybe<OrderItemConnection>;
  /** Account level rates that belong to this host. */
  addOns: AddOnConnection;
  admin: Scalars['Boolean']['output'];
  /** Analytics data for this host (have to be the host or have membership to the host's organization) */
  analytics: Analytics;
  /** A list of all attendees for all Events and all TimeSlots for which this host has sold tickets on Universe. Includes tickets from all states, including invalid. */
  attendees: AttendeeConnection;
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The user has configured their account as a business - does not have a last name */
  business: Scalars['Boolean']['output'];
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** Chargebacks against the host */
  chargebacks?: Maybe<ChargebackConnection>;
  /** The Commission Codes (pricing details) the host is set to for any currency/countries they have sold tickets for - does not include any event or rate specific custom overrides */
  commissionCodes: Array<CommissionCode>;
  /** the settlement currencies of the host (have to be the host or have membership to the host's organization) */
  currencies: Array<CurrencyCode>;
  /** An account level custom report belonging to this host */
  customReport: CustomReport;
  /** All account level custom reports created by this host */
  customReports: CustomReportConnection;
  /** A list of dates with future / ongoing events */
  datesCalendar: Array<Scalars['Date']['output']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** Account level discounts that belong to this host. Sorted by state (ascending), then code name */
  discounts: DiscountConnection;
  /** Returns calculated all in pricing for a single rate */
  displayPrice?: Maybe<Scalars['Float']['output']>;
  /** The settlement currencies used on events by the host */
  eventCurrencies: Array<CurrencyCode>;
  /** All Events by this host (have to be the host or have membership to the host's organization) */
  events: EventConnection;
  /** All Events (events that have sales) by this host (sorted by live Events (ascending order), then expired / archived events  (have to be the host or have membership to the host's organization). */
  eventsWithTickets: EventConnection;
  /** All non-hidden Events within the given range that were hosted by this user. */
  eventsWithTicketsInRange: EventConnection;
  /** Feature flags for a host organization */
  features: Features;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Whether the host can choose to pass on Universe service fees to the buyer. */
  forceHostToPayCommission?: Maybe<Scalars['Boolean']['output']>;
  /** Google Analytics Ecommerce */
  googleAnalyticsEcommerce?: Maybe<Scalars['Boolean']['output']>;
  /** Google Analytics Id */
  googleAnalyticsId?: Maybe<Scalars['String']['output']>;
  hasLiveEvents?: Maybe<Scalars['Boolean']['output']>;
  /** Events hosted by this host with past Time Slots sorted by their most recently ended timeslot endAt, unique by Event (have to be the host or have membership to the host's organization) */
  hosted: EventConnection;
  /** Events hosted by this host with future Time Slots (have to be the host or have membership to the host's organization) */
  hosting: EventConnection;
  id?: Maybe<Scalars['ID']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  /** The next upcoming event in a host's event list. */
  nextFutureEvent?: Maybe<Event>;
  /** Orders created for inventory owned by this host */
  orders?: Maybe<OrderConnection>;
  organization: Organization;
  /** Whether the organization has rebate functionality enabled. */
  rebates?: Maybe<Scalars['Boolean']['output']>;
  /** All events for this host ordered by the most recently updated */
  recentlyUpdatedEvents: EventConnection;
  report: Report;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** The seats designer key from Seats.io. Used to embed the seats.io floor plan designer. */
  seatsDesignerKey?: Maybe<Scalars['String']['output']>;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** Events hosted by this host with Time Slots sorted by their starting timeslot startAt */
  sortedEvents: EventConnection;
  /** Linked stripe connect accounts */
  stripeConnectAccounts: Array<Maybe<StripeConnectAccount>>;
  superAdmin: Scalars['Boolean']['output'];
  /** Taxes created by this host */
  taxes?: Maybe<TaxConnection>;
  /** A list of ongoing / future TimeSlots, sorted by startAt, unique by startDate and Event. */
  timeSlotsCalendar: TimeSlotConnection;
  /** The transactional currencies used on events by the host */
  transactionalCurrencies: Array<CurrencyCode>;
  /** Count of unread messages for a host */
  unreadMessagesCount?: Maybe<Scalars['Int']['output']>;
  /** Withdrawal made by the host */
  withdrawals?: Maybe<WithdrawalConnection>;
};


/** A user who is selling tickets to Events on Universe */
export type HostaddOnOrderItemsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  checkInState?: InputMaybe<CheckInState>;
  states?: InputMaybe<Array<OrderItemState>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HostaddOnsArgs = {
  state?: InputMaybe<Scalars['String']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<CurrencyCode>;
};


/** A user who is selling tickets to Events on Universe */
export type HostchargebacksArgs = {
  currency: Scalars['String']['input'];
};


/** A user who is selling tickets to Events on Universe */
export type HostcustomReportArgs = {
  id: Scalars['ID']['input'];
};


/** A user who is selling tickets to Events on Universe */
export type HostcustomReportsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HostdiscountsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  updatedSince?: InputMaybe<Scalars['Time']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HostdisplayPriceArgs = {
  settlementCurrency: Scalars['String']['input'];
  country: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rateId?: InputMaybe<Scalars['ID']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HosteventsArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<CurrencyCode>;
  states?: InputMaybe<Array<EventState>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HosteventsWithTicketsArgs = {
  currency?: InputMaybe<CurrencyCode>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  free?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HosteventsWithTicketsInRangeArgs = {
  currency?: InputMaybe<CurrencyCode>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HosthostedArgs = {
  state?: InputMaybe<EventState>;
};


/** A user who is selling tickets to Events on Universe */
export type HosthostingArgs = {
  states?: InputMaybe<Array<EventState>>;
  currency?: InputMaybe<CurrencyCode>;
  transactionalCurrency?: InputMaybe<CurrencyCode>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  addOnId?: InputMaybe<Scalars['ID']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HostrecentlyUpdatedEventsArgs = {
  states?: InputMaybe<Array<EventState>>;
};


/** A user who is selling tickets to Events on Universe */
export type HostreportArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clauses?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};


/** A user who is selling tickets to Events on Universe */
export type HostsortedEventsArgs = {
  states?: InputMaybe<Array<EventState>>;
};


/** A user who is selling tickets to Events on Universe */
export type HosttimeSlotsCalendarArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
};


/** A user who is selling tickets to Events on Universe */
export type HostwithdrawalsArgs = {
  currency: Scalars['String']['input'];
};

/** The most common 'person'-level interface in Universe */
export type User = {
  admin: Scalars['Boolean']['output'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  superAdmin: Scalars['Boolean']['output'];
};

/** Possible roles a user can have */
export type UserRole =
  /** The user has the default account type */
  | 'USER'
  /** The user has been marked as a spammer */
  | 'SPAMMER'
  /** The user has an admin account */
  | 'ADMIN'
  /** The user has a super admin account */
  | 'SUPER_ADMIN'
  /** The user has a developer account */
  | 'DEVELOPER'
  /** The user has a sales account */
  | 'SALES'
  /** The user has a sales admin account */
  | 'SALES_ADMIN'
  /** The user has a (tm) finance account */
  | 'FINANCE'
  /** The user has a finance admin account */
  | 'FINANCE_ADMIN'
  /** The user has an Agent (call centre) account */
  | 'AGENT';

/** Supported locales */
export type Locale =
  /** English */
  | 'EN'
  /** Deutsch */
  | 'DE'
  /** Español */
  | 'ES'
  /** Français */
  | 'FR'
  /** Nederlands */
  | 'NL'
  /** Dansk */
  | 'DA'
  /** Svenska */
  | 'SV'
  /** Norsk Bokmål */
  | 'NB'
  /** Nederlands (België) */
  | 'NL_BE'
  /** Ελληνικά */
  | 'EL'
  /** Suomen kieli */
  | 'FI';

/** the organization owned by a particular user */
export type Organization = {
  commissionCode: Scalars['String']['output'];
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** Feature flags for an organization */
  features: Features;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Member>>;
  name?: Maybe<Scalars['String']['output']>;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};

/** Organization members of user making the current GraphQL operation */
export type Member = User & {
  admin: Scalars['Boolean']['output'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** The user has configured email */
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** A (potentially unconfirmed) email address belong to the Viewer */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  superAdmin: Scalars['Boolean']['output'];
};

/** Show features flags status */
export type Features = {
  /** Emails for non team members */
  allowEmailReportsForNonTeamMembers: Scalars['Boolean']['output'];
  /** Artist section on EDP */
  artistSectionOnEDP: Scalars['Boolean']['output'];
  /** Ticketmaster attraction tagging */
  attractionTagging: Scalars['Boolean']['output'];
  /** Credit card BIN restrictions */
  cardRestrictions: Scalars['Boolean']['output'];
  /** Allow confirmation emails customization */
  customizableConfirmationEmails: Scalars['Boolean']['output'];
  /** Hiding confirmation emails customization feature */
  customizableConfirmationEmailsBeta: Scalars['Boolean']['output'];
  /** Additional payment types */
  enableAdditionalPaymentTypes: Scalars['Boolean']['output'];
  /** Event summary settlement report */
  eventSummarySettlementReport: Scalars['Boolean']['output'];
  /** Allow facility fees to tagged TM venues */
  facilityFee: Scalars['Boolean']['output'];
  /** Highlander reporting engine (beta) */
  highlander: Scalars['Boolean']['output'];
  /** Host Added Fee Presets */
  hostAddedFeePresets: Scalars['Boolean']['output'];
  /** Multi-User Management */
  mum: Scalars['Boolean']['output'];
  /** Pay by Invoice */
  payByInvoice: Scalars['Boolean']['output'];
  /** Payment plans */
  paymentPlans: Scalars['Boolean']['output'];
  /** Payout settlement report */
  payoutSettlementReport: Scalars['Boolean']['output'];
  /** PayPal available as payment method */
  paypal: Scalars['Boolean']['output'];
  /** Seats.io integration [DEPRECATED] */
  seats: Scalars['Boolean']['output'];
  /** Third Party Barcodes self-import */
  thirdPartyBarcodes: Scalars['Boolean']['output'];
  /** Tiered Tickets */
  tieredTickets: Scalars['Boolean']['output'];
  /** TM audit report */
  tmAuditReport: Scalars['Boolean']['output'];
  /** Venue Tagging */
  venueTagging: Scalars['Boolean']['output'];
  /** Waitlist Reports */
  waitlistFanOptIn: Scalars['Boolean']['output'];
  /** Wrstbnd integration */
  wrstbndIntegration: Scalars['Boolean']['output'];
};

export type CommissionCode = {
  brokerFee: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  country?: Maybe<CountryCode>;
  currency: CurrencyCode;
  flat?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
};

/** ISO 3166-1 alpha-2 country codes */
export type CountryCode =
  /** Andorra */
  | 'AD'
  /** United Arab Emirates */
  | 'AE'
  /** Afghanistan */
  | 'AF'
  /** Antigua and Barbuda */
  | 'AG'
  /** Anguilla */
  | 'AI'
  /** Albania */
  | 'AL'
  /** Armenia */
  | 'AM'
  /** Netherlands Antilles */
  | 'AN'
  /** Angola */
  | 'AO'
  /** Antarctica */
  | 'AQ'
  /** Argentina */
  | 'AR'
  /** American Samoa */
  | 'AS'
  /** Austria */
  | 'AT'
  /** Australia */
  | 'AU'
  /** Aruba */
  | 'AW'
  /** Åland Islands */
  | 'AX'
  /** Azerbaijan */
  | 'AZ'
  /** Bosnia and Herzegovina */
  | 'BA'
  /** Barbados */
  | 'BB'
  /** Bangladesh */
  | 'BD'
  /** Belgium */
  | 'BE'
  /** Burkina Faso */
  | 'BF'
  /** Bulgaria */
  | 'BG'
  /** Bahrain */
  | 'BH'
  /** Burundi */
  | 'BI'
  /** Benin */
  | 'BJ'
  /** Saint Barthélemy */
  | 'BL'
  /** Bermuda */
  | 'BM'
  /** Brunei Darussalam */
  | 'BN'
  /** Bolivia */
  | 'BO'
  /** Bonaire, Saint Eustatius and Saba */
  | 'BQ'
  /** Brazil */
  | 'BR'
  /** Bahamas */
  | 'BS'
  /** Bhutan */
  | 'BT'
  /** Bouvet Island */
  | 'BV'
  /** Botswana */
  | 'BW'
  /** Belarus */
  | 'BY'
  /** Belize */
  | 'BZ'
  /** Canada */
  | 'CA'
  /** Cocos (Keeling) Islands */
  | 'CC'
  /** Congo */
  | 'CD'
  /** Central African Republic */
  | 'CF'
  /** Congo */
  | 'CG'
  /** Switzerland */
  | 'CH'
  /** Côte d'Ivoire */
  | 'CI'
  /** Cook Islands */
  | 'CK'
  /** Chile */
  | 'CL'
  /** Cameroon */
  | 'CM'
  /** China */
  | 'CN'
  /** Colombia */
  | 'CO'
  /** Costa Rica */
  | 'CR'
  /** Serbia and Montenegro */
  | 'CS'
  /** Cuba */
  | 'CU'
  /** Cape Verde */
  | 'CV'
  /** Curaçao */
  | 'CW'
  /** Christmas Island */
  | 'CX'
  /** Cyprus */
  | 'CY'
  /** Czech Republic */
  | 'CZ'
  /** Germany */
  | 'DE'
  /** Djibouti */
  | 'DJ'
  /** Denmark */
  | 'DK'
  /** Dominica */
  | 'DM'
  /** Dominican Republic */
  | 'DO'
  /** Algeria */
  | 'DZ'
  /** Ecuador */
  | 'EC'
  /** Estonia */
  | 'EE'
  /** Egypt */
  | 'EG'
  /** Western Sahara */
  | 'EH'
  /** Eritrea */
  | 'ER'
  /** Spain */
  | 'ES'
  /** Ethiopia */
  | 'ET'
  /** Finland */
  | 'FI'
  /** Fiji */
  | 'FJ'
  /** Falkland Islands (Malvinas) */
  | 'FK'
  /** Micronesia */
  | 'FM'
  /** Faroe Islands */
  | 'FO'
  /** France */
  | 'FR'
  /** Gabon */
  | 'GA'
  /** United Kingdom */
  | 'GB'
  /** Grenada */
  | 'GD'
  /** Georgia */
  | 'GE'
  /** French Guiana */
  | 'GF'
  /** Guernsey */
  | 'GG'
  /** Ghana */
  | 'GH'
  /** Gibraltar */
  | 'GI'
  /** Greenland */
  | 'GL'
  /** Gambia */
  | 'GM'
  /** Guinea */
  | 'GN'
  /** Guadeloupe */
  | 'GP'
  /** Equatorial Guinea */
  | 'GQ'
  /** Greece */
  | 'GR'
  /** South Georgia and the South Sandwich Islands */
  | 'GS'
  /** Guatemala */
  | 'GT'
  /** Guam */
  | 'GU'
  /** Guinea-Bissau */
  | 'GW'
  /** Guyana */
  | 'GY'
  /** Hong Kong */
  | 'HK'
  /** Heard Island and McDonald Islands */
  | 'HM'
  /** Honduras */
  | 'HN'
  /** Croatia */
  | 'HR'
  /** Haiti */
  | 'HT'
  /** Hungary */
  | 'HU'
  /** Indonesia */
  | 'ID'
  /** Ireland */
  | 'IE'
  /** Israel */
  | 'IL'
  /** Isle of Man */
  | 'IM'
  /** India */
  | 'IN'
  /** British Indian Ocean Territory */
  | 'IO'
  /** Iraq */
  | 'IQ'
  /** Iran */
  | 'IR'
  /** Iceland */
  | 'IS'
  /** Italy */
  | 'IT'
  /** Jersey */
  | 'JE'
  /** Jamaica */
  | 'JM'
  /** Jordan */
  | 'JO'
  /** Japan */
  | 'JP'
  /** Kenya */
  | 'KE'
  /** Kyrgyzstan */
  | 'KG'
  /** Cambodia */
  | 'KH'
  /** Kiribati */
  | 'KI'
  /** Comoros */
  | 'KM'
  /** Saint Kitts and Nevis */
  | 'KN'
  /** North Korea */
  | 'KP'
  /** South Korea */
  | 'KR'
  /** Kuwait */
  | 'KW'
  /** Cayman Islands */
  | 'KY'
  /** Kazakhstan */
  | 'KZ'
  /** Lao */
  | 'LA'
  /** Lebanon */
  | 'LB'
  /** Saint Lucia */
  | 'LC'
  /** Liechtenstein */
  | 'LI'
  /** Sri Lanka */
  | 'LK'
  /** Liberia */
  | 'LR'
  /** Lesotho */
  | 'LS'
  /** Lithuania */
  | 'LT'
  /** Luxembourg */
  | 'LU'
  /** Latvia */
  | 'LV'
  /** Libya */
  | 'LY'
  /** Morocco */
  | 'MA'
  /** Monaco */
  | 'MC'
  /** Moldova */
  | 'MD'
  /** Montenegro */
  | 'ME'
  /** Saint Martin */
  | 'MF'
  /** Madagascar */
  | 'MG'
  /** Marshall Islands */
  | 'MH'
  /** Macedonia */
  | 'MK'
  /** Mali */
  | 'ML'
  /** Myanmar */
  | 'MM'
  /** Mongolia */
  | 'MN'
  /** Macao */
  | 'MO'
  /** Northern Mariana Islands */
  | 'MP'
  /** Martinique */
  | 'MQ'
  /** Mauritania */
  | 'MR'
  /** Montserrat */
  | 'MS'
  /** Malta */
  | 'MT'
  /** Mauritius */
  | 'MU'
  /** Maldives */
  | 'MV'
  /** Malawi */
  | 'MW'
  /** Mexico */
  | 'MX'
  /** Malaysia */
  | 'MY'
  /** Mozambique */
  | 'MZ'
  /** Namibia */
  | 'NA'
  /** New Caledonia */
  | 'NC'
  /** Niger */
  | 'NE'
  /** Norfolk Island */
  | 'NF'
  /** Nigeria */
  | 'NG'
  /** Nicaragua */
  | 'NI'
  /** Netherlands */
  | 'NL'
  /** Norway */
  | 'NO'
  /** Nepal */
  | 'NP'
  /** Nauru */
  | 'NR'
  /** Niue */
  | 'NU'
  /** New Zealand */
  | 'NZ'
  /** Oman */
  | 'OM'
  /** Panama */
  | 'PA'
  /** Peru */
  | 'PE'
  /** French Polynesia */
  | 'PF'
  /** Papua New Guinea */
  | 'PG'
  /** Philippines */
  | 'PH'
  /** Pakistan */
  | 'PK'
  /** Poland */
  | 'PL'
  /** Saint Pierre and Miquelon */
  | 'PM'
  /** Pitcairn */
  | 'PN'
  /** Puerto Rico */
  | 'PR'
  /** Palestine */
  | 'PS'
  /** Portugal */
  | 'PT'
  /** Palau */
  | 'PW'
  /** Paraguay */
  | 'PY'
  /** Qatar */
  | 'QA'
  /** Réunion */
  | 'RE'
  /** Romania */
  | 'RO'
  /** Serbia */
  | 'RS'
  /** Russia */
  | 'RU'
  /** Rwanda */
  | 'RW'
  /** Saudi Arabia */
  | 'SA'
  /** Solomon Islands */
  | 'SB'
  /** Seychelles */
  | 'SC'
  /** Sudan */
  | 'SD'
  /** Sweden */
  | 'SE'
  /** Singapore */
  | 'SG'
  /** Saint Helena, Ascension and Tristan da Cunha */
  | 'SH'
  /** Slovenia */
  | 'SI'
  /** Svalbard and Jan Mayen */
  | 'SJ'
  /** Slovakia */
  | 'SK'
  /** Sierra Leone */
  | 'SL'
  /** San Marino */
  | 'SM'
  /** Senegal */
  | 'SN'
  /** Somalia */
  | 'SO'
  /** Suriname */
  | 'SR'
  /** South Sudan */
  | 'SS'
  /** Sao Tome and Principe */
  | 'ST'
  /** El Salvador */
  | 'SV'
  /** Sint Maarten */
  | 'SX'
  /** Syrian Arab Republic */
  | 'SY'
  /** Swaziland */
  | 'SZ'
  /** Turks and Caicos Islands */
  | 'TC'
  /** Chad */
  | 'TD'
  /** French Southern Territories */
  | 'TF'
  /** Togo */
  | 'TG'
  /** Thailand */
  | 'TH'
  /** Tajikistan */
  | 'TJ'
  /** Tokelau */
  | 'TK'
  /** Timor-Leste */
  | 'TL'
  /** Turkmenistan */
  | 'TM'
  /** Tunisia */
  | 'TN'
  /** Tonga */
  | 'TO'
  /** Turkey */
  | 'TR'
  /** Trinidad and Tobago */
  | 'TT'
  /** Tuvalu */
  | 'TV'
  /** Taiwan */
  | 'TW'
  /** Tanzania */
  | 'TZ'
  /** Ukraine */
  | 'UA'
  /** Uganda */
  | 'UG'
  /** United States Minor Outlying Islands */
  | 'UM'
  /** United States */
  | 'US'
  /** Uruguay */
  | 'UY'
  /** Uzbekistan */
  | 'UZ'
  /** Vatican City */
  | 'VA'
  /** Saint Vincent and the Grenadines */
  | 'VC'
  /** Venezuela */
  | 'VE'
  /** British Virgin Islands */
  | 'VG'
  /** US Virgin Islands */
  | 'VI'
  /** Viet Nam */
  | 'VN'
  /** Vanuatu */
  | 'VU'
  /** Wallis and Futuna */
  | 'WF'
  /** Samoa */
  | 'WS'
  /** Kosovo */
  | 'XK'
  /** Yemen */
  | 'YE'
  /** Mayotte */
  | 'YT'
  /** South Africa */
  | 'ZA'
  /** Zambia */
  | 'ZM'
  /** Zimbabwe */
  | 'ZW';

/** ISO 4217 currency codes */
export type CurrencyCode =
  /** د.إ AED */
  | 'AED'
  /** ؋ AFN */
  | 'AFN'
  /** L ALL */
  | 'ALL'
  /** դր. AMD */
  | 'AMD'
  /** ƒ ANG */
  | 'ANG'
  /** Kz AOA */
  | 'AOA'
  /** $ ARS */
  | 'ARS'
  /** $ AUD */
  | 'AUD'
  /** ƒ AWG */
  | 'AWG'
  /** AZN */
  | 'AZN'
  /** КМ BAM */
  | 'BAM'
  /** $ BBD */
  | 'BBD'
  /** ৳ BDT */
  | 'BDT'
  /** лв BGN */
  | 'BGN'
  /** ب.د BHD */
  | 'BHD'
  /** Fr BIF */
  | 'BIF'
  /** $ BMD */
  | 'BMD'
  /** $ BND */
  | 'BND'
  /** Bs. BOB */
  | 'BOB'
  /** R$ BRL */
  | 'BRL'
  /** $ BSD */
  | 'BSD'
  /** B⃦ BTC */
  | 'BTC'
  /** Nu. BTN */
  | 'BTN'
  /** P BWP */
  | 'BWP'
  /** Br BYN */
  | 'BYN'
  /** $ BZD */
  | 'BZD'
  /** $ CAD */
  | 'CAD'
  /** Fr CDF */
  | 'CDF'
  /** Fr CHF */
  | 'CHF'
  /** UF CLF */
  | 'CLF'
  /** $ CLP */
  | 'CLP'
  /** ¥ CNY */
  | 'CNY'
  /** $ COP */
  | 'COP'
  /** ₡ CRC */
  | 'CRC'
  /** $ CUC */
  | 'CUC'
  /** $ CUP */
  | 'CUP'
  /** $ CVE */
  | 'CVE'
  /** Kč CZK */
  | 'CZK'
  /** Fdj DJF */
  | 'DJF'
  /** kr DKK */
  | 'DKK'
  /** $ DOP */
  | 'DOP'
  /** د.ج DZD */
  | 'DZD'
  /** ج.م EGP */
  | 'EGP'
  /** Nfk ERN */
  | 'ERN'
  /** Br ETB */
  | 'ETB'
  /** € EUR */
  | 'EUR'
  /** $ FJD */
  | 'FJD'
  /** £ FKP */
  | 'FKP'
  /** £ GBP */
  | 'GBP'
  /** ლ GEL */
  | 'GEL'
  /** GGP */
  | 'GGP'
  /** ₵ GHS */
  | 'GHS'
  /** £ GIP */
  | 'GIP'
  /** D GMD */
  | 'GMD'
  /** Fr GNF */
  | 'GNF'
  /** Q GTQ */
  | 'GTQ'
  /** $ GYD */
  | 'GYD'
  /** $ HKD */
  | 'HKD'
  /** L HNL */
  | 'HNL'
  /** kn HRK */
  | 'HRK'
  /** G HTG */
  | 'HTG'
  /** Ft HUF */
  | 'HUF'
  /** Rp IDR */
  | 'IDR'
  /** ₪ ILS */
  | 'ILS'
  /** IMP */
  | 'IMP'
  /** <U+20B9> INR */
  | 'INR'
  /** ع.د IQD */
  | 'IQD'
  /** ﷼ IRR */
  | 'IRR'
  /** kr ISK */
  | 'ISK'
  /** £ JEP */
  | 'JEP'
  /** $ JMD */
  | 'JMD'
  /** د.ا JOD */
  | 'JOD'
  /** ¥ JPY */
  | 'JPY'
  /** KSh KES */
  | 'KES'
  /** som KGS */
  | 'KGS'
  /** ៛ KHR */
  | 'KHR'
  /** Fr KMF */
  | 'KMF'
  /** ₩ KPW */
  | 'KPW'
  /** ₩ KRW */
  | 'KRW'
  /** د.ك KWD */
  | 'KWD'
  /** $ KYD */
  | 'KYD'
  /** 〒 KZT */
  | 'KZT'
  /** ₭ LAK */
  | 'LAK'
  /** ل.ل LBP */
  | 'LBP'
  /** ₨ LKR */
  | 'LKR'
  /** $ LRD */
  | 'LRD'
  /** L LSL */
  | 'LSL'
  /** ل.د LYD */
  | 'LYD'
  /** د.م. MAD */
  | 'MAD'
  /** L MDL */
  | 'MDL'
  /** Ar MGA */
  | 'MGA'
  /** ден MKD */
  | 'MKD'
  /** K MMK */
  | 'MMK'
  /** ₮ MNT */
  | 'MNT'
  /** P MOP */
  | 'MOP'
  /** UM MRO */
  | 'MRO'
  /** ₨ MUR */
  | 'MUR'
  /** MVR MVR */
  | 'MVR'
  /** MK MWK */
  | 'MWK'
  /** $ MXN */
  | 'MXN'
  /** RM MYR */
  | 'MYR'
  /** MTn MZN */
  | 'MZN'
  /** $ NAD */
  | 'NAD'
  /** ₦ NGN */
  | 'NGN'
  /** C$ NIO */
  | 'NIO'
  /** kr NOK */
  | 'NOK'
  /** ₨ NPR */
  | 'NPR'
  /** $ NZD */
  | 'NZD'
  /** ر.ع. OMR */
  | 'OMR'
  /** B/. PAB */
  | 'PAB'
  /** S/. PEN */
  | 'PEN'
  /** K PGK */
  | 'PGK'
  /** ₱ PHP */
  | 'PHP'
  /** ₨ PKR */
  | 'PKR'
  /** zł PLN */
  | 'PLN'
  /** ₲ PYG */
  | 'PYG'
  /** ر.ق QAR */
  | 'QAR'
  /** Lei RON */
  | 'RON'
  /** РСД RSD */
  | 'RSD'
  /** р. RUB */
  | 'RUB'
  /** FRw RWF */
  | 'RWF'
  /** ر.س SAR */
  | 'SAR'
  /** $ SBD */
  | 'SBD'
  /** ₨ SCR */
  | 'SCR'
  /** £ SDG */
  | 'SDG'
  /** kr SEK */
  | 'SEK'
  /** $ SGD */
  | 'SGD'
  /** £ SHP */
  | 'SHP'
  /** Le SLL */
  | 'SLL'
  /** Sh SOS */
  | 'SOS'
  /** $ SRD */
  | 'SRD'
  /** Db STD */
  | 'STD'
  /** ₡ SVC */
  | 'SVC'
  /** £S SYP */
  | 'SYP'
  /** L SZL */
  | 'SZL'
  /** ฿ THB */
  | 'THB'
  /** ЅМ TJS */
  | 'TJS'
  /** m TMT */
  | 'TMT'
  /** د.ت TND */
  | 'TND'
  /** T$ TOP */
  | 'TOP'
  /** TL TRY */
  | 'TRY'
  /** $ TTD */
  | 'TTD'
  /** $ TWD */
  | 'TWD'
  /** Sh TZS */
  | 'TZS'
  /** ₴ UAH */
  | 'UAH'
  /** USh UGX */
  | 'UGX'
  /** $ USD */
  | 'USD'
  /** $ UYU */
  | 'UYU'
  /**  UZS */
  | 'UZS'
  /** BsF VEF */
  | 'VEF'
  /** ₫ VND */
  | 'VND'
  /** Vt VUV */
  | 'VUV'
  /** T WST */
  | 'WST'
  /** Fr XAF */
  | 'XAF'
  /** ozt XAG */
  | 'XAG'
  /** ozt XAU */
  | 'XAU'
  /** $ XCD */
  | 'XCD'
  /** SDR XDR */
  | 'XDR'
  /** Fr XOF */
  | 'XOF'
  /** XPD */
  | 'XPD'
  /** Fr XPF */
  | 'XPF'
  /** XPT */
  | 'XPT'
  /** ﷼ YER */
  | 'YER'
  /** R ZAR */
  | 'ZAR'
  /** ZK ZMK */
  | 'ZMK'
  /** ZK ZMW */
  | 'ZMW'
  /** $ ZWL */
  | 'ZWL';

export type TimeSlotConnection = {
  nodes: Array<TimeSlot>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type TimeSlotConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A range of time with a start and an end, for which tickets are sellable. A single Event may have one or many TimeSlots. For example, a three day Event could be configured either with one TimeSlot (say Friday to Monday), or with three Timeslots (one for each of Friday, Saturday, and Sunday).  */
export type TimeSlot = {
  /** A list of all attendees for the Event, includes tickets from all states, including invalid. */
  attendees: AttendeeConnection;
  /** Capacity of the timeslot */
  capacity?: Maybe<Scalars['Int']['output']>;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** In Event's time zone */
  endAt: Scalars['TimeWithoutTz']['output'];
  /** In Event's time zone */
  endDate: Scalars['Date']['output'];
  /** UNIX Timestamp */
  endStamp: Scalars['Int']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  /** Orders created for this Event */
  orders: OrderConnection;
  /** Rate capacities for the Event */
  rateCapacities: RateCapacityConnection;
  rates?: Maybe<Array<Rate>>;
  /** Rate event capacities for the Event */
  ratesAvailablity?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  report: Report;
  /** Future or ongoing TimeSlots for the same Event within the same day */
  sameDayTimeSlots: TimeSlotConnection;
  /** In Event's time zone */
  startAt: Scalars['TimeWithoutTz']['output'];
  /** In Event's time zone */
  startDate: Scalars['Date']['output'];
  /** UNIX Timestamp */
  startStamp: Scalars['Int']['output'];
  state: TimeSlotState;
  timeSlotReport: TimeSlotReport;
  /** An IANA Time Zone string */
  tz: Scalars['String']['output'];
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};


/** A range of time with a start and an end, for which tickets are sellable. A single Event may have one or many TimeSlots. For example, a three day Event could be configured either with one TimeSlot (say Friday to Monday), or with three Timeslots (one for each of Friday, Saturday, and Sunday).  */
export type TimeSlotratesArgs = {
  states?: InputMaybe<Array<RateState>>;
};


/** A range of time with a start and an end, for which tickets are sellable. A single Event may have one or many TimeSlots. For example, a three day Event could be configured either with one TimeSlot (say Friday to Monday), or with three Timeslots (one for each of Friday, Saturday, and Sunday).  */
export type TimeSlotratesAvailablityArgs = {
  states?: InputMaybe<Array<RateState>>;
};


/** A range of time with a start and an end, for which tickets are sellable. A single Event may have one or many TimeSlots. For example, a three day Event could be configured either with one TimeSlot (say Friday to Monday), or with three Timeslots (one for each of Friday, Saturday, and Sunday).  */
export type TimeSlotreportArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clauses?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

/** The state an Event can be in */
export type TimeSlotState =
  /** No valid tickets have been sold for the event */
  | 'UNBOOKED'
  /** The event has valid tickets associated with it */
  | 'NORMAL'
  /** The event is sold out, no capacity remains */
  | 'FULL'
  /** The event has been removed */
  | 'HIDDEN';

/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type Event = BaseEvent & {
  /** Access Keys created for this Event */
  accessKeys?: Maybe<AccessKeyConnection>;
  /** Event has sold tickets for timeslots in the future */
  active: Scalars['Boolean']['output'];
  /** Add-on sales by day */
  addOnSalesByDay: Array<DailySales>;
  addOns: Array<Maybe<AddOn>>;
  /** Optional additional images for the event (promotional photos, venue photos) */
  additionalImages: Array<Image>;
  /** Street-level address */
  address: Scalars['String']['output'];
  /** All future or ongoing TimeSlots for which tickets can be purchased */
  allAvailableTimeSlots: Array<Maybe<TimeSlot>>;
  /** All Additional Images */
  allImages: Array<Image>;
  allRatesFree?: Maybe<Scalars['Boolean']['output']>;
  /** All dates/times for which tickets can be purchased sorted chronologically. Each Event can define one or many TimeSlots */
  allTimeSlots: Array<Maybe<TimeSlot>>;
  /** Whether to enable waitlist for the Event */
  allowWaitlist: Scalars['Boolean']['output'];
  /** A list of all attendees for the Event, includes tickets from all states, including invalid. */
  attendees: AttendeeConnection;
  /** A list of countries in which tickets to this event may be purchased */
  availableCountries: Array<Maybe<CountryCode>>;
  /** Future or ongoing TimeSlots for which tickets can be purchased */
  availableTimeSlots: TimeSlotConnection;
  /** Total event capacity of the event */
  capacity?: Maybe<Scalars['Int']['output']>;
  /** The category assigned for this Event */
  category?: Maybe<Category>;
  /** Seats chart information regarding if the listing's chart is in a DRAFT state and if its events have yet been linked */
  chartStatus?: Maybe<Scalars['JSON']['output']>;
  /** Name of the city */
  cityName?: Maybe<Scalars['String']['output']>;
  /** Optional field that the host sets for additional contact information */
  contactDetails?: Maybe<Scalars['String']['output']>;
  continentCode?: Maybe<Scalars['String']['output']>;
  /** The country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Cover photo for the event (min 100x100px, max 2MB). Auto-generated if no initial entry. */
  coverPhoto: Image;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** The settlement currency specified by Host */
  currency: CurrencyCode;
  /** Whether this event is enabled for DCOM */
  dcomEnabled: Scalars['Boolean']['output'];
  /** A detailed description of the event */
  description: Scalars['String']['output'];
  /** Discounts created for this Event */
  discounts?: Maybe<DiscountConnection>;
  /** Event photo for the event (min 1110x444px, max 5MB). Auto-generated if no initial entry. */
  eventPhoto: Image;
  /** Facebook pixel codes */
  facebookPixelCodes: Array<Scalars['String']['output']>;
  facebookPixels: Array<FacebookPixel>;
  /** The number of future time slots */
  futureTimeSlotCount: Scalars['Int']['output'];
  /** Total sales amount for future timeslots only (returns null if no future timeslots) */
  futureTimeslotsSalesAmount?: Maybe<Money>;
  /** Total tickets sold for upcoming timeslots only (returns null if no future timeslots) */
  futureTimeslotsTicketsSold?: Maybe<Scalars['Int']['output']>;
  /** The ticket purchase button text */
  getTicketsText: Scalars['String']['output'];
  /** the 'send_to' field for a GoogleAds conversion to be tracked. Has the form: AW-123456789/AbC-D_efG-h12_34-567 */
  googleAdsSendTos?: Maybe<GoogleAdsSendTos>;
  googleAdsTrackers: Array<GoogleAdsTracker>;
  /** Google analytics 4 id. Format: G-XXXXXXX */
  googleAnalytics4Id?: Maybe<Scalars['String']['output']>;
  /** Google analytics e-commerce enabled bool */
  googleAnalyticsEcommerce?: Maybe<Scalars['Boolean']['output']>;
  /** Google analytics id. Format: UA-1234561-2 */
  googleAnalyticsId?: Maybe<Scalars['String']['output']>;
  /** Whether the Event is sells Passes */
  hasPasses: Scalars['Boolean']['output'];
  /** Whether the Event uses reserved seating */
  hasSeats: Scalars['Boolean']['output'];
  /** A user-configurable setting determining whether the TimeSlot of the Event should be disclosed to the Buyer */
  hiddenDate: Scalars['Boolean']['output'];
  hideAttractionsFromTicketmaster?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show or hide this Event from our Calendar / Listings widgets. */
  hideFromWidgets?: Maybe<Scalars['Boolean']['output']>;
  host: Host;
  /** Host fields for checkout questions */
  hostFields: Array<HostField>;
  id: Scalars['ID']['output'];
  /** A URL to the event image. Custom height and width can be supplied */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Other Images */
  images: ImageConnection;
  /** Date that the event was last updated */
  lastUpdated: Scalars['Date']['output'];
  latitude: Scalars['Float']['output'];
  lnAllInPricing?: Maybe<Scalars['Boolean']['output']>;
  longitude: Scalars['Float']['output'];
  /** Mailchimp API key */
  mailchimpApiKey?: Maybe<Scalars['String']['output']>;
  /** Mailchimp list id */
  mailchimpListId?: Maybe<Scalars['String']['output']>;
  /** Maximum Price of an event. If provided, indicates a range */
  maxPrice?: Maybe<Scalars['Float']['output']>;
  /** Maximum number of items which are sellable for Event.The value depends on Rates' maxQuantity. */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum Price of an event */
  minPrice?: Maybe<Scalars['Float']['output']>;
  needsApproval?: Maybe<Scalars['Boolean']['output']>;
  /** The next active time slot of future time slots */
  nextFutureTimeSlot?: Maybe<TimeSlot>;
  /** Whether per order fee is applicable to this event or not */
  orderFeeApplicable: Scalars['Boolean']['output'];
  /** Orders created for this Event */
  orders?: Maybe<OrderConnection>;
  /** Whether payment plans are disabled for this listing */
  paymentPlanDisabled: Scalars['Boolean']['output'];
  /** Provide Payment Provider Info */
  paymentProvider: Scalars['String']['output'];
  /** Provide Payment Provider Account Number */
  paymentProviderAccountNumber?: Maybe<Scalars['String']['output']>;
  /** Provide Payment Provider Key */
  paymentProviderKey: Scalars['String']['output'];
  paymentSettings: PaymentSettings;
  /** Does the event accept PayPal payments */
  paypal: Scalars['Boolean']['output'];
  printedTicketConfiguration?: Maybe<PrintedTicketConfiguration>;
  /** The privacy setting for the Event */
  privacy: EventPrivacy;
  /** Content that will be provided to buyer's only */
  privateNote?: Maybe<Scalars['String']['output']>;
  /** When the draft event is scheduled to be published (not set if not scheduled) */
  publishLaterAt?: Maybe<Scalars['Time']['output']>;
  /** Listing questions on checkout */
  questions: Array<Maybe<Question>>;
  /** Customized values for Ticket Type - Timeslot pairs */
  rateCustomizations: Array<RateCustomization>;
  rateStateExists: RateStateExists;
  rateUpgrades?: Maybe<Array<RateUpgrade>>;
  /** Product types (Tickets or Passes) that can be sold for this Event */
  rates: RateConnection;
  /** Whether the Event uses rebates */
  rebates: Scalars['Boolean']['output'];
  /** Referral codes for this Event */
  referralCodes: Array<ReferralCode>;
  /** Time (in seconds) setting how long refunds are available for - pairs with refundOffsetType */
  refundOffset: Scalars['Int']['output'];
  /** Refund will be available either within refundOffset units of purchase or until refundOffset units before the event */
  refundOffsetType: Scalars['String']['output'];
  /** Describes a policy on ticket refunds */
  refundPolicy?: Maybe<RefundPolicy>;
  /** Region where the event is being hosted */
  region?: Maybe<Scalars['String']['output']>;
  report: Report;
  /** Total sales amount for this Event */
  salesAmount?: Maybe<Money>;
  /** Sales by day */
  salesByDay: Array<DailySales>;
  /** Whether the Event Saved by the Viewer */
  saved: Scalars['Boolean']['output'];
  /** List of all Savers who saved the Event */
  savers?: Maybe<SaversConnection>;
  /** The schedules assigned to this Event */
  schedules?: Maybe<ScheduleConnection>;
  /** Whether the Seats.io chart has been published for its first time */
  seatingMapPublished: Scalars['Boolean']['output'];
  /** The seats chart key from Seats.io */
  seatsChartKey?: Maybe<Scalars['String']['output']>;
  /** Determines whether or not to show quantity filter */
  showQuantityFilter: Scalars['Boolean']['output'];
  /** Determines whether or not to show ticket type filter */
  showTicketTypeFilter: Scalars['Boolean']['output'];
  /** Determines whether or not to show time of day filter */
  showTimeOfDayFilter: Scalars['Boolean']['output'];
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug: Scalars['String']['output'];
  /** A parameterized version of slug used for URI construction */
  slugParam: Scalars['String']['output'];
  /** Whether the Social Buttons will be active on unlisted events */
  socialButtons: Scalars['Boolean']['output'];
  /** Tickets are sold out for this Event */
  soldOut: Scalars['Boolean']['output'];
  /** The Event state */
  state: EventState;
  /** The tags added to this Event */
  tags: Array<Maybe<Tag>>;
  /** A list of all external attendees for the Event, includes tickets from all states, including invalid. */
  thirdPartyTickets: ThirdPartyTicketConnection;
  /** A list of all external attendees providers name for the Event */
  thirdPartyTicketsProviders: Array<Scalars['String']['output']>;
  /** Ticket sales by day */
  ticketSalesByDay: Array<DailySales>;
  /** Total tickets sold for this Event */
  ticketsSold?: Maybe<Scalars['Int']['output']>;
  timeSlotReport: TimeSlotReport;
  /** A date/time for which tickets can be purchased sorted chronologically. Each Event can define one or many TimeSlots */
  timeSlots: TimeSlotConnection;
  /** Determines whether or not an event admits visitors to an event between a set time */
  timedEntry: Scalars['Boolean']['output'];
  /** Timezone of the event location */
  timezone: Scalars['String']['output'];
  /** A brief description */
  title: Scalars['String']['output'];
  /** Currency that is displayed and charged in */
  transactionCurrency: CurrencyCode;
  /** The total number of tickets which are sellable for upcoming TimeslotsThe value is the lowest of the upcoming Rates maxQuantity and upcoming Timeslots capacities */
  upcomingTotalCapacity?: Maybe<Scalars['Int']['output']>;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  /** When to show an alert that the Event is almost sold out */
  urgencyIndicatorEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** When to show an alert that the Event is almost sold out */
  urgencyIndicatorThreshold?: Maybe<Scalars['Float']['output']>;
  /** Event URL */
  url: Scalars['String']['output'];
  /** Event or EventSet creator */
  user: Profile;
  /** Name of the venue */
  venueName?: Maybe<Scalars['String']['output']>;
  /** Is the event virtual? */
  virtual: Scalars['Boolean']['output'];
  /** Virtual connection info */
  virtualInfo: Scalars['String']['output'];
  waitlistCount?: Maybe<Scalars['Int']['output']>;
  waitlistSubscribers?: Maybe<Array<WaitlistSubscriber>>;
  /** Is Wrstbnd integration enabled? */
  wrstbndEnabled: Scalars['Boolean']['output'];
  /** Wrstbnd integration data */
  wrstbndIntegration: WrstbndIntegration;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventaddOnSalesByDayArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventattendeesArgs = {
  after?: InputMaybe<Scalars['Time']['input']>;
  before?: InputMaybe<Scalars['Time']['input']>;
  externalMetadata?: InputMaybe<Scalars['String']['input']>;
  states?: InputMaybe<Array<InputMaybe<OrderItemState>>>;
  timeSlotIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  match?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventdescriptionArgs = {
  format?: InputMaybe<ContentFormat>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventdiscountsArgs = {
  include_global_discount_codes?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventimageUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventordersArgs = {
  states?: InputMaybe<Array<InputMaybe<OrderState>>>;
  state?: InputMaybe<OrderState>;
  paymentMethod?: InputMaybe<PaymentMethod>;
  timeSlotIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  match?: InputMaybe<Scalars['String']['input']>;
  updatedSince?: InputMaybe<Scalars['Time']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventprivateNoteArgs = {
  format?: InputMaybe<ContentFormat>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventrateCustomizationsArgs = {
  event_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventratesArgs = {
  states?: InputMaybe<Array<RateState>>;
  clientGroups?: InputMaybe<Array<RateClientGroup>>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventreferralCodesArgs = {
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventreportArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clauses?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventsalesByDayArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventthirdPartyTicketsArgs = {
  importSource?: InputMaybe<Scalars['String']['input']>;
  match?: InputMaybe<Scalars['String']['input']>;
  timeSlotIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventticketSalesByDayArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export type EventtimeSlotsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  startTimeBefore?: InputMaybe<Scalars['Date']['input']>;
  startTimeAfter?: InputMaybe<Scalars['Date']['input']>;
  endTimeBefore?: InputMaybe<Scalars['Date']['input']>;
  endTimeAfter?: InputMaybe<Scalars['Date']['input']>;
};

/** The most low level version of an event, representing both events and event sets */
export type BaseEvent = {
  /** Street-level address */
  address: Scalars['String']['output'];
  /** All Additional Images */
  allImages: Array<Image>;
  /** Cover Photo */
  coverPhoto: Image;
  /** A detailed description of the event */
  description: Scalars['String']['output'];
  /** Hidden Date */
  hiddenDate?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Other Images */
  images: ImageConnection;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug: Scalars['String']['output'];
  /** A brief description */
  title: Scalars['String']['output'];
  /** Event or EventSet creator */
  user: Profile;
  /** Name of the venue */
  venueName?: Maybe<Scalars['String']['output']>;
};


/** The most low level version of an event, representing both events and event sets */
export type BaseEventdescriptionArgs = {
  format?: InputMaybe<ContentFormat>;
};

/** Supported content formats. */
export type ContentFormat =
  | 'TEXT'
  | 'HTML';

/** A Profile for a Universe account - an interface into a User as a Host or Buyer */
export type Profile = User & {
  admin: Scalars['Boolean']['output'];
  /** Public-visibility Events in the past associated with Orders purchased by this account */
  attended?: Maybe<EventConnection>;
  /** Public-visiblity Events in the future associated with Orders purchased by this account */
  attending?: Maybe<EventConnection>;
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The Profile is for a user who has configured their account as a business */
  business?: Maybe<Scalars['Boolean']['output']>;
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** The cover photo URL in the original size */
  coverPhotoUrl?: Maybe<Scalars['String']['output']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** Facebook account URI */
  facebook?: Maybe<Scalars['String']['output']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The Profile is for a user hosting events on Universe */
  host?: Maybe<Scalars['Boolean']['output']>;
  /** Public-visibility Events with no future Time Slots hosted by this account */
  hosted?: Maybe<EventConnection>;
  /** Public-visibility Events with future Time Slots hosted by this account */
  hosting?: Maybe<EventConnection>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Instagram account URI */
  instagram?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A plain-text user-inputed string referring to their self-defined location */
  location?: Maybe<Scalars['String']['output']>;
  /** Determines if a user is messageable */
  messageable?: Maybe<Scalars['Boolean']['output']>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  superAdmin: Scalars['Boolean']['output'];
  /** Twitter account URI */
  twitter?: Maybe<Scalars['String']['output']>;
  /** The Profile URI */
  url: Scalars['String']['output'];
  visibility: ProfileVisibility;
  /** A stringified URI, user-inputed */
  website?: Maybe<Scalars['String']['output']>;
};

/** Possible visibility states a Profile can be in */
export type ProfileVisibility =
  /** Public (recommended) */
  | 'PUBLIC'
  /** Hidden from search engines */
  | 'HIDDEN'
  /** Private */
  | 'PRIVATE';

export type EventConnection = {
  nodes: Array<Event>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type EventConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Image for events, avatars, and add on options */
export type Image = {
  cropHeight?: Maybe<Scalars['Int']['output']>;
  cropWidth?: Maybe<Scalars['Int']['output']>;
  cropX?: Maybe<Scalars['Int']['output']>;
  cropY?: Maybe<Scalars['Int']['output']>;
  isGif?: Maybe<Scalars['Boolean']['output']>;
  uploadId: Scalars['String']['output'];
  /** Image URL. Custom height and width can be supplied */
  url: Scalars['String']['output'];
};


/** Image for events, avatars, and add on options */
export type ImageurlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
  blur?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<ImageQuality>;
  format?: InputMaybe<ImageFormat>;
  cropMode?: InputMaybe<ImageCropMode>;
};

/** Adjust image quality. Works with JPEG and WEBP formats. */
export type ImageQuality =
  /** ≈50% file size compared to 'NORMAL' */
  | 'LIGHTEST'
  /** ≈80% file size */
  | 'LIGHTER'
  /** ≈100% file size */
  | 'NORMAL'
  /** ≈125% file size */
  | 'BETTER'
  /** ≈170% file size */
  | 'BEST';

/** Supported output formats. */
export type ImageFormat =
  | 'JPEG'
  | 'PNG'
  | 'WEBP';

/** Set the image crop mode. */
export type ImageCropMode =
  /** Resize Image Proportionally */
  | 'PREVIEW'
  /** Resize Image */
  | 'RESIZE'
  /** Crop Image */
  | 'CROP'
  /** Downscale and Crop Image */
  | 'SCALE_CROP';

export type ImageConnection = {
  nodes: Array<Image>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ImageConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** The privacy setting for an Event */
export type EventPrivacy =
  /** The default privacy setting - publicly searchable */
  | 'PUBLIC'
  /** The Event is private, not publicly searchable */
  | 'PRIVATE';

/** The Event state determines whether Orders can be created (assuming available inventory). To be sellable, the Event MUST be in the POSTED state. */
export type EventState =
  /** The Event is not complete, default state */
  | 'DRAFT'
  /** The Event is complete, but the Host's account has not been confirmed (i.e. email ownership has been confirmed) */
  | 'PRESUBMITTED'
  /** The Event is complete, and available to sell tickets for */
  | 'POSTED'
  | 'EXPIRED'
  | 'ARCHIVED'
  /** The Event has been disabled by a moderator */
  | 'DECLINED'
  | 'INACTIVE';

/** Settings related to means of payment on an Event. */
export type PaymentSettings = {
  /** Payment methods available to pay for an Order. */
  methodsAvailable: Array<PaymentMethod>;
  /** Payment methods available to pay for an Order. */
  methodsEnabled: Array<PaymentMethod>;
  /** Sales can be performed where the Credit Card payment method only accepts specific card brands (i.e. an Amex only presale). If empty, there are no restrictions. Note that these brand restrictions will only be applied to the Credit Card payment method. If other payment methods are enabled on the Event, they will not be brand restricted. */
  restrictedCardBrands: Array<CardBrand>;
  /** Security methods available to pay for an Order. */
  securityMethodsAvailable: Array<PaymentMethod>;
  /** Security methods enabled to pay for an Order. */
  securityMethodsEnabled: Array<PaymentMethod>;
};

export type PaymentMethod =
  | 'ALIPAY'
  | 'BANCONTACT'
  | 'EPS'
  | 'GIROPAY'
  | 'GLOBEE'
  | 'IDEAL'
  | 'KLARNA'
  | 'INVOICE'
  | 'MASTERPASS'
  | 'MULTIBANCO'
  | 'SEPA'
  | 'SOFORT'
  | 'PRZELEWY'
  | 'WECHAT'
  | 'VISACHECKOUT'
  | 'DCOM'
  | 'PAYPAL'
  | 'OFFLINE'
  | 'CARD'
  | 'APPLE_PAY'
  | 'GOOGLE_PAY';

/** Credit Card brands supported by our payment systems */
export type CardBrand =
  | 'AMERICAN_EXPRESS'
  | 'DINERS_CLUB'
  | 'DISCOVER'
  | 'JCB'
  | 'MASTERCARD'
  | 'UNIONPAY'
  | 'VISA'
  | 'UNKNOWN';

/** Rule describing when ticket refunds should be allowed */
export type RefundPolicy = {
  offset: RefundOffset;
  type: RefundOffsetType;
};

/** What is the time of your refund policy? */
export type RefundOffset =
  /** Your refund policy will affect 1 day */
  | 'ONE_DAY'
  /** Your refund policy will affect 2 days */
  | 'TWO_DAYS'
  /** Your refund policy will affect 3 days */
  | 'THREE_DAYS'
  /** Your refund policy will affect 7 days */
  | 'ONE_WEEK'
  /** Your refund policy will affect 30 days */
  | 'THIRTY_DAYS'
  /** Your refund policy will affect 60 days */
  | 'SIXTY_DAYS'
  /** Your refund policy will affect 90 days */
  | 'NINETY_DAYS'
  /** Tickets can never be refunded */
  | 'NEVER';

/** What is the scope of your refund policy? */
export type RefundOffsetType =
  /** Your refund policy will be calculated from the event date */
  | 'EVENT'
  /** Your refund policy will be calculated from the ticket purchase date */
  | 'PURCHASE';

export type AttendeeConnection = {
  nodes: Array<Attendee>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type AttendeeConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A ticket-holder */
export type Attendee = {
  /** Attendee-speicific answers to checkout questions on the OrderItem level (i.e. Ticket) */
  answers: Array<Maybe<Answer>>;
  email: Scalars['String']['output'];
  /** The Event the attendee is attending */
  event: Event;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  /** The Order which generated this attendee */
  order: Order;
  /** The individual OrderItem on the Order which is for this attendee */
  orderItem: OrderItem;
  /** Typically, the ticket-type belonging to the attendee. */
  rate: Rate;
  /** The state of the Order this attendee's ticket was purchased via - note, importantly, that this can be an invalid state. If you are using this information to validate a guest list, you should filter your results for only those tickets you consider valid. */
  state: OrderItemState;
  /** The TimeSlot of the Event the attendee is attending */
  timeSlot: TimeSlot;
  /** The token that the individual will present in order to gain access to the event. Typically in the form of a QRCode. */
  token: Scalars['String']['output'];
};

/** OrderItemState describes the possible states an OrderItem may be in. */
export type OrderItemState =
  /** The OrderItem has been created and a charge has been authorized but not yet processed - the default state */
  | 'UNPAID'
  /** The OrderItem has been created, but requires approval by the Host to process */
  | 'UNAPPROVED'
  /** This state has been deprecated, and will be removed soon */
  | 'CHECKOUT'
  /** The OrderItem has been created but a charge has not yet been authorized */
  | 'PENDING'
  /** The OrderItem has been successfully processed, and payment methods have been charged */
  | 'PAID'
  /** The OrderItem has been processed, and processing failed */
  | 'FAILED'
  /** The OrderItem has been processed, but the payment method was declined by the upstream gateway */
  | 'DECLINED'
  /** The OrderItem was created and processed, but has since been cancelled and any associated transactions have been reverted */
  | 'CANCELLED'
  /** The OrderItem was created and processed, and 48 hours has passed since the Event. The funds associated with this OrderItem are now pending a transfer to the Host */
  | 'ENDED'
  /** The OrderItem has been processed, and funds captured by the charge have been transferred to the Event Host */
  | 'CLOSED'
  /** The OrderItem was created but not processed for any reason, and can no longer be processed because the Event has happened */
  | 'EXPIRED'
  /** The OrderItem could not be processed due to internal service disruption inside of */
  | 'ERROR'
  /** The OrderItem has been processed and processed, but an outstanding balance remainds. This state is used specifically for our Payment Plans product. In general, exercise care in dealing with OrderItems in this state, because a default on future payments remains possible. */
  | 'PARTIALLY_PAID'
  /** The OrderItem was created and, but requires authorizeation by the Buyer. */
  | 'UNAUTHORIZED'
  /** The OrderItem was created and was transferred to another buyer. */
  | 'TRANSFERRED'
  /** The OrderItem was created and was upgraded to a new ticket type. This OrderItem is no longer valid for entry. */
  | 'UPGRADED';

/** Rates are product types available for sale - most typically these are tickets, but they are also configurable as Passes, and in the future other meta product types may be added */
export type Rate = {
  /** Optional capacity for this rate */
  capacity?: Maybe<Scalars['Int']['output']>;
  clientGroup: RateClientGroup;
  /** Optional description for this rate */
  description?: Maybe<Scalars['String']['output']>;
  /** Displays a price that contains taxes and fees if the listing has all-in pricing enabled. If the listing does not have it enabled, this is identical to price. */
  displayPrice: Scalars['Float']['output'];
  endStamp?: Maybe<Scalars['Int']['output']>;
  exclusionRules?: Maybe<Array<Scalars['JSON']['output']>>;
  id: Scalars['ID']['output'];
  /** A limit of the number of tickets of this type sellable for each TimeSlot on an Event */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Maximum number of times this rate may be redeemed (scanned). Single redemption if null */
  maxRedemptions?: Maybe<Scalars['Int']['output']>;
  /** Optional amount of maximum tickets allowed when purchasing this rate */
  maxTickets?: Maybe<Scalars['Int']['output']>;
  /** The minimum price of this type of ticket, used only in PWYW/donation tickets */
  minPrice: Scalars['Float']['output'];
  /** Minimum seconds between redemptions (scans). No minimum if null. */
  minRedemptionInterval?: Maybe<Scalars['Int']['output']>;
  /** Optional amount of minimum tickets required when purchasing this rate */
  minTickets?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  optionName?: Maybe<Scalars['String']['output']>;
  /** Confirmed OrderItems in the Order, don't include transfers */
  orderItems: OrderItemConnection;
  /** The price of this type of ticket - 0.0 if free */
  price: Scalars['Float']['output'];
  /** Optional promotion tag */
  promotionPill?: Maybe<Scalars['String']['output']>;
  /** Time (in seconds) setting when purchased orders on this rate will be released to the fan */
  releaseOffset?: Maybe<Scalars['Int']['output']>;
  /** Total net sales */
  sales: Money;
  /**
   * Total net sales amount
   * @deprecated Use new 'sales' field for more detail
   */
  salesAmount: Scalars['Float']['output'];
  /** Optional number sold costItems for this rate */
  soldCount?: Maybe<Scalars['Int']['output']>;
  startStamp?: Maybe<Scalars['Int']['output']>;
  state: RateState;
  /** Rate type I.E Ticket, Pass, or Add-on */
  type?: Maybe<RateType>;
};

/** The state a rate can be in */
export type RateState =
  /** The rate is available for purchase, if capacity is available */
  | 'ACTIVE'
  /** The rate is only available if the user provides a key */
  | 'LOCKED'
  | 'INACTIVE'
  /** The rate has been removed */
  | 'HIDDEN';

/** A state representing which places a rate can be sold. */
export type RateClientGroup =
  /** The rate can be sold both online and at-the-door */
  | 'EVERYWHERE'
  /** The rate can only be sold online */
  | 'ONLINE_ONLY'
  /** The rate can only be sold at the door */
  | 'AT_THE_DOOR';

export type OrderItemConnection = {
  nodes: Array<OrderItem>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type OrderItemConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** An item in the order */
export type OrderItem = {
  /** The AddOn for this OrderItem, if the rate is an AddOnRate */
  addOn?: Maybe<AddOn>;
  amount: Scalars['Float']['output'];
  /** Buyer's answers to checkout questions on the OrderItem level (i.e. Ticket) */
  answers: Array<Maybe<Answer>>;
  /** The person that owns this OrderItem, who is not always the primary buyer */
  buyer: Buyer;
  /** Whether or not the OrderItem was scanned in */
  checkInState: CheckInState;
  /** Whether this order item is in a confirmed state */
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  /** Cost breakdown for the Order Item */
  costBreakdown: OrderCostItemBreakdown;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** Partially refunded amount */
  discountPrice?: Maybe<Scalars['Float']['output']>;
  /** Redemption objects for any Discount applied during checkout */
  discountRedemption?: Maybe<DiscountRedemption>;
  /** Whether there are questions or answers on this order item that can be edited */
  editable?: Maybe<Scalars['Boolean']['output']>;
  /** Custom attribute associated with this OrderItem, settable by the Host */
  externalMetadata?: Maybe<Scalars['String']['output']>;
  /** Users first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Optional formatted price with currency code and symbol */
  formattedPrice?: Maybe<Scalars['String']['output']>;
  /** Determines if the OrderItem has been fully refunded, meaning the entire monetary amount has been returned to the buyer */
  fullyRefunded?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Users first name */
  lastName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  optionName?: Maybe<Scalars['String']['output']>;
  /** The parent transaction for this Order Item */
  order: Order;
  /** The state the Order is in */
  orderState: OrderState;
  /** Determines if the OrderItem has been partially refunded. Partially refunded meaning a partial monetary amount has been returned to the buyer */
  partiallyRefunded?: Maybe<Scalars['Boolean']['output']>;
  /** The person that paid for this OrderItem, but does not necessarily own it */
  primaryBuyer: Buyer;
  qrCode?: Maybe<Scalars['String']['output']>;
  /** The rate associated with this OrderItem */
  rate: Rate;
  /** The label of the seat if the Event sells seats */
  seatLabel?: Maybe<Scalars['String']['output']>;
  /** The state the OrderItem is in */
  state: OrderItemState;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  /** Whether this order item can be upgraded */
  upgradeable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this order item can be voided */
  voidable: Scalars['Boolean']['output'];
};

/** OrderState describes the possible states an Order may be in. */
export type OrderState =
  /** The Order has been created and a charge has been authorized but not yet processed - the default state */
  | 'UNPAID'
  /** The Order has been created, but requires approval by the Host to process */
  | 'UNAPPROVED'
  /** The Order has been created, but requires pre-authorization by the cardholder */
  | 'NEEDS_PRE_AUTH'
  /** This state has been deprecated, and will be removed soon */
  | 'CHECKOUT'
  /** The Order has been created but a charge has not yet been authorized */
  | 'PENDING'
  /** The Order has been successfully processed, and payment methods have been charged */
  | 'PAID'
  /** The Order has been processed, and processing failed */
  | 'FAILED'
  /** The Order has been processed, but the payment method was declined by the upstream gateway */
  | 'DECLINED'
  /** The Order was created and processed, but has since been cancelled and any associated transactions have been reverted */
  | 'CANCELLED'
  /** The Order was created and processed, and 48 hours has passed since the Event. The funds associated with this Order are now pending a transfer to the Host */
  | 'ENDED'
  /** The Order has been processed, and funds captured by the charge have been transferred to the Event Host */
  | 'CLOSED'
  /** The Order was created but not processed for any reason, and can no longer be processed because the Event has happened */
  | 'EXPIRED'
  /** The Order could not be processed due to internal service disruption inside of */
  | 'ERROR'
  /** The Order has been processed and processed, but an outstanding balance remainds. This state is used specifically for our Payment Plans product. In general, exercise care in dealing with Orders in this state, because a default on future payments remains possible. */
  | 'PARTIALLY_PAID'
  /** The Order was created and, but requires authorizeation by the Buyer. */
  | 'UNAUTHORIZED'
  /** The Order was disputed. Ticket is invalid for entry, but counts towards capacity until resolved. */
  | 'DISPUTED';

/** An order item cost breakdown */
export type OrderCostItemBreakdown = {
  /** The total commission paid for this Order */
  commission?: Maybe<Scalars['Float']['output']>;
  /** The total commission included paid for this Order */
  commissionIncluded?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  /** The currency used either for transactions or for settlement */
  currency?: Maybe<CurrencyCode>;
  description?: Maybe<Scalars['String']['output']>;
  /** The total discount for this Order */
  discount?: Maybe<Scalars['Float']['output']>;
  /** The total fees paid for this Order */
  fee?: Maybe<Scalars['Float']['output']>;
  /** Sum of fee, commission and plan_fee per cost item */
  feeAmount?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Array<CostItemBreakdownFee>>;
  /** The total fulfillment paid for this Order */
  fulfillment?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mongoId?: Maybe<Scalars['String']['output']>;
  /** The total payment for this Order */
  payment?: Maybe<Scalars['Float']['output']>;
  /** The plan fees paid for this Order */
  planFee?: Maybe<Scalars['Float']['output']>;
  /** The price paid for this Order */
  price?: Maybe<Scalars['Float']['output']>;
  rateId?: Maybe<Scalars['String']['output']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<OrderCostBreakdown>;
  /** The subtotal paid for this Order */
  subtotal?: Maybe<Scalars['Float']['output']>;
  taxes?: Maybe<Array<CostItemBreakdownTax>>;
  /** The total taxes paid for this Order */
  taxesTotal?: Maybe<Scalars['Float']['output']>;
  /** Total cost item amount inclusive of fees, taxes and commissions, paid by the fan */
  totalPaidByFan?: Maybe<Scalars['Float']['output']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<OrderCostBreakdown>;
  /** Has this Order Item been voided */
  voided?: Maybe<Scalars['Boolean']['output']>;
  /** The total commission voided for this Order */
  voidedCommission?: Maybe<Scalars['Float']['output']>;
  /** The total commission included voided for this Order */
  voidedCommissionIncluded?: Maybe<Scalars['Float']['output']>;
  /** The total discount voided for this Order */
  voidedDiscount?: Maybe<Scalars['Float']['output']>;
  /** The total fees voided for this Order */
  voidedFee?: Maybe<Scalars['Float']['output']>;
  voidedFees?: Maybe<Array<CostItemBreakdownFee>>;
  /** The total payment voided for this Order */
  voidedPayment?: Maybe<Scalars['Float']['output']>;
  /** The plan fees voided for this Order */
  voidedPlanFee?: Maybe<Scalars['Float']['output']>;
  /** The price voided for this Order */
  voidedPrice?: Maybe<Scalars['Float']['output']>;
  /** The subtotal voided for this Order */
  voidedSubtotal?: Maybe<Scalars['Float']['output']>;
  voidedTaxes?: Maybe<Array<CostItemBreakdownTax>>;
  /** The total taxes voided for this Order */
  voidedTaxesTotal?: Maybe<Scalars['Float']['output']>;
};

export type CostItemBreakdownTax = {
  amount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<CostItemBreakdownTax>;
  taxId?: Maybe<Scalars['String']['output']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<CostItemBreakdownTax>;
};

export type CostItemBreakdownFee = {
  amount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flat?: Maybe<Scalars['Float']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<CostItemBreakdownFee>;
  src_flat?: Maybe<Scalars['Float']['output']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<CostItemBreakdownFee>;
};

/** An order cost breakdown by default, the transactional cost breakdown */
export type OrderCostBreakdown = {
  /** The total commission paid for this Order */
  commission?: Maybe<Scalars['Float']['output']>;
  /** The total commission included paid for this Order */
  commissionIncluded?: Maybe<Scalars['Float']['output']>;
  /** The currency used either for transactions or for settlement */
  currency: CurrencyCode;
  /** The total discount for this Order */
  discount?: Maybe<Scalars['Float']['output']>;
  /** The total fees paid for this Order */
  fee?: Maybe<Scalars['Float']['output']>;
  /** The fees paid for this Order */
  fees?: Maybe<Array<CostBreakdownItem>>;
  /** The total fulfillment paid for this Order */
  fulfillment?: Maybe<Scalars['Float']['output']>;
  /** The total payment for this Order */
  payment?: Maybe<Scalars['Float']['output']>;
  /** The date the payment was made at for this Order */
  paymentMadeAt: Scalars['String']['output'];
  /** The plan fees paid for this Order */
  planFee?: Maybe<Scalars['Float']['output']>;
  /** The price paid for this Order */
  price?: Maybe<Scalars['Float']['output']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<OrderCostBreakdown>;
  /** The subtotal paid for this Order */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** The taxes paid for this Order */
  taxes?: Maybe<Array<CostBreakdownItem>>;
  /** The total taxes paid for this Order */
  taxesTotal?: Maybe<Scalars['Float']['output']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<OrderCostBreakdown>;
  /** The total commission voided for this Order */
  voidedCommission?: Maybe<Scalars['Float']['output']>;
  /** The total commission included voided for this Order */
  voidedCommissionIncluded?: Maybe<Scalars['Float']['output']>;
  /** The total discount voided for this Order */
  voidedDiscount?: Maybe<Scalars['Float']['output']>;
  /** The total fees voided for this Order */
  voidedFee?: Maybe<Scalars['Float']['output']>;
  /** The fees that were voided on this Order */
  voidedFees?: Maybe<Array<CostBreakdownItem>>;
  /** The total payment voided for this Order */
  voidedPayment?: Maybe<Scalars['Float']['output']>;
  /** The date the payment was voided at */
  voidedPaymentAt: Scalars['String']['output'];
  /** The plan fees voided for this Order */
  voidedPlanFee?: Maybe<Scalars['Float']['output']>;
  /** The price voided for this Order */
  voidedPrice?: Maybe<Scalars['Float']['output']>;
  /** The subtotal voided for this Order */
  voidedSubtotal?: Maybe<Scalars['Float']['output']>;
  /** The taxes that were voided on this Order */
  voidedTaxes?: Maybe<Array<CostBreakdownItem>>;
  /** The total taxes voided for this Order */
  voidedTaxesTotal?: Maybe<Scalars['Float']['output']>;
};

export type CostBreakdownItem = {
  amount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<CostBreakdownItem>;
  /** The transactional cost breakdown */
  transactional?: Maybe<CostBreakdownItem>;
};

/** Discount Redemptions represent unique uses of a Discount on an Order Item */
export type DiscountRedemption = {
  discount: Discount;
  id: Scalars['ID']['output'];
  orderItem: OrderItem;
};

/** Discounts allow Buyers to redeem a discount on their purchase */
export type Discount = {
  /** The literal value a Buyer needs to provide to redeem the discount */
  code: Scalars['String']['output'];
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** The event to which the discount code is restricted, if applicable */
  event?: Maybe<Event>;
  /** The redemption value of the Discount - as a fixed amount */
  fixed?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  /** The redemption value of the Discount - as a percent (represented in the range 0..1) */
  percent?: Maybe<Scalars['Float']['output']>;
  /** The total number of Order Items that a Discount can be applied to */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** The rates to which the discount code is restricted, if applicable */
  rates?: Maybe<Array<Maybe<Rate>>>;
  /** The type of redemption value, dictates which field the redemption value should be read from (either `percent` or `fixed`) */
  redemptionType: DiscountRedemptionType;
  /** Redemption objects for this Discount */
  redemptions: DiscountRedemptionConnection;
  /** The total number of possible uses remaining */
  remaining?: Maybe<Scalars['Int']['output']>;
  state: DiscountState;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};

/** Possible states a Discount can be in */
export type DiscountState =
  /** The Discount is available for use */
  | 'ACTIVE'
  /** The Discount is not available for use */
  | 'INACTIVE'
  /** The Discount has been fully used (no quantity remaining) and cannot be redeemed */
  | 'USED';

/** Possible redemption value types of Discounts */
export type DiscountRedemptionType =
  /** If percent, the value of the Discount is a percentage off */
  | 'PERCENT'
  /** If fixed, the value of the Discount is a fixed amount off */
  | 'FIXED';

export type DiscountRedemptionConnection = {
  nodes: Array<DiscountRedemption>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DiscountRedemptionConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A transaction made by a Buyer for Order Items (frequently, but not exclusively, tickets for an Event) */
export type Order = {
  /** The access keys used for this Order */
  accessKeys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Add Ons in the order */
  addOnItems: OrderItemConnection;
  /** Buyer's answers to checkout question, on the level of the Order itself */
  answers: Array<Maybe<Answer>>;
  /** whether this order is booking protected */
  bookingProtected?: Maybe<Scalars['Boolean']['output']>;
  /** The Buyer who created the Order */
  buyer: Buyer;
  /** Brand of Card or Payment Method */
  cardBrand?: Maybe<Scalars['String']['output']>;
  /** Whether this order is in a confirmed state */
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  /** Cost breakdown for the Order */
  costBreakdown: OrderCostBreakdown;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** Whether there are questions or answers on this order that can be edited */
  editable?: Maybe<Scalars['Boolean']['output']>;
  /** Each Order has one Event - the event the tickets are for */
  event: Event;
  historical?: Maybe<Scalars['Boolean']['output']>;
  /** The Host of the Event the tickets on the Order are for */
  host: Host;
  hostPurchased: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The invoice for an order */
  invoice?: Maybe<Invoice>;
  /** Whether an order belongs to channel partner */
  isDcomOrder?: Maybe<Scalars['Boolean']['output']>;
  /** Number of accepted transfers for this order */
  numberOfAcceptedTransfers?: Maybe<Scalars['Int']['output']>;
  /** Items in the order */
  orderItems: OrderItemConnection;
  /** Where the Buyer purchased the order from */
  origin?: Maybe<Scalars['String']['output']>;
  paymentDeclineCode?: Maybe<PaymentDeclineCode>;
  /** A private note created by the Host of the Event, made available to Buyers. Often contains information important to the Buyer. */
  privateNote?: Maybe<Scalars['String']['output']>;
  providerSourceClient?: Maybe<Scalars['String']['output']>;
  providerSourceType?: Maybe<ProviderSourceType>;
  /** Collection of rate ids for the order items in this order */
  rateIds?: Maybe<Array<Scalars['ID']['output']>>;
  /** If the Buyer clicked a link containing a `ref` parameter, this string will return the same value. You can use this to track purchases from specific links. */
  ref?: Maybe<Scalars['String']['output']>;
  /** Gets a refund estimate on this order */
  refundEstimate?: Maybe<Scalars['Float']['output']>;
  state: OrderState;
  /** The TimeSlot the tickets on the Order are for */
  timeSlot: TimeSlot;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  /** Whether an order item on this order can be upgraded */
  upgradeable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the order was purchased using Klarna */
  usedKlarna?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the order was purchased using a payment plan */
  usedPaymentPlan?: Maybe<Scalars['Boolean']['output']>;
  /** Valid order items count i.e. without 'upgraded' status */
  validOrderItemsCount?: Maybe<Scalars['Int']['output']>;
  /** Whether an order item on this order can be voided */
  voidable?: Maybe<Scalars['Boolean']['output']>;
};


/** A transaction made by a Buyer for Order Items (frequently, but not exclusively, tickets for an Event) */
export type OrderorderItemsArgs = {
  externalMetadata?: InputMaybe<Scalars['String']['input']>;
};


/** A transaction made by a Buyer for Order Items (frequently, but not exclusively, tickets for an Event) */
export type OrderrefundEstimateArgs = {
  orderItemRefundDatas: Array<InputMaybe<OrderItemRefundData>>;
};

export type Answer = {
  id: Scalars['ID']['output'];
  question: Question;
  /** Value of the Answer - the actual 'answer' to the question asked to the user. Note that this field returns a string, but the content will contain stringified versions of other types like arrays. This behavior exists because GraphQL does not currently support union scalar field types. Universe recommends parsing these values as JSON in whatever consuming application you are writing. */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type Question = {
  context: AnswerContext;
  editable: Scalars['String']['output'];
  hasOther: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  included: Scalars['Boolean']['output'];
  index: Scalars['Int']['output'];
  multiple: Scalars['Boolean']['output'];
  /** Question */
  question: Scalars['String']['output'];
  /** Rate ids for which this question is set */
  rateIds: Array<Maybe<Scalars['ID']['output']>>;
  /** Rates which this question needs to be set */
  rates: Array<Maybe<Rate>>;
  required: Scalars['Boolean']['output'];
  selectOptions?: Maybe<Scalars['JSON']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  /** Type of the question, have no idea which values it can have */
  type: AnswerType;
};

/** Question types */
export type AnswerType =
  /** Regular text */
  | 'TEXT'
  /** Single choice from many */
  | 'SELECT'
  /** Multiple choices from many */
  | 'MULTI_SELECT'
  /** Yes or no */
  | 'CHECKBOX';

/** Answer context */
export type AnswerContext =
  /** Once per order item question */
  | 'ORDER_ITEM'
  /** Once per order question */
  | 'ORDER';

/** A user who has created an Order on Universe */
export type Buyer = User & {
  admin: Scalars['Boolean']['output'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** A (potentially unconfirmed) email address - uniquely tied to the Buyer ID */
  email: Scalars['String']['output'];
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  /** Orders created for this Event */
  orders?: Maybe<OrderConnection>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  superAdmin: Scalars['Boolean']['output'];
};

export type OrderConnection = {
  nodes: Array<Order>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type OrderConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** When a card issuer declines a payment, they will provide a reason through the use of a decline code */
export type PaymentDeclineCode =
  /** translation missing: en.misc.bank_decline_codes.approve_with_id */
  | 'APPROVE_WITH_ID'
  /** translation missing: en.misc.bank_decline_codes.call_issuer */
  | 'CALL_ISSUER'
  /** translation missing: en.misc.bank_decline_codes.card_declined */
  | 'CARD_DECLINED'
  /** translation missing: en.misc.bank_decline_codes.card_not_supported */
  | 'CARD_NOT_SUPPORTED'
  /** translation missing: en.misc.bank_decline_codes.card_velocity_exceeded */
  | 'CARD_VELOCITY_EXCEEDED'
  /** translation missing: en.misc.bank_decline_codes.currency_not_supported */
  | 'CURRENCY_NOT_SUPPORTED'
  /** translation missing: en.misc.bank_decline_codes.do_not_honor */
  | 'DO_NOT_HONOR'
  /** translation missing: en.misc.bank_decline_codes.do_not_try_again */
  | 'DO_NOT_TRY_AGAIN'
  /** translation missing: en.misc.bank_decline_codes.duplicate_transaction */
  | 'DUPLICATE_TRANSACTION'
  /** translation missing: en.misc.bank_decline_codes.expired_card */
  | 'EXPIRED_CARD'
  /** translation missing: en.misc.bank_decline_codes.fraudulent */
  | 'FRAUDULENT'
  /** translation missing: en.misc.bank_decline_codes.generic_decline */
  | 'GENERIC_DECLINE'
  /** translation missing: en.misc.bank_decline_codes.incorrect_number */
  | 'INCORRECT_NUMBER'
  /** translation missing: en.misc.bank_decline_codes.incorrect_cvc */
  | 'INCORRECT_CVC'
  /** translation missing: en.misc.bank_decline_codes.insufficient_funds */
  | 'INSUFFICIENT_FUNDS'
  /** translation missing: en.misc.bank_decline_codes.invalid_account */
  | 'INVALID_ACCOUNT'
  /** translation missing: en.misc.bank_decline_codes.invalid_amount */
  | 'INVALID_AMOUNT'
  /** translation missing: en.misc.bank_decline_codes.invalid_cvc */
  | 'INVALID_CVC'
  /** translation missing: en.misc.bank_decline_codes.invalid_expiry_year */
  | 'INVALID_EXPIRY_YEAR'
  /** translation missing: en.misc.bank_decline_codes.issuer_not_available */
  | 'ISSUER_NOT_AVAILABLE'
  /** translation missing: en.misc.bank_decline_codes.lost_card */
  | 'LOST_CARD'
  /** translation missing: en.misc.bank_decline_codes.new_account_information_available */
  | 'NEW_ACCOUNT_INFORMATION_AVAILABLE'
  /** translation missing: en.misc.bank_decline_codes.no_action_taken */
  | 'NO_ACTION_TAKEN'
  /** translation missing: en.misc.bank_decline_codes.not_permitted */
  | 'NOT_PERMITTED'
  /** translation missing: en.misc.bank_decline_codes.pickup_card */
  | 'PICKUP_CARD'
  /** translation missing: en.misc.bank_decline_codes.processing_error */
  | 'PROCESSING_ERROR'
  /** translation missing: en.misc.bank_decline_codes.restricted_card */
  | 'RESTRICTED_CARD'
  /** translation missing: en.misc.bank_decline_codes.revocation_of_all_authorizations */
  | 'REVOCATION_OF_ALL_AUTHORIZATIONS'
  /** translation missing: en.misc.bank_decline_codes.stolen_card */
  | 'STOLEN_CARD'
  /** translation missing: en.misc.bank_decline_codes.stop_payment_order */
  | 'STOP_PAYMENT_ORDER'
  /** translation missing: en.misc.bank_decline_codes.testmode_decline */
  | 'TESTMODE_DECLINE'
  /** translation missing: en.misc.bank_decline_codes.try_again_later */
  | 'TRY_AGAIN_LATER'
  /** translation missing: en.misc.bank_decline_codes.withdrawal_count_limit_exceeded */
  | 'WITHDRAWAL_COUNT_LIMIT_EXCEEDED';

/** Payment methods supported by our payment systems */
export type ProviderSourceType =
  | 'BCH'
  | 'BTC'
  | 'DCR'
  | 'DOGE'
  | 'ETH'
  | 'LNBT'
  | 'LTC'
  | 'XMR'
  | 'XRP'
  | 'ALIPAY'
  | 'BANCONTACT'
  | 'DCOM'
  | 'EPS'
  | 'GIROPAY'
  | 'GLOBEE'
  | 'IDEAL'
  | 'INVOICE'
  | 'KLARNA'
  | 'MASTERPASS'
  | 'MULTIBANCO'
  | 'PAYPAL'
  | 'PRZELEWY'
  | 'SEPA'
  | 'SOFORT'
  | 'VISACHECKOUT'
  | 'WECHAT'
  | 'CARD'
  | 'VISA_CHECKOUT'
  | 'SEPA_DEBIT'
  | 'APPLE_PAY'
  | 'ANDROID_PAY'
  | 'GOOGLE_PAY'
  | 'OFFLINE';

/** The invoice for an order */
export type Invoice = {
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

/** Refund arguments related to a single OrderItem */
export type OrderItemRefundData = {
  id: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  refundType: RefundType;
  void: Scalars['Boolean']['input'];
};

/** Specifies if a refund is flat or in percentage of the amount */
export type RefundType =
  | 'FLAT'
  | 'PERCENT';

/** CheckInState describes if an OrderItem was checked in or not. */
export type CheckInState =
  /** The initial check in state */
  | 'CHECKED_OUT'
  /** Check in done by the host */
  | 'MANUALLY_CHECKED_IN'
  /** QR Code was scanned at the door */
  | 'SCANNED_IN'
  /** QR Code was scanned out */
  | 'SCANNED_OUT';

/** A product or service that can be sold at any of your events */
export type AddOn = {
  /** The currency in which the add-on is sold */
  currency?: Maybe<CurrencyCode>;
  /** A detailed description of the add-on */
  description?: Maybe<Scalars['String']['output']>;
  /** Events where this add on is available. Set to [] for all events. */
  eventIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** The creator of the add-on */
  host?: Maybe<Host>;
  /** Determines who pays the Universe service fee. */
  hostPaysCommission?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of add-on item being sold */
  name?: Maybe<Scalars['String']['output']>;
  /** The rates associated with the add-on */
  rates?: Maybe<Array<Maybe<AddOnRate>>>;
  /** The taxes associated with the add-on */
  taxes?: Maybe<Array<Maybe<Tax>>>;
};

/** Rates are product types available for sale - most typically these are tickets, in this case configured for add-on */
export type AddOnRate = {
  /** Associated add-on for this rate */
  addOn?: Maybe<AddOn>;
  /** Amount available after considering claims and sold items */
  availability?: Maybe<Scalars['Int']['output']>;
  /** Capacities for add on rate */
  capacities?: Maybe<Array<RateCapacity>>;
  /** Number of add-on items available in stock */
  capacity?: Maybe<Scalars['Int']['output']>;
  /** Description of rate */
  description?: Maybe<Scalars['String']['output']>;
  /** The displayed price of this specific rate with all in pricing */
  displayPrice?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** A URL to the event image. Custom height and width can be supplied */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Images of the add on option */
  images?: Maybe<Array<Image>>;
  /** Maximum number of add-ons allowed per order */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Maximum number of times a ticket may be redeemed (scanned). Single redemption if null. */
  maxRedemptions?: Maybe<Scalars['Int']['output']>;
  /** Minimum number of add-ons required per order */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum seconds between redemptions (scans). No minimum if null. */
  minRedemptionInterval?: Maybe<Scalars['Int']['output']>;
  /** The name of the rate */
  name: Scalars['String']['output'];
  optionName?: Maybe<Scalars['String']['output']>;
  /** The sale price of this specific rate */
  price?: Maybe<Scalars['Float']['output']>;
  /** Product number of this specific add-on rate */
  sku?: Maybe<Scalars['String']['output']>;
  /** Number of add-on items available in stock */
  soldCount?: Maybe<Scalars['Int']['output']>;
  /** The currency the buyer must purchase the rate in */
  srcCurrency: Scalars['String']['output'];
  /** The state of a specific add-on rate */
  state?: Maybe<RateState>;
  /** The type of rate */
  type: Scalars['String']['output'];
  /** Whether an add on rate has sold add-ons or not */
  used: Scalars['Boolean']['output'];
};


/** Rates are product types available for sale - most typically these are tickets, in this case configured for add-on */
export type AddOnRateimageUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Capacity for a Rate within a Time Slot */
export type RateCapacity = {
  /** Available capacity count for a Rate within a Time Slot. It depends on the Event and Rate maxQuantity. Returns null if there is no maxQuantity set for Event and Rate.  */
  available?: Maybe<Scalars['Int']['output']>;
  countAttending?: Maybe<Scalars['Int']['output']>;
  countAvailable?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** Rate for the capacity in a Time Slot */
  rate: Rate;
  rateId: Scalars['ID']['output'];
  timeSlotId?: Maybe<Scalars['ID']['output']>;
  type: Scalars['String']['output'];
};

/** A tax rate that can be applied to cost items */
export type Tax = {
  /** The add ons that use this tax */
  addOns?: Maybe<Array<Maybe<AddOn>>>;
  /** The creator of the tax */
  host?: Maybe<Host>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of tax */
  name?: Maybe<Scalars['String']['output']>;
  /** The percentage of tax rate */
  percent?: Maybe<Scalars['Float']['output']>;
  /** Tax registration number if available */
  taxId?: Maybe<Scalars['String']['output']>;
};

/** Monetary amounts (includes a currency and sales $) */
export type Money = {
  /** The currency of the money */
  currency: CurrencyCode;
  /** The exponent of the currency, the number of digits used after the decimal place */
  exponent: Scalars['Int']['output'];
  /** Monetary amount returned as an integer in the lowest denomination (cents) to reduce floating point errors */
  monetaryAmount: Scalars['Int']['output'];
};

/** Possible Rate types. */
export type RateType =
  /** The rate is for a paid ticket */
  | 'PAID_TICKET'
  /** The rate is for a free ticket */
  | 'FREE_TICKET'
  /** The rate is for a pass */
  | 'PASS_TICKET'
  /** The rate is for a pay what you can ticket */
  | 'PWYW_TICKET'
  /** The rate is for an add-on */
  | 'ADD_ON';

export type ThirdPartyTicketConnection = {
  nodes: Array<ThirdPartyTicket>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ThirdPartyTicketConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ThirdPartyTicket = {
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  importSource: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  rate: Rate;
  state: OrderState;
  timeSlot: TimeSlot;
  token: Scalars['String']['output'];
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};

/** Sales per specific day */
export type DailySales = {
  /** Day */
  day: Scalars['Date']['output'];
  /** Sales */
  salesAmount: Scalars['Float']['output'];
};

/** The conversion tracking labels a host as set for their Event */
export type GoogleAdsSendTos = {
  /** the send_to field to fire on checkout modal is loaded */
  checkout: Array<Scalars['String']['output']>;
  /** the send_to field to fire on an event pageview */
  pageview: Array<Scalars['String']['output']>;
  /** the send_to field to fire on an event purchase */
  purchase: Array<Scalars['String']['output']>;
  /** the send_to field to list the site_tags */
  siteTag: Array<Scalars['String']['output']>;
};

/** Stores the data required for WRSTBND integration */
export type WrstbndIntegration = {
  /** the WRSTBND user api key */
  apiKey?: Maybe<Scalars['String']['output']>;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  listingId: Scalars['ID']['output'];
  /** is NFC enabled for this event? */
  nfcEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** is NFC enabled for all rates od this event? */
  nfcEnabledAllRates?: Maybe<Scalars['Boolean']['output']>;
  /** is RFID enabled for this event? */
  rfidEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** is RFID enabled for all rates od this event? */
  rfidEnabledAllRates?: Maybe<Scalars['Boolean']['output']>;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  /** the WRSTBND event id */
  wrstbndEventId?: Maybe<Scalars['String']['output']>;
};

/** Google Ads Trackers allow to store the targers and types of ads trackers */
export type GoogleAdsTracker = {
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  listingId: Scalars['ID']['output'];
  /** target of a tracker event */
  sendTo: Scalars['String']['output'];
  /** type of a tracker event */
  type: GoogleAdsTrackerTypes;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};

/** Valid types for google ads tracker */
export type GoogleAdsTrackerTypes =
  /** PURCHASE type for google ads tracker */
  | 'purchase'
  /** PAGEVIEW type for google ads tracker */
  | 'pageview'
  /** CHECKOUT type for google ads tracker */
  | 'checkout'
  /** SITE_TAG type for google ads tracker */
  | 'site_tag';

/** Stores keys of facebook pixels ads tracker */
export type FacebookPixel = {
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  listingId: Scalars['ID']['output'];
  /** Pixel code */
  pixel: Scalars['String']['output'];
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};

export type RateConnection = {
  nodes: Array<Rate>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type RateConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** True if rate with state exists and false if rate with state does not exist */
export type RateStateExists = {
  inactive: Scalars['Boolean']['output'];
  locked: Scalars['Boolean']['output'];
  soldAtDoor?: Maybe<Scalars['Boolean']['output']>;
};

export type SaversConnection = {
  nodes: Array<Saver>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SaversConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents a Saver who Saved an Event */
export type Saver = User & {
  admin: Scalars['Boolean']['output'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  superAdmin: Scalars['Boolean']['output'];
};

export type AccessKeyConnection = {
  nodes: Array<AccessKey>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type AccessKeyConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Access Keys allow you to password protect tickets so you can sell tickets to a certain group of patrons. Perfect for offering special rates for members or VIPs. */
export type AccessKey = {
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** The total number of locked tickets that can be purchased with a given key. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** The rates unlocked by this Access Key */
  rates?: Maybe<Array<Rate>>;
  state: AccessKeyState;
};

/** The state an access key can be in */
export type AccessKeyState =
  /** The Access Key is available for use */
  | 'ACTIVE'
  /** The Access Key is not available for use */
  | 'INACTIVE'
  /** The Access Key has been fully used and cannot be redeemed */
  | 'USED';

export type DiscountConnection = {
  nodes: Array<Discount>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DiscountConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Referral Code */
export type ReferralCode = {
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

/** Customized Rate values */
export type RateCustomization = {
  capacity?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  eventId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  listingId?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rateId?: Maybe<Scalars['ID']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

/** WIP */
export type Report = {
  columns: Scalars['JSON']['output'];
  preview: Scalars['JSON']['output'];
};


/** WIP */
export type ReportpreviewArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Event category */
export type Category = {
  id: Scalars['ID']['output'];
  key: CategoryKey;
  /** The name of the category in English */
  name: Scalars['String']['output'];
};

/** List of potential event categories */
export type CategoryKey =
  /** Other */
  | 'OTHER'
  /** Business */
  | 'BUSINESS'
  /** Music */
  | 'MUSIC'
  /** Sports */
  | 'SPORTS'
  /** Comedy */
  | 'COMEDY'
  /** Film */
  | 'FILM'
  /** Crafts */
  | 'CRAFTS'
  /** Food & Drink */
  | 'FOOD_DRINK'
  /** Fashion */
  | 'FASHION'
  /** Social */
  | 'SOCIAL'
  /** Performances */
  | 'PERFORMING_ARTS'
  /** Tech */
  | 'TECH'
  /** Galleries */
  | 'GALLERIES_MUSEUMS';

/** A label on an Event indicating an interest the Event includes */
export type Tag = {
  /** The name of the tag */
  name: Scalars['String']['output'];
  /** The slug for the tag */
  slug: Scalars['String']['output'];
  /** Whether the tag is suggestable or not */
  suggestable?: Maybe<Scalars['Boolean']['output']>;
};

export type ScheduleConnection = {
  nodes: Array<Schedule>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ScheduleConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** The object that controls the creation of batch timeslots */
export type Schedule = {
  /** End date in YYYY/MM/DD */
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The timeslot intervals assigned to this Schedule */
  intervals: Array<ScheduleInterval>;
  /** Current progress of this schedule */
  progress: Scalars['Int']['output'];
  /** True if there are associated ticket sales, False if there are no associated ticket sales. */
  readOnly?: Maybe<Scalars['Boolean']['output']>;
  /** Start date in YYYY/MM/DD */
  startDate: Scalars['String']['output'];
  /** The state this schedule is in */
  state: ScheduleState;
  /** Weekdays available in the schedule, represented by 0-6 */
  weekdaysAvailable: Array<Days>;
};

/** Days */
export type Days =
  /** Sunday */
  | 'SUNDAY'
  /** Monday */
  | 'MONDAY'
  /** Tuesday */
  | 'TUESDAY'
  /** Wednesday */
  | 'WEDNESDAY'
  /** Thursday */
  | 'THURSDAY'
  /** Friday */
  | 'FRIDAY'
  /** Saturday */
  | 'SATURDAY';

/** Each individual timeslot rule within a schedule */
export type ScheduleInterval = {
  /** The timeslot intervals assigned to this Schedule */
  datesToSkip: Array<Maybe<Scalars['Date']['output']>>;
  /** How long a timeslot will last from the startHour and startMinute */
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** True when there are associated ticket sales, False when there are no assocaited ticket sales */
  readOnly?: Maybe<Scalars['Boolean']['output']>;
  /** The hour when a timeslot will begin */
  startHour: Scalars['Int']['output'];
  /** The minute when a timeslot will begin */
  startMinute: Scalars['Int']['output'];
};

/** The state a schedule is in */
export type ScheduleState =
  /** This schedule is currently manipulating timeslots */
  | 'IN_SYNC'
  /** This schedule is done manipulating timeslots */
  | 'SYNC_DONE';

/** Report that provides overview information on order item sales */
export type TimeSlotReport = {
  addOnsByDate?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Number of add-ons sold */
  addonItemsSold: Scalars['Int']['output'];
  /** Number of order items and add-ons sold */
  costItemsSold: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  invitationsByDate?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Number of invitations sent out to potential buyers */
  invitationsSent?: Maybe<Scalars['Int']['output']>;
  /** The monetary value that represents the total of tickets sold in-person before Universe has made its deductions */
  offlineAmountGross?: Maybe<Scalars['Float']['output']>;
  salesByDate?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Number of order items sold */
  ticketItemsSold: Scalars['Int']['output'];
  ticketsAvailableByRate?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ticketsByDate?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Number of orders processed */
  ticketsSold: Scalars['Int']['output'];
  totalAddonItemsGross?: Maybe<Scalars['Float']['output']>;
  /** Monetary amount of discounts applied to order items */
  totalAmountDiscount?: Maybe<Scalars['Float']['output']>;
  /** Commission amount given to Universe as payment per ticket */
  totalCommissionIncluded?: Maybe<Scalars['Float']['output']>;
  /** Fees on on order items */
  totalFee?: Maybe<Scalars['Float']['output']>;
  /** The monetary value that represents the total before Universe has made its deductions */
  totalGross?: Maybe<Scalars['Float']['output']>;
  /** The monetary value that represents the total after Universe has made its deductions such as Service Charge */
  totalNet?: Maybe<Scalars['Float']['output']>;
  /** The monetary value that represents the tickets sales collected through Distributed Commerce */
  totalPartnerSales?: Maybe<Scalars['Float']['output']>;
  /** Taxes on order items */
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTicketItemsGross?: Maybe<Scalars['Float']['output']>;
  /** Taxes on Universe fees or Value Added Tax */
  totalVatIncluded?: Maybe<Scalars['Float']['output']>;
};

/** Host fields for checkout page questions */
export type HostField = {
  context?: Maybe<Scalars['String']['output']>;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  editable?: Maybe<Scalars['Boolean']['output']>;
  hasOther?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  included?: Maybe<Scalars['Boolean']['output']>;
  maxLength?: Maybe<Scalars['Int']['output']>;
  multiple?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rates: Array<Rate>;
  required?: Maybe<Scalars['Boolean']['output']>;
  selectOptions?: Maybe<Array<Scalars['String']['output']>>;
  sortIndex?: Maybe<Scalars['Int']['output']>;
  subtype?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/** Rate upgrade for a rate */
export type RateUpgrade = {
  benefits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  buttonText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  sourceRateIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  subtitle?: Maybe<Scalars['String']['output']>;
  targetRateId?: Maybe<Scalars['ID']['output']>;
};

/** Entry in a waitlist */
export type WaitlistSubscriber = {
  did_not_buy?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  host_marketing_opt_in?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  listing_id?: Maybe<Scalars['ID']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  tm_marketing_opt_in?: Maybe<Scalars['Boolean']['output']>;
  user_id?: Maybe<Scalars['ID']['output']>;
};

/** Custom Configuration for printed ticket */
export type PrintedTicketConfiguration = {
  /** Additional Text Line 1 */
  additionalText1?: Maybe<Scalars['String']['output']>;
  /** Additional Text Line 2 */
  additionalText2?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Supporting Text */
  supportingText?: Maybe<Scalars['String']['output']>;
  /** Ticket Event Name */
  ticketEventName?: Maybe<Scalars['String']['output']>;
  /** Ticket Event Organizer */
  ticketEventOrganizer?: Maybe<Scalars['String']['output']>;
};

export type RateCapacityConnection = {
  nodes: Array<RateCapacity>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type RateCapacityConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Analytics data for Viewer */
export type Analytics = {
  /** Add-on revenue amount by this currency */
  addOnSalesAmount: Scalars['Float']['output'];
  /** Add-on sales by day */
  addOnSalesByDay: Array<DailySales>;
  /** Average OrderItem count per Order */
  averageOrderItemCountPerOrder?: Maybe<Scalars['Float']['output']>;
  /** Average OrderItem price */
  averageOrderItemPrice?: Maybe<Scalars['Float']['output']>;
  /** Average Order price */
  averageOrderPrice?: Maybe<Scalars['Float']['output']>;
  /** Aggregate top buyers' locations */
  buyersLocations: Array<BuyersLocation>;
  /** Revenue amount by this currency */
  salesAmount: Scalars['Float']['output'];
  /** Sales by day */
  salesByDay: Array<DailySales>;
  /**
   * Aggregate sales information by channels
   * @deprecated this data has been moved to our new analytics platform
   */
  salesChannels: Array<SalesChannel>;
  /** Ticket revenue amount by this currency */
  ticketSalesAmount: Scalars['Float']['output'];
  /** Ticket sales by day */
  ticketSalesByDay: Array<DailySales>;
  /** Total tickets sold per currency */
  ticketsSold: Scalars['Int']['output'];
  /** The most popular hour of Order purchase */
  topHourOfPurchase?: Maybe<Scalars['Int']['output']>;
};


/** Analytics data for Viewer */
export type AnalyticsaddOnSalesAmountArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticsaddOnSalesByDayArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticsaverageOrderItemCountPerOrderArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Analytics data for Viewer */
export type AnalyticsaverageOrderItemPriceArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Analytics data for Viewer */
export type AnalyticsaverageOrderPriceArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Analytics data for Viewer */
export type AnalyticsbuyersLocationsArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Analytics data for Viewer */
export type AnalyticssalesAmountArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticssalesByDayArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticssalesChannelsArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Analytics data for Viewer */
export type AnalyticsticketSalesAmountArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticsticketSalesByDayArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticsticketsSoldArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
};


/** Analytics data for Viewer */
export type AnalyticstopHourOfPurchaseArgs = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  currency: CurrencyCode;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Sales data through channel */
export type SalesChannel = {
  /** Channel name */
  channelName?: Maybe<Scalars['String']['output']>;
  /** Sales amount */
  salesAmount?: Maybe<Scalars['Int']['output']>;
  /** Sales count */
  salesCount?: Maybe<Scalars['Int']['output']>;
};

/** Number of Buyers per Location */
export type BuyersLocation = {
  /** Number of Buyers per Location */
  buyerCount: Scalars['Int']['output'];
  /** Buyers' Location */
  location: Location;
};

export type Location = {
  /** City name */
  city: Scalars['String']['output'];
  /** Country name */
  country: Scalars['String']['output'];
};

/** Stripe connect account properties */
export type StripeConnectAccount = {
  currency: StripeConnectCurrencyCode;
  /** Stripe Connect Account Id */
  id: Scalars['String']['output'];
  /** Payment methods associated with stripe connect account */
  paymentMethods?: Maybe<Array<Scalars['String']['output']>>;
};

/** Currency codes for Stripe Connect Permissions */
export type StripeConnectCurrencyCode =
  /** USD currency */
  | 'USD'
  /** USD Terminal currency */
  | 'USD_TERMINAL'
  /** CAD currency */
  | 'CAD'
  /** EUR currency */
  | 'EUR'
  /** GBP currency */
  | 'GBP'
  /** AUD currency */
  | 'AUD'
  /** BRL currency */
  | 'BRL'
  /** CHF currency */
  | 'CHF'
  /** DKK currency */
  | 'DKK'
  /** NOK currency */
  | 'NOK'
  /** NZD currency */
  | 'NZD'
  /** SEK currency */
  | 'SEK'
  /** MXN currency */
  | 'MXN'
  /** JPY currency */
  | 'JPY'
  /** HKD currency */
  | 'HKD'
  /** SGD currency */
  | 'SGD';

export type CustomReportConnection = {
  nodes: Array<CustomReport>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type CustomReportConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Account level custom report */
export type CustomReport = {
  /** @deprecated Prefer camelCase to snake case. Please use the id field instead */
  _id: Scalars['ID']['output'];
  additionalRecipientIds?: Maybe<Array<Scalars['ID']['output']>>;
  columns: Array<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  /** @deprecated Prefer camelCase to snake case. Please use the createdAt field instead */
  created_at: Scalars['String']['output'];
  /** Currency parameter for filtering events in event select modal */
  currencyFilter?: Maybe<Scalars['String']['output']>;
  /** The day of the week when the scheduler should send report on. */
  days?: Maybe<Array<Maybe<Days>>>;
  description?: Maybe<Scalars['String']['output']>;
  /** Whether the scheduler is enabled or not */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Custom date range parameter (from) for filtering events in event select modal */
  eventRangeFrom?: Maybe<Scalars['String']['output']>;
  /** Custom date range parameter (to) for filtering events in event select modal */
  eventRangeTo?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Scalars['String']['output']>>;
  externalRecipientEmails?: Maybe<Array<Scalars['String']['output']>>;
  filters?: Maybe<Array<Scalars['JSON']['output']>>;
  /** The starting date of the scheduler */
  from?: Maybe<Scalars['Date']['output']>;
  /** The speicific hour of the day when the report should be sent. Value must be between 0 and 23 */
  hour?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The ordering column and direction of order prior to exporting to a CSV/XLS file. Value must be in '{COLUMN} {DIRECTION}' format */
  order?: Maybe<Scalars['String']['output']>;
  reportType: Scalars['String']['output'];
  /** @deprecated Prefer camelCase to snake case. Please use the reportType field instead */
  report_type: Scalars['String']['output'];
  /** Time parameter for filtering events in event select modal */
  timeFilter?: Maybe<Scalars['String']['output']>;
  /** The ending date of the scheduler */
  to?: Maybe<Scalars['Date']['output']>;
  updatedAt: Scalars['String']['output'];
  /** @deprecated Prefer camelCase to snake case. Please use the updatedAt field instead */
  updated_at: Scalars['String']['output'];
};

export type AddOnConnection = {
  nodes: Array<AddOn>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type AddOnConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TaxConnection = {
  nodes: Array<Tax>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type TaxConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ChargebackConnection = {
  nodes: Array<Chargeback>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ChargebackConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Chargeback on a host */
export type Chargeback = {
  amount?: Maybe<Scalars['Float']['output']>;
  buyer: Buyer;
  created_at?: Maybe<Scalars['Time']['output']>;
  display_currency?: Maybe<Scalars['String']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  order: Order;
  payment_user_id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stripe_charge_id?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalConnection = {
  nodes: Array<Withdrawal>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WithdrawalConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Withdrawals made by host */
export type Withdrawal = {
  amount?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type AccountBalanceConnection = {
  nodes: Array<AccountBalance>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type AccountBalanceConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Account balance of the host */
export type AccountBalance = {
  currency?: Maybe<Scalars['String']['output']>;
  total_balance?: Maybe<Scalars['Float']['output']>;
  upcoming_funds?: Maybe<Scalars['Float']['output']>;
  withdrawable_balance?: Maybe<Scalars['Float']['output']>;
};

/** Set of Events */
export type EventSet = BaseEvent & {
  /** Street-level address */
  address: Scalars['String']['output'];
  /** All Events in the EventSet */
  allEvents: Array<Maybe<Event>>;
  /** All Additional Images */
  allImages: Array<Image>;
  /** EventSet calendar fields */
  calendar: Calendar;
  /** Cover Photo */
  coverPhoto: Image;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  /** A detailed description of the event */
  description: Scalars['String']['output'];
  /**
   * Detailed description with html
   * @deprecated Deprecated in favor of description field with argument[:format] equal to 'html'
   */
  descriptionHtml: Scalars['String']['output'];
  /** Events in the EventSet */
  events: EventConnection;
  /** Hidden Date */
  hiddenDate?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Other Images */
  images: ImageConnection;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug: Scalars['String']['output'];
  /** A brief description */
  title: Scalars['String']['output'];
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  /** Event or EventSet creator */
  user: Profile;
  /** Name of the venue */
  venueName?: Maybe<Scalars['String']['output']>;
};


/** Set of Events */
export type EventSetdescriptionArgs = {
  format?: InputMaybe<ContentFormat>;
};

/** Calendar namespace for widgets */
export type Calendar = {
  /** List of dates with future / ongoing Events */
  dates: Array<Scalars['Date']['output']>;
  /** List of ongoing / future TimeSlots, sorted by startAt, unique by startDate and Event. */
  timeSlots: TimeSlotConnection;
};


/** Calendar namespace for widgets */
export type CalendartimeSlotsArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
};

/** Transfers represents the act of transferring one ticket from an user to another one */
export type Transfer = {
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  orderItem?: Maybe<OrderItem>;
  originalOrderItem?: Maybe<OrderItem>;
  state: TransferState;
  token?: Maybe<Scalars['String']['output']>;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
};

/** The state a transfer can be in */
export type TransferState =
  /** The transfer has been sent to the new owner to be accepted */
  | 'PENDING'
  /** The transfer expires once event begins */
  | 'EXPIRED'
  /** The new ticket owner has accepted this transfer */
  | 'ACCEPTED'
  /** The transfer recipient declined the transfer */
  | 'DECLINED'
  /** The transfer has been cancelled */
  | 'CANCELLED';

/** The user making the current GraphQL operation */
export type Viewer = User & {
  admin: Scalars['Boolean']['output'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The user has configured their account as a business */
  business?: Maybe<Scalars['Boolean']['output']>;
  /** The Business Seller address for businesses in the EU */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Email for businesses in the EU */
  businessEmail?: Maybe<Scalars['String']['output']>;
  /** The Business Seller Phone Number for businesses in the EU */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** The approximate city of the location of Viewer either by saved location or IP address */
  cityName?: Maybe<Scalars['String']['output']>;
  /** The user has configured email */
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  /** The approximate country of the location of Viewer either by saved location or IP address */
  countryName?: Maybe<Scalars['String']['output']>;
  /** the currencies of the viewer's organizations */
  currencies?: Maybe<Array<CurrencyCode>>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']['output']>;
  /** The base currency for the event */
  displayCurrency?: Maybe<Scalars['String']['output']>;
  /** A (potentially unconfirmed) email address belong to the Viewer */
  email?: Maybe<Scalars['String']['output']>;
  /** All Events by this Viewer */
  events: EventConnection;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user is hosting events on Universe */
  host?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The Business Seller Flag */
  isBusinessSeller?: Maybe<Scalars['Boolean']['output']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The approximate latitude of the location of Viewer either by saved location or IP address */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** The approximate longitude of the location of Viewer either by saved location or IP address */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** Viewers memberships organization information */
  memberships?: Maybe<MembershipConnection>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']['output']>;
  superAdmin: Scalars['Boolean']['output'];
  /** The predicted TimeSlot duration from startAt to endAt in seconds */
  timeSlotDuration?: Maybe<Scalars['Int']['output']>;
  /** The predicted TimeSlot startAt time */
  timeSlotStartAt: Scalars['TimeWithoutTz']['output'];
  /** The transacted currency for the event */
  transactedCurrency?: Maybe<Scalars['String']['output']>;
  /** Venue tagging is enabled */
  venueTagging?: Maybe<Scalars['Boolean']['output']>;
  /** Fan opt in is enabled for waitlist */
  waitlistFanOptIn?: Maybe<Scalars['Boolean']['output']>;
};


/** The user making the current GraphQL operation */
export type ViewereventsArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<CurrencyCode>;
  states?: InputMaybe<Array<EventState>>;
};

export type MembershipConnection = {
  nodes: Array<Membership>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type MembershipConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Memberships are the groups that the user is a part of through different accessibility / permission levels */
export type Membership = {
  /** Check if the membership applies to all listings */
  allEvents: Scalars['Boolean']['output'];
  /** Listings that the membership applies to */
  eventIds?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The owner of the group in which the user has membership */
  owner: Host;
  /** Check the membership against a specific permission type */
  permission: Scalars['Boolean']['output'];
  /** Check the membership against some or all of a list of permission types */
  permissions: Scalars['Boolean']['output'];
};


/** Memberships are the groups that the user is a part of through different accessibility / permission levels */
export type MembershippermissionArgs = {
  for: Permission;
};


/** Memberships are the groups that the user is a part of through different accessibility / permission levels */
export type MembershippermissionsArgs = {
  for: Array<Permission>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Possible permission types on a team membership (dashboard/organization) */
export type Permission =
  /** Edit event details such as description, dates, checkout questions, etc., and advanced settings such as ticket transfers and waitlist options */
  | 'EDIT'
  /** Ability to delete events */
  | 'DELETABLE'
  /** Ability to publish events */
  | 'TRANSITION'
  /** Ability to customize the "Get Tickets" button */
  | 'DESIGN'
  /** Ability to manage events */
  | 'MANAGE'
  /** Promote the event using social deals, discount codes, social integrations, etc. */
  | 'PROMOTE'
  /** Access to At-the-Door (via the BoxOffice app) to scan and sell tickets onsite */
  | 'CHECK_IN'
  /** Access sales and ticket data on the event and account dashboards, and through integrations */
  | 'MANAGE_OVERVIEW'
  /** Access to account level Reports */
  | 'REPORT'
  /** Ability to view orders, contact buyers, refund and cancel orders */
  | 'ORDERS'
  /** Ability view and contact attendees, and resend tickets */
  | 'ATTENDEES'
  /** Ability to add or upload attendees */
  | 'ADD_ATTENDEES'
  /** Ability to export Guestlists Report (ideal for checking people in at the door) */
  | 'GUESTS_REPORT'
  /** Ability to export Attendee's Report (includes data collected during checkout) */
  | 'ATTENDEES_REPORT'
  /** Access to Order Reports (includes a cost breakdown of each order) */
  | 'ORDERS_REPORT'
  /** Ability to export Check-in Report (list of all the check-ins and check-outs) */
  | 'CHECK_INS_REPORT'
  /** Ability to export Cancellations and Refunds Report */
  | 'CANCELLATIONS_REPORT'
  /** Access to Tickets Report (cost breakdown for each ticket) */
  | 'TICKETS_REPORT'
  /** Ability to export Requires Approval Report (identifies all orders that have not been approved yet) */
  | 'APPROVALS_REPORT'
  /** Ability to export Event Summary Settlement Report */
  | 'EVENT_SUMMARY_SETTLEMENT_REPORT'
  /** Ability to export TM Audit Reports */
  | 'TM_AUDIT_REPORT'
  /** Ability to export Audit Reports (shows a high-level daily summary of ticket sales) */
  | 'AUDIT_REPORT'
  /** Receive all emails regarding account activity */
  | 'RECEIVES_EMAILS'
  /** Full access to all events and ability to create events */
  | 'CREATABLE'
  /** Access to Universe Service Invoices */
  | 'SERVICE_INVOICE'
  /** Ability to manage all Add-ons */
  | 'MANAGE_ADD_ONS'
  /** Ability to export Payout Settlement Report */
  | 'PAYOUT_SETTLEMENT_REPORT'
  /** Access to Add-ons Reports (includes the cost breakdown for each add-on) */
  | 'ADD_ONS_REPORT'
  /** Access to Account Activity Reports (financial summary of all money that came into and out of your account) */
  | 'ACTIVITY_REPORT'
  /** Access to Event Reports (A summary of tickets sold by ticket type on the event level) */
  | 'EVENTS_REPORT'
  /** Access to Timeslot Reports (summary of tickets sold by ticket type on the timeslot level) */
  | 'TIMESLOTS_REPORT'
  /** Access to Chargeback Reports (all chargebacks for orders processed on Universe Payments) */
  | 'CHARGEBACKS_REPORT'
  /** Access to Rebate Reports (all rebates received) */
  | 'REBATES_REPORT'
  /** Access to Rebate Invoice Reports (all rebates received) */
  | 'REBATE_INVOICE'
  /** Access to Invoice Reports */
  | 'INVOICE_REPORT'
  /** Access to Timeslot Changes Reports */
  | 'TIMESLOT_CHANGES_REPORT'
  /** Access to printed ticket configuration */
  | 'PRINTED_TICKET_CONFIGURATION';

/** Stores the data required for WRSTBND passtype */
export type WrstbndPasstype = {
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  /** is NFC enabled for this passtype? */
  nfcEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** is NFC placeholder enabled for this passtype? */
  nfcEnabledPlaceholder?: Maybe<Scalars['Boolean']['output']>;
  rateId: Scalars['ID']['output'];
  /** is RFID enabled for this passtype? */
  rfidEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** is rfid placeholder enabled for this passtype? */
  rfidEnabledPlaceholder?: Maybe<Scalars['Boolean']['output']>;
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  wrstbndIntegrationId: Scalars['ID']['output'];
  /** the WRSTBND passtype id */
  wrstbndPasstypeId?: Maybe<Scalars['String']['output']>;
};

/** The pricing plan that a host is on. */
export type PricingPlan =
  /** The starter pricing plan. */
  | 'STARTER'
  /** The standard pricing plan. */
  | 'STANDARD'
  /** A custom pricing plan. */
  | 'PRO';

export type Country = {
  code: CountryCode;
  continent: Continent;
  currency: CurrencyCode;
  geonameId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  universeAvailable: Scalars['Boolean']['output'];
};

/** Two letter continent code */
export type Continent =
  /** Africa */
  | 'AF'
  /** Antarctica */
  | 'AN'
  /** Asia */
  | 'AS'
  /** Europe */
  | 'EU'
  /** North America */
  | 'NA'
  /** Oceania */
  | 'OC'
  /** South America */
  | 'SA';

/** Calendar namespace for the new single widgets */
export type CalendarWidget = {
  /** Whether to enable waitlist for the Event */
  allowWaitlist: Scalars['Boolean']['output'];
  /** Available months for the event grouped by year */
  availableMonths: Array<Maybe<AvailableMonths>>;
  /** Available Timeslots */
  calendarDates: Array<Maybe<CalendarWidgetDate>>;
  /** Calendar timeslots */
  calendarTimeslots: Array<Maybe<CalendarWidgetTimeslot>>;
  /** A detailed description of the event */
  description: Scalars['String']['output'];
  /** Determines if a given event has only locked rates */
  hasAllLockedRates: Scalars['Boolean']['output'];
  hostId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** Whether to enable All in pricing for US Event */
  lnAllInPricing?: Maybe<Scalars['Boolean']['output']>;
  /** Determines whether or not to show quantity filter */
  showQuantityFilter: Scalars['Boolean']['output'];
  /** Determines whether or not to show ticket type filter */
  showTicketTypeFilter: Scalars['Boolean']['output'];
  /** Determines whether or not to show time of day filter */
  showTimeOfDayFilter: Scalars['Boolean']['output'];
  /** Tickets are sold out for this Event */
  soldOut: Scalars['Boolean']['output'];
  /** Sold out dates */
  soldOutDates: Array<Maybe<Scalars['String']['output']>>;
  /** Determines if a given event is timed entry based */
  timedEntry: Scalars['Boolean']['output'];
  /** Timezone of the event location */
  timezone: Scalars['String']['output'];
  /** A brief description */
  title: Scalars['String']['output'];
  /** Currency that is displayed and charged in */
  transactionCurrency: CurrencyCode;
};


/** Calendar namespace for the new single widgets */
export type CalendarWidgetdescriptionArgs = {
  format?: InputMaybe<ContentFormat>;
};

/** Available months for an event grouped by year. */
export type AvailableMonths = {
  /** Event month */
  months: Array<Maybe<Scalars['Int']['output']>>;
  /** Event year */
  year: Scalars['Int']['output'];
};

/** CalendarWidgetTimeslot */
export type CalendarWidgetTimeslot = {
  /** Remaining capacity left for a timeslot */
  countAvailable?: Maybe<Scalars['Int']['output']>;
  /** Timeslot capacity by rate */
  countAvailableByRate?: Maybe<Scalars['String']['output']>;
  /** Timeslot end date and time in UTC */
  endAt: Scalars['String']['output'];
  /** Determines if the end date has passed or not */
  endDatePassed: Scalars['Boolean']['output'];
  /** Extended timeslot end date and time in UTC */
  extendedEndAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** max price */
  maxPrice?: Maybe<Scalars['Float']['output']>;
  /** min price */
  minPrice?: Maybe<Scalars['Float']['output']>;
  /** Tickets are sold out for this timeslot */
  soldOut: Scalars['Boolean']['output'];
  /** Timeslot start date and time in UTC */
  startAt: Scalars['String']['output'];
  /** Timeslot total count by rate */
  totalCountByRate?: Maybe<Scalars['String']['output']>;
  /** Urgency indicator message */
  urgencyMessageLeft?: Maybe<Scalars['String']['output']>;
  /** Verbose urgency indicator message  */
  urgencyMessageTimeslot?: Maybe<Scalars['String']['output']>;
};

/** CalendarWidgetDate */
export type CalendarWidgetDate = {
  /** calendar timeslots */
  calendarTimeslotIds: Array<Maybe<Scalars['ID']['output']>>;
  /** date */
  date?: Maybe<Scalars['String']['output']>;
  /** show urgency indicator */
  showUrgencyIndicator?: Maybe<Scalars['Boolean']['output']>;
  /** totalCount */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** This type provides data necessary for Upgrade Tickets modal to function on manage panel */
export type UpgradableOrder = {
  /** Buyer's answers to checkout questions on the Order level */
  answers: Array<Maybe<Answer>>;
  id: Scalars['ID']['output'];
  /** Collection of rate ids for the upgradable order items in this order */
  rateIds?: Maybe<Array<Scalars['ID']['output']>>;
  /** Whether the order has upgradable items */
  upgradable: Scalars['Boolean']['output'];
  /** Order items that can be upgraded to a different rate */
  upgradableOrderItems: Array<UpgradableOrderItem>;
};

/** An order item in the order that is upgradable to another rate */
export type UpgradableOrderItem = {
  /** Buyer's answers to checkout questions on the OrderItem level (i.e. CostItem) */
  answers: Array<Maybe<Answer>>;
  /** In UTC */
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Owner of upgradable order item */
  owner: OrderItemOwner;
  rateId: Scalars['ID']['output'];
  /** In UTC */
  updatedAt: Scalars['Time']['output'];
  /** Determines wether OrderItem is upgradable */
  upgradable: Scalars['Boolean']['output'];
  /** Rates to which an oder item can be upgraded to */
  upgradableToRates: Array<Maybe<Rate>>;
};

/** Information about a user that owns an order item(s) */
export type OrderItemOwner = {
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** Serves the Event Information Tickets tab on the Manage Panel */
export type ManageTickets = {
  /** Is the event country allowed for Paypal? */
  allowedPaypalAtCountry: Scalars['Boolean']['output'];
  /** The currency the host receives funds in */
  baseCurrency: Scalars['String']['output'];
  /** Capacity number for the event */
  capacity?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Country>;
  hostId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** Is the event paypal? */
  paypal: Scalars['Boolean']['output'];
  /** Is Paypal enabled on the organization */
  paypalEnabledAtOrganization: Scalars['Boolean']['output'];
  rates: Array<ManageTicketsRate>;
  refundOffset: RefundOffset;
  refundOffsetType: RefundOffsetType;
  /** The currency the buyer must purchase in */
  srcCurrency: Scalars['String']['output'];
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  /** Determines whether or not an event admits visitors to an event between a set time */
  timedEntry: Scalars['Boolean']['output'];
  /** Timezone of the event location */
  timezone: Scalars['String']['output'];
  /** Flag to show a warning to the fan when capacity is close to reaching capacity */
  urgencyIndicatorEnabled: Scalars['Boolean']['output'];
  /** When to show an alert that the Event is almost sold out */
  urgencyIndicatorThreshold?: Maybe<Scalars['Float']['output']>;
  /** Determines whether or not an event is virtual */
  virtual: Scalars['Boolean']['output'];
  wrstbndIntegration?: Maybe<WrstbndIntegration>;
};

export type ManageTicketsRate = {
  /** The default access key for a given locked rate */
  accessKey?: Maybe<Scalars['String']['output']>;
  /** Optional number for the ticket capacity on this rate - default is unlimited */
  capacity?: Maybe<Scalars['Int']['output']>;
  clientGroup?: Maybe<RateClientGroup>;
  /** If rate is associated with DCOM */
  dcomEnabled: Scalars['Boolean']['output'];
  /** Description for the rate */
  description?: Maybe<Scalars['String']['output']>;
  displayPrice?: Maybe<Scalars['Float']['output']>;
  /** UNIX Timestamp */
  endStamp?: Maybe<Scalars['Int']['output']>;
  /** List of rules that exclude a rate from displaying against given timeslot(s) */
  exclusionRules?: Maybe<Array<Scalars['JSON']['output']>>;
  id: Scalars['ID']['output'];
  /** Maximum number of times this ticket type may be redeemed (scanned). Single redemption if null. */
  maxRedemptions?: Maybe<Scalars['Int']['output']>;
  /** Optional number for the maximum amount of tickets to be sold on this rate */
  maxTickets?: Maybe<Scalars['Int']['output']>;
  /** The minimum price of this type of ticket, used only in PWYW/donation tickets */
  minPrice: Scalars['Float']['output'];
  /** Minimum seconds between redemptions (scans). No minimum if null. */
  minRedemptionInterval?: Maybe<Scalars['Int']['output']>;
  /** Optional number for the minimum amount of tickets to be sold on this rate */
  minTickets?: Maybe<Scalars['Int']['output']>;
  /** Name for the rate */
  name: Scalars['String']['output'];
  /** The price of this type of ticket - 0.0 if free */
  price: Scalars['Float']['output'];
  /** Optional promotion tag */
  promotionPill?: Maybe<Scalars['String']['output']>;
  /** Seconds before event to release the tickets */
  releaseOffset?: Maybe<Scalars['Int']['output']>;
  /** Sort index of the rate */
  sortIndex?: Maybe<Scalars['Int']['output']>;
  /** The currency the buyer must purchase the rate in */
  srcCurrency: Scalars['String']['output'];
  /** UNIX Timestamp */
  startStamp?: Maybe<Scalars['Int']['output']>;
  state: RateState;
  type: RateType;
  /** If rate has sold order items */
  used: Scalars['Boolean']['output'];
  /** WRSTBND passtypes for the rate */
  wrstbndPasstype?: Maybe<WrstbndPasstype>;
};

export type ManageWhenTimeslot = {
  /** Timeslot end date and time in the timezone of the event */
  endAt: Scalars['TimeWithoutTz']['output'];
  id: Scalars['ID']['output'];
  /** Whether the timeslot can be modified or not */
  readOnly: Scalars['Boolean']['output'];
  /** Timeslot start date and time in the timezone of the event */
  startAt: Scalars['TimeWithoutTz']['output'];
};

/** Serves the Event Information When (Timed Entry) tab on the Manage Panel */
export type ManageWhenTimedEntry = {
  id: Scalars['ID']['output'];
  /** The schedules assigned to this Event */
  schedules: Array<Schedule>;
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  /** Timezone of the event location */
  timezone: Scalars['String']['output'];
  /** Determines whether or not an event is virtual */
  virtual: Scalars['Boolean']['output'];
};

/** Serves the Event Information When (Regular Entry) tab on the Manage Panel */
export type ManageWhenRegularEntry = {
  address: Scalars['String']['output'];
  country?: Maybe<Country>;
  customVenueName?: Maybe<Scalars['Boolean']['output']>;
  hiddenDate: Scalars['Boolean']['output'];
  hiddenFromTicketmaster?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  /** Is the event paypal? */
  paypal: Scalars['Boolean']['output'];
  /** Is Paypal enabled on the organization */
  paypalEnabledAtOrganization: Scalars['Boolean']['output'];
  privacy: Scalars['String']['output'];
  publishLaterAt?: Maybe<Scalars['Time']['output']>;
  ticketmasterVenueId?: Maybe<Scalars['String']['output']>;
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  /** Timezone of the event location */
  tz: Scalars['String']['output'];
  venueName?: Maybe<Scalars['String']['output']>;
  venueTagging?: Maybe<Scalars['Boolean']['output']>;
  /** Determines whether or not an event is virtual */
  virtual: Scalars['Boolean']['output'];
  /** Virtual connection info */
  virtualInfo?: Maybe<Scalars['String']['output']>;
};

/** Serves the Event Information Customize tab on the Manage Panel */
export type ManageCustomize = {
  /** Optional additional images for the event (promotional photos, venue photos) */
  additionalImages: Array<Image>;
  /** Optional field that the host sets for additional contact information */
  contactDetails?: Maybe<Scalars['String']['output']>;
  /** Cover photo for the event (min 100x100px, max 2MB). Auto-generated if no initial entry. */
  coverPhoto: Image;
  /** Event photo for the event (min 1110x444px, max 5MB). Auto-generated if no initial entry. */
  eventPhoto: Image;
  id: Scalars['ID']['output'];
  /** Content that will be provided to buyer's only */
  privateNote?: Maybe<Scalars['String']['output']>;
};

/** Serves the Customize Tickets tab on the Event Manage Panel */
export type ManageCustomizeTickets = {
  /** Listing is all in pricing or not */
  allInPricing: Scalars['Boolean']['output'];
  /** Date objects for the ticket customization calendar */
  calendarDates: Array<CustomizeTicketsDate>;
  /** Capacity of the listing */
  capacity?: Maybe<Scalars['Int']['output']>;
  /** First available month */
  firstMonthWithEvents: Scalars['String']['output'];
  /** ID of the listing */
  id: Scalars['ID']['output'];
  /** Last available month */
  lastMonthWithEvents: Scalars['String']['output'];
  /** Customized values for Ticket Type - Timeslot pairs */
  rateCustomizations: Array<RateCustomization>;
  /** Total number of rate customizations for this listing */
  rateCustomizationsCount: Scalars['Int']['output'];
  /** Ticket types in original state for all timeslots */
  rates: Array<Rate>;
  /** All timeslots for the listing */
  timeslots: Array<CustomizeTicketsTimeslot>;
  /** Timezone of the event location */
  timezone: Scalars['String']['output'];
  /** Total number of unique price changes */
  uniquePriceChangesCount: Scalars['Int']['output'];
};

/** Date objects for the Customize Tickets calendar */
export type CustomizeTicketsDate = {
  /** Calendar timeslots for the tickets customization page */
  calendarTimeslotIds: Array<Maybe<Scalars['ID']['output']>>;
  /** date */
  date?: Maybe<Scalars['String']['output']>;
};

/** Timeslot objects for the Customize Tickets tab */
export type CustomizeTicketsTimeslot = {
  /** Capacity of the timeslot */
  capacity?: Maybe<Scalars['Int']['output']>;
  /** Timeslot end date and time */
  endAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCustomized?: Maybe<Scalars['Boolean']['output']>;
  isPast?: Maybe<Scalars['Boolean']['output']>;
  rateIds: Array<Maybe<Scalars['ID']['output']>>;
  /** Ticket sold count */
  soldCount?: Maybe<Scalars['Int']['output']>;
  /** Timeslot start date and time */
  startAt: Scalars['String']['output'];
};

/** Serves the channel partner information on Distribute Commerce tab on the Manage Panel */
export type ManageChannelPartnerSales = {
  /** Id of channel partner */
  channelPartnerId: Scalars['String']['output'];
  /** Name of channel partner */
  channelPartnerName: Scalars['String']['output'];
  /** Distributed Commerce is enabled for the listing */
  dcomAllowed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Total remaining tickets for the listing by channel partner */
  remainingTickets: Scalars['Int']['output'];
  /** Status of the offers for channel partner */
  status: Scalars['String']['output'];
  /** Total tickets sold for listing by channel partner */
  ticketsSold: Scalars['Int']['output'];
  /** Total sales for listing by channel partner */
  totalSales: Scalars['Float']['output'];
};

/** Serves the partner offers information on Distribute Commerce tab on the Manage Panel */
export type PartnerOffers = {
  /** ID of channel partner */
  channelPartnerId: Scalars['String']['output'];
  /** Name of channel partner */
  channelPartnerName: Scalars['String']['output'];
  /** ID of partner offer */
  id: Scalars['ID']['output'];
  /** Mask name of partner offer */
  maskName: Scalars['String']['output'];
  /** Price of partner offer */
  offerPrice: Scalars['Float']['output'];
  /** Service Fee of partner offer */
  serviceFee: Scalars['Float']['output'];
  /** Ticket type of partner offer */
  ticketType: Scalars['String']['output'];
  /** Venue fee (facility fee) of partner offer */
  venueFee: Scalars['Float']['output'];
};

/** Serves the Event Information Basics tab on the Manage Panel */
export type ManageBasics = {
  address: Scalars['String']['output'];
  attractions?: Maybe<Array<Maybe<Attraction>>>;
  categoryId: Scalars['String']['output'];
  country?: Maybe<Country>;
  customVenueName?: Maybe<Scalars['Boolean']['output']>;
  description: Scalars['String']['output'];
  hiddenFromTicketmaster?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  /** Is the event paypal? */
  paypal: Scalars['Boolean']['output'];
  /** Is Paypal enabled on the organization */
  paypalEnabledAtOrganization: Scalars['Boolean']['output'];
  privacy: Scalars['String']['output'];
  publishLaterAt?: Maybe<Scalars['Time']['output']>;
  ticketmasterVenueId?: Maybe<Scalars['String']['output']>;
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  timedEntry: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  /** Timezone of the event location */
  tz: Scalars['String']['output'];
  venueName?: Maybe<Scalars['String']['output']>;
  venueTagging?: Maybe<Scalars['Boolean']['output']>;
};

export type Attraction = {
  bio?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  discoveryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  legacyId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ticketmasterImageUrl?: Maybe<Scalars['String']['output']>;
};

/** Returns fields required for TimeSlotSelect modal to function */
export type TimeSlotSelect = {
  /** Dates on which there are time slots */
  datesWithTimeSlots?: Maybe<Array<Scalars['String']['output']>>;
};

/** Namespace for the timeslot filter query */
export type TimeslotFilter = {
  id: Scalars['ID']['output'];
  /** Timeslot filter timeslots */
  timeslots: Array<Maybe<TimeslotFilterTimeslot>>;
};

/** TimeslotFilterTimeslot */
export type TimeslotFilterTimeslot = {
  countAttending?: Maybe<Scalars['Int']['output']>;
  countAvailable?: Maybe<Scalars['Int']['output']>;
  /** Timeslot end date and time in events timezone */
  endAt: Scalars['String']['output'];
  /** In Event's time zone */
  endDate: Scalars['Date']['output'];
  /** UNIX Timestamp */
  endStamp: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Timeslot start date and time in events timezone */
  startAt: Scalars['String']['output'];
  /** In Event's time zone */
  startDate: Scalars['Date']['output'];
  /** UNIX Timestamp */
  startStamp: Scalars['Int']['output'];
  /** An IANA Time Zone string */
  tz: Scalars['String']['output'];
};

export type TicketmasterVenuesConnection = {
  nodes: Array<TicketmasterVenue>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type TicketmasterVenuesConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TicketmasterVenue = {
  address?: Maybe<Address_TicketmasterVenue>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  dma?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location_TicketmasterVenue>;
  market?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State_TicketmasterVenue>;
  url?: Maybe<Scalars['String']['output']>;
};

export type State_TicketmasterVenue = {
  name?: Maybe<Scalars['String']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
};

export type Address_TicketmasterVenue = {
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  line3?: Maybe<Scalars['String']['output']>;
};

export type Location_TicketmasterVenue = {
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type TicketmasterAttractionConnection = {
  nodes: Array<TicketmasterAttraction>;
  pagination?: Maybe<Scalars['JSON']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type TicketmasterAttractionConnectionnodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TicketmasterAttraction = {
  discoveryId: Scalars['String']['output'];
  legacyId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type StripeTerminalReaderCollection = {
  hasMore: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<Maybe<StripeTerminalReader>>>;
};

/** Stripe terminal reader that we get from stripe */
export type StripeTerminalReader = {
  action?: Maybe<StripeTerminalReaderAction>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  device_sw_version?: Maybe<Scalars['String']['output']>;
  device_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  last_seen_at?: Maybe<Scalars['Int']['output']>;
  livemode?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  object?: Maybe<Scalars['String']['output']>;
  serial_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** The most recent action performed by the reader */
export type StripeTerminalReaderAction = {
  failure_code?: Maybe<Scalars['String']['output']>;
  failure_message?: Maybe<Scalars['String']['output']>;
  process_payment_intent?: Maybe<Scalars['JSON']['output']>;
  process_setup_intent?: Maybe<Scalars['JSON']['output']>;
  refund_payment?: Maybe<Scalars['JSON']['output']>;
  set_reader_display?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Properties for Stripe pagination */
export type StripePaginationAttributesInputType = {
  endingBefore?: InputMaybe<Scalars['String']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** Stripe terminal location that we get from stripe */
export type StripeTerminalLocation = {
  address?: Maybe<StripeTerminalLocationAddress>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  livemode?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  object?: Maybe<Scalars['String']['output']>;
};

/** Stripe terminal location address that we get from stripe */
export type StripeTerminalLocationAddress = {
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  /**
   * Accept Transfer
   * @deprecated Mutations should conform to the `subjectAction` format, please use `transferAccept`
   */
  acceptTransfer?: Maybe<TransferAcceptPayload>;
  /** Create AddOn */
  addOnCreate?: Maybe<AddOnCreatePayload>;
  /** Delete AddOn */
  addOnDelete?: Maybe<AddOnDeletePayload>;
  /** Update Addon */
  addOnUpdate?: Maybe<AddOnUpdatePayload>;
  /** Message event attendees */
  attendeesMessage?: Maybe<AttendeesMessagePayload>;
  /** Update the time slot for orders */
  bulkOrderTimeSlotUpdate?: Maybe<BulkOrderTimeSlotUpdatePayload>;
  /** Toggle the status of channel partner offers */
  channelPartnerOffersStatusToggle?: Maybe<ChannelPartnerOffersStatusTogglePayload>;
  /**
   * Create AddOn
   * @deprecated Mutations should conform to the `subjectAction` format, please use `addOnCreate`
   */
  createAddOn?: Maybe<AddOnCreatePayload>;
  /**
   * Create Custom Report
   * @deprecated Mutations should conform to the `subjectAction` format, please use `customReportCreate`
   */
  createCustomReport?: Maybe<CustomReportCreatePayload>;
  /**
   * Create Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventCreate`
   */
  createEvent?: Maybe<EventCreatePayload>;
  /**
   * Create Tax
   * @deprecated Mutations should conform to the `subjectAction` format, please use `taxCreate`
   */
  createTax?: Maybe<TaxCreatePayload>;
  /** Create Custom Report */
  customReportCreate?: Maybe<CustomReportCreatePayload>;
  /** Delete Custom Report */
  customReportDelete?: Maybe<CustomReportDeletePayload>;
  /** Update Custom Report */
  customReportUpdate?: Maybe<CustomReportUpdatePayload>;
  /**
   * Decline Transfer
   * @deprecated Mutations should conform to the `subjectAction` format, please use `transferDecline`
   */
  declineTransfer?: Maybe<TransferDeclinePayload>;
  /**
   * Delete AddOn
   * @deprecated Mutations should conform to the `subjectAction` format, please use `addOnDelete`
   */
  deleteAddOn?: Maybe<AddOnDeletePayload>;
  /**
   * Delete Custom Report
   * @deprecated Mutations should conform to the `subjectAction` format, please use `customReportDelete`
   */
  deleteCustomReport?: Maybe<CustomReportDeletePayload>;
  /**
   * Delete Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventDelete`
   */
  deleteEvent?: Maybe<EventDeletePayload>;
  /** Create Discount belonging to this user */
  discountCreate?: Maybe<DiscountCreatePayload>;
  /** Delete Discount */
  discountDelete?: Maybe<DiscountDeletePayload>;
  /** Bulk create account level discount codes */
  discountsCreate?: Maybe<DiscountsCreatePayload>;
  /** Update many Discounts at once */
  discountsUpdate?: Maybe<DiscountsUpdatePayload>;
  /**
   * Duplicate Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventDuplicate`
   */
  duplicateEvent?: Maybe<EventDuplicatePayload>;
  /** Create Event */
  eventCreate?: Maybe<EventCreatePayload>;
  /** Delete Event */
  eventDelete?: Maybe<EventDeletePayload>;
  /** Duplicate Event */
  eventDuplicate?: Maybe<EventDuplicatePayload>;
  /** Publish Event */
  eventPublish?: Maybe<EventPublishPayload>;
  /** Report Event */
  eventReport?: Maybe<EventReportPayload>;
  /** Save Event */
  eventSave?: Maybe<EventSavePayload>;
  /** Report Event Set */
  eventSetReport?: Maybe<EventSetReportPayload>;
  /** Unpublish Event */
  eventUnpublish?: Maybe<EventUnpublishPayload>;
  /** Update Event */
  eventUpdate?: Maybe<EventUpdatePayload>;
  /** Delete Host Field */
  hostFieldDelete?: Maybe<HostFieldDeletePayload>;
  /** Update host google analytics integration */
  hostGaIntegrationUpdate?: Maybe<HostGaIntegrationUpdatePayload>;
  /** Change locale for current Viewer */
  localeChange?: Maybe<LocaleChangePayload>;
  /** Approves a pending order */
  orderApprove?: Maybe<OrderApprovePayload>;
  /** Change the buyer info for an order */
  orderBuyerInfoChange?: Maybe<OrderBuyerInfoChangePayload>;
  /** Declines a pending order */
  orderDecline?: Maybe<OrderDeclinePayload>;
  /** Change the attendee info for an order item */
  orderItemAttendeeInfoChange?: Maybe<OrderItemAttendeeInfoChangePayload>;
  /** Check in an order item */
  orderItemCheckIn?: Maybe<OrderItemCheckInPayload>;
  /** Check out an order item */
  orderItemCheckOut?: Maybe<OrderItemCheckOutPayload>;
  /** Update external metadata field on OrderItem */
  orderItemExternalMetadataUpdate?: Maybe<ExternalMetadataUpdatePayload>;
  /** Resend email with order item details */
  orderItemResend?: Maybe<OrderItemResendPayload>;
  /** Marks an order that was purchased using an invoice as 'Paid' */
  orderMarkInvoiceAsPaid?: Maybe<MarkInvoiceAsPaidPayload>;
  /** Refund order items */
  orderRefund?: Maybe<OrderRefundPayload>;
  /** Resend email with order details */
  orderResend?: Maybe<OrderResendPayload>;
  /** Update the time slot for an order */
  orderTimeSlotUpdate?: Maybe<OrderTimeSlotUpdatePayload>;
  /** Upgrade order items */
  orderUpgrade?: Maybe<OrderUpgradePayload>;
  /** Manage PrintedTicketConfiguration */
  printedTicketConfigurationManage?: Maybe<PrintedTicketConfigurationManagePayload>;
  /** Create PrintingLog */
  printingLogCreate?: Maybe<PrintingLogCreatePayload>;
  /**
   * Publish Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventPublish`
   */
  publishEvent?: Maybe<EventPublishPayload>;
  /** Create a ticket */
  rateCreate?: Maybe<RateCreatePayload>;
  /** Update a single rate */
  rateUpdate?: Maybe<RateUpdatePayload>;
  /** Create a rate upgrade */
  rateUpgradeCreate?: Maybe<RateUpgradeCreatePayload>;
  /** Delete a rate upgrade */
  rateUpgradeDelete?: Maybe<RateUpgradeDeletePayload>;
  /** Update a rate upgrade */
  rateUpgradeUpdate?: Maybe<RateUpgradeUpdatePayload>;
  /** Update multiple rates */
  ratesUpdate?: Maybe<RatesUpdatePayload>;
  /** Resends email confirmation email */
  resendEmailConfirmation?: Maybe<ResendEmailConfirmationPayload>;
  /**
   * Save Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventSave`
   */
  saveEvent?: Maybe<EventSavePayload>;
  /** Makes API call to Seats.io to publish a seating map */
  seatsPublishDraft?: Maybe<SeatsPublishDraftPayload>;
  /** Synchronize rates with seats chart for reserved seated events */
  seatsSyncRates?: Maybe<SeatsSyncRatesPayload>;
  /** Register a stripe terminal location */
  stripeTerminalLocationCreate?: Maybe<StripeTerminalLocationCreatePayload>;
  /** Cancel stripe terminal reader */
  stripeTerminalReaderCancel?: Maybe<StripeTerminalReaderCancelPayload>;
  /** Register a stripe terminal reader */
  stripeTerminalReaderCreate?: Maybe<StripeTerminalReaderCreatePayload>;
  /** Delete a stripe terminal reader */
  stripeTerminalReaderDelete?: Maybe<StripeTerminalReaderDeletePayload>;
  /** Update a stripe terminal reader */
  stripeTerminalReaderUpdate?: Maybe<StripeTerminalReaderUpdatePayload>;
  /** Create Tax */
  taxCreate?: Maybe<TaxCreatePayload>;
  /** Delete all the tickets from the selected third party providers */
  thirdPartyTicketDeleteByProvider?: Maybe<ThirdPartyTicketDeleteByProviderPayload>;
  /** Allows the mass importing of ThirdPartyTicket from Third Party Ticket Providers */
  thirdPartyTicketImport?: Maybe<ImportThirdPartyTicketPayload>;
  /** Add or update a timeslot ticket customization */
  timeSlotRateCustomization?: Maybe<TimeslotRateCustomizationPayload>;
  /** Updates a TimeSlot */
  timeSlotUpdate?: Maybe<TimeSlotUpdatePayload>;
  /** Accept Transfer */
  transferAccept?: Maybe<TransferAcceptPayload>;
  /** Decline Transfer */
  transferDecline?: Maybe<TransferDeclinePayload>;
  /**
   * Update Addon
   * @deprecated Mutations should conform to the `subjectAction` format, please use `addOnUpdate`
   */
  updateAddOn?: Maybe<AddOnUpdatePayload>;
  /**
   * Update Custom Report
   * @deprecated Mutations should conform to the `subjectAction` format, please use `customReportUpdate`
   */
  updateCustomReport?: Maybe<CustomReportUpdatePayload>;
  /**
   * Update a single rate
   * @deprecated Mutations should conform to the `subjectAction` format, please use `rateUpdate`
   */
  updateRate?: Maybe<RateUpdatePayload>;
  /**
   * Update multiple rates
   * @deprecated Mutations should conform to the `subjectAction` format, please use `ratesUpdate`
   */
  updateRates?: Maybe<RatesUpdatePayload>;
  /** Create a new waitlist subscription */
  waitlistSubscriberCreate?: Maybe<WaitlistSubscriberCreatePayload>;
};


export type MutationacceptTransferArgs = {
  input: TransferAcceptInput;
};


export type MutationaddOnCreateArgs = {
  input: AddOnCreateInput;
};


export type MutationaddOnDeleteArgs = {
  input: AddOnDeleteInput;
};


export type MutationaddOnUpdateArgs = {
  input: AddOnUpdateInput;
};


export type MutationattendeesMessageArgs = {
  input: AttendeesMessageInput;
};


export type MutationbulkOrderTimeSlotUpdateArgs = {
  input: BulkOrderTimeSlotUpdateInput;
};


export type MutationchannelPartnerOffersStatusToggleArgs = {
  input: ChannelPartnerOffersStatusToggleInput;
};


export type MutationcreateAddOnArgs = {
  input: AddOnCreateInput;
};


export type MutationcreateCustomReportArgs = {
  input: CustomReportCreateInput;
};


export type MutationcreateEventArgs = {
  input: EventCreateInput;
};


export type MutationcreateTaxArgs = {
  input: TaxCreateInput;
};


export type MutationcustomReportCreateArgs = {
  input: CustomReportCreateInput;
};


export type MutationcustomReportDeleteArgs = {
  input: CustomReportDeleteInput;
};


export type MutationcustomReportUpdateArgs = {
  input: CustomReportUpdateInput;
};


export type MutationdeclineTransferArgs = {
  input: TransferDeclineInput;
};


export type MutationdeleteAddOnArgs = {
  input: AddOnDeleteInput;
};


export type MutationdeleteCustomReportArgs = {
  input: CustomReportDeleteInput;
};


export type MutationdeleteEventArgs = {
  input: EventDeleteInput;
};


export type MutationdiscountCreateArgs = {
  input: DiscountCreateInput;
};


export type MutationdiscountDeleteArgs = {
  input: DiscountDeleteInput;
};


export type MutationdiscountsCreateArgs = {
  input: DiscountsCreateInput;
};


export type MutationdiscountsUpdateArgs = {
  input: DiscountsUpdateInput;
};


export type MutationduplicateEventArgs = {
  input: EventDuplicateInput;
};


export type MutationeventCreateArgs = {
  input: EventCreateInput;
};


export type MutationeventDeleteArgs = {
  input: EventDeleteInput;
};


export type MutationeventDuplicateArgs = {
  input: EventDuplicateInput;
};


export type MutationeventPublishArgs = {
  input: EventPublishInput;
};


export type MutationeventReportArgs = {
  input: EventReportInput;
};


export type MutationeventSaveArgs = {
  input: EventSaveInput;
};


export type MutationeventSetReportArgs = {
  input: EventSetReportInput;
};


export type MutationeventUnpublishArgs = {
  input: EventUnpublishInput;
};


export type MutationeventUpdateArgs = {
  input: EventUpdateInput;
};


export type MutationhostFieldDeleteArgs = {
  input: HostFieldDeleteInput;
};


export type MutationhostGaIntegrationUpdateArgs = {
  input: HostGaIntegrationUpdateInput;
};


export type MutationlocaleChangeArgs = {
  input: LocaleChangeInput;
};


export type MutationorderApproveArgs = {
  input: OrderApproveInput;
};


export type MutationorderBuyerInfoChangeArgs = {
  input: OrderBuyerInfoChangeInput;
};


export type MutationorderDeclineArgs = {
  input: OrderDeclineInput;
};


export type MutationorderItemAttendeeInfoChangeArgs = {
  input: OrderItemAttendeeInfoChangeInput;
};


export type MutationorderItemCheckInArgs = {
  input: OrderItemCheckInInput;
};


export type MutationorderItemCheckOutArgs = {
  input: OrderItemCheckOutInput;
};


export type MutationorderItemExternalMetadataUpdateArgs = {
  input: ExternalMetadataUpdateInput;
};


export type MutationorderItemResendArgs = {
  input: OrderItemResendInput;
};


export type MutationorderMarkInvoiceAsPaidArgs = {
  input: MarkInvoiceAsPaidInput;
};


export type MutationorderRefundArgs = {
  input: OrderRefundInput;
};


export type MutationorderResendArgs = {
  input: OrderResendInput;
};


export type MutationorderTimeSlotUpdateArgs = {
  input: OrderTimeSlotUpdateInput;
};


export type MutationorderUpgradeArgs = {
  input: OrderUpgradeInput;
};


export type MutationprintedTicketConfigurationManageArgs = {
  input: PrintedTicketConfigurationManageInput;
};


export type MutationprintingLogCreateArgs = {
  input: PrintingLogCreateInput;
};


export type MutationpublishEventArgs = {
  input: EventPublishInput;
};


export type MutationrateCreateArgs = {
  input: RateCreateInput;
};


export type MutationrateUpdateArgs = {
  input: RateUpdateInput;
};


export type MutationrateUpgradeCreateArgs = {
  input: RateUpgradeCreateInput;
};


export type MutationrateUpgradeDeleteArgs = {
  input: RateUpgradeDeleteInput;
};


export type MutationrateUpgradeUpdateArgs = {
  input: RateUpgradeUpdateInput;
};


export type MutationratesUpdateArgs = {
  input: RatesUpdateInput;
};


export type MutationresendEmailConfirmationArgs = {
  input: ResendEmailConfirmationInput;
};


export type MutationsaveEventArgs = {
  input: EventSaveInput;
};


export type MutationseatsPublishDraftArgs = {
  input: SeatsPublishDraftInput;
};


export type MutationseatsSyncRatesArgs = {
  input: SeatsSyncRatesInput;
};


export type MutationstripeTerminalLocationCreateArgs = {
  input: StripeTerminalLocationCreateInput;
};


export type MutationstripeTerminalReaderCancelArgs = {
  input: StripeTerminalReaderCancelInput;
};


export type MutationstripeTerminalReaderCreateArgs = {
  input: StripeTerminalReaderCreateInput;
};


export type MutationstripeTerminalReaderDeleteArgs = {
  input: StripeTerminalReaderDeleteInput;
};


export type MutationstripeTerminalReaderUpdateArgs = {
  input: StripeTerminalReaderUpdateInput;
};


export type MutationtaxCreateArgs = {
  input: TaxCreateInput;
};


export type MutationthirdPartyTicketDeleteByProviderArgs = {
  input: ThirdPartyTicketDeleteByProviderInput;
};


export type MutationthirdPartyTicketImportArgs = {
  input: ImportThirdPartyTicketInput;
};


export type MutationtimeSlotRateCustomizationArgs = {
  input: TimeslotRateCustomizationInput;
};


export type MutationtimeSlotUpdateArgs = {
  input: TimeSlotUpdateInput;
};


export type MutationtransferAcceptArgs = {
  input: TransferAcceptInput;
};


export type MutationtransferDeclineArgs = {
  input: TransferDeclineInput;
};


export type MutationupdateAddOnArgs = {
  input: AddOnUpdateInput;
};


export type MutationupdateCustomReportArgs = {
  input: CustomReportUpdateInput;
};


export type MutationupdateRateArgs = {
  input: RateUpdateInput;
};


export type MutationupdateRatesArgs = {
  input: RatesUpdateInput;
};


export type MutationwaitlistSubscriberCreateArgs = {
  input: WaitlistSubscriberCreateInput;
};

/** Autogenerated return type of DiscountCreate */
export type DiscountCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Discount>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of DiscountCreate */
export type DiscountCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  state: DiscountState;
  redemptionType: DiscountRedemptionType;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
  fixed?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['ID']['input'];
};

/** Autogenerated return type of DiscountDelete */
export type DiscountDeletePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Discount>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of DiscountDelete */
export type DiscountDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of DiscountsUpdate */
export type DiscountsUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discounts: Array<Maybe<Discount>>;
  errors: Array<Maybe<Array<Error>>>;
};

/** Error message with the corresponding key it belongs to */
export type Error = {
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Autogenerated input type of DiscountsUpdate */
export type DiscountsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discounts: Array<Discount_UpdateDiscount>;
};

export type Discount_UpdateDiscount = {
  id: Scalars['ID']['input'];
  code?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<DiscountState>;
  redemptionType?: InputMaybe<DiscountRedemptionType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
  fixed?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated return type of DiscountsCreate */
export type DiscountsCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discounts?: Maybe<Array<Discount>>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of DiscountsCreate */
export type DiscountsCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  codes: Array<Scalars['String']['input']>;
  state: DiscountState;
  redemptionType: DiscountRedemptionType;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
  fixed?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['ID']['input'];
};

/** Autogenerated return type of HostGaIntegrationUpdate */
export type HostGaIntegrationUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  host?: Maybe<Host>;
};

/** Autogenerated input type of HostGaIntegrationUpdate */
export type HostGaIntegrationUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  hostGaIntegration: Host_GaIntegration;
};

export type Host_GaIntegration = {
  hostId: Scalars['ID']['input'];
  googleAnalyticsId: Scalars['String']['input'];
  googleAnalyticsEcommerce: Scalars['Boolean']['input'];
};

/** Autogenerated return type of LocaleChange */
export type LocaleChangePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<Error>;
  viewer?: Maybe<Viewer>;
};

/** Autogenerated input type of LocaleChange */
export type LocaleChangeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
};

/** Autogenerated return type of SeatsSyncRates */
export type SeatsSyncRatesPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of SeatsSyncRates */
export type SeatsSyncRatesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of SeatsPublishDraft */
export type SeatsPublishDraftPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of SeatsPublishDraft */
export type SeatsPublishDraftInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of RateCreate */
export type RateCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  rate?: Maybe<Rate>;
};

/** Autogenerated input type of RateCreate */
export type RateCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['ID']['input'];
  rate: RateCreateInputType;
};

/** Properties for RateCreate mutation */
export type RateCreateInputType = {
  attributes: RateCreateAttributes;
};

/** Attributes that define a template for a ticket offering */
export type RateCreateAttributes = {
  /** Name of the ticket */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Description of the ticket */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price of the ticket */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Min price of the ticket (For PWYW_TICKET only) */
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Number of tickets available */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /** Where this ticket is available */
  clientGroup?: InputMaybe<RateClientGroup>;
  /** Used to specify tickets as being locked, hidden, active, etc */
  state?: InputMaybe<RateState>;
  /** When the ticket is available for sale */
  saleStart?: InputMaybe<Scalars['Time']['input']>;
  /** When the ticket is no longer available for sale */
  saleEnd?: InputMaybe<Scalars['Time']['input']>;
  /** Minimum number of tickets required per order */
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum number of tickets allowed per order */
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum number of times a ticket may be redeemed (scanned) */
  maxRedemptions?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum seconds between redemptions (scans) */
  minRedemptionInterval?: InputMaybe<Scalars['Int']['input']>;
  /** When to release purchased tickets to attendees */
  releaseOffset?: InputMaybe<ReleaseOffset>;
  /** Ticket type */
  type?: InputMaybe<RateCreateType>;
  /** Access key for locked rates */
  accessKey?: InputMaybe<AccessKeyInputType>;
  /** Rate exclusion rules */
  exclusionRules?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Optional promotion tag */
  promotionPill?: InputMaybe<Scalars['String']['input']>;
};

/** How long before the event would you like to release the ticket? */
export type ReleaseOffset =
  /** Tickets will be released to attendees immediately */
  | 'IMMEDIATELY'
  /** Tickets will be released to attendees 1 day before the event */
  | 'ONE_DAY'
  /** Tickets will be released to attendees 2 days before the event */
  | 'TWO_DAYS'
  /** Tickets will be released to attendees 3 days before the event */
  | 'THREE_DAYS'
  /** Tickets will be released to attendees 4 days before the event */
  | 'FOUR_DAYS'
  /** Tickets will be released to attendees 5 days before the event */
  | 'FIVE_DAYS'
  /** Tickets will be released to attendees 6 days before the event */
  | 'SIX_DAYS'
  /** Tickets will be released to attendees 7 days before the event */
  | 'ONE_WEEK'
  /** Tickets will be released to attendees 14 days before the event */
  | 'TWO_WEEKS'
  /** Tickets will be released to attendees 21 days before the event */
  | 'THREE_WEEKS'
  /** Tickets will be released to attendees 28 days before the event */
  | 'FOUR_WEEKS'
  /** Tickets will never be released to attendees */
  | 'NEVER';

/** Possible types to set on the createRate mutation. */
export type RateCreateType =
  /** The rate is for a paid ticket */
  | 'PAID_TICKET'
  /** The rate is for a free ticket */
  | 'FREE_TICKET'
  /** The rate is for a pay what you can ticket */
  | 'PWYW_TICKET';

/** Properties for AccessKey creation */
export type AccessKeyInputType = {
  /** Access key */
  key: Scalars['String']['input'];
};

/** Autogenerated return type of RateUpdate */
export type RateUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rate?: Maybe<Rate>;
};

/** Autogenerated input type of RateUpdate */
export type RateUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rate: RateUpdateInputType;
};

/** Properties for RateUpdate mutation */
export type RateUpdateInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  attributes: RateUpdateAttributes;
};

/** Shared updatable Rate attributes */
export type RateUpdateAttributes = {
  /** Name of the ticket */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Description of the ticket */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price of the ticket */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Min price of the ticket (For PWYW_TICKET only) */
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Number of tickets available */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /** Where this ticket is available */
  clientGroup?: InputMaybe<RateClientGroup>;
  /** When the ticket is available for sale */
  saleStart?: InputMaybe<Scalars['Time']['input']>;
  /** When the ticket is no longer available for sale */
  saleEnd?: InputMaybe<Scalars['Time']['input']>;
  /** Minimum number of tickets required per order */
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum number of tickets allowed per order */
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum number of times this ticket type may be redeemed (scanned). Single redemption if null. */
  maxRedemptions?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum seconds between redemptions (scans) */
  minRedemptionInterval?: InputMaybe<Scalars['Int']['input']>;
  /** When to release purchased tickets to attendees */
  releaseOffset?: InputMaybe<ReleaseOffset>;
  /** Ticket type */
  type?: InputMaybe<RateCreateType>;
  /** Access key for locked rates */
  accessKey?: InputMaybe<AccessKeyInputType>;
  /** Used to specify tickets as being locked, hidden, active, etc */
  state?: InputMaybe<RateState>;
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Rate exclusion rules */
  exclusionRules?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Optional promotion tag */
  promotionPill?: InputMaybe<Scalars['String']['input']>;
  /** DCOM is enabled for the ticket */
  dcomEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Sort index of the rate */
  sortIndex?: InputMaybe<Scalars['Int']['input']>;
  /** Wrstbnd Passtype integration with rate */
  wrstbndPasstype?: InputMaybe<WrstbndPasstypeInputType>;
};

/** Input type for WRSTBND Passtype data */
export type WrstbndPasstypeInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  rateId?: InputMaybe<Scalars['ID']['input']>;
  wrstbndIntegrationId?: InputMaybe<Scalars['ID']['input']>;
  rfidEnabled: Scalars['Boolean']['input'];
  nfcEnabled: Scalars['Boolean']['input'];
};

/** Autogenerated return type of RatesUpdate */
export type RatesUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rates?: Maybe<Array<Rate>>;
};

/** Autogenerated input type of RatesUpdate */
export type RatesUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rates: Array<InputMaybe<RateUpdateInputType>>;
};

/** Autogenerated return type of RateUpgradeCreate */
export type RateUpgradeCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  rate_upgrade?: Maybe<RateUpgrade>;
};

/** Autogenerated input type of RateUpgradeCreate */
export type RateUpgradeCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  targetRateId: Scalars['ID']['input'];
  sourceRateIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  heading: Scalars['String']['input'];
  subtitle: Scalars['String']['input'];
  description: Scalars['String']['input'];
  benefits?: InputMaybe<Array<Scalars['String']['input']>>;
  buttonText: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
};

/** Autogenerated return type of RateUpgradeUpdate */
export type RateUpgradeUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  rate_upgrade?: Maybe<RateUpgrade>;
};

/** Autogenerated input type of RateUpgradeUpdate */
export type RateUpgradeUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rateUpgradeUpdate: RateUpgradeUpdates;
};

export type RateUpgradeUpdates = {
  id: Scalars['ID']['input'];
  attributes?: InputMaybe<RateUpgradeUpdateAttributes>;
};

export type RateUpgradeUpdateAttributes = {
  targetRateId?: InputMaybe<Scalars['ID']['input']>;
  sourceRateIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of RateUpgradeDelete */
export type RateUpgradeDeletePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  rate_upgrade?: Maybe<RateUpgrade>;
};

/** Autogenerated input type of RateUpgradeDelete */
export type RateUpgradeDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of EventSave */
export type EventSavePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventSave */
export type EventSaveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['ID']['input'];
};

/** Autogenerated return type of EventUpdate */
export type EventUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventUpdate */
export type EventUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  attributes: Event_EventUpdate;
};

export type Event_EventUpdate = {
  title?: InputMaybe<Scalars['String']['input']>;
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  tz?: InputMaybe<Scalars['String']['input']>;
  transactionCurrency?: InputMaybe<Scalars['String']['input']>;
  settlementCurrency?: InputMaybe<Scalars['String']['input']>;
  contactDetails?: InputMaybe<Scalars['String']['input']>;
  allInPricing?: InputMaybe<Scalars['Boolean']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  venueName?: InputMaybe<Scalars['String']['input']>;
  customVenueName?: InputMaybe<Scalars['Boolean']['input']>;
  ticketmasterVenueId?: InputMaybe<Scalars['String']['input']>;
  socialButtons?: InputMaybe<Scalars['Boolean']['input']>;
  hiddenDate?: InputMaybe<Scalars['Boolean']['input']>;
  hiddenFromTicketmaster?: InputMaybe<Scalars['Boolean']['input']>;
  hideAttractionsFromTicketmaster?: InputMaybe<Scalars['Boolean']['input']>;
  updateTMVenueInfo?: InputMaybe<Scalars['Boolean']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  urgencyIndicatorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  urgencyIndicatorThreshold?: InputMaybe<Scalars['Float']['input']>;
  privateNote?: InputMaybe<Scalars['String']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
  showQuantityFilter?: InputMaybe<Scalars['Boolean']['input']>;
  showTicketTypeFilter?: InputMaybe<Scalars['Boolean']['input']>;
  showTimeOfDayFilter?: InputMaybe<Scalars['Boolean']['input']>;
  virtualInfo?: InputMaybe<Scalars['String']['input']>;
  refundPolicy?: InputMaybe<RefundPolicyInputType>;
  publishLaterAt?: InputMaybe<Scalars['Time']['input']>;
  coverPhoto?: InputMaybe<ImageInputType>;
  eventPhoto?: InputMaybe<ImageInputType>;
  additionalPhotos?: InputMaybe<Array<ImageUpdateInputType>>;
  getTicketsText?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Category_EventUpdate>;
  rates?: InputMaybe<Array<RateUpdateInputType>>;
  timeSlots?: InputMaybe<Array<TimeSlot_EventUpdate>>;
  schedules?: InputMaybe<Array<Schedule_EventUpdate>>;
  googleAnalytics4Id?: InputMaybe<Scalars['String']['input']>;
  googleAnalyticsEcommerce?: InputMaybe<Scalars['Boolean']['input']>;
  googleAnalyticsId?: InputMaybe<Scalars['String']['input']>;
  mailchimpApiKey?: InputMaybe<Scalars['String']['input']>;
  mailchimpListId?: InputMaybe<Scalars['String']['input']>;
  facebookPixels?: InputMaybe<Array<FacebookPixelInputType>>;
  googleAdsTrackers?: InputMaybe<Array<GoogleAdsTrackerInputType>>;
  wrstbndIntegration?: InputMaybe<WrstbndIntegrationInputType>;
  hostFields?: InputMaybe<Array<HostFieldInputType>>;
  attractions?: InputMaybe<Array<AttractionType>>;
};

/** Properties for a Refund policy on event creation */
export type RefundPolicyInputType = {
  attributes: RefundPolicyAttributes;
};

/** Attributes that define a template for a refund policy */
export type RefundPolicyAttributes = {
  /** Time offset */
  offset?: InputMaybe<RefundOffset>;
  /** Time scope */
  type?: InputMaybe<RefundOffsetType>;
};

/** Image for listings, avatars, and add on options */
export type ImageInputType = {
  uploadId: Scalars['String']['input'];
  isGif?: InputMaybe<Scalars['Boolean']['input']>;
  cropWidth?: InputMaybe<Scalars['Int']['input']>;
  cropHeight?: InputMaybe<Scalars['Int']['input']>;
  cropX?: InputMaybe<Scalars['Int']['input']>;
  cropY?: InputMaybe<Scalars['Int']['input']>;
};

/** Image for listings, avatars, and add on options */
export type ImageUpdateInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uploadId?: InputMaybe<Scalars['String']['input']>;
  isGif?: InputMaybe<Scalars['Boolean']['input']>;
  cropWidth?: InputMaybe<Scalars['Int']['input']>;
  cropHeight?: InputMaybe<Scalars['Int']['input']>;
  cropX?: InputMaybe<Scalars['Int']['input']>;
  cropY?: InputMaybe<Scalars['Int']['input']>;
};

export type Category_EventUpdate = {
  id: Scalars['ID']['input'];
};

export type TimeSlot_EventUpdate = {
  id?: InputMaybe<Scalars['ID']['input']>;
  startAt?: InputMaybe<Scalars['TimeWithoutTz']['input']>;
  endAt?: InputMaybe<Scalars['TimeWithoutTz']['input']>;
};

/** Used to bulk update recurring timeslots based on certain rules and intervals */
export type Schedule_EventUpdate = {
  id?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** Days of the week timeslots will be available */
  weekdaysAvailable?: InputMaybe<Array<Days>>;
  intervals?: InputMaybe<Array<Schedule_Intervals_EventUpdate>>;
};

/** Each recurring timeslots start time and duration */
export type Schedule_Intervals_EventUpdate = {
  id?: InputMaybe<Scalars['ID']['input']>;
  startHour?: InputMaybe<Scalars['Int']['input']>;
  startMinute?: InputMaybe<Scalars['Int']['input']>;
  /** The length of the interval in seconds */
  duration?: InputMaybe<Scalars['Int']['input']>;
  datesToSkip?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Input type for a facebook pixel. */
export type FacebookPixelInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  pixel?: InputMaybe<Scalars['String']['input']>;
  /** destroys this entry */
  destroy?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type for an google ads trackers. */
export type GoogleAdsTrackerInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  type: GoogleAdsTrackerTypes;
  sendTo?: InputMaybe<Scalars['String']['input']>;
  /** destroys this entry */
  destroy?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type for WRSTBND integration data */
export type WrstbndIntegrationInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  wrstbndEventId?: InputMaybe<Scalars['String']['input']>;
  apiKey?: InputMaybe<Scalars['String']['input']>;
  rfidEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  nfcEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  nfcEnabledAllRates?: InputMaybe<Scalars['Boolean']['input']>;
  rfidEnabledAllRates?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type for a host field. */
export type HostFieldInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  multiple?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  sortIndex?: InputMaybe<Scalars['Int']['input']>;
  hasOther?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  rateIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  selectOptions?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Input type for Attraction */
export type AttractionType = {
  discoveryId: Scalars['ID']['input'];
  delete?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of EventCreate */
export type EventCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventCreate */
export type EventCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  event: Event_EventCreate;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Event_EventCreate = {
  category: Category_EventCreate;
  rates: Array<RateCreateInputType>;
  timeSlots?: InputMaybe<Array<TimeSlot_EventCreate>>;
  schedules?: InputMaybe<Array<Schedule_EventCreate>>;
  title: Scalars['String']['input'];
  descriptionHtml: Scalars['String']['input'];
  address: Scalars['String']['input'];
  longitude: Scalars['Float']['input'];
  latitude: Scalars['Float']['input'];
  transactionCurrency?: InputMaybe<Scalars['String']['input']>;
  settlementCurrency?: InputMaybe<Scalars['String']['input']>;
  contactDetails?: InputMaybe<Scalars['String']['input']>;
  allInPricing?: InputMaybe<Scalars['Boolean']['input']>;
  coverPhoto?: InputMaybe<ImageInputType>;
  eventPhoto?: InputMaybe<ImageInputType>;
  additionalPhotos?: InputMaybe<Array<ImageInputType>>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  venueName?: InputMaybe<Scalars['String']['input']>;
  ticketmasterVenueId?: InputMaybe<Scalars['String']['input']>;
  hiddenFromTicketmaster?: InputMaybe<Scalars['Boolean']['input']>;
  hideAttractionsFromTicketmaster?: InputMaybe<Scalars['Boolean']['input']>;
  customVenueName?: InputMaybe<Scalars['Boolean']['input']>;
  socialButtons?: InputMaybe<Scalars['Boolean']['input']>;
  hiddenDate?: InputMaybe<Scalars['Boolean']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  urgencyIndicatorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  urgencyIndicatorThreshold?: InputMaybe<Scalars['Float']['input']>;
  privateNote?: InputMaybe<Scalars['String']['input']>;
  refundPolicy?: InputMaybe<RefundPolicyInputType>;
  publishLaterAt?: InputMaybe<Scalars['Time']['input']>;
  sendPurchaseNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
  virtualInfo?: InputMaybe<Scalars['String']['input']>;
  availableCountries?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  isBusinessSeller?: InputMaybe<Scalars['Boolean']['input']>;
  businessEmail?: InputMaybe<Scalars['String']['input']>;
  businessPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  businessAddress?: InputMaybe<Scalars['String']['input']>;
  attractions?: InputMaybe<Array<AttractionType>>;
};

export type Category_EventCreate = {
  id: Scalars['ID']['input'];
};

export type TimeSlot_EventCreate = {
  startAt: Scalars['TimeWithoutTz']['input'];
  endAt: Scalars['TimeWithoutTz']['input'];
};

/** Used to bulk create recurring timeslots based on certain rules and intervals */
export type Schedule_EventCreate = {
  startDate: Scalars['Date']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** Days of the week timeslots will be available */
  weekdaysAvailable?: InputMaybe<Array<Days>>;
  intervals: Array<Schedule_Intervals_EventCreate>;
};

/** Each recurring timeslots start time and duration */
export type Schedule_Intervals_EventCreate = {
  startHour: Scalars['Int']['input'];
  startMinute: Scalars['Int']['input'];
  /** The length of the interval in seconds */
  duration: Scalars['Int']['input'];
  datesToSkip?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Autogenerated return type of EventDuplicate */
export type EventDuplicatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventDuplicate */
export type EventDuplicateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  startAt: Scalars['TimeWithoutTz']['input'];
  endAt: Scalars['TimeWithoutTz']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  accessKeys?: InputMaybe<Scalars['Boolean']['input']>;
  discountCodes?: InputMaybe<Scalars['Boolean']['input']>;
  attractions?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of EventPublish */
export type EventPublishPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventPublish */
export type EventPublishInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of EventUnpublish */
export type EventUnpublishPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventUnpublish */
export type EventUnpublishInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of EventDelete */
export type EventDeletePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventDelete */
export type EventDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of EventReport */
export type EventReportPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of EventReport */
export type EventReportInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of AttendeesMessage */
export type AttendeesMessagePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  event?: Maybe<Event>;
};

/** Autogenerated input type of AttendeesMessage */
export type AttendeesMessageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  messageType: MessageType;
  message: Scalars['String']['input'];
  timeSlotIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  rateIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  datetime?: InputMaybe<Scalars['Time']['input']>;
};

/** Types of filters by which to send messages */
export type MessageType =
  | 'AFTER_DATE'
  | 'BY_RATE'
  | 'CHECKED_IN'
  | 'UNAPPROVED'
  | 'DECLINED'
  | 'ALL';

/** Autogenerated return type of HostFieldDelete */
export type HostFieldDeletePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  hostField?: Maybe<HostField>;
};

/** Autogenerated input type of HostFieldDelete */
export type HostFieldDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  listingId: Scalars['ID']['input'];
};

/** Autogenerated return type of TimeSlotUpdate */
export type TimeSlotUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  timeSlot?: Maybe<TimeSlot>;
};

/** Autogenerated input type of TimeSlotUpdate */
export type TimeSlotUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  startTime?: InputMaybe<Scalars['Time']['input']>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  sendEmail: Scalars['Boolean']['input'];
};

/** Autogenerated return type of TimeslotRateCustomization */
export type TimeslotRateCustomizationPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rateCustomizationsCount?: Maybe<Scalars['Int']['output']>;
  rates?: Maybe<Array<Maybe<Rate>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
  uniquePriceChangesCount?: Maybe<Scalars['Int']['output']>;
};

/** Autogenerated input type of TimeslotRateCustomization */
export type TimeslotRateCustomizationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['ID']['input'];
  timeslotId: Scalars['ID']['input'];
  capacity?: InputMaybe<Scalars['Int']['input']>;
  rateCustomizations: Array<RateCustomization_TimeslotRateCustomization>;
};

export type RateCustomization_TimeslotRateCustomization = {
  /** Event to be customized */
  timeslotId: Scalars['ID']['input'];
  /** Ticket type to be customized */
  rateId: Scalars['ID']['input'];
  /** Customized capacity for ticket type timeslot pair */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /** Ticket type is enabled for timeslot when true and disabled when false */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Price to be customized */
  price?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated return type of EventSetReport */
export type EventSetReportPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eventSet?: Maybe<EventSet>;
};

/** Autogenerated input type of EventSetReport */
export type EventSetReportInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of CustomReportCreate */
export type CustomReportCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  custom_report?: Maybe<CustomReport>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of CustomReportCreate */
export type CustomReportCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  reportType: Scalars['String']['input'];
  columns: Array<Scalars['String']['input']>;
  filters?: InputMaybe<Array<Scalars['JSON']['input']>>;
  events?: InputMaybe<Array<Scalars['String']['input']>>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  days?: InputMaybe<Array<Days>>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  enabled: Scalars['Boolean']['input'];
  order?: InputMaybe<Scalars['String']['input']>;
  timeFilter?: InputMaybe<Scalars['String']['input']>;
  eventRangeFrom?: InputMaybe<Scalars['Date']['input']>;
  eventRangeTo?: InputMaybe<Scalars['Date']['input']>;
  currencyFilter?: InputMaybe<Scalars['String']['input']>;
  additionalRecipientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  externalRecipientEmails?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Autogenerated return type of CustomReportDelete */
export type CustomReportDeletePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  custom_report?: Maybe<CustomReport>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of CustomReportDelete */
export type CustomReportDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of CustomReportUpdate */
export type CustomReportUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  custom_report?: Maybe<CustomReport>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of CustomReportUpdate */
export type CustomReportUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<Scalars['String']['input']>>;
  filters?: InputMaybe<Array<Scalars['JSON']['input']>>;
  events?: InputMaybe<Array<Scalars['String']['input']>>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  days?: InputMaybe<Array<Days>>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  enabled: Scalars['Boolean']['input'];
  order?: InputMaybe<Scalars['String']['input']>;
  timeFilter?: InputMaybe<Scalars['String']['input']>;
  eventRangeFrom?: InputMaybe<Scalars['Date']['input']>;
  eventRangeTo?: InputMaybe<Scalars['Date']['input']>;
  currencyFilter?: InputMaybe<Scalars['String']['input']>;
  additionalRecipientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  externalRecipientEmails?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Autogenerated return type of TransferDecline */
export type TransferDeclinePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  transfer?: Maybe<Transfer>;
};

/** Autogenerated input type of TransferDecline */
export type TransferDeclineInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

/** Autogenerated return type of TransferAccept */
export type TransferAcceptPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  transfer?: Maybe<Transfer>;
};

/** Autogenerated input type of TransferAccept */
export type TransferAcceptInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  answers?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

/** Autogenerated return type of AddOnCreate */
export type AddOnCreatePayload = {
  addOn?: Maybe<AddOn>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
};

/** Autogenerated input type of AddOnCreate */
export type AddOnCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  addOn: AddOnInputType;
};

export type AddOnInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  hostId?: InputMaybe<Scalars['ID']['input']>;
  taxIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  attributes?: InputMaybe<AddOnAttributes>;
};

export type AddOnAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  hostPaysCommission?: InputMaybe<Scalars['Boolean']['input']>;
  rates?: InputMaybe<Array<InputMaybe<AddOnRateInputType>>>;
  images?: InputMaybe<Array<InputMaybe<ImageInputType>>>;
};

/** Properties for AddOnRate mutation */
export type AddOnRateInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  attributes?: InputMaybe<AddOnRateAttributes>;
};

/** Shared updatable AddOnRate attributes */
export type AddOnRateAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<RateState>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  optionName?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  maxRedemptions?: InputMaybe<Scalars['Int']['input']>;
  minRedemptionInterval?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of AddOnDelete */
export type AddOnDeletePayload = {
  addOn?: Maybe<AddOn>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of AddOnDelete */
export type AddOnDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  hostId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of AddOnUpdate */
export type AddOnUpdatePayload = {
  addOn?: Maybe<AddOn>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
};

/** Autogenerated input type of AddOnUpdate */
export type AddOnUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  addOn: AddOnInputType;
};

/** Autogenerated return type of TaxCreate */
export type TaxCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  tax?: Maybe<Tax>;
};

/** Autogenerated input type of TaxCreate */
export type TaxCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  tax: TaxInputType;
};

/** Properties for Tax mutation */
export type TaxInputType = {
  id?: InputMaybe<Scalars['ID']['input']>;
  attributes?: InputMaybe<TaxAttributesType>;
};

/** Attributes for Tax mutation */
export type TaxAttributesType = {
  name?: InputMaybe<Scalars['String']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of OrderItemCheckIn */
export type OrderItemCheckInPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  orderItem?: Maybe<OrderItem>;
};

/** Autogenerated input type of OrderItemCheckIn */
export type OrderItemCheckInInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrderItemCheckOut */
export type OrderItemCheckOutPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  orderItem?: Maybe<OrderItem>;
};

/** Autogenerated input type of OrderItemCheckOut */
export type OrderItemCheckOutInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of ExternalMetadataUpdate */
export type ExternalMetadataUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  orderItem?: Maybe<OrderItem>;
};

/** Autogenerated input type of ExternalMetadataUpdate */
export type ExternalMetadataUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  externalMetadata: Scalars['String']['input'];
};

/** Autogenerated return type of OrderItemResend */
export type OrderItemResendPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  orderItem: OrderItem;
};

/** Autogenerated input type of OrderItemResend */
export type OrderItemResendInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrderItemAttendeeInfoChange */
export type OrderItemAttendeeInfoChangePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  orderItem?: Maybe<OrderItem>;
};

/** Autogenerated input type of OrderItemAttendeeInfoChange */
export type OrderItemAttendeeInfoChangeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  answers: Array<AnswerInputType>;
  newAnswers: Array<NewAnswerInputType>;
};

/** Input type for an answer. */
export type AnswerInputType = {
  id: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Any']['input']>;
};

/** Input type for a new answer. */
export type NewAnswerInputType = {
  questionId: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Any']['input']>;
};

/** Autogenerated return type of OrderResend */
export type OrderResendPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order: Order;
};

/** Autogenerated input type of OrderResend */
export type OrderResendInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  receiptOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of OrderBuyerInfoChange */
export type OrderBuyerInfoChangePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order?: Maybe<Order>;
};

/** Autogenerated input type of OrderBuyerInfoChange */
export type OrderBuyerInfoChangeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  answers: Array<AnswerInputType>;
  newAnswers: Array<NewAnswerInputType>;
};

/** Autogenerated return type of MarkInvoiceAsPaid */
export type MarkInvoiceAsPaidPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order: Order;
};

/** Autogenerated input type of MarkInvoiceAsPaid */
export type MarkInvoiceAsPaidInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrderRefund */
export type OrderRefundPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order?: Maybe<Order>;
};

/** Autogenerated input type of OrderRefund */
export type OrderRefundInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  orderItemRefundDatas: Array<OrderItemRefundData>;
  totalReturning: Scalars['Int']['input'];
  transactionRefund: Scalars['Boolean']['input'];
  cancelNoRefund: Scalars['Boolean']['input'];
};

/** Autogenerated return type of OrderTimeSlotUpdate */
export type OrderTimeSlotUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order?: Maybe<Order>;
};

/** Autogenerated input type of OrderTimeSlotUpdate */
export type OrderTimeSlotUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  timeSlotId: Scalars['ID']['input'];
};

/** Autogenerated return type of BulkOrderTimeSlotUpdate */
export type BulkOrderTimeSlotUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  orders?: Maybe<Array<Order>>;
};

/** Autogenerated input type of BulkOrderTimeSlotUpdate */
export type BulkOrderTimeSlotUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderIds: Array<Scalars['ID']['input']>;
  timeSlotId: Scalars['ID']['input'];
};

/** Autogenerated return type of OrderUpgrade */
export type OrderUpgradePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order?: Maybe<Order>;
};

/** Autogenerated input type of OrderUpgrade */
export type OrderUpgradeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  answers: Array<QuestionInputType>;
  upgrades: Array<UpgradeInputType>;
};

/** Input type for an question. */
export type QuestionInputType = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['Any']['input']>;
};

/** Properties for OrderUpgrade mutation */
export type UpgradeInputType = {
  orderItemId: Scalars['ID']['input'];
  newRateId: Scalars['ID']['input'];
  answers: Array<QuestionInputType>;
};

/** Autogenerated return type of OrderApprove */
export type OrderApprovePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order?: Maybe<Order>;
};

/** Autogenerated input type of OrderApprove */
export type OrderApproveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrderDecline */
export type OrderDeclinePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  order?: Maybe<Order>;
};

/** Autogenerated input type of OrderDecline */
export type OrderDeclineInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of ResendEmailConfirmation */
export type ResendEmailConfirmationPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated input type of ResendEmailConfirmation */
export type ResendEmailConfirmationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ChannelPartnerOffersStatusToggle */
export type ChannelPartnerOffersStatusTogglePayload = {
  channelPartnerId?: Maybe<Scalars['String']['output']>;
  channelPartnerName?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Autogenerated input type of ChannelPartnerOffersStatusToggle */
export type ChannelPartnerOffersStatusToggleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  channelPartnerId: Scalars['String']['input'];
  listingId: Scalars['String']['input'];
};

/** Autogenerated return type of ImportThirdPartyTicket */
export type ImportThirdPartyTicketPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  importedCount?: Maybe<Scalars['Int']['output']>;
};

/** Autogenerated input type of ImportThirdPartyTicket */
export type ImportThirdPartyTicketInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  importSource: Scalars['String']['input'];
  listingId: Scalars['ID']['input'];
  data: Array<ThirdPartyTicketInputType>;
};

/** Input type for Third Party Tickets */
export type ThirdPartyTicketInputType = {
  eventId: Scalars['ID']['input'];
  rateId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ThirdPartyTicketDeleteByProvider */
export type ThirdPartyTicketDeleteByProviderPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  numDeleted: Scalars['Int']['output'];
};

/** Autogenerated input type of ThirdPartyTicketDeleteByProvider */
export type ThirdPartyTicketDeleteByProviderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  importSources: Array<Scalars['String']['input']>;
};

/** Autogenerated return type of WaitlistSubscriberCreate */
export type WaitlistSubscriberCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  waitlist_subscriber?: Maybe<WaitlistSubscriber>;
};

/** Autogenerated input type of WaitlistSubscriberCreate */
export type WaitlistSubscriberCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  ticketmasterOptIn: Scalars['Boolean']['input'];
  hostOptIn: Scalars['Boolean']['input'];
  listingId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of StripeTerminalReaderCreate */
export type StripeTerminalReaderCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  terminalReaderId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of StripeTerminalReaderCreate */
export type StripeTerminalReaderCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['ID']['input'];
  registrationCode: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  locationId: Scalars['String']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of StripeTerminalReaderUpdate */
export type StripeTerminalReaderUpdatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  stripeTerminalReader?: Maybe<StripeTerminalReader>;
};

/** Autogenerated input type of StripeTerminalReaderUpdate */
export type StripeTerminalReaderUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  stripeTerminalReaderId: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of StripeTerminalReaderDelete */
export type StripeTerminalReaderDeletePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of StripeTerminalReaderDelete */
export type StripeTerminalReaderDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  stripeTerminalReaderId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of StripeTerminalLocationCreate */
export type StripeTerminalLocationCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  terminalLocationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of StripeTerminalLocationCreate */
export type StripeTerminalLocationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  attributes: StripeTerminalLocationInputType;
};

/** Properties for Stripe Terminal Location creation */
export type StripeTerminalLocationInputType = {
  displayName: Scalars['String']['input'];
  address: StripeTerminalLocationAddressInputType;
};

/** Properties for Stripe Terminal Location creation */
export type StripeTerminalLocationAddressInputType = {
  city?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
};

/** Autogenerated return type of StripeTerminalReaderCancel */
export type StripeTerminalReaderCancelPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Autogenerated input type of StripeTerminalReaderCancel */
export type StripeTerminalReaderCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ticketId: Scalars['ID']['input'];
};

/** Autogenerated return type of PrintedTicketConfigurationManage */
export type PrintedTicketConfigurationManagePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  printedTicketConfiguration?: Maybe<PrintedTicketConfiguration>;
};

/** Autogenerated input type of PrintedTicketConfigurationManage */
export type PrintedTicketConfigurationManageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['ID']['input'];
  attributes: PrintedTicketConfigurationInputType;
};

/** Properties for Printed Ticket Configuration */
export type PrintedTicketConfigurationInputType = {
  supportingText?: InputMaybe<Scalars['String']['input']>;
  ticketEventOrganizer?: InputMaybe<Scalars['String']['input']>;
  ticketEventName: Scalars['String']['input'];
  additionalText1?: InputMaybe<Scalars['String']['input']>;
  additionalText2?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of PrintingLogCreate */
export type PrintingLogCreatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  printingLog?: Maybe<PrintingLog>;
};

/** PrintingLog object */
export type PrintingLog = {
  id?: Maybe<Scalars['ID']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  page?: Maybe<PrintingLogPage>;
  source?: Maybe<PrintingLogSource>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** The page printing button was clicked */
export type PrintingLogPage =
  /** Order & attendees page */
  | 'ORDERS_AND_ATTENDEES'
  /** Add an order page */
  | 'ADD_AN_ORDER';

/** The source printing button was clicked */
export type PrintingLogSource =
  /** universe.com */
  | 'WEB';

/** Autogenerated input type of PrintingLogCreate */
export type PrintingLogCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  page: PrintingLogPage;
  source: PrintingLogSource;
};

  export type QuerySdk = {
      /** null **/
  addOn: InContextSdkMethod<Query['addOn'], QueryaddOnArgs, MeshContext>,
  /** null **/
  calendarWidget: InContextSdkMethod<Query['calendarWidget'], QuerycalendarWidgetArgs, MeshContext>,
  /** null **/
  calendarWidgets: InContextSdkMethod<Query['calendarWidgets'], QuerycalendarWidgetsArgs, MeshContext>,
  /** null **/
  categories: InContextSdkMethod<Query['categories'], QuerycategoriesArgs, MeshContext>,
  /** null **/
  commissionCodes: InContextSdkMethod<Query['commissionCodes'], QuerycommissionCodesArgs, MeshContext>,
  /** null **/
  discount: InContextSdkMethod<Query['discount'], QuerydiscountArgs, MeshContext>,
  /** Discounts created for a given event and discount codes that match a searchQuery **/
  discountCodes: InContextSdkMethod<Query['discountCodes'], QuerydiscountCodesArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Query['event'], QueryeventArgs, MeshContext>,
  /** null **/
  eventSet: InContextSdkMethod<Query['eventSet'], QueryeventSetArgs, MeshContext>,
  /** null **/
  getStripeTerminalLocation: InContextSdkMethod<Query['getStripeTerminalLocation'], QuerygetStripeTerminalLocationArgs, MeshContext>,
  /** null **/
  getStripeTerminalReader: InContextSdkMethod<Query['getStripeTerminalReader'], QuerygetStripeTerminalReaderArgs, MeshContext>,
  /** null **/
  getStripeTerminalReaders: InContextSdkMethod<Query['getStripeTerminalReaders'], QuerygetStripeTerminalReadersArgs, MeshContext>,
  /** null **/
  host: InContextSdkMethod<Query['host'], QueryhostArgs, MeshContext>,
  /** null **/
  listingAttractions: InContextSdkMethod<Query['listingAttractions'], QuerylistingAttractionsArgs, MeshContext>,
  /** null **/
  manageBasics: InContextSdkMethod<Query['manageBasics'], QuerymanageBasicsArgs, MeshContext>,
  /** null **/
  manageChannelPartnerSales: InContextSdkMethod<Query['manageChannelPartnerSales'], QuerymanageChannelPartnerSalesArgs, MeshContext>,
  /** null **/
  manageCustomize: InContextSdkMethod<Query['manageCustomize'], QuerymanageCustomizeArgs, MeshContext>,
  /** null **/
  manageCustomizeTickets: InContextSdkMethod<Query['manageCustomizeTickets'], QuerymanageCustomizeTicketsArgs, MeshContext>,
  /** null **/
  manageTickets: InContextSdkMethod<Query['manageTickets'], QuerymanageTicketsArgs, MeshContext>,
  /** null **/
  manageWhenRegularEntry: InContextSdkMethod<Query['manageWhenRegularEntry'], QuerymanageWhenRegularEntryArgs, MeshContext>,
  /** null **/
  manageWhenTimedEntry: InContextSdkMethod<Query['manageWhenTimedEntry'], QuerymanageWhenTimedEntryArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<Query['order'], QueryorderArgs, MeshContext>,
  /** null **/
  orderItem: InContextSdkMethod<Query['orderItem'], QueryorderItemArgs, MeshContext>,
  /** null **/
  orderItems: InContextSdkMethod<Query['orderItems'], QueryorderItemsArgs, MeshContext>,
  /** null **/
  partnerOffers: InContextSdkMethod<Query['partnerOffers'], QuerypartnerOffersArgs, MeshContext>,
  /** null **/
  profile: InContextSdkMethod<Query['profile'], QueryprofileArgs, MeshContext>,
  /** null **/
  rateUpgrade: InContextSdkMethod<Query['rateUpgrade'], QueryrateUpgradeArgs, MeshContext>,
  /** null **/
  settlementCurrency: InContextSdkMethod<Query['settlementCurrency'], QuerysettlementCurrencyArgs, MeshContext>,
  /** null **/
  ticketmasterAttractions: InContextSdkMethod<Query['ticketmasterAttractions'], QueryticketmasterAttractionsArgs, MeshContext>,
  /** null **/
  ticketmaster_venues: InContextSdkMethod<Query['ticketmaster_venues'], Queryticketmaster_venuesArgs, MeshContext>,
  /** null **/
  timeSlotSelect: InContextSdkMethod<Query['timeSlotSelect'], QuerytimeSlotSelectArgs, MeshContext>,
  /** null **/
  timeslotFilter: InContextSdkMethod<Query['timeslotFilter'], QuerytimeslotFilterArgs, MeshContext>,
  /** null **/
  timezone: InContextSdkMethod<Query['timezone'], QuerytimezoneArgs, MeshContext>,
  /** null **/
  transactionCurrency: InContextSdkMethod<Query['transactionCurrency'], QuerytransactionCurrencyArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  upgradableOrder: InContextSdkMethod<Query['upgradableOrder'], QueryupgradableOrderArgs, MeshContext>,
  /** null **/
  userExternalEmails: InContextSdkMethod<Query['userExternalEmails'], {}, MeshContext>,
  /** null **/
  viewer: InContextSdkMethod<Query['viewer'], {}, MeshContext>,
  /** null **/
  whitelistedCountries: InContextSdkMethod<Query['whitelistedCountries'], {}, MeshContext>,
  /** null **/
  wrstbndIntegration: InContextSdkMethod<Query['wrstbndIntegration'], {}, MeshContext>,
  /** null **/
  wrstbndPasstype: InContextSdkMethod<Query['wrstbndPasstype'], QuerywrstbndPasstypeArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Accept Transfer **/
  acceptTransfer: InContextSdkMethod<Mutation['acceptTransfer'], MutationacceptTransferArgs, MeshContext>,
  /** Create AddOn **/
  addOnCreate: InContextSdkMethod<Mutation['addOnCreate'], MutationaddOnCreateArgs, MeshContext>,
  /** Delete AddOn **/
  addOnDelete: InContextSdkMethod<Mutation['addOnDelete'], MutationaddOnDeleteArgs, MeshContext>,
  /** Update Addon **/
  addOnUpdate: InContextSdkMethod<Mutation['addOnUpdate'], MutationaddOnUpdateArgs, MeshContext>,
  /** Message event attendees **/
  attendeesMessage: InContextSdkMethod<Mutation['attendeesMessage'], MutationattendeesMessageArgs, MeshContext>,
  /** Update the time slot for orders **/
  bulkOrderTimeSlotUpdate: InContextSdkMethod<Mutation['bulkOrderTimeSlotUpdate'], MutationbulkOrderTimeSlotUpdateArgs, MeshContext>,
  /** Toggle the status of channel partner offers **/
  channelPartnerOffersStatusToggle: InContextSdkMethod<Mutation['channelPartnerOffersStatusToggle'], MutationchannelPartnerOffersStatusToggleArgs, MeshContext>,
  /** Create AddOn **/
  createAddOn: InContextSdkMethod<Mutation['createAddOn'], MutationcreateAddOnArgs, MeshContext>,
  /** Create Custom Report **/
  createCustomReport: InContextSdkMethod<Mutation['createCustomReport'], MutationcreateCustomReportArgs, MeshContext>,
  /** Create Event **/
  createEvent: InContextSdkMethod<Mutation['createEvent'], MutationcreateEventArgs, MeshContext>,
  /** Create Tax **/
  createTax: InContextSdkMethod<Mutation['createTax'], MutationcreateTaxArgs, MeshContext>,
  /** Create Custom Report **/
  customReportCreate: InContextSdkMethod<Mutation['customReportCreate'], MutationcustomReportCreateArgs, MeshContext>,
  /** Delete Custom Report **/
  customReportDelete: InContextSdkMethod<Mutation['customReportDelete'], MutationcustomReportDeleteArgs, MeshContext>,
  /** Update Custom Report **/
  customReportUpdate: InContextSdkMethod<Mutation['customReportUpdate'], MutationcustomReportUpdateArgs, MeshContext>,
  /** Decline Transfer **/
  declineTransfer: InContextSdkMethod<Mutation['declineTransfer'], MutationdeclineTransferArgs, MeshContext>,
  /** Delete AddOn **/
  deleteAddOn: InContextSdkMethod<Mutation['deleteAddOn'], MutationdeleteAddOnArgs, MeshContext>,
  /** Delete Custom Report **/
  deleteCustomReport: InContextSdkMethod<Mutation['deleteCustomReport'], MutationdeleteCustomReportArgs, MeshContext>,
  /** Delete Event **/
  deleteEvent: InContextSdkMethod<Mutation['deleteEvent'], MutationdeleteEventArgs, MeshContext>,
  /** Create Discount belonging to this user **/
  discountCreate: InContextSdkMethod<Mutation['discountCreate'], MutationdiscountCreateArgs, MeshContext>,
  /** Delete Discount **/
  discountDelete: InContextSdkMethod<Mutation['discountDelete'], MutationdiscountDeleteArgs, MeshContext>,
  /** Bulk create account level discount codes **/
  discountsCreate: InContextSdkMethod<Mutation['discountsCreate'], MutationdiscountsCreateArgs, MeshContext>,
  /** Update many Discounts at once **/
  discountsUpdate: InContextSdkMethod<Mutation['discountsUpdate'], MutationdiscountsUpdateArgs, MeshContext>,
  /** Duplicate Event **/
  duplicateEvent: InContextSdkMethod<Mutation['duplicateEvent'], MutationduplicateEventArgs, MeshContext>,
  /** Create Event **/
  eventCreate: InContextSdkMethod<Mutation['eventCreate'], MutationeventCreateArgs, MeshContext>,
  /** Delete Event **/
  eventDelete: InContextSdkMethod<Mutation['eventDelete'], MutationeventDeleteArgs, MeshContext>,
  /** Duplicate Event **/
  eventDuplicate: InContextSdkMethod<Mutation['eventDuplicate'], MutationeventDuplicateArgs, MeshContext>,
  /** Publish Event **/
  eventPublish: InContextSdkMethod<Mutation['eventPublish'], MutationeventPublishArgs, MeshContext>,
  /** Report Event **/
  eventReport: InContextSdkMethod<Mutation['eventReport'], MutationeventReportArgs, MeshContext>,
  /** Save Event **/
  eventSave: InContextSdkMethod<Mutation['eventSave'], MutationeventSaveArgs, MeshContext>,
  /** Report Event Set **/
  eventSetReport: InContextSdkMethod<Mutation['eventSetReport'], MutationeventSetReportArgs, MeshContext>,
  /** Unpublish Event **/
  eventUnpublish: InContextSdkMethod<Mutation['eventUnpublish'], MutationeventUnpublishArgs, MeshContext>,
  /** Update Event **/
  eventUpdate: InContextSdkMethod<Mutation['eventUpdate'], MutationeventUpdateArgs, MeshContext>,
  /** Delete Host Field **/
  hostFieldDelete: InContextSdkMethod<Mutation['hostFieldDelete'], MutationhostFieldDeleteArgs, MeshContext>,
  /** Update host google analytics integration **/
  hostGaIntegrationUpdate: InContextSdkMethod<Mutation['hostGaIntegrationUpdate'], MutationhostGaIntegrationUpdateArgs, MeshContext>,
  /** Change locale for current Viewer **/
  localeChange: InContextSdkMethod<Mutation['localeChange'], MutationlocaleChangeArgs, MeshContext>,
  /** Approves a pending order **/
  orderApprove: InContextSdkMethod<Mutation['orderApprove'], MutationorderApproveArgs, MeshContext>,
  /** Change the buyer info for an order **/
  orderBuyerInfoChange: InContextSdkMethod<Mutation['orderBuyerInfoChange'], MutationorderBuyerInfoChangeArgs, MeshContext>,
  /** Declines a pending order **/
  orderDecline: InContextSdkMethod<Mutation['orderDecline'], MutationorderDeclineArgs, MeshContext>,
  /** Change the attendee info for an order item **/
  orderItemAttendeeInfoChange: InContextSdkMethod<Mutation['orderItemAttendeeInfoChange'], MutationorderItemAttendeeInfoChangeArgs, MeshContext>,
  /** Check in an order item **/
  orderItemCheckIn: InContextSdkMethod<Mutation['orderItemCheckIn'], MutationorderItemCheckInArgs, MeshContext>,
  /** Check out an order item **/
  orderItemCheckOut: InContextSdkMethod<Mutation['orderItemCheckOut'], MutationorderItemCheckOutArgs, MeshContext>,
  /** Update external metadata field on OrderItem **/
  orderItemExternalMetadataUpdate: InContextSdkMethod<Mutation['orderItemExternalMetadataUpdate'], MutationorderItemExternalMetadataUpdateArgs, MeshContext>,
  /** Resend email with order item details **/
  orderItemResend: InContextSdkMethod<Mutation['orderItemResend'], MutationorderItemResendArgs, MeshContext>,
  /** Marks an order that was purchased using an invoice as 'Paid' **/
  orderMarkInvoiceAsPaid: InContextSdkMethod<Mutation['orderMarkInvoiceAsPaid'], MutationorderMarkInvoiceAsPaidArgs, MeshContext>,
  /** Refund order items **/
  orderRefund: InContextSdkMethod<Mutation['orderRefund'], MutationorderRefundArgs, MeshContext>,
  /** Resend email with order details **/
  orderResend: InContextSdkMethod<Mutation['orderResend'], MutationorderResendArgs, MeshContext>,
  /** Update the time slot for an order **/
  orderTimeSlotUpdate: InContextSdkMethod<Mutation['orderTimeSlotUpdate'], MutationorderTimeSlotUpdateArgs, MeshContext>,
  /** Upgrade order items **/
  orderUpgrade: InContextSdkMethod<Mutation['orderUpgrade'], MutationorderUpgradeArgs, MeshContext>,
  /** Manage PrintedTicketConfiguration **/
  printedTicketConfigurationManage: InContextSdkMethod<Mutation['printedTicketConfigurationManage'], MutationprintedTicketConfigurationManageArgs, MeshContext>,
  /** Create PrintingLog **/
  printingLogCreate: InContextSdkMethod<Mutation['printingLogCreate'], MutationprintingLogCreateArgs, MeshContext>,
  /** Publish Event **/
  publishEvent: InContextSdkMethod<Mutation['publishEvent'], MutationpublishEventArgs, MeshContext>,
  /** Create a ticket **/
  rateCreate: InContextSdkMethod<Mutation['rateCreate'], MutationrateCreateArgs, MeshContext>,
  /** Update a single rate **/
  rateUpdate: InContextSdkMethod<Mutation['rateUpdate'], MutationrateUpdateArgs, MeshContext>,
  /** Create a rate upgrade **/
  rateUpgradeCreate: InContextSdkMethod<Mutation['rateUpgradeCreate'], MutationrateUpgradeCreateArgs, MeshContext>,
  /** Delete a rate upgrade **/
  rateUpgradeDelete: InContextSdkMethod<Mutation['rateUpgradeDelete'], MutationrateUpgradeDeleteArgs, MeshContext>,
  /** Update a rate upgrade **/
  rateUpgradeUpdate: InContextSdkMethod<Mutation['rateUpgradeUpdate'], MutationrateUpgradeUpdateArgs, MeshContext>,
  /** Update multiple rates **/
  ratesUpdate: InContextSdkMethod<Mutation['ratesUpdate'], MutationratesUpdateArgs, MeshContext>,
  /** Resends email confirmation email **/
  resendEmailConfirmation: InContextSdkMethod<Mutation['resendEmailConfirmation'], MutationresendEmailConfirmationArgs, MeshContext>,
  /** Save Event **/
  saveEvent: InContextSdkMethod<Mutation['saveEvent'], MutationsaveEventArgs, MeshContext>,
  /** Makes API call to Seats.io to publish a seating map **/
  seatsPublishDraft: InContextSdkMethod<Mutation['seatsPublishDraft'], MutationseatsPublishDraftArgs, MeshContext>,
  /** Synchronize rates with seats chart for reserved seated events **/
  seatsSyncRates: InContextSdkMethod<Mutation['seatsSyncRates'], MutationseatsSyncRatesArgs, MeshContext>,
  /** Register a stripe terminal location **/
  stripeTerminalLocationCreate: InContextSdkMethod<Mutation['stripeTerminalLocationCreate'], MutationstripeTerminalLocationCreateArgs, MeshContext>,
  /** Cancel stripe terminal reader **/
  stripeTerminalReaderCancel: InContextSdkMethod<Mutation['stripeTerminalReaderCancel'], MutationstripeTerminalReaderCancelArgs, MeshContext>,
  /** Register a stripe terminal reader **/
  stripeTerminalReaderCreate: InContextSdkMethod<Mutation['stripeTerminalReaderCreate'], MutationstripeTerminalReaderCreateArgs, MeshContext>,
  /** Delete a stripe terminal reader **/
  stripeTerminalReaderDelete: InContextSdkMethod<Mutation['stripeTerminalReaderDelete'], MutationstripeTerminalReaderDeleteArgs, MeshContext>,
  /** Update a stripe terminal reader **/
  stripeTerminalReaderUpdate: InContextSdkMethod<Mutation['stripeTerminalReaderUpdate'], MutationstripeTerminalReaderUpdateArgs, MeshContext>,
  /** Create Tax **/
  taxCreate: InContextSdkMethod<Mutation['taxCreate'], MutationtaxCreateArgs, MeshContext>,
  /** Delete all the tickets from the selected third party providers **/
  thirdPartyTicketDeleteByProvider: InContextSdkMethod<Mutation['thirdPartyTicketDeleteByProvider'], MutationthirdPartyTicketDeleteByProviderArgs, MeshContext>,
  /** Allows the mass importing of ThirdPartyTicket from Third Party Ticket Providers **/
  thirdPartyTicketImport: InContextSdkMethod<Mutation['thirdPartyTicketImport'], MutationthirdPartyTicketImportArgs, MeshContext>,
  /** Add or update a timeslot ticket customization **/
  timeSlotRateCustomization: InContextSdkMethod<Mutation['timeSlotRateCustomization'], MutationtimeSlotRateCustomizationArgs, MeshContext>,
  /** Updates a TimeSlot **/
  timeSlotUpdate: InContextSdkMethod<Mutation['timeSlotUpdate'], MutationtimeSlotUpdateArgs, MeshContext>,
  /** Accept Transfer **/
  transferAccept: InContextSdkMethod<Mutation['transferAccept'], MutationtransferAcceptArgs, MeshContext>,
  /** Decline Transfer **/
  transferDecline: InContextSdkMethod<Mutation['transferDecline'], MutationtransferDeclineArgs, MeshContext>,
  /** Update Addon **/
  updateAddOn: InContextSdkMethod<Mutation['updateAddOn'], MutationupdateAddOnArgs, MeshContext>,
  /** Update Custom Report **/
  updateCustomReport: InContextSdkMethod<Mutation['updateCustomReport'], MutationupdateCustomReportArgs, MeshContext>,
  /** Update a single rate **/
  updateRate: InContextSdkMethod<Mutation['updateRate'], MutationupdateRateArgs, MeshContext>,
  /** Update multiple rates **/
  updateRates: InContextSdkMethod<Mutation['updateRates'], MutationupdateRatesArgs, MeshContext>,
  /** Create a new waitlist subscription **/
  waitlistSubscriberCreate: InContextSdkMethod<Mutation['waitlistSubscriberCreate'], MutationwaitlistSubscriberCreateArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["canopyapi"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
