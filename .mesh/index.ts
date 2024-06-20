// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TcgdexTypes } from './sources/tcgdex/types';
import type { CanopyapiTypes } from './sources/canopyapi/types';
import * as importedModule$0 from "./sources/tcgdex/introspectionSchema";
import * as importedModule$1 from "./sources/canopyapi/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
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
  /** Find the cards */
  cards?: Maybe<Array<Maybe<Card>>>;
  /** Find the sets */
  sets?: Maybe<Array<Maybe<Set>>>;
  /** Find the series */
  series?: Maybe<Array<Maybe<Serie>>>;
  /** Find one card (using the id and set is deprecated) */
  card?: Maybe<Card>;
  /** Find one set (using the id is deprecated) */
  set?: Maybe<Set>;
  /** Find one serie (using the id is deprecated) */
  serie?: Maybe<Serie>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryaddOnArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycalendarWidgetArgs = {
  id: Scalars['ID']['input'];
  startingDate: Scalars['String']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycalendarWidgetsArgs = {
  hostId: Scalars['ID']['input'];
  startingDate: Scalars['String']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycategoriesArgs = {
  keywords?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycommissionCodesArgs = {
  code?: InputMaybe<PricingPlan>;
  currencies: Array<CurrencyCode>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerydiscountArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerydiscountCodesArgs = {
  eventId: Scalars['ID']['input'];
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryeventArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryeventSetArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerygetStripeTerminalLocationArgs = {
  listingId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<CurrencyCode>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerygetStripeTerminalReaderArgs = {
  stripeTerminalReaderId: Scalars['ID']['input'];
  currency?: InputMaybe<CurrencyCode>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerygetStripeTerminalReadersArgs = {
  listingId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  paginationAttributes?: InputMaybe<StripePaginationAttributesInputType>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryhostArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerylistingAttractionsArgs = {
  listingId: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageBasicsArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageChannelPartnerSalesArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageCustomizeArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageCustomizeTicketsArgs = {
  id: Scalars['ID']['input'];
  startingDate: Scalars['String']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageTicketsArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageWhenRegularEntryArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerymanageWhenTimedEntryArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryorderArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryorderItemArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryorderItemsArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerypartnerOffersArgs = {
  id: Scalars['ID']['input'];
  channelPartnerId?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryprofileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryrateUpgradeArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerysettlementCurrencyArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryticketmasterAttractionsArgs = {
  match?: InputMaybe<Scalars['String']['input']>;
  hostId?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type Queryticketmaster_venuesArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Scalars['JSON']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerytimeSlotSelectArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerytimeslotFilterArgs = {
  id: Scalars['ID']['input'];
  startTimeBefore?: InputMaybe<Scalars['String']['input']>;
  startTimeAfter?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerytimezoneArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerytransactionCurrencyArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerytransferArgs = {
  token: Scalars['String']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryupgradableOrderArgs = {
  id: Scalars['ID']['input'];
  orderItemId?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerywrstbndPasstypeArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycardsArgs = {
  filters?: InputMaybe<CardsFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerysetsArgs = {
  filters?: InputMaybe<SetFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryseriesArgs = {
  filters?: InputMaybe<SerieFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerycardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CardsFilters>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerysetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<SetFilters>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryserieArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<SerieFilters>;
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

/** Paginate the datas you fetch */
export type Pagination = {
  /** Indicate the page number (from 1) */
  page: Scalars['Int']['input'];
  /** Indicate the number of items in one page */
  itemsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Change how the data is sorted */
export type Sort = {
  /** Indicate which field it will sort using */
  field: Scalars['String']['input'];
  /** Indicate how it is sorted ("ASC" or "DESC) (default: "ASC") */
  order?: InputMaybe<Scalars['String']['input']>;
};

/** a Card filters */
export type CardsFilters = {
  /** Filter on the card's category (Pokemon, Trainer or Energy) */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card's decription */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the card energy type (normal or special) */
  energyType?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the previous evolution of the current pokémon */
  evolveFrom?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the Pokémon's HPs */
  hp?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the card id */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Filter for the card's local id */
  localId?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the pokémon national pokédex number */
  dexId?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the illustrator name */
  illustrator?: InputMaybe<Scalars['String']['input']>;
  /** Filter on ths Pokémon's level */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the Card's name */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter on the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card's regulation mark */
  regulationMark?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the Card evolution stage */
  stage?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card suffix */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the trainer type */
  trainerType?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the retreat point cost */
  retreat?: InputMaybe<Scalars['Int']['input']>;
};

/** Define what is a card for GraphQL */
export type Card = {
  /** The pokémon abilities */
  abilities?: Maybe<Array<Maybe<AbilitiesListItem>>>;
  /** The pokémon attacks */
  attacks?: Maybe<Array<Maybe<AttacksListItem>>>;
  /** The card category ('Pokemon' | 'Trainer' | 'Energy') */
  category: Scalars['String']['output'];
  /** The card description (mostly the Poédex description) */
  description?: Maybe<Scalars['String']['output']>;
  /** The pokémon(s) Pokédex IDs (Pokémons appearing on the card image & name) */
  dexId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** the energy/trainer effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** the energy type ('Normal' | 'Special') */
  energyType?: Maybe<Scalars['String']['output']>;
  /** the previous evolution of the current pokémon */
  evolveFrom?: Maybe<Scalars['String']['output']>;
  /** the Pokémon's HPs */
  hp?: Maybe<Scalars['Int']['output']>;
  /** the card id */
  id: Scalars['String']['output'];
  /** the illustrator name */
  illustrator?: Maybe<Scalars['String']['output']>;
  /** The card's image if available (see the docs for more details) */
  image?: Maybe<Scalars['String']['output']>;
  /** The Pokémon's item */
  item?: Maybe<Item>;
  /** The card legality in tournaments */
  legal: Legal;
  /** The Pokémon level */
  level?: Maybe<Scalars['Int']['output']>;
  /** the card's local id */
  localId: Scalars['String']['output'];
  /** the Card's name */
  name: Scalars['String']['output'];
  /**
   * the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity: Scalars['String']['output'];
  /** the card's regulation mark */
  regulationMark?: Maybe<Scalars['String']['output']>;
  /** The pokémon resistances */
  resistances?: Maybe<Array<Maybe<WeakResListItem>>>;
  /** The Card retreat cost */
  retreat?: Maybe<Scalars['Int']['output']>;
  /** The card's set */
  set: Set;
  /** the Card evolution stage */
  stage?: Maybe<Scalars['String']['output']>;
  /** the card suffix */
  suffix?: Maybe<Scalars['String']['output']>;
  /** the trainer type */
  trainerType?: Maybe<Scalars['String']['output']>;
  /** The pokémon type(s) (trivia: Even the TCG implemented at some point multiple types for a single card) */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The card variants */
  variants?: Maybe<Variants>;
  /** The pokémon weaknesses */
  weaknesses?: Maybe<Array<Maybe<WeakResListItem>>>;
};

/** define a single ability */
export type AbilitiesListItem = {
  /** The ability effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** The ability name */
  name?: Maybe<Scalars['String']['output']>;
  /** the ability type ('Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait') */
  type?: Maybe<Scalars['String']['output']>;
};

/** define a single attack */
export type AttacksListItem = {
  /** The attack cost in energies (can be affected by the effect) */
  cost?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The attack damage (can be affected by the effect) */
  damage?: Maybe<Scalars['String']['output']>;
  /** The attack additionnal effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** The attack name */
  name: Scalars['String']['output'];
};

/** Indicate the item a pokémon has on him */
export type Item = {
  /** the item effect */
  effect: Scalars['String']['output'];
  /** the item name */
  name: Scalars['String']['output'];
};

/** Indicate the legality of a card for official tournaments */
export type Legal = {
  /** Is the card playable in expanded tournaments? */
  expanded?: Maybe<Scalars['Boolean']['output']>;
  /** Is the card playable in standard tournaments? */
  standard?: Maybe<Scalars['Boolean']['output']>;
};

/** Definition for the Weakness and REsistance elements */
export type WeakResListItem = {
  /** the Weakness/resistance type */
  type: Scalars['String']['output'];
  /** the Weakness/resistance modifier (can be 2x or 30+ or nothing) */
  value?: Maybe<Scalars['String']['output']>;
};

/** All the card variants */
export type Variants = {
  /** is the card available in a first edition version? */
  firstEdition: Scalars['Boolean']['output'];
  /** can the card be found has an holo? */
  holo: Scalars['Boolean']['output'];
  /** can the card be found without special elements? */
  normal: Scalars['Boolean']['output'];
  /** Can the card be found a a reverse holo version? */
  reverse: Scalars['Boolean']['output'];
  /** was the card a wPromo card? */
  wPromo: Scalars['Boolean']['output'];
};

/** Describe a single set */
export type Set = {
  /** Indicate how much cards is in the set */
  cardCount: CardCount;
  /** list the cards in the set */
  cards: Array<Maybe<Card>>;
  /** The Set id */
  id: Scalars['String']['output'];
  /** The set logo if available */
  logo?: Maybe<Scalars['String']['output']>;
  /** The set's name */
  name: Scalars['String']['output'];
  /** The set's symbol if available */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The Set serie */
  serie: Serie;
  /** The set official release date */
  releaseDate: Scalars['String']['output'];
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: Maybe<Scalars['String']['output']>;
};

/** Filters for the set query */
export type SetFilters = {
  /** The Set id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The set's name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The Set serie */
  serie?: InputMaybe<Scalars['String']['input']>;
  /** The set official release date */
  releaseDate?: InputMaybe<Scalars['String']['input']>;
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Indicate how much cards a set contains
 *
 * It also indicate how much card for a specific variant
 */
export type CardCount = {
  /** The number of first edition cards in the set */
  firstEd?: Maybe<Scalars['Int']['output']>;
  /** The number of holo cards in the set */
  holo?: Maybe<Scalars['Int']['output']>;
  /** The number of normal cards in the set */
  normal?: Maybe<Scalars['Int']['output']>;
  /** The number of cards that are not hidden (generally in the bottom left/right) */
  official: Scalars['Int']['output'];
  /** The number of reverse cards in the set */
  reverse?: Maybe<Scalars['Int']['output']>;
  /** The total number of cards in the set */
  total: Scalars['Int']['output'];
};

/** A Pokémon TCG serie */
export type Serie = {
  /** The Serie ID */
  id: Scalars['String']['output'];
  /** The serie's logo if available */
  logo?: Maybe<Scalars['String']['output']>;
  /** the serie's name */
  name: Scalars['String']['output'];
  /** the list of sets that are part of the serie */
  sets: Array<Maybe<Set>>;
};

/** The Serie filters */
export type SerieFilters = {
  /** the serie's id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the serie */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** currently unused but is the general endpoint for every other elements */
export type StringEndpoint = {
  /** The list of cards that are available in the endpoint */
  cards: Array<Maybe<Card>>;
  /** The endpoint element name */
  name: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  User: ( Host ) | ( Member ) | ( Profile ) | ( Buyer ) | ( Saver ) | ( Viewer );
  BaseEvent: ( Event ) | ( EventSet );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Host: ResolverTypeWrapper<Host>;
  User: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['User']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  UserRole: UserRole;
  Locale: Locale;
  Organization: ResolverTypeWrapper<Organization>;
  Member: ResolverTypeWrapper<Member>;
  Features: ResolverTypeWrapper<Features>;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  CommissionCode: ResolverTypeWrapper<CommissionCode>;
  CountryCode: CountryCode;
  CurrencyCode: CurrencyCode;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  TimeSlotConnection: ResolverTypeWrapper<TimeSlotConnection>;
  TimeSlot: ResolverTypeWrapper<TimeSlot>;
  TimeSlotState: TimeSlotState;
  TimeWithoutTz: ResolverTypeWrapper<Scalars['TimeWithoutTz']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Event: ResolverTypeWrapper<Event>;
  BaseEvent: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseEvent']>;
  ContentFormat: ContentFormat;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileVisibility: ProfileVisibility;
  EventConnection: ResolverTypeWrapper<EventConnection>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Image: ResolverTypeWrapper<Image>;
  ImageQuality: ImageQuality;
  ImageFormat: ImageFormat;
  ImageCropMode: ImageCropMode;
  ImageConnection: ResolverTypeWrapper<ImageConnection>;
  EventPrivacy: EventPrivacy;
  EventState: EventState;
  PaymentSettings: ResolverTypeWrapper<PaymentSettings>;
  PaymentMethod: PaymentMethod;
  CardBrand: CardBrand;
  RefundPolicy: ResolverTypeWrapper<RefundPolicy>;
  RefundOffset: RefundOffset;
  RefundOffsetType: RefundOffsetType;
  AttendeeConnection: ResolverTypeWrapper<AttendeeConnection>;
  Attendee: ResolverTypeWrapper<Attendee>;
  OrderItemState: OrderItemState;
  Rate: ResolverTypeWrapper<Rate>;
  RateState: RateState;
  RateClientGroup: RateClientGroup;
  OrderItemConnection: ResolverTypeWrapper<OrderItemConnection>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderState: OrderState;
  OrderCostItemBreakdown: ResolverTypeWrapper<OrderCostItemBreakdown>;
  CostItemBreakdownTax: ResolverTypeWrapper<CostItemBreakdownTax>;
  CostItemBreakdownFee: ResolverTypeWrapper<CostItemBreakdownFee>;
  OrderCostBreakdown: ResolverTypeWrapper<OrderCostBreakdown>;
  CostBreakdownItem: ResolverTypeWrapper<CostBreakdownItem>;
  DiscountRedemption: ResolverTypeWrapper<DiscountRedemption>;
  Discount: ResolverTypeWrapper<Discount>;
  DiscountState: DiscountState;
  DiscountRedemptionType: DiscountRedemptionType;
  DiscountRedemptionConnection: ResolverTypeWrapper<DiscountRedemptionConnection>;
  Order: ResolverTypeWrapper<Order>;
  Answer: ResolverTypeWrapper<Answer>;
  Question: ResolverTypeWrapper<Question>;
  AnswerType: AnswerType;
  AnswerContext: AnswerContext;
  Buyer: ResolverTypeWrapper<Buyer>;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  PaymentDeclineCode: PaymentDeclineCode;
  ProviderSourceType: ProviderSourceType;
  Invoice: ResolverTypeWrapper<Invoice>;
  OrderItemRefundData: OrderItemRefundData;
  RefundType: RefundType;
  CheckInState: CheckInState;
  AddOn: ResolverTypeWrapper<AddOn>;
  AddOnRate: ResolverTypeWrapper<AddOnRate>;
  RateCapacity: ResolverTypeWrapper<RateCapacity>;
  Tax: ResolverTypeWrapper<Tax>;
  Money: ResolverTypeWrapper<Money>;
  RateType: RateType;
  ThirdPartyTicketConnection: ResolverTypeWrapper<ThirdPartyTicketConnection>;
  ThirdPartyTicket: ResolverTypeWrapper<ThirdPartyTicket>;
  DailySales: ResolverTypeWrapper<DailySales>;
  GoogleAdsSendTos: ResolverTypeWrapper<GoogleAdsSendTos>;
  WrstbndIntegration: ResolverTypeWrapper<WrstbndIntegration>;
  GoogleAdsTracker: ResolverTypeWrapper<GoogleAdsTracker>;
  GoogleAdsTrackerTypes: GoogleAdsTrackerTypes;
  FacebookPixel: ResolverTypeWrapper<FacebookPixel>;
  RateConnection: ResolverTypeWrapper<RateConnection>;
  RateStateExists: ResolverTypeWrapper<RateStateExists>;
  SaversConnection: ResolverTypeWrapper<SaversConnection>;
  Saver: ResolverTypeWrapper<Saver>;
  AccessKeyConnection: ResolverTypeWrapper<AccessKeyConnection>;
  AccessKey: ResolverTypeWrapper<AccessKey>;
  AccessKeyState: AccessKeyState;
  DiscountConnection: ResolverTypeWrapper<DiscountConnection>;
  ReferralCode: ResolverTypeWrapper<ReferralCode>;
  RateCustomization: ResolverTypeWrapper<RateCustomization>;
  Report: ResolverTypeWrapper<Report>;
  Category: ResolverTypeWrapper<Category>;
  CategoryKey: CategoryKey;
  Tag: ResolverTypeWrapper<Tag>;
  ScheduleConnection: ResolverTypeWrapper<ScheduleConnection>;
  Schedule: ResolverTypeWrapper<Schedule>;
  Days: Days;
  ScheduleInterval: ResolverTypeWrapper<ScheduleInterval>;
  ScheduleState: ScheduleState;
  TimeSlotReport: ResolverTypeWrapper<TimeSlotReport>;
  HostField: ResolverTypeWrapper<HostField>;
  RateUpgrade: ResolverTypeWrapper<RateUpgrade>;
  WaitlistSubscriber: ResolverTypeWrapper<WaitlistSubscriber>;
  PrintedTicketConfiguration: ResolverTypeWrapper<PrintedTicketConfiguration>;
  RateCapacityConnection: ResolverTypeWrapper<RateCapacityConnection>;
  Analytics: ResolverTypeWrapper<Analytics>;
  SalesChannel: ResolverTypeWrapper<SalesChannel>;
  BuyersLocation: ResolverTypeWrapper<BuyersLocation>;
  Location: ResolverTypeWrapper<Location>;
  StripeConnectAccount: ResolverTypeWrapper<StripeConnectAccount>;
  StripeConnectCurrencyCode: StripeConnectCurrencyCode;
  CustomReportConnection: ResolverTypeWrapper<CustomReportConnection>;
  CustomReport: ResolverTypeWrapper<CustomReport>;
  AddOnConnection: ResolverTypeWrapper<AddOnConnection>;
  TaxConnection: ResolverTypeWrapper<TaxConnection>;
  ChargebackConnection: ResolverTypeWrapper<ChargebackConnection>;
  Chargeback: ResolverTypeWrapper<Chargeback>;
  WithdrawalConnection: ResolverTypeWrapper<WithdrawalConnection>;
  Withdrawal: ResolverTypeWrapper<Withdrawal>;
  AccountBalanceConnection: ResolverTypeWrapper<AccountBalanceConnection>;
  AccountBalance: ResolverTypeWrapper<AccountBalance>;
  EventSet: ResolverTypeWrapper<EventSet>;
  Calendar: ResolverTypeWrapper<Calendar>;
  Transfer: ResolverTypeWrapper<Transfer>;
  TransferState: TransferState;
  Viewer: ResolverTypeWrapper<Viewer>;
  MembershipConnection: ResolverTypeWrapper<MembershipConnection>;
  Membership: ResolverTypeWrapper<Membership>;
  Permission: Permission;
  WrstbndPasstype: ResolverTypeWrapper<WrstbndPasstype>;
  PricingPlan: PricingPlan;
  Country: ResolverTypeWrapper<Country>;
  Continent: Continent;
  CalendarWidget: ResolverTypeWrapper<CalendarWidget>;
  AvailableMonths: ResolverTypeWrapper<AvailableMonths>;
  CalendarWidgetTimeslot: ResolverTypeWrapper<CalendarWidgetTimeslot>;
  CalendarWidgetDate: ResolverTypeWrapper<CalendarWidgetDate>;
  UpgradableOrder: ResolverTypeWrapper<UpgradableOrder>;
  UpgradableOrderItem: ResolverTypeWrapper<UpgradableOrderItem>;
  OrderItemOwner: ResolverTypeWrapper<OrderItemOwner>;
  ManageTickets: ResolverTypeWrapper<ManageTickets>;
  ManageTicketsRate: ResolverTypeWrapper<ManageTicketsRate>;
  ManageWhenTimeslot: ResolverTypeWrapper<ManageWhenTimeslot>;
  ManageWhenTimedEntry: ResolverTypeWrapper<ManageWhenTimedEntry>;
  ManageWhenRegularEntry: ResolverTypeWrapper<ManageWhenRegularEntry>;
  ManageCustomize: ResolverTypeWrapper<ManageCustomize>;
  ManageCustomizeTickets: ResolverTypeWrapper<ManageCustomizeTickets>;
  CustomizeTicketsDate: ResolverTypeWrapper<CustomizeTicketsDate>;
  CustomizeTicketsTimeslot: ResolverTypeWrapper<CustomizeTicketsTimeslot>;
  ManageChannelPartnerSales: ResolverTypeWrapper<ManageChannelPartnerSales>;
  PartnerOffers: ResolverTypeWrapper<PartnerOffers>;
  ManageBasics: ResolverTypeWrapper<ManageBasics>;
  Attraction: ResolverTypeWrapper<Attraction>;
  TimeSlotSelect: ResolverTypeWrapper<TimeSlotSelect>;
  TimeslotFilter: ResolverTypeWrapper<TimeslotFilter>;
  TimeslotFilterTimeslot: ResolverTypeWrapper<TimeslotFilterTimeslot>;
  TicketmasterVenuesConnection: ResolverTypeWrapper<TicketmasterVenuesConnection>;
  TicketmasterVenue: ResolverTypeWrapper<TicketmasterVenue>;
  State_TicketmasterVenue: ResolverTypeWrapper<State_TicketmasterVenue>;
  Address_TicketmasterVenue: ResolverTypeWrapper<Address_TicketmasterVenue>;
  Location_TicketmasterVenue: ResolverTypeWrapper<Location_TicketmasterVenue>;
  TicketmasterAttractionConnection: ResolverTypeWrapper<TicketmasterAttractionConnection>;
  TicketmasterAttraction: ResolverTypeWrapper<TicketmasterAttraction>;
  StripeTerminalReaderCollection: ResolverTypeWrapper<StripeTerminalReaderCollection>;
  StripeTerminalReader: ResolverTypeWrapper<StripeTerminalReader>;
  StripeTerminalReaderAction: ResolverTypeWrapper<StripeTerminalReaderAction>;
  StripePaginationAttributesInputType: StripePaginationAttributesInputType;
  StripeTerminalLocation: ResolverTypeWrapper<StripeTerminalLocation>;
  StripeTerminalLocationAddress: ResolverTypeWrapper<StripeTerminalLocationAddress>;
  DiscountCreatePayload: ResolverTypeWrapper<DiscountCreatePayload>;
  DiscountCreateInput: DiscountCreateInput;
  DiscountDeletePayload: ResolverTypeWrapper<DiscountDeletePayload>;
  DiscountDeleteInput: DiscountDeleteInput;
  DiscountsUpdatePayload: ResolverTypeWrapper<DiscountsUpdatePayload>;
  Error: ResolverTypeWrapper<Error>;
  DiscountsUpdateInput: DiscountsUpdateInput;
  Discount_UpdateDiscount: Discount_UpdateDiscount;
  DiscountsCreatePayload: ResolverTypeWrapper<DiscountsCreatePayload>;
  DiscountsCreateInput: DiscountsCreateInput;
  HostGaIntegrationUpdatePayload: ResolverTypeWrapper<HostGaIntegrationUpdatePayload>;
  HostGaIntegrationUpdateInput: HostGaIntegrationUpdateInput;
  Host_GaIntegration: Host_GaIntegration;
  LocaleChangePayload: ResolverTypeWrapper<LocaleChangePayload>;
  LocaleChangeInput: LocaleChangeInput;
  SeatsSyncRatesPayload: ResolverTypeWrapper<SeatsSyncRatesPayload>;
  SeatsSyncRatesInput: SeatsSyncRatesInput;
  SeatsPublishDraftPayload: ResolverTypeWrapper<SeatsPublishDraftPayload>;
  SeatsPublishDraftInput: SeatsPublishDraftInput;
  RateCreatePayload: ResolverTypeWrapper<RateCreatePayload>;
  RateCreateInput: RateCreateInput;
  RateCreateInputType: RateCreateInputType;
  RateCreateAttributes: RateCreateAttributes;
  ReleaseOffset: ReleaseOffset;
  RateCreateType: RateCreateType;
  AccessKeyInputType: AccessKeyInputType;
  RateUpdatePayload: ResolverTypeWrapper<RateUpdatePayload>;
  RateUpdateInput: RateUpdateInput;
  RateUpdateInputType: RateUpdateInputType;
  RateUpdateAttributes: RateUpdateAttributes;
  WrstbndPasstypeInputType: WrstbndPasstypeInputType;
  RatesUpdatePayload: ResolverTypeWrapper<RatesUpdatePayload>;
  RatesUpdateInput: RatesUpdateInput;
  RateUpgradeCreatePayload: ResolverTypeWrapper<RateUpgradeCreatePayload>;
  RateUpgradeCreateInput: RateUpgradeCreateInput;
  RateUpgradeUpdatePayload: ResolverTypeWrapper<RateUpgradeUpdatePayload>;
  RateUpgradeUpdateInput: RateUpgradeUpdateInput;
  RateUpgradeUpdates: RateUpgradeUpdates;
  RateUpgradeUpdateAttributes: RateUpgradeUpdateAttributes;
  RateUpgradeDeletePayload: ResolverTypeWrapper<RateUpgradeDeletePayload>;
  RateUpgradeDeleteInput: RateUpgradeDeleteInput;
  EventSavePayload: ResolverTypeWrapper<EventSavePayload>;
  EventSaveInput: EventSaveInput;
  EventUpdatePayload: ResolverTypeWrapper<EventUpdatePayload>;
  EventUpdateInput: EventUpdateInput;
  Event_EventUpdate: Event_EventUpdate;
  RefundPolicyInputType: RefundPolicyInputType;
  RefundPolicyAttributes: RefundPolicyAttributes;
  ImageInputType: ImageInputType;
  ImageUpdateInputType: ImageUpdateInputType;
  Category_EventUpdate: Category_EventUpdate;
  TimeSlot_EventUpdate: TimeSlot_EventUpdate;
  Schedule_EventUpdate: Schedule_EventUpdate;
  Schedule_Intervals_EventUpdate: Schedule_Intervals_EventUpdate;
  FacebookPixelInputType: FacebookPixelInputType;
  GoogleAdsTrackerInputType: GoogleAdsTrackerInputType;
  WrstbndIntegrationInputType: WrstbndIntegrationInputType;
  HostFieldInputType: HostFieldInputType;
  AttractionType: AttractionType;
  EventCreatePayload: ResolverTypeWrapper<EventCreatePayload>;
  EventCreateInput: EventCreateInput;
  Event_EventCreate: Event_EventCreate;
  Category_EventCreate: Category_EventCreate;
  TimeSlot_EventCreate: TimeSlot_EventCreate;
  Schedule_EventCreate: Schedule_EventCreate;
  Schedule_Intervals_EventCreate: Schedule_Intervals_EventCreate;
  EventDuplicatePayload: ResolverTypeWrapper<EventDuplicatePayload>;
  EventDuplicateInput: EventDuplicateInput;
  EventPublishPayload: ResolverTypeWrapper<EventPublishPayload>;
  EventPublishInput: EventPublishInput;
  EventUnpublishPayload: ResolverTypeWrapper<EventUnpublishPayload>;
  EventUnpublishInput: EventUnpublishInput;
  EventDeletePayload: ResolverTypeWrapper<EventDeletePayload>;
  EventDeleteInput: EventDeleteInput;
  EventReportPayload: ResolverTypeWrapper<EventReportPayload>;
  EventReportInput: EventReportInput;
  AttendeesMessagePayload: ResolverTypeWrapper<AttendeesMessagePayload>;
  AttendeesMessageInput: AttendeesMessageInput;
  MessageType: MessageType;
  HostFieldDeletePayload: ResolverTypeWrapper<HostFieldDeletePayload>;
  HostFieldDeleteInput: HostFieldDeleteInput;
  TimeSlotUpdatePayload: ResolverTypeWrapper<TimeSlotUpdatePayload>;
  TimeSlotUpdateInput: TimeSlotUpdateInput;
  TimeslotRateCustomizationPayload: ResolverTypeWrapper<TimeslotRateCustomizationPayload>;
  TimeslotRateCustomizationInput: TimeslotRateCustomizationInput;
  RateCustomization_TimeslotRateCustomization: RateCustomization_TimeslotRateCustomization;
  EventSetReportPayload: ResolverTypeWrapper<EventSetReportPayload>;
  EventSetReportInput: EventSetReportInput;
  CustomReportCreatePayload: ResolverTypeWrapper<CustomReportCreatePayload>;
  CustomReportCreateInput: CustomReportCreateInput;
  CustomReportDeletePayload: ResolverTypeWrapper<CustomReportDeletePayload>;
  CustomReportDeleteInput: CustomReportDeleteInput;
  CustomReportUpdatePayload: ResolverTypeWrapper<CustomReportUpdatePayload>;
  CustomReportUpdateInput: CustomReportUpdateInput;
  TransferDeclinePayload: ResolverTypeWrapper<TransferDeclinePayload>;
  TransferDeclineInput: TransferDeclineInput;
  TransferAcceptPayload: ResolverTypeWrapper<TransferAcceptPayload>;
  TransferAcceptInput: TransferAcceptInput;
  AddOnCreatePayload: ResolverTypeWrapper<AddOnCreatePayload>;
  AddOnCreateInput: AddOnCreateInput;
  AddOnInputType: AddOnInputType;
  AddOnAttributes: AddOnAttributes;
  AddOnRateInputType: AddOnRateInputType;
  AddOnRateAttributes: AddOnRateAttributes;
  AddOnDeletePayload: ResolverTypeWrapper<AddOnDeletePayload>;
  AddOnDeleteInput: AddOnDeleteInput;
  AddOnUpdatePayload: ResolverTypeWrapper<AddOnUpdatePayload>;
  AddOnUpdateInput: AddOnUpdateInput;
  TaxCreatePayload: ResolverTypeWrapper<TaxCreatePayload>;
  TaxCreateInput: TaxCreateInput;
  TaxInputType: TaxInputType;
  TaxAttributesType: TaxAttributesType;
  OrderItemCheckInPayload: ResolverTypeWrapper<OrderItemCheckInPayload>;
  OrderItemCheckInInput: OrderItemCheckInInput;
  OrderItemCheckOutPayload: ResolverTypeWrapper<OrderItemCheckOutPayload>;
  OrderItemCheckOutInput: OrderItemCheckOutInput;
  ExternalMetadataUpdatePayload: ResolverTypeWrapper<ExternalMetadataUpdatePayload>;
  ExternalMetadataUpdateInput: ExternalMetadataUpdateInput;
  OrderItemResendPayload: ResolverTypeWrapper<OrderItemResendPayload>;
  OrderItemResendInput: OrderItemResendInput;
  OrderItemAttendeeInfoChangePayload: ResolverTypeWrapper<OrderItemAttendeeInfoChangePayload>;
  OrderItemAttendeeInfoChangeInput: OrderItemAttendeeInfoChangeInput;
  AnswerInputType: AnswerInputType;
  Any: ResolverTypeWrapper<Scalars['Any']['output']>;
  NewAnswerInputType: NewAnswerInputType;
  OrderResendPayload: ResolverTypeWrapper<OrderResendPayload>;
  OrderResendInput: OrderResendInput;
  OrderBuyerInfoChangePayload: ResolverTypeWrapper<OrderBuyerInfoChangePayload>;
  OrderBuyerInfoChangeInput: OrderBuyerInfoChangeInput;
  MarkInvoiceAsPaidPayload: ResolverTypeWrapper<MarkInvoiceAsPaidPayload>;
  MarkInvoiceAsPaidInput: MarkInvoiceAsPaidInput;
  OrderRefundPayload: ResolverTypeWrapper<OrderRefundPayload>;
  OrderRefundInput: OrderRefundInput;
  OrderTimeSlotUpdatePayload: ResolverTypeWrapper<OrderTimeSlotUpdatePayload>;
  OrderTimeSlotUpdateInput: OrderTimeSlotUpdateInput;
  BulkOrderTimeSlotUpdatePayload: ResolverTypeWrapper<BulkOrderTimeSlotUpdatePayload>;
  BulkOrderTimeSlotUpdateInput: BulkOrderTimeSlotUpdateInput;
  OrderUpgradePayload: ResolverTypeWrapper<OrderUpgradePayload>;
  OrderUpgradeInput: OrderUpgradeInput;
  QuestionInputType: QuestionInputType;
  UpgradeInputType: UpgradeInputType;
  OrderApprovePayload: ResolverTypeWrapper<OrderApprovePayload>;
  OrderApproveInput: OrderApproveInput;
  OrderDeclinePayload: ResolverTypeWrapper<OrderDeclinePayload>;
  OrderDeclineInput: OrderDeclineInput;
  ResendEmailConfirmationPayload: ResolverTypeWrapper<ResendEmailConfirmationPayload>;
  ResendEmailConfirmationInput: ResendEmailConfirmationInput;
  ChannelPartnerOffersStatusTogglePayload: ResolverTypeWrapper<ChannelPartnerOffersStatusTogglePayload>;
  ChannelPartnerOffersStatusToggleInput: ChannelPartnerOffersStatusToggleInput;
  ImportThirdPartyTicketPayload: ResolverTypeWrapper<ImportThirdPartyTicketPayload>;
  ImportThirdPartyTicketInput: ImportThirdPartyTicketInput;
  ThirdPartyTicketInputType: ThirdPartyTicketInputType;
  ThirdPartyTicketDeleteByProviderPayload: ResolverTypeWrapper<ThirdPartyTicketDeleteByProviderPayload>;
  ThirdPartyTicketDeleteByProviderInput: ThirdPartyTicketDeleteByProviderInput;
  WaitlistSubscriberCreatePayload: ResolverTypeWrapper<WaitlistSubscriberCreatePayload>;
  WaitlistSubscriberCreateInput: WaitlistSubscriberCreateInput;
  StripeTerminalReaderCreatePayload: ResolverTypeWrapper<StripeTerminalReaderCreatePayload>;
  StripeTerminalReaderCreateInput: StripeTerminalReaderCreateInput;
  StripeTerminalReaderUpdatePayload: ResolverTypeWrapper<StripeTerminalReaderUpdatePayload>;
  StripeTerminalReaderUpdateInput: StripeTerminalReaderUpdateInput;
  StripeTerminalReaderDeletePayload: ResolverTypeWrapper<StripeTerminalReaderDeletePayload>;
  StripeTerminalReaderDeleteInput: StripeTerminalReaderDeleteInput;
  StripeTerminalLocationCreatePayload: ResolverTypeWrapper<StripeTerminalLocationCreatePayload>;
  StripeTerminalLocationCreateInput: StripeTerminalLocationCreateInput;
  StripeTerminalLocationInputType: StripeTerminalLocationInputType;
  StripeTerminalLocationAddressInputType: StripeTerminalLocationAddressInputType;
  StripeTerminalReaderCancelPayload: ResolverTypeWrapper<StripeTerminalReaderCancelPayload>;
  StripeTerminalReaderCancelInput: StripeTerminalReaderCancelInput;
  PrintedTicketConfigurationManagePayload: ResolverTypeWrapper<PrintedTicketConfigurationManagePayload>;
  PrintedTicketConfigurationManageInput: PrintedTicketConfigurationManageInput;
  PrintedTicketConfigurationInputType: PrintedTicketConfigurationInputType;
  PrintingLogCreatePayload: ResolverTypeWrapper<PrintingLogCreatePayload>;
  PrintingLog: ResolverTypeWrapper<PrintingLog>;
  PrintingLogPage: PrintingLogPage;
  PrintingLogSource: PrintingLogSource;
  PrintingLogCreateInput: PrintingLogCreateInput;
  Pagination: Pagination;
  Sort: Sort;
  CardsFilters: CardsFilters;
  Card: ResolverTypeWrapper<Card>;
  AbilitiesListItem: ResolverTypeWrapper<AbilitiesListItem>;
  AttacksListItem: ResolverTypeWrapper<AttacksListItem>;
  Item: ResolverTypeWrapper<Item>;
  Legal: ResolverTypeWrapper<Legal>;
  WeakResListItem: ResolverTypeWrapper<WeakResListItem>;
  Variants: ResolverTypeWrapper<Variants>;
  Set: ResolverTypeWrapper<Set>;
  SetFilters: SetFilters;
  CardCount: ResolverTypeWrapper<CardCount>;
  Serie: ResolverTypeWrapper<Serie>;
  SerieFilters: SerieFilters;
  StringEndpoint: ResolverTypeWrapper<StringEndpoint>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  String: Scalars['String']['output'];
  Host: Host;
  User: ResolversInterfaceTypes<ResolversParentTypes>['User'];
  ID: Scalars['ID']['output'];
  Organization: Organization;
  Member: Member;
  Features: Features;
  Time: Scalars['Time']['output'];
  Date: Scalars['Date']['output'];
  CommissionCode: CommissionCode;
  Float: Scalars['Float']['output'];
  TimeSlotConnection: TimeSlotConnection;
  TimeSlot: TimeSlot;
  TimeWithoutTz: Scalars['TimeWithoutTz']['output'];
  Int: Scalars['Int']['output'];
  Event: Event;
  BaseEvent: ResolversInterfaceTypes<ResolversParentTypes>['BaseEvent'];
  Profile: Profile;
  EventConnection: EventConnection;
  JSON: Scalars['JSON']['output'];
  Image: Image;
  ImageConnection: ImageConnection;
  PaymentSettings: PaymentSettings;
  RefundPolicy: RefundPolicy;
  AttendeeConnection: AttendeeConnection;
  Attendee: Attendee;
  Rate: Rate;
  OrderItemConnection: OrderItemConnection;
  OrderItem: OrderItem;
  OrderCostItemBreakdown: OrderCostItemBreakdown;
  CostItemBreakdownTax: CostItemBreakdownTax;
  CostItemBreakdownFee: CostItemBreakdownFee;
  OrderCostBreakdown: OrderCostBreakdown;
  CostBreakdownItem: CostBreakdownItem;
  DiscountRedemption: DiscountRedemption;
  Discount: Discount;
  DiscountRedemptionConnection: DiscountRedemptionConnection;
  Order: Order;
  Answer: Answer;
  Question: Question;
  Buyer: Buyer;
  OrderConnection: OrderConnection;
  Invoice: Invoice;
  OrderItemRefundData: OrderItemRefundData;
  AddOn: AddOn;
  AddOnRate: AddOnRate;
  RateCapacity: RateCapacity;
  Tax: Tax;
  Money: Money;
  ThirdPartyTicketConnection: ThirdPartyTicketConnection;
  ThirdPartyTicket: ThirdPartyTicket;
  DailySales: DailySales;
  GoogleAdsSendTos: GoogleAdsSendTos;
  WrstbndIntegration: WrstbndIntegration;
  GoogleAdsTracker: GoogleAdsTracker;
  FacebookPixel: FacebookPixel;
  RateConnection: RateConnection;
  RateStateExists: RateStateExists;
  SaversConnection: SaversConnection;
  Saver: Saver;
  AccessKeyConnection: AccessKeyConnection;
  AccessKey: AccessKey;
  DiscountConnection: DiscountConnection;
  ReferralCode: ReferralCode;
  RateCustomization: RateCustomization;
  Report: Report;
  Category: Category;
  Tag: Tag;
  ScheduleConnection: ScheduleConnection;
  Schedule: Schedule;
  ScheduleInterval: ScheduleInterval;
  TimeSlotReport: TimeSlotReport;
  HostField: HostField;
  RateUpgrade: RateUpgrade;
  WaitlistSubscriber: WaitlistSubscriber;
  PrintedTicketConfiguration: PrintedTicketConfiguration;
  RateCapacityConnection: RateCapacityConnection;
  Analytics: Analytics;
  SalesChannel: SalesChannel;
  BuyersLocation: BuyersLocation;
  Location: Location;
  StripeConnectAccount: StripeConnectAccount;
  CustomReportConnection: CustomReportConnection;
  CustomReport: CustomReport;
  AddOnConnection: AddOnConnection;
  TaxConnection: TaxConnection;
  ChargebackConnection: ChargebackConnection;
  Chargeback: Chargeback;
  WithdrawalConnection: WithdrawalConnection;
  Withdrawal: Withdrawal;
  AccountBalanceConnection: AccountBalanceConnection;
  AccountBalance: AccountBalance;
  EventSet: EventSet;
  Calendar: Calendar;
  Transfer: Transfer;
  Viewer: Viewer;
  MembershipConnection: MembershipConnection;
  Membership: Membership;
  WrstbndPasstype: WrstbndPasstype;
  Country: Country;
  CalendarWidget: CalendarWidget;
  AvailableMonths: AvailableMonths;
  CalendarWidgetTimeslot: CalendarWidgetTimeslot;
  CalendarWidgetDate: CalendarWidgetDate;
  UpgradableOrder: UpgradableOrder;
  UpgradableOrderItem: UpgradableOrderItem;
  OrderItemOwner: OrderItemOwner;
  ManageTickets: ManageTickets;
  ManageTicketsRate: ManageTicketsRate;
  ManageWhenTimeslot: ManageWhenTimeslot;
  ManageWhenTimedEntry: ManageWhenTimedEntry;
  ManageWhenRegularEntry: ManageWhenRegularEntry;
  ManageCustomize: ManageCustomize;
  ManageCustomizeTickets: ManageCustomizeTickets;
  CustomizeTicketsDate: CustomizeTicketsDate;
  CustomizeTicketsTimeslot: CustomizeTicketsTimeslot;
  ManageChannelPartnerSales: ManageChannelPartnerSales;
  PartnerOffers: PartnerOffers;
  ManageBasics: ManageBasics;
  Attraction: Attraction;
  TimeSlotSelect: TimeSlotSelect;
  TimeslotFilter: TimeslotFilter;
  TimeslotFilterTimeslot: TimeslotFilterTimeslot;
  TicketmasterVenuesConnection: TicketmasterVenuesConnection;
  TicketmasterVenue: TicketmasterVenue;
  State_TicketmasterVenue: State_TicketmasterVenue;
  Address_TicketmasterVenue: Address_TicketmasterVenue;
  Location_TicketmasterVenue: Location_TicketmasterVenue;
  TicketmasterAttractionConnection: TicketmasterAttractionConnection;
  TicketmasterAttraction: TicketmasterAttraction;
  StripeTerminalReaderCollection: StripeTerminalReaderCollection;
  StripeTerminalReader: StripeTerminalReader;
  StripeTerminalReaderAction: StripeTerminalReaderAction;
  StripePaginationAttributesInputType: StripePaginationAttributesInputType;
  StripeTerminalLocation: StripeTerminalLocation;
  StripeTerminalLocationAddress: StripeTerminalLocationAddress;
  DiscountCreatePayload: DiscountCreatePayload;
  DiscountCreateInput: DiscountCreateInput;
  DiscountDeletePayload: DiscountDeletePayload;
  DiscountDeleteInput: DiscountDeleteInput;
  DiscountsUpdatePayload: DiscountsUpdatePayload;
  Error: Error;
  DiscountsUpdateInput: DiscountsUpdateInput;
  Discount_UpdateDiscount: Discount_UpdateDiscount;
  DiscountsCreatePayload: DiscountsCreatePayload;
  DiscountsCreateInput: DiscountsCreateInput;
  HostGaIntegrationUpdatePayload: HostGaIntegrationUpdatePayload;
  HostGaIntegrationUpdateInput: HostGaIntegrationUpdateInput;
  Host_GaIntegration: Host_GaIntegration;
  LocaleChangePayload: LocaleChangePayload;
  LocaleChangeInput: LocaleChangeInput;
  SeatsSyncRatesPayload: SeatsSyncRatesPayload;
  SeatsSyncRatesInput: SeatsSyncRatesInput;
  SeatsPublishDraftPayload: SeatsPublishDraftPayload;
  SeatsPublishDraftInput: SeatsPublishDraftInput;
  RateCreatePayload: RateCreatePayload;
  RateCreateInput: RateCreateInput;
  RateCreateInputType: RateCreateInputType;
  RateCreateAttributes: RateCreateAttributes;
  AccessKeyInputType: AccessKeyInputType;
  RateUpdatePayload: RateUpdatePayload;
  RateUpdateInput: RateUpdateInput;
  RateUpdateInputType: RateUpdateInputType;
  RateUpdateAttributes: RateUpdateAttributes;
  WrstbndPasstypeInputType: WrstbndPasstypeInputType;
  RatesUpdatePayload: RatesUpdatePayload;
  RatesUpdateInput: RatesUpdateInput;
  RateUpgradeCreatePayload: RateUpgradeCreatePayload;
  RateUpgradeCreateInput: RateUpgradeCreateInput;
  RateUpgradeUpdatePayload: RateUpgradeUpdatePayload;
  RateUpgradeUpdateInput: RateUpgradeUpdateInput;
  RateUpgradeUpdates: RateUpgradeUpdates;
  RateUpgradeUpdateAttributes: RateUpgradeUpdateAttributes;
  RateUpgradeDeletePayload: RateUpgradeDeletePayload;
  RateUpgradeDeleteInput: RateUpgradeDeleteInput;
  EventSavePayload: EventSavePayload;
  EventSaveInput: EventSaveInput;
  EventUpdatePayload: EventUpdatePayload;
  EventUpdateInput: EventUpdateInput;
  Event_EventUpdate: Event_EventUpdate;
  RefundPolicyInputType: RefundPolicyInputType;
  RefundPolicyAttributes: RefundPolicyAttributes;
  ImageInputType: ImageInputType;
  ImageUpdateInputType: ImageUpdateInputType;
  Category_EventUpdate: Category_EventUpdate;
  TimeSlot_EventUpdate: TimeSlot_EventUpdate;
  Schedule_EventUpdate: Schedule_EventUpdate;
  Schedule_Intervals_EventUpdate: Schedule_Intervals_EventUpdate;
  FacebookPixelInputType: FacebookPixelInputType;
  GoogleAdsTrackerInputType: GoogleAdsTrackerInputType;
  WrstbndIntegrationInputType: WrstbndIntegrationInputType;
  HostFieldInputType: HostFieldInputType;
  AttractionType: AttractionType;
  EventCreatePayload: EventCreatePayload;
  EventCreateInput: EventCreateInput;
  Event_EventCreate: Event_EventCreate;
  Category_EventCreate: Category_EventCreate;
  TimeSlot_EventCreate: TimeSlot_EventCreate;
  Schedule_EventCreate: Schedule_EventCreate;
  Schedule_Intervals_EventCreate: Schedule_Intervals_EventCreate;
  EventDuplicatePayload: EventDuplicatePayload;
  EventDuplicateInput: EventDuplicateInput;
  EventPublishPayload: EventPublishPayload;
  EventPublishInput: EventPublishInput;
  EventUnpublishPayload: EventUnpublishPayload;
  EventUnpublishInput: EventUnpublishInput;
  EventDeletePayload: EventDeletePayload;
  EventDeleteInput: EventDeleteInput;
  EventReportPayload: EventReportPayload;
  EventReportInput: EventReportInput;
  AttendeesMessagePayload: AttendeesMessagePayload;
  AttendeesMessageInput: AttendeesMessageInput;
  HostFieldDeletePayload: HostFieldDeletePayload;
  HostFieldDeleteInput: HostFieldDeleteInput;
  TimeSlotUpdatePayload: TimeSlotUpdatePayload;
  TimeSlotUpdateInput: TimeSlotUpdateInput;
  TimeslotRateCustomizationPayload: TimeslotRateCustomizationPayload;
  TimeslotRateCustomizationInput: TimeslotRateCustomizationInput;
  RateCustomization_TimeslotRateCustomization: RateCustomization_TimeslotRateCustomization;
  EventSetReportPayload: EventSetReportPayload;
  EventSetReportInput: EventSetReportInput;
  CustomReportCreatePayload: CustomReportCreatePayload;
  CustomReportCreateInput: CustomReportCreateInput;
  CustomReportDeletePayload: CustomReportDeletePayload;
  CustomReportDeleteInput: CustomReportDeleteInput;
  CustomReportUpdatePayload: CustomReportUpdatePayload;
  CustomReportUpdateInput: CustomReportUpdateInput;
  TransferDeclinePayload: TransferDeclinePayload;
  TransferDeclineInput: TransferDeclineInput;
  TransferAcceptPayload: TransferAcceptPayload;
  TransferAcceptInput: TransferAcceptInput;
  AddOnCreatePayload: AddOnCreatePayload;
  AddOnCreateInput: AddOnCreateInput;
  AddOnInputType: AddOnInputType;
  AddOnAttributes: AddOnAttributes;
  AddOnRateInputType: AddOnRateInputType;
  AddOnRateAttributes: AddOnRateAttributes;
  AddOnDeletePayload: AddOnDeletePayload;
  AddOnDeleteInput: AddOnDeleteInput;
  AddOnUpdatePayload: AddOnUpdatePayload;
  AddOnUpdateInput: AddOnUpdateInput;
  TaxCreatePayload: TaxCreatePayload;
  TaxCreateInput: TaxCreateInput;
  TaxInputType: TaxInputType;
  TaxAttributesType: TaxAttributesType;
  OrderItemCheckInPayload: OrderItemCheckInPayload;
  OrderItemCheckInInput: OrderItemCheckInInput;
  OrderItemCheckOutPayload: OrderItemCheckOutPayload;
  OrderItemCheckOutInput: OrderItemCheckOutInput;
  ExternalMetadataUpdatePayload: ExternalMetadataUpdatePayload;
  ExternalMetadataUpdateInput: ExternalMetadataUpdateInput;
  OrderItemResendPayload: OrderItemResendPayload;
  OrderItemResendInput: OrderItemResendInput;
  OrderItemAttendeeInfoChangePayload: OrderItemAttendeeInfoChangePayload;
  OrderItemAttendeeInfoChangeInput: OrderItemAttendeeInfoChangeInput;
  AnswerInputType: AnswerInputType;
  Any: Scalars['Any']['output'];
  NewAnswerInputType: NewAnswerInputType;
  OrderResendPayload: OrderResendPayload;
  OrderResendInput: OrderResendInput;
  OrderBuyerInfoChangePayload: OrderBuyerInfoChangePayload;
  OrderBuyerInfoChangeInput: OrderBuyerInfoChangeInput;
  MarkInvoiceAsPaidPayload: MarkInvoiceAsPaidPayload;
  MarkInvoiceAsPaidInput: MarkInvoiceAsPaidInput;
  OrderRefundPayload: OrderRefundPayload;
  OrderRefundInput: OrderRefundInput;
  OrderTimeSlotUpdatePayload: OrderTimeSlotUpdatePayload;
  OrderTimeSlotUpdateInput: OrderTimeSlotUpdateInput;
  BulkOrderTimeSlotUpdatePayload: BulkOrderTimeSlotUpdatePayload;
  BulkOrderTimeSlotUpdateInput: BulkOrderTimeSlotUpdateInput;
  OrderUpgradePayload: OrderUpgradePayload;
  OrderUpgradeInput: OrderUpgradeInput;
  QuestionInputType: QuestionInputType;
  UpgradeInputType: UpgradeInputType;
  OrderApprovePayload: OrderApprovePayload;
  OrderApproveInput: OrderApproveInput;
  OrderDeclinePayload: OrderDeclinePayload;
  OrderDeclineInput: OrderDeclineInput;
  ResendEmailConfirmationPayload: ResendEmailConfirmationPayload;
  ResendEmailConfirmationInput: ResendEmailConfirmationInput;
  ChannelPartnerOffersStatusTogglePayload: ChannelPartnerOffersStatusTogglePayload;
  ChannelPartnerOffersStatusToggleInput: ChannelPartnerOffersStatusToggleInput;
  ImportThirdPartyTicketPayload: ImportThirdPartyTicketPayload;
  ImportThirdPartyTicketInput: ImportThirdPartyTicketInput;
  ThirdPartyTicketInputType: ThirdPartyTicketInputType;
  ThirdPartyTicketDeleteByProviderPayload: ThirdPartyTicketDeleteByProviderPayload;
  ThirdPartyTicketDeleteByProviderInput: ThirdPartyTicketDeleteByProviderInput;
  WaitlistSubscriberCreatePayload: WaitlistSubscriberCreatePayload;
  WaitlistSubscriberCreateInput: WaitlistSubscriberCreateInput;
  StripeTerminalReaderCreatePayload: StripeTerminalReaderCreatePayload;
  StripeTerminalReaderCreateInput: StripeTerminalReaderCreateInput;
  StripeTerminalReaderUpdatePayload: StripeTerminalReaderUpdatePayload;
  StripeTerminalReaderUpdateInput: StripeTerminalReaderUpdateInput;
  StripeTerminalReaderDeletePayload: StripeTerminalReaderDeletePayload;
  StripeTerminalReaderDeleteInput: StripeTerminalReaderDeleteInput;
  StripeTerminalLocationCreatePayload: StripeTerminalLocationCreatePayload;
  StripeTerminalLocationCreateInput: StripeTerminalLocationCreateInput;
  StripeTerminalLocationInputType: StripeTerminalLocationInputType;
  StripeTerminalLocationAddressInputType: StripeTerminalLocationAddressInputType;
  StripeTerminalReaderCancelPayload: StripeTerminalReaderCancelPayload;
  StripeTerminalReaderCancelInput: StripeTerminalReaderCancelInput;
  PrintedTicketConfigurationManagePayload: PrintedTicketConfigurationManagePayload;
  PrintedTicketConfigurationManageInput: PrintedTicketConfigurationManageInput;
  PrintedTicketConfigurationInputType: PrintedTicketConfigurationInputType;
  PrintingLogCreatePayload: PrintingLogCreatePayload;
  PrintingLog: PrintingLog;
  PrintingLogCreateInput: PrintingLogCreateInput;
  Pagination: Pagination;
  Sort: Sort;
  CardsFilters: CardsFilters;
  Card: Card;
  AbilitiesListItem: AbilitiesListItem;
  AttacksListItem: AttacksListItem;
  Item: Item;
  Legal: Legal;
  WeakResListItem: WeakResListItem;
  Variants: Variants;
  Set: Set;
  SetFilters: SetFilters;
  CardCount: CardCount;
  Serie: Serie;
  SerieFilters: SerieFilters;
  StringEndpoint: StringEndpoint;
}>;

export type localeDirectiveArgs = {
  lang: Scalars['String']['input'];
};

export type localeDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = localeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  addOn?: Resolver<Maybe<ResolversTypes['AddOn']>, ParentType, ContextType, RequireFields<QueryaddOnArgs, 'id'>>;
  calendarWidget?: Resolver<ResolversTypes['CalendarWidget'], ParentType, ContextType, RequireFields<QuerycalendarWidgetArgs, 'id' | 'startingDate'>>;
  calendarWidgets?: Resolver<Array<Maybe<ResolversTypes['CalendarWidget']>>, ParentType, ContextType, RequireFields<QuerycalendarWidgetsArgs, 'hostId' | 'startingDate'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<QuerycategoriesArgs>>;
  commissionCodes?: Resolver<Array<ResolversTypes['CommissionCode']>, ParentType, ContextType, RequireFields<QuerycommissionCodesArgs, 'currencies'>>;
  discount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<QuerydiscountArgs, 'id'>>;
  discountCodes?: Resolver<Maybe<ResolversTypes['DiscountConnection']>, ParentType, ContextType, RequireFields<QuerydiscountCodesArgs, 'eventId'>>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<QueryeventArgs, 'id'>>;
  eventSet?: Resolver<ResolversTypes['EventSet'], ParentType, ContextType, RequireFields<QueryeventSetArgs, 'id'>>;
  getStripeTerminalLocation?: Resolver<Maybe<ResolversTypes['StripeTerminalLocation']>, ParentType, ContextType, Partial<QuerygetStripeTerminalLocationArgs>>;
  getStripeTerminalReader?: Resolver<Maybe<ResolversTypes['StripeTerminalReader']>, ParentType, ContextType, RequireFields<QuerygetStripeTerminalReaderArgs, 'stripeTerminalReaderId'>>;
  getStripeTerminalReaders?: Resolver<Maybe<ResolversTypes['StripeTerminalReaderCollection']>, ParentType, ContextType, Partial<QuerygetStripeTerminalReadersArgs>>;
  host?: Resolver<ResolversTypes['Host'], ParentType, ContextType, RequireFields<QueryhostArgs, 'id'>>;
  listingAttractions?: Resolver<Maybe<Array<ResolversTypes['Attraction']>>, ParentType, ContextType, RequireFields<QuerylistingAttractionsArgs, 'listingId'>>;
  manageBasics?: Resolver<ResolversTypes['ManageBasics'], ParentType, ContextType, RequireFields<QuerymanageBasicsArgs, 'id'>>;
  manageChannelPartnerSales?: Resolver<Array<ResolversTypes['ManageChannelPartnerSales']>, ParentType, ContextType, RequireFields<QuerymanageChannelPartnerSalesArgs, 'id'>>;
  manageCustomize?: Resolver<ResolversTypes['ManageCustomize'], ParentType, ContextType, RequireFields<QuerymanageCustomizeArgs, 'id'>>;
  manageCustomizeTickets?: Resolver<ResolversTypes['ManageCustomizeTickets'], ParentType, ContextType, RequireFields<QuerymanageCustomizeTicketsArgs, 'id' | 'startingDate'>>;
  manageTickets?: Resolver<ResolversTypes['ManageTickets'], ParentType, ContextType, RequireFields<QuerymanageTicketsArgs, 'id'>>;
  manageWhenRegularEntry?: Resolver<ResolversTypes['ManageWhenRegularEntry'], ParentType, ContextType, RequireFields<QuerymanageWhenRegularEntryArgs, 'id'>>;
  manageWhenTimedEntry?: Resolver<ResolversTypes['ManageWhenTimedEntry'], ParentType, ContextType, RequireFields<QuerymanageWhenTimedEntryArgs, 'id'>>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryorderArgs, 'id'>>;
  orderItem?: Resolver<ResolversTypes['OrderItem'], ParentType, ContextType, RequireFields<QueryorderItemArgs, 'id'>>;
  orderItems?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<QueryorderItemsArgs, 'id'>>;
  partnerOffers?: Resolver<Array<ResolversTypes['PartnerOffers']>, ParentType, ContextType, RequireFields<QuerypartnerOffersArgs, 'id'>>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, Partial<QueryprofileArgs>>;
  rateUpgrade?: Resolver<ResolversTypes['RateUpgrade'], ParentType, ContextType, RequireFields<QueryrateUpgradeArgs, 'id'>>;
  settlementCurrency?: Resolver<Maybe<ResolversTypes['CurrencyCode']>, ParentType, ContextType, RequireFields<QuerysettlementCurrencyArgs, 'latitude' | 'longitude'>>;
  ticketmasterAttractions?: Resolver<ResolversTypes['TicketmasterAttractionConnection'], ParentType, ContextType, Partial<QueryticketmasterAttractionsArgs>>;
  ticketmaster_venues?: Resolver<ResolversTypes['TicketmasterVenuesConnection'], ParentType, ContextType, RequireFields<Queryticketmaster_venuesArgs, 'filters'>>;
  timeSlotSelect?: Resolver<ResolversTypes['TimeSlotSelect'], ParentType, ContextType, RequireFields<QuerytimeSlotSelectArgs, 'id'>>;
  timeslotFilter?: Resolver<ResolversTypes['TimeslotFilter'], ParentType, ContextType, RequireFields<QuerytimeslotFilterArgs, 'id'>>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerytimezoneArgs, 'latitude' | 'longitude'>>;
  transactionCurrency?: Resolver<Maybe<ResolversTypes['CurrencyCode']>, ParentType, ContextType, RequireFields<QuerytransactionCurrencyArgs, 'latitude' | 'longitude'>>;
  transfer?: Resolver<ResolversTypes['Transfer'], ParentType, ContextType, RequireFields<QuerytransferArgs, 'token'>>;
  upgradableOrder?: Resolver<ResolversTypes['UpgradableOrder'], ParentType, ContextType, RequireFields<QueryupgradableOrderArgs, 'id'>>;
  userExternalEmails?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  viewer?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType>;
  whitelistedCountries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  wrstbndIntegration?: Resolver<Maybe<ResolversTypes['WrstbndIntegration']>, ParentType, ContextType>;
  wrstbndPasstype?: Resolver<Maybe<ResolversTypes['WrstbndPasstype']>, ParentType, ContextType, RequireFields<QuerywrstbndPasstypeArgs, 'id'>>;
  cards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Card']>>>, ParentType, ContextType, Partial<QuerycardsArgs>>;
  sets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType, Partial<QuerysetsArgs>>;
  series?: Resolver<Maybe<Array<Maybe<ResolversTypes['Serie']>>>, ParentType, ContextType, Partial<QueryseriesArgs>>;
  card?: Resolver<Maybe<ResolversTypes['Card']>, ParentType, ContextType, Partial<QuerycardArgs>>;
  set?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, Partial<QuerysetArgs>>;
  serie?: Resolver<Maybe<ResolversTypes['Serie']>, ParentType, ContextType, Partial<QueryserieArgs>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  acceptTransfer?: Resolver<Maybe<ResolversTypes['TransferAcceptPayload']>, ParentType, ContextType, RequireFields<MutationacceptTransferArgs, 'input'>>;
  addOnCreate?: Resolver<Maybe<ResolversTypes['AddOnCreatePayload']>, ParentType, ContextType, RequireFields<MutationaddOnCreateArgs, 'input'>>;
  addOnDelete?: Resolver<Maybe<ResolversTypes['AddOnDeletePayload']>, ParentType, ContextType, RequireFields<MutationaddOnDeleteArgs, 'input'>>;
  addOnUpdate?: Resolver<Maybe<ResolversTypes['AddOnUpdatePayload']>, ParentType, ContextType, RequireFields<MutationaddOnUpdateArgs, 'input'>>;
  attendeesMessage?: Resolver<Maybe<ResolversTypes['AttendeesMessagePayload']>, ParentType, ContextType, RequireFields<MutationattendeesMessageArgs, 'input'>>;
  bulkOrderTimeSlotUpdate?: Resolver<Maybe<ResolversTypes['BulkOrderTimeSlotUpdatePayload']>, ParentType, ContextType, RequireFields<MutationbulkOrderTimeSlotUpdateArgs, 'input'>>;
  channelPartnerOffersStatusToggle?: Resolver<Maybe<ResolversTypes['ChannelPartnerOffersStatusTogglePayload']>, ParentType, ContextType, RequireFields<MutationchannelPartnerOffersStatusToggleArgs, 'input'>>;
  createAddOn?: Resolver<Maybe<ResolversTypes['AddOnCreatePayload']>, ParentType, ContextType, RequireFields<MutationcreateAddOnArgs, 'input'>>;
  createCustomReport?: Resolver<Maybe<ResolversTypes['CustomReportCreatePayload']>, ParentType, ContextType, RequireFields<MutationcreateCustomReportArgs, 'input'>>;
  createEvent?: Resolver<Maybe<ResolversTypes['EventCreatePayload']>, ParentType, ContextType, RequireFields<MutationcreateEventArgs, 'input'>>;
  createTax?: Resolver<Maybe<ResolversTypes['TaxCreatePayload']>, ParentType, ContextType, RequireFields<MutationcreateTaxArgs, 'input'>>;
  customReportCreate?: Resolver<Maybe<ResolversTypes['CustomReportCreatePayload']>, ParentType, ContextType, RequireFields<MutationcustomReportCreateArgs, 'input'>>;
  customReportDelete?: Resolver<Maybe<ResolversTypes['CustomReportDeletePayload']>, ParentType, ContextType, RequireFields<MutationcustomReportDeleteArgs, 'input'>>;
  customReportUpdate?: Resolver<Maybe<ResolversTypes['CustomReportUpdatePayload']>, ParentType, ContextType, RequireFields<MutationcustomReportUpdateArgs, 'input'>>;
  declineTransfer?: Resolver<Maybe<ResolversTypes['TransferDeclinePayload']>, ParentType, ContextType, RequireFields<MutationdeclineTransferArgs, 'input'>>;
  deleteAddOn?: Resolver<Maybe<ResolversTypes['AddOnDeletePayload']>, ParentType, ContextType, RequireFields<MutationdeleteAddOnArgs, 'input'>>;
  deleteCustomReport?: Resolver<Maybe<ResolversTypes['CustomReportDeletePayload']>, ParentType, ContextType, RequireFields<MutationdeleteCustomReportArgs, 'input'>>;
  deleteEvent?: Resolver<Maybe<ResolversTypes['EventDeletePayload']>, ParentType, ContextType, RequireFields<MutationdeleteEventArgs, 'input'>>;
  discountCreate?: Resolver<Maybe<ResolversTypes['DiscountCreatePayload']>, ParentType, ContextType, RequireFields<MutationdiscountCreateArgs, 'input'>>;
  discountDelete?: Resolver<Maybe<ResolversTypes['DiscountDeletePayload']>, ParentType, ContextType, RequireFields<MutationdiscountDeleteArgs, 'input'>>;
  discountsCreate?: Resolver<Maybe<ResolversTypes['DiscountsCreatePayload']>, ParentType, ContextType, RequireFields<MutationdiscountsCreateArgs, 'input'>>;
  discountsUpdate?: Resolver<Maybe<ResolversTypes['DiscountsUpdatePayload']>, ParentType, ContextType, RequireFields<MutationdiscountsUpdateArgs, 'input'>>;
  duplicateEvent?: Resolver<Maybe<ResolversTypes['EventDuplicatePayload']>, ParentType, ContextType, RequireFields<MutationduplicateEventArgs, 'input'>>;
  eventCreate?: Resolver<Maybe<ResolversTypes['EventCreatePayload']>, ParentType, ContextType, RequireFields<MutationeventCreateArgs, 'input'>>;
  eventDelete?: Resolver<Maybe<ResolversTypes['EventDeletePayload']>, ParentType, ContextType, RequireFields<MutationeventDeleteArgs, 'input'>>;
  eventDuplicate?: Resolver<Maybe<ResolversTypes['EventDuplicatePayload']>, ParentType, ContextType, RequireFields<MutationeventDuplicateArgs, 'input'>>;
  eventPublish?: Resolver<Maybe<ResolversTypes['EventPublishPayload']>, ParentType, ContextType, RequireFields<MutationeventPublishArgs, 'input'>>;
  eventReport?: Resolver<Maybe<ResolversTypes['EventReportPayload']>, ParentType, ContextType, RequireFields<MutationeventReportArgs, 'input'>>;
  eventSave?: Resolver<Maybe<ResolversTypes['EventSavePayload']>, ParentType, ContextType, RequireFields<MutationeventSaveArgs, 'input'>>;
  eventSetReport?: Resolver<Maybe<ResolversTypes['EventSetReportPayload']>, ParentType, ContextType, RequireFields<MutationeventSetReportArgs, 'input'>>;
  eventUnpublish?: Resolver<Maybe<ResolversTypes['EventUnpublishPayload']>, ParentType, ContextType, RequireFields<MutationeventUnpublishArgs, 'input'>>;
  eventUpdate?: Resolver<Maybe<ResolversTypes['EventUpdatePayload']>, ParentType, ContextType, RequireFields<MutationeventUpdateArgs, 'input'>>;
  hostFieldDelete?: Resolver<Maybe<ResolversTypes['HostFieldDeletePayload']>, ParentType, ContextType, RequireFields<MutationhostFieldDeleteArgs, 'input'>>;
  hostGaIntegrationUpdate?: Resolver<Maybe<ResolversTypes['HostGaIntegrationUpdatePayload']>, ParentType, ContextType, RequireFields<MutationhostGaIntegrationUpdateArgs, 'input'>>;
  localeChange?: Resolver<Maybe<ResolversTypes['LocaleChangePayload']>, ParentType, ContextType, RequireFields<MutationlocaleChangeArgs, 'input'>>;
  orderApprove?: Resolver<Maybe<ResolversTypes['OrderApprovePayload']>, ParentType, ContextType, RequireFields<MutationorderApproveArgs, 'input'>>;
  orderBuyerInfoChange?: Resolver<Maybe<ResolversTypes['OrderBuyerInfoChangePayload']>, ParentType, ContextType, RequireFields<MutationorderBuyerInfoChangeArgs, 'input'>>;
  orderDecline?: Resolver<Maybe<ResolversTypes['OrderDeclinePayload']>, ParentType, ContextType, RequireFields<MutationorderDeclineArgs, 'input'>>;
  orderItemAttendeeInfoChange?: Resolver<Maybe<ResolversTypes['OrderItemAttendeeInfoChangePayload']>, ParentType, ContextType, RequireFields<MutationorderItemAttendeeInfoChangeArgs, 'input'>>;
  orderItemCheckIn?: Resolver<Maybe<ResolversTypes['OrderItemCheckInPayload']>, ParentType, ContextType, RequireFields<MutationorderItemCheckInArgs, 'input'>>;
  orderItemCheckOut?: Resolver<Maybe<ResolversTypes['OrderItemCheckOutPayload']>, ParentType, ContextType, RequireFields<MutationorderItemCheckOutArgs, 'input'>>;
  orderItemExternalMetadataUpdate?: Resolver<Maybe<ResolversTypes['ExternalMetadataUpdatePayload']>, ParentType, ContextType, RequireFields<MutationorderItemExternalMetadataUpdateArgs, 'input'>>;
  orderItemResend?: Resolver<Maybe<ResolversTypes['OrderItemResendPayload']>, ParentType, ContextType, RequireFields<MutationorderItemResendArgs, 'input'>>;
  orderMarkInvoiceAsPaid?: Resolver<Maybe<ResolversTypes['MarkInvoiceAsPaidPayload']>, ParentType, ContextType, RequireFields<MutationorderMarkInvoiceAsPaidArgs, 'input'>>;
  orderRefund?: Resolver<Maybe<ResolversTypes['OrderRefundPayload']>, ParentType, ContextType, RequireFields<MutationorderRefundArgs, 'input'>>;
  orderResend?: Resolver<Maybe<ResolversTypes['OrderResendPayload']>, ParentType, ContextType, RequireFields<MutationorderResendArgs, 'input'>>;
  orderTimeSlotUpdate?: Resolver<Maybe<ResolversTypes['OrderTimeSlotUpdatePayload']>, ParentType, ContextType, RequireFields<MutationorderTimeSlotUpdateArgs, 'input'>>;
  orderUpgrade?: Resolver<Maybe<ResolversTypes['OrderUpgradePayload']>, ParentType, ContextType, RequireFields<MutationorderUpgradeArgs, 'input'>>;
  printedTicketConfigurationManage?: Resolver<Maybe<ResolversTypes['PrintedTicketConfigurationManagePayload']>, ParentType, ContextType, RequireFields<MutationprintedTicketConfigurationManageArgs, 'input'>>;
  printingLogCreate?: Resolver<Maybe<ResolversTypes['PrintingLogCreatePayload']>, ParentType, ContextType, RequireFields<MutationprintingLogCreateArgs, 'input'>>;
  publishEvent?: Resolver<Maybe<ResolversTypes['EventPublishPayload']>, ParentType, ContextType, RequireFields<MutationpublishEventArgs, 'input'>>;
  rateCreate?: Resolver<Maybe<ResolversTypes['RateCreatePayload']>, ParentType, ContextType, RequireFields<MutationrateCreateArgs, 'input'>>;
  rateUpdate?: Resolver<Maybe<ResolversTypes['RateUpdatePayload']>, ParentType, ContextType, RequireFields<MutationrateUpdateArgs, 'input'>>;
  rateUpgradeCreate?: Resolver<Maybe<ResolversTypes['RateUpgradeCreatePayload']>, ParentType, ContextType, RequireFields<MutationrateUpgradeCreateArgs, 'input'>>;
  rateUpgradeDelete?: Resolver<Maybe<ResolversTypes['RateUpgradeDeletePayload']>, ParentType, ContextType, RequireFields<MutationrateUpgradeDeleteArgs, 'input'>>;
  rateUpgradeUpdate?: Resolver<Maybe<ResolversTypes['RateUpgradeUpdatePayload']>, ParentType, ContextType, RequireFields<MutationrateUpgradeUpdateArgs, 'input'>>;
  ratesUpdate?: Resolver<Maybe<ResolversTypes['RatesUpdatePayload']>, ParentType, ContextType, RequireFields<MutationratesUpdateArgs, 'input'>>;
  resendEmailConfirmation?: Resolver<Maybe<ResolversTypes['ResendEmailConfirmationPayload']>, ParentType, ContextType, RequireFields<MutationresendEmailConfirmationArgs, 'input'>>;
  saveEvent?: Resolver<Maybe<ResolversTypes['EventSavePayload']>, ParentType, ContextType, RequireFields<MutationsaveEventArgs, 'input'>>;
  seatsPublishDraft?: Resolver<Maybe<ResolversTypes['SeatsPublishDraftPayload']>, ParentType, ContextType, RequireFields<MutationseatsPublishDraftArgs, 'input'>>;
  seatsSyncRates?: Resolver<Maybe<ResolversTypes['SeatsSyncRatesPayload']>, ParentType, ContextType, RequireFields<MutationseatsSyncRatesArgs, 'input'>>;
  stripeTerminalLocationCreate?: Resolver<Maybe<ResolversTypes['StripeTerminalLocationCreatePayload']>, ParentType, ContextType, RequireFields<MutationstripeTerminalLocationCreateArgs, 'input'>>;
  stripeTerminalReaderCancel?: Resolver<Maybe<ResolversTypes['StripeTerminalReaderCancelPayload']>, ParentType, ContextType, RequireFields<MutationstripeTerminalReaderCancelArgs, 'input'>>;
  stripeTerminalReaderCreate?: Resolver<Maybe<ResolversTypes['StripeTerminalReaderCreatePayload']>, ParentType, ContextType, RequireFields<MutationstripeTerminalReaderCreateArgs, 'input'>>;
  stripeTerminalReaderDelete?: Resolver<Maybe<ResolversTypes['StripeTerminalReaderDeletePayload']>, ParentType, ContextType, RequireFields<MutationstripeTerminalReaderDeleteArgs, 'input'>>;
  stripeTerminalReaderUpdate?: Resolver<Maybe<ResolversTypes['StripeTerminalReaderUpdatePayload']>, ParentType, ContextType, RequireFields<MutationstripeTerminalReaderUpdateArgs, 'input'>>;
  taxCreate?: Resolver<Maybe<ResolversTypes['TaxCreatePayload']>, ParentType, ContextType, RequireFields<MutationtaxCreateArgs, 'input'>>;
  thirdPartyTicketDeleteByProvider?: Resolver<Maybe<ResolversTypes['ThirdPartyTicketDeleteByProviderPayload']>, ParentType, ContextType, RequireFields<MutationthirdPartyTicketDeleteByProviderArgs, 'input'>>;
  thirdPartyTicketImport?: Resolver<Maybe<ResolversTypes['ImportThirdPartyTicketPayload']>, ParentType, ContextType, RequireFields<MutationthirdPartyTicketImportArgs, 'input'>>;
  timeSlotRateCustomization?: Resolver<Maybe<ResolversTypes['TimeslotRateCustomizationPayload']>, ParentType, ContextType, RequireFields<MutationtimeSlotRateCustomizationArgs, 'input'>>;
  timeSlotUpdate?: Resolver<Maybe<ResolversTypes['TimeSlotUpdatePayload']>, ParentType, ContextType, RequireFields<MutationtimeSlotUpdateArgs, 'input'>>;
  transferAccept?: Resolver<Maybe<ResolversTypes['TransferAcceptPayload']>, ParentType, ContextType, RequireFields<MutationtransferAcceptArgs, 'input'>>;
  transferDecline?: Resolver<Maybe<ResolversTypes['TransferDeclinePayload']>, ParentType, ContextType, RequireFields<MutationtransferDeclineArgs, 'input'>>;
  updateAddOn?: Resolver<Maybe<ResolversTypes['AddOnUpdatePayload']>, ParentType, ContextType, RequireFields<MutationupdateAddOnArgs, 'input'>>;
  updateCustomReport?: Resolver<Maybe<ResolversTypes['CustomReportUpdatePayload']>, ParentType, ContextType, RequireFields<MutationupdateCustomReportArgs, 'input'>>;
  updateRate?: Resolver<Maybe<ResolversTypes['RateUpdatePayload']>, ParentType, ContextType, RequireFields<MutationupdateRateArgs, 'input'>>;
  updateRates?: Resolver<Maybe<ResolversTypes['RatesUpdatePayload']>, ParentType, ContextType, RequireFields<MutationupdateRatesArgs, 'input'>>;
  waitlistSubscriberCreate?: Resolver<Maybe<ResolversTypes['WaitlistSubscriberCreatePayload']>, ParentType, ContextType, RequireFields<MutationwaitlistSubscriberCreateArgs, 'input'>>;
}>;

export type HostResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Host'] = ResolversParentTypes['Host']> = ResolversObject<{
  accountBalance?: Resolver<Maybe<ResolversTypes['AccountBalanceConnection']>, ParentType, ContextType>;
  addOnOrderItems?: Resolver<Maybe<ResolversTypes['OrderItemConnection']>, ParentType, ContextType, RequireFields<HostaddOnOrderItemsArgs, 'page' | 'perPage'>>;
  addOns?: Resolver<ResolversTypes['AddOnConnection'], ParentType, ContextType, Partial<HostaddOnsArgs>>;
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  analytics?: Resolver<ResolversTypes['Analytics'], ParentType, ContextType>;
  attendees?: Resolver<ResolversTypes['AttendeeConnection'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  business?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chargebacks?: Resolver<Maybe<ResolversTypes['ChargebackConnection']>, ParentType, ContextType, RequireFields<HostchargebacksArgs, 'currency'>>;
  commissionCodes?: Resolver<Array<ResolversTypes['CommissionCode']>, ParentType, ContextType>;
  currencies?: Resolver<Array<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  customReport?: Resolver<ResolversTypes['CustomReport'], ParentType, ContextType, RequireFields<HostcustomReportArgs, 'id'>>;
  customReports?: Resolver<ResolversTypes['CustomReportConnection'], ParentType, ContextType, Partial<HostcustomReportsArgs>>;
  datesCalendar?: Resolver<Array<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discounts?: Resolver<ResolversTypes['DiscountConnection'], ParentType, ContextType, Partial<HostdiscountsArgs>>;
  displayPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<HostdisplayPriceArgs, 'settlementCurrency' | 'country' | 'price'>>;
  eventCurrencies?: Resolver<Array<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HosteventsArgs>>;
  eventsWithTickets?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HosteventsWithTicketsArgs>>;
  eventsWithTicketsInRange?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HosteventsWithTicketsInRangeArgs>>;
  features?: Resolver<ResolversTypes['Features'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forceHostToPayCommission?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  googleAnalyticsEcommerce?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  googleAnalyticsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasLiveEvents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hosted?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HosthostedArgs>>;
  hosting?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HosthostingArgs>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextFutureEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  rebates?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recentlyUpdatedEvents?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HostrecentlyUpdatedEventsArgs>>;
  report?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<HostreportArgs, 'name' | 'columns' | 'clauses'>>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  seatsDesignerKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortedEvents?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<HostsortedEventsArgs>>;
  stripeConnectAccounts?: Resolver<Array<Maybe<ResolversTypes['StripeConnectAccount']>>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<ResolversTypes['TaxConnection']>, ParentType, ContextType>;
  timeSlotsCalendar?: Resolver<ResolversTypes['TimeSlotConnection'], ParentType, ContextType, Partial<HosttimeSlotsCalendarArgs>>;
  transactionalCurrencies?: Resolver<Array<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  unreadMessagesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  withdrawals?: Resolver<Maybe<ResolversTypes['WithdrawalConnection']>, ParentType, ContextType, RequireFields<HostwithdrawalsArgs, 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Host' | 'Member' | 'Profile' | 'Buyer' | 'Saver' | 'Viewer', ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type OrganizationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  commissionCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  features?: Resolver<ResolversTypes['Features'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Maybe<Array<ResolversTypes['Member']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeaturesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Features'] = ResolversParentTypes['Features']> = ResolversObject<{
  allowEmailReportsForNonTeamMembers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  artistSectionOnEDP?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  attractionTagging?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cardRestrictions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customizableConfirmationEmails?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customizableConfirmationEmailsBeta?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableAdditionalPaymentTypes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  eventSummarySettlementReport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  facilityFee?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  highlander?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hostAddedFeePresets?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mum?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payByInvoice?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paymentPlans?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payoutSettlementReport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paypal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seats?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thirdPartyBarcodes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tieredTickets?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tmAuditReport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  venueTagging?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  waitlistFanOptIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wrstbndIntegration?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type CommissionCodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CommissionCode'] = ResolversParentTypes['CommissionCode']> = ResolversObject<{
  brokerFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  flat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeSlotConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeSlotConnection'] = ResolversParentTypes['TimeSlotConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['TimeSlot']>, ParentType, ContextType, RequireFields<TimeSlotConnectionnodesArgs, 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeSlotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeSlot'] = ResolversParentTypes['TimeSlot']> = ResolversObject<{
  attendees?: Resolver<ResolversTypes['AttendeeConnection'], ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['TimeWithoutTz'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  endStamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orders?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType>;
  rateCapacities?: Resolver<ResolversTypes['RateCapacityConnection'], ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<ResolversTypes['Rate']>>, ParentType, ContextType, Partial<TimeSlotratesArgs>>;
  ratesAvailablity?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<TimeSlotratesAvailablityArgs>>;
  report?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<TimeSlotreportArgs, 'name' | 'columns' | 'clauses'>>;
  sameDayTimeSlots?: Resolver<ResolversTypes['TimeSlotConnection'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['TimeWithoutTz'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  startStamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['TimeSlotState'], ParentType, ContextType>;
  timeSlotReport?: Resolver<ResolversTypes['TimeSlotReport'], ParentType, ContextType>;
  tz?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimeWithoutTzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeWithoutTz'], any> {
  name: 'TimeWithoutTz';
}

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  accessKeys?: Resolver<Maybe<ResolversTypes['AccessKeyConnection']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addOnSalesByDay?: Resolver<Array<ResolversTypes['DailySales']>, ParentType, ContextType, RequireFields<EventaddOnSalesByDayArgs, 'from' | 'to'>>;
  addOns?: Resolver<Array<Maybe<ResolversTypes['AddOn']>>, ParentType, ContextType>;
  additionalImages?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  allAvailableTimeSlots?: Resolver<Array<Maybe<ResolversTypes['TimeSlot']>>, ParentType, ContextType>;
  allImages?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  allRatesFree?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  allTimeSlots?: Resolver<Array<Maybe<ResolversTypes['TimeSlot']>>, ParentType, ContextType>;
  allowWaitlist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  attendees?: Resolver<ResolversTypes['AttendeeConnection'], ParentType, ContextType, RequireFields<EventattendeesArgs, 'sortOrder'>>;
  availableCountries?: Resolver<Array<Maybe<ResolversTypes['CountryCode']>>, ParentType, ContextType>;
  availableTimeSlots?: Resolver<ResolversTypes['TimeSlotConnection'], ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  chartStatus?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  cityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  continentCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverPhoto?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  dcomEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<EventdescriptionArgs, 'format'>>;
  discounts?: Resolver<Maybe<ResolversTypes['DiscountConnection']>, ParentType, ContextType, RequireFields<EventdiscountsArgs, 'include_global_discount_codes'>>;
  eventPhoto?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  facebookPixelCodes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  facebookPixels?: Resolver<Array<ResolversTypes['FacebookPixel']>, ParentType, ContextType>;
  futureTimeSlotCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  futureTimeslotsSalesAmount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  futureTimeslotsTicketsSold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  getTicketsText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  googleAdsSendTos?: Resolver<Maybe<ResolversTypes['GoogleAdsSendTos']>, ParentType, ContextType>;
  googleAdsTrackers?: Resolver<Array<ResolversTypes['GoogleAdsTracker']>, ParentType, ContextType>;
  googleAnalytics4Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleAnalyticsEcommerce?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  googleAnalyticsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasPasses?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasSeats?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenDate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideAttractionsFromTicketmaster?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hideFromWidgets?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Host'], ParentType, ContextType>;
  hostFields?: Resolver<Array<ResolversTypes['HostField']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EventimageUrlArgs, 'height' | 'width'>>;
  images?: Resolver<ResolversTypes['ImageConnection'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lnAllInPricing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mailchimpApiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mailchimpListId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  needsApproval?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nextFutureTimeSlot?: Resolver<Maybe<ResolversTypes['TimeSlot']>, ParentType, ContextType>;
  orderFeeApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType, RequireFields<EventordersArgs, 'sortOrder'>>;
  paymentPlanDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paymentProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentProviderAccountNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentProviderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentSettings?: Resolver<ResolversTypes['PaymentSettings'], ParentType, ContextType>;
  paypal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  printedTicketConfiguration?: Resolver<Maybe<ResolversTypes['PrintedTicketConfiguration']>, ParentType, ContextType>;
  privacy?: Resolver<ResolversTypes['EventPrivacy'], ParentType, ContextType>;
  privateNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EventprivateNoteArgs, 'format'>>;
  publishLaterAt?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  questions?: Resolver<Array<Maybe<ResolversTypes['Question']>>, ParentType, ContextType>;
  rateCustomizations?: Resolver<Array<ResolversTypes['RateCustomization']>, ParentType, ContextType, RequireFields<EventrateCustomizationsArgs, 'event_ids'>>;
  rateStateExists?: Resolver<ResolversTypes['RateStateExists'], ParentType, ContextType>;
  rateUpgrades?: Resolver<Maybe<Array<ResolversTypes['RateUpgrade']>>, ParentType, ContextType>;
  rates?: Resolver<ResolversTypes['RateConnection'], ParentType, ContextType, Partial<EventratesArgs>>;
  rebates?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  referralCodes?: Resolver<Array<ResolversTypes['ReferralCode']>, ParentType, ContextType, RequireFields<EventreferralCodesArgs, 'sortOrder'>>;
  refundOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  refundOffsetType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refundPolicy?: Resolver<Maybe<ResolversTypes['RefundPolicy']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  report?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<EventreportArgs, 'name' | 'columns' | 'clauses'>>;
  salesAmount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  salesByDay?: Resolver<Array<ResolversTypes['DailySales']>, ParentType, ContextType, RequireFields<EventsalesByDayArgs, 'from' | 'to'>>;
  saved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  savers?: Resolver<Maybe<ResolversTypes['SaversConnection']>, ParentType, ContextType>;
  schedules?: Resolver<Maybe<ResolversTypes['ScheduleConnection']>, ParentType, ContextType>;
  seatingMapPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seatsChartKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showQuantityFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  showTicketTypeFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  showTimeOfDayFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slugParam?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialButtons?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  soldOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['EventState'], ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  thirdPartyTickets?: Resolver<ResolversTypes['ThirdPartyTicketConnection'], ParentType, ContextType, RequireFields<EventthirdPartyTicketsArgs, 'page' | 'perPage'>>;
  thirdPartyTicketsProviders?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ticketSalesByDay?: Resolver<Array<ResolversTypes['DailySales']>, ParentType, ContextType, RequireFields<EventticketSalesByDayArgs, 'from' | 'to'>>;
  ticketsSold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeSlotReport?: Resolver<ResolversTypes['TimeSlotReport'], ParentType, ContextType>;
  timeSlots?: Resolver<ResolversTypes['TimeSlotConnection'], ParentType, ContextType, RequireFields<EventtimeSlotsArgs, 'ids'>>;
  timedEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionCurrency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  upcomingTotalCapacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  urgencyIndicatorEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  urgencyIndicatorThreshold?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  virtualInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  waitlistCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  waitlistSubscribers?: Resolver<Maybe<Array<ResolversTypes['WaitlistSubscriber']>>, ParentType, ContextType>;
  wrstbndEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wrstbndIntegration?: Resolver<ResolversTypes['WrstbndIntegration'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BaseEvent'] = ResolversParentTypes['BaseEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Event' | 'EventSet', ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  allImages?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  coverPhoto?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<BaseEventdescriptionArgs, 'format'>>;
  hiddenDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['ImageConnection'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  attended?: Resolver<Maybe<ResolversTypes['EventConnection']>, ParentType, ContextType>;
  attending?: Resolver<Maybe<ResolversTypes['EventConnection']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  business?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverPhotoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hosted?: Resolver<Maybe<ResolversTypes['EventConnection']>, ParentType, ContextType>;
  hosting?: Resolver<Maybe<ResolversTypes['EventConnection']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['ProfileVisibility'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventConnection'] = ResolversParentTypes['EventConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type ImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = ResolversObject<{
  cropHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cropWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cropX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cropY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isGif?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uploadId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ImageurlArgs, 'height' | 'width' | 'cropMode'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImageConnection'] = ResolversParentTypes['ImageConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ImageConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentSettingsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentSettings'] = ResolversParentTypes['PaymentSettings']> = ResolversObject<{
  methodsAvailable?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  methodsEnabled?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  restrictedCardBrands?: Resolver<Array<ResolversTypes['CardBrand']>, ParentType, ContextType>;
  securityMethodsAvailable?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  securityMethodsEnabled?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefundPolicyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RefundPolicy'] = ResolversParentTypes['RefundPolicy']> = ResolversObject<{
  offset?: Resolver<ResolversTypes['RefundOffset'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RefundOffsetType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttendeeConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttendeeConnection'] = ResolversParentTypes['AttendeeConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Attendee']>, ParentType, ContextType, RequireFields<AttendeeConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttendeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Attendee'] = ResolversParentTypes['Attendee']> = ResolversObject<{
  answers?: Resolver<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderItem?: Resolver<ResolversTypes['OrderItem'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['OrderItemState'], ParentType, ContextType>;
  timeSlot?: Resolver<ResolversTypes['TimeSlot'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Rate'] = ResolversParentTypes['Rate']> = ResolversObject<{
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clientGroup?: Resolver<ResolversTypes['RateClientGroup'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  endStamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exclusionRules?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxRedemptions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxTickets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minRedemptionInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minTickets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderItems?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  promotionPill?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseOffset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sales?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  salesAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  soldCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startStamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['RateState'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RateType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemConnection'] = ResolversParentTypes['OrderItemConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<OrderItemConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = ResolversObject<{
  addOn?: Resolver<Maybe<ResolversTypes['AddOn']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  answers?: Resolver<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['Buyer'], ParentType, ContextType>;
  checkInState?: Resolver<ResolversTypes['CheckInState'], ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  costBreakdown?: Resolver<ResolversTypes['OrderCostItemBreakdown'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountRedemption?: Resolver<Maybe<ResolversTypes['DiscountRedemption']>, ParentType, ContextType>;
  editable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  externalMetadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formattedPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullyRefunded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderState?: Resolver<ResolversTypes['OrderState'], ParentType, ContextType>;
  partiallyRefunded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  primaryBuyer?: Resolver<ResolversTypes['Buyer'], ParentType, ContextType>;
  qrCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType>;
  seatLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['OrderItemState'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  upgradeable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  voidable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderCostItemBreakdownResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderCostItemBreakdown'] = ResolversParentTypes['OrderCostItemBreakdown']> = ResolversObject<{
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionIncluded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feeAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<ResolversTypes['CostItemBreakdownFee']>>, ParentType, ContextType>;
  fulfillment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mongoId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  planFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  settlement?: Resolver<Maybe<ResolversTypes['OrderCostBreakdown']>, ParentType, ContextType>;
  subtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<ResolversTypes['CostItemBreakdownTax']>>, ParentType, ContextType>;
  taxesTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalPaidByFan?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transactional?: Resolver<Maybe<ResolversTypes['OrderCostBreakdown']>, ParentType, ContextType>;
  voided?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  voidedCommission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedCommissionIncluded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedFees?: Resolver<Maybe<Array<ResolversTypes['CostItemBreakdownFee']>>, ParentType, ContextType>;
  voidedPayment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedPlanFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedSubtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedTaxes?: Resolver<Maybe<Array<ResolversTypes['CostItemBreakdownTax']>>, ParentType, ContextType>;
  voidedTaxesTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CostItemBreakdownTaxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CostItemBreakdownTax'] = ResolversParentTypes['CostItemBreakdownTax']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  settlement?: Resolver<Maybe<ResolversTypes['CostItemBreakdownTax']>, ParentType, ContextType>;
  taxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactional?: Resolver<Maybe<ResolversTypes['CostItemBreakdownTax']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CostItemBreakdownFeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CostItemBreakdownFee'] = ResolversParentTypes['CostItemBreakdownFee']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  settlement?: Resolver<Maybe<ResolversTypes['CostItemBreakdownFee']>, ParentType, ContextType>;
  src_flat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transactional?: Resolver<Maybe<ResolversTypes['CostItemBreakdownFee']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderCostBreakdownResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderCostBreakdown'] = ResolversParentTypes['OrderCostBreakdown']> = ResolversObject<{
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionIncluded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<ResolversTypes['CostBreakdownItem']>>, ParentType, ContextType>;
  fulfillment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  paymentMadeAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  settlement?: Resolver<Maybe<ResolversTypes['OrderCostBreakdown']>, ParentType, ContextType>;
  subtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<ResolversTypes['CostBreakdownItem']>>, ParentType, ContextType>;
  taxesTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transactional?: Resolver<Maybe<ResolversTypes['OrderCostBreakdown']>, ParentType, ContextType>;
  voidedCommission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedCommissionIncluded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedFees?: Resolver<Maybe<Array<ResolversTypes['CostBreakdownItem']>>, ParentType, ContextType>;
  voidedPayment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedPaymentAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voidedPlanFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedSubtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voidedTaxes?: Resolver<Maybe<Array<ResolversTypes['CostBreakdownItem']>>, ParentType, ContextType>;
  voidedTaxesTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CostBreakdownItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CostBreakdownItem'] = ResolversParentTypes['CostBreakdownItem']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  settlement?: Resolver<Maybe<ResolversTypes['CostBreakdownItem']>, ParentType, ContextType>;
  transactional?: Resolver<Maybe<ResolversTypes['CostBreakdownItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountRedemptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountRedemption'] = ResolversParentTypes['DiscountRedemption']> = ResolversObject<{
  discount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderItem?: Resolver<ResolversTypes['OrderItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  fixed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rate']>>>, ParentType, ContextType>;
  redemptionType?: Resolver<ResolversTypes['DiscountRedemptionType'], ParentType, ContextType>;
  redemptions?: Resolver<ResolversTypes['DiscountRedemptionConnection'], ParentType, ContextType>;
  remaining?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['DiscountState'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountRedemptionConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountRedemptionConnection'] = ResolversParentTypes['DiscountRedemptionConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['DiscountRedemption']>, ParentType, ContextType, RequireFields<DiscountRedemptionConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  accessKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  addOnItems?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType>;
  answers?: Resolver<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  bookingProtected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['Buyer'], ParentType, ContextType>;
  cardBrand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  costBreakdown?: Resolver<ResolversTypes['OrderCostBreakdown'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  editable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  historical?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Host'], ParentType, ContextType>;
  hostPurchased?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invoice?: Resolver<Maybe<ResolversTypes['Invoice']>, ParentType, ContextType>;
  isDcomOrder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberOfAcceptedTransfers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderItems?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType, Partial<OrderorderItemsArgs>>;
  origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentDeclineCode?: Resolver<Maybe<ResolversTypes['PaymentDeclineCode']>, ParentType, ContextType>;
  privateNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerSourceClient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerSourceType?: Resolver<Maybe<ResolversTypes['ProviderSourceType']>, ParentType, ContextType>;
  rateIds?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refundEstimate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<OrderrefundEstimateArgs, 'orderItemRefundDatas'>>;
  state?: Resolver<ResolversTypes['OrderState'], ParentType, ContextType>;
  timeSlot?: Resolver<ResolversTypes['TimeSlot'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  upgradeable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  usedKlarna?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  usedPaymentPlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  validOrderItemsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  voidable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  context?: Resolver<ResolversTypes['AnswerContext'], ParentType, ContextType>;
  editable?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasOther?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  included?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  multiple?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rateIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  rates?: Resolver<Array<Maybe<ResolversTypes['Rate']>>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  selectOptions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AnswerType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BuyerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Buyer'] = ResolversParentTypes['Buyer']> = ResolversObject<{
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<OrderConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = ResolversObject<{
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddOnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddOn'] = ResolversParentTypes['AddOn']> = ResolversObject<{
  currency?: Resolver<Maybe<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['Host']>, ParentType, ContextType>;
  hostPaysCommission?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddOnRate']>>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddOnRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddOnRate'] = ResolversParentTypes['AddOnRate']> = ResolversObject<{
  addOn?: Resolver<Maybe<ResolversTypes['AddOn']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  capacities?: Resolver<Maybe<Array<ResolversTypes['RateCapacity']>>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<AddOnRateimageUrlArgs, 'height' | 'width'>>;
  images?: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType>;
  maxQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxRedemptions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minRedemptionInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  soldCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  srcCurrency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['RateState']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateCapacityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateCapacity'] = ResolversParentTypes['RateCapacity']> = ResolversObject<{
  available?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countAttending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countAvailable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType>;
  rateId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timeSlotId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tax'] = ResolversParentTypes['Tax']> = ResolversObject<{
  addOns?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddOn']>>>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['Host']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = ResolversObject<{
  currency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  exponent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  monetaryAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThirdPartyTicketConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThirdPartyTicketConnection'] = ResolversParentTypes['ThirdPartyTicketConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ThirdPartyTicket']>, ParentType, ContextType, RequireFields<ThirdPartyTicketConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThirdPartyTicketResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThirdPartyTicket'] = ResolversParentTypes['ThirdPartyTicket']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  importSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['OrderState'], ParentType, ContextType>;
  timeSlot?: Resolver<ResolversTypes['TimeSlot'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailySalesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DailySales'] = ResolversParentTypes['DailySales']> = ResolversObject<{
  day?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  salesAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleAdsSendTosResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GoogleAdsSendTos'] = ResolversParentTypes['GoogleAdsSendTos']> = ResolversObject<{
  checkout?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  pageview?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  purchase?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  siteTag?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WrstbndIntegrationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WrstbndIntegration'] = ResolversParentTypes['WrstbndIntegration']> = ResolversObject<{
  apiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  listingId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nfcEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nfcEnabledAllRates?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rfidEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rfidEnabledAllRates?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  wrstbndEventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleAdsTrackerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GoogleAdsTracker'] = ResolversParentTypes['GoogleAdsTracker']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  listingId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sendTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['GoogleAdsTrackerTypes'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FacebookPixelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FacebookPixel'] = ResolversParentTypes['FacebookPixel']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  listingId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pixel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateConnection'] = ResolversParentTypes['RateConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Rate']>, ParentType, ContextType, RequireFields<RateConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateStateExistsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateStateExists'] = ResolversParentTypes['RateStateExists']> = ResolversObject<{
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  soldAtDoor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SaversConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SaversConnection'] = ResolversParentTypes['SaversConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Saver']>, ParentType, ContextType, RequireFields<SaversConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SaverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Saver'] = ResolversParentTypes['Saver']> = ResolversObject<{
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessKeyConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccessKeyConnection'] = ResolversParentTypes['AccessKeyConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['AccessKey']>, ParentType, ContextType, RequireFields<AccessKeyConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessKeyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccessKey'] = ResolversParentTypes['AccessKey']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<ResolversTypes['Rate']>>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['AccessKeyState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountConnection'] = ResolversParentTypes['DiscountConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<DiscountConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReferralCodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReferralCode'] = ResolversParentTypes['ReferralCode']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateCustomizationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateCustomization'] = ResolversParentTypes['RateCustomization']> = ResolversObject<{
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  eventId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  listingId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  soldCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReportResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = ResolversObject<{
  columns?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<ReportpreviewArgs, 'limit' | 'offset'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['CategoryKey'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suggestable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduleConnection'] = ResolversParentTypes['ScheduleConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Schedule']>, ParentType, ContextType, RequireFields<ScheduleConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = ResolversObject<{
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  intervals?: Resolver<Array<ResolversTypes['ScheduleInterval']>, ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['ScheduleState'], ParentType, ContextType>;
  weekdaysAvailable?: Resolver<Array<ResolversTypes['Days']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleIntervalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduleInterval'] = ResolversParentTypes['ScheduleInterval']> = ResolversObject<{
  datesToSkip?: Resolver<Array<Maybe<ResolversTypes['Date']>>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startHour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startMinute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeSlotReportResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeSlotReport'] = ResolversParentTypes['TimeSlotReport']> = ResolversObject<{
  addOnsByDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  addonItemsSold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costItemsSold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitationsByDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  invitationsSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offlineAmountGross?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  salesByDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  ticketItemsSold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticketsAvailableByRate?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  ticketsByDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  ticketsSold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalAddonItemsGross?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalAmountDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCommissionIncluded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalGross?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalPartnerSales?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalTaxes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalTicketItemsGross?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalVatIncluded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HostFieldResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HostField'] = ResolversParentTypes['HostField']> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  editable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasOther?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  included?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  multiple?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rates?: Resolver<Array<ResolversTypes['Rate']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selectOptions?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  sortIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateUpgradeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateUpgrade'] = ResolversParentTypes['RateUpgrade']> = ResolversObject<{
  benefits?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  buttonText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceRateIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetRateId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WaitlistSubscriberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WaitlistSubscriber'] = ResolversParentTypes['WaitlistSubscriber']> = ResolversObject<{
  did_not_buy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host_marketing_opt_in?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  listing_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tm_marketing_opt_in?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrintedTicketConfigurationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PrintedTicketConfiguration'] = ResolversParentTypes['PrintedTicketConfiguration']> = ResolversObject<{
  additionalText1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  additionalText2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  supportingText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketEventName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketEventOrganizer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateCapacityConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateCapacityConnection'] = ResolversParentTypes['RateCapacityConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['RateCapacity']>, ParentType, ContextType, RequireFields<RateCapacityConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnalyticsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Analytics'] = ResolversParentTypes['Analytics']> = ResolversObject<{
  addOnSalesAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<AnalyticsaddOnSalesAmountArgs, 'from' | 'to' | 'currency'>>;
  addOnSalesByDay?: Resolver<Array<ResolversTypes['DailySales']>, ParentType, ContextType, RequireFields<AnalyticsaddOnSalesByDayArgs, 'from' | 'to' | 'currency'>>;
  averageOrderItemCountPerOrder?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<AnalyticsaverageOrderItemCountPerOrderArgs, 'from' | 'to' | 'currency'>>;
  averageOrderItemPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<AnalyticsaverageOrderItemPriceArgs, 'from' | 'to' | 'currency'>>;
  averageOrderPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<AnalyticsaverageOrderPriceArgs, 'from' | 'to' | 'currency'>>;
  buyersLocations?: Resolver<Array<ResolversTypes['BuyersLocation']>, ParentType, ContextType, RequireFields<AnalyticsbuyersLocationsArgs, 'from' | 'to' | 'currency'>>;
  salesAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<AnalyticssalesAmountArgs, 'from' | 'to' | 'currency'>>;
  salesByDay?: Resolver<Array<ResolversTypes['DailySales']>, ParentType, ContextType, RequireFields<AnalyticssalesByDayArgs, 'from' | 'to' | 'currency'>>;
  salesChannels?: Resolver<Array<ResolversTypes['SalesChannel']>, ParentType, ContextType, RequireFields<AnalyticssalesChannelsArgs, 'from' | 'to' | 'currency'>>;
  ticketSalesAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<AnalyticsticketSalesAmountArgs, 'from' | 'to' | 'currency'>>;
  ticketSalesByDay?: Resolver<Array<ResolversTypes['DailySales']>, ParentType, ContextType, RequireFields<AnalyticsticketSalesByDayArgs, 'from' | 'to' | 'currency'>>;
  ticketsSold?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AnalyticsticketsSoldArgs, 'from' | 'to' | 'currency'>>;
  topHourOfPurchase?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<AnalyticstopHourOfPurchaseArgs, 'from' | 'to' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesChannelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesChannel'] = ResolversParentTypes['SalesChannel']> = ResolversObject<{
  channelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salesAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  salesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BuyersLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BuyersLocation'] = ResolversParentTypes['BuyersLocation']> = ResolversObject<{
  buyerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeConnectAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeConnectAccount'] = ResolversParentTypes['StripeConnectAccount']> = ResolversObject<{
  currency?: Resolver<ResolversTypes['StripeConnectCurrencyCode'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentMethods?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomReportConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomReportConnection'] = ResolversParentTypes['CustomReportConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['CustomReport']>, ParentType, ContextType, RequireFields<CustomReportConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomReportResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomReport'] = ResolversParentTypes['CustomReport']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  additionalRecipientIds?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  columns?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  days?: Resolver<Maybe<Array<Maybe<ResolversTypes['Days']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  eventRangeFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventRangeTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  externalRecipientEmails?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  filters?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reportType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  report_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddOnConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddOnConnection'] = ResolversParentTypes['AddOnConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['AddOn']>, ParentType, ContextType, RequireFields<AddOnConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxConnection'] = ResolversParentTypes['TaxConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Tax']>, ParentType, ContextType, RequireFields<TaxConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChargebackConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChargebackConnection'] = ResolversParentTypes['ChargebackConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Chargeback']>, ParentType, ContextType, RequireFields<ChargebackConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChargebackResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Chargeback'] = ResolversParentTypes['Chargeback']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['Buyer'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  display_currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  payment_user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripe_charge_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalConnection'] = ResolversParentTypes['WithdrawalConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Withdrawal']>, ParentType, ContextType, RequireFields<WithdrawalConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdrawal'] = ResolversParentTypes['Withdrawal']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountBalanceConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountBalanceConnection'] = ResolversParentTypes['AccountBalanceConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['AccountBalance']>, ParentType, ContextType, RequireFields<AccountBalanceConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountBalance'] = ResolversParentTypes['AccountBalance']> = ResolversObject<{
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upcoming_funds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  withdrawable_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventSet'] = ResolversParentTypes['EventSet']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  allEvents?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  allImages?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  calendar?: Resolver<ResolversTypes['Calendar'], ParentType, ContextType>;
  coverPhoto?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<EventSetdescriptionArgs, 'format'>>;
  descriptionHtml?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType>;
  hiddenDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['ImageConnection'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = ResolversObject<{
  dates?: Resolver<Array<ResolversTypes['Date']>, ParentType, ContextType>;
  timeSlots?: Resolver<ResolversTypes['TimeSlotConnection'], ParentType, ContextType, Partial<CalendartimeSlotsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  originalOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['TransferState'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = ResolversObject<{
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  business?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  countryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<ResolversTypes['CurrencyCode']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, Partial<ViewereventsArgs>>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBusinessSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  memberships?: Resolver<Maybe<ResolversTypes['MembershipConnection']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  privacyPolicyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smallAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timeSlotDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeSlotStartAt?: Resolver<ResolversTypes['TimeWithoutTz'], ParentType, ContextType>;
  transactedCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venueTagging?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  waitlistFanOptIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MembershipConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MembershipConnection'] = ResolversParentTypes['MembershipConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Membership']>, ParentType, ContextType, RequireFields<MembershipConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MembershipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Membership'] = ResolversParentTypes['Membership']> = ResolversObject<{
  allEvents?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  eventIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Host'], ParentType, ContextType>;
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MembershippermissionArgs, 'for'>>;
  permissions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MembershippermissionsArgs, 'for' | 'any'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WrstbndPasstypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WrstbndPasstype'] = ResolversParentTypes['WrstbndPasstype']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nfcEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nfcEnabledPlaceholder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rateId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rfidEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rfidEnabledPlaceholder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  wrstbndIntegrationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  wrstbndPasstypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  code?: Resolver<ResolversTypes['CountryCode'], ParentType, ContextType>;
  continent?: Resolver<ResolversTypes['Continent'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  geonameId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  universeAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarWidgetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CalendarWidget'] = ResolversParentTypes['CalendarWidget']> = ResolversObject<{
  allowWaitlist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  availableMonths?: Resolver<Array<Maybe<ResolversTypes['AvailableMonths']>>, ParentType, ContextType>;
  calendarDates?: Resolver<Array<Maybe<ResolversTypes['CalendarWidgetDate']>>, ParentType, ContextType>;
  calendarTimeslots?: Resolver<Array<Maybe<ResolversTypes['CalendarWidgetTimeslot']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<CalendarWidgetdescriptionArgs, 'format'>>;
  hasAllLockedRates?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hostId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lnAllInPricing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showQuantityFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  showTicketTypeFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  showTimeOfDayFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  soldOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  soldOutDates?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  timedEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionCurrency?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailableMonthsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AvailableMonths'] = ResolversParentTypes['AvailableMonths']> = ResolversObject<{
  months?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarWidgetTimeslotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CalendarWidgetTimeslot'] = ResolversParentTypes['CalendarWidgetTimeslot']> = ResolversObject<{
  countAvailable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countAvailableByRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDatePassed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  extendedEndAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soldOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCountByRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urgencyMessageLeft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urgencyMessageTimeslot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarWidgetDateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CalendarWidgetDate'] = ResolversParentTypes['CalendarWidgetDate']> = ResolversObject<{
  calendarTimeslotIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showUrgencyIndicator?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpgradableOrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpgradableOrder'] = ResolversParentTypes['UpgradableOrder']> = ResolversObject<{
  answers?: Resolver<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rateIds?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  upgradable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  upgradableOrderItems?: Resolver<Array<ResolversTypes['UpgradableOrderItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpgradableOrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpgradableOrderItem'] = ResolversParentTypes['UpgradableOrderItem']> = ResolversObject<{
  answers?: Resolver<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['OrderItemOwner'], ParentType, ContextType>;
  rateId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  upgradable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  upgradableToRates?: Resolver<Array<Maybe<ResolversTypes['Rate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemOwner'] = ResolversParentTypes['OrderItemOwner']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageTicketsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageTickets'] = ResolversParentTypes['ManageTickets']> = ResolversObject<{
  allowedPaypalAtCountry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  baseCurrency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  hostId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paypal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paypalEnabledAtOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rates?: Resolver<Array<ResolversTypes['ManageTicketsRate']>, ParentType, ContextType>;
  refundOffset?: Resolver<ResolversTypes['RefundOffset'], ParentType, ContextType>;
  refundOffsetType?: Resolver<ResolversTypes['RefundOffsetType'], ParentType, ContextType>;
  srcCurrency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeSlots?: Resolver<Array<ResolversTypes['ManageWhenTimeslot']>, ParentType, ContextType>;
  timedEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urgencyIndicatorEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  urgencyIndicatorThreshold?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wrstbndIntegration?: Resolver<Maybe<ResolversTypes['WrstbndIntegration']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageTicketsRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageTicketsRate'] = ResolversParentTypes['ManageTicketsRate']> = ResolversObject<{
  accessKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clientGroup?: Resolver<Maybe<ResolversTypes['RateClientGroup']>, ParentType, ContextType>;
  dcomEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  endStamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exclusionRules?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRedemptions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxTickets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minRedemptionInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minTickets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  promotionPill?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseOffset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sortIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  srcCurrency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startStamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['RateState'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RateType'], ParentType, ContextType>;
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wrstbndPasstype?: Resolver<Maybe<ResolversTypes['WrstbndPasstype']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageWhenTimeslotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageWhenTimeslot'] = ResolversParentTypes['ManageWhenTimeslot']> = ResolversObject<{
  endAt?: Resolver<ResolversTypes['TimeWithoutTz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  readOnly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['TimeWithoutTz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageWhenTimedEntryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageWhenTimedEntry'] = ResolversParentTypes['ManageWhenTimedEntry']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  schedules?: Resolver<Array<ResolversTypes['Schedule']>, ParentType, ContextType>;
  timeSlots?: Resolver<Array<ResolversTypes['ManageWhenTimeslot']>, ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageWhenRegularEntryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageWhenRegularEntry'] = ResolversParentTypes['ManageWhenRegularEntry']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  customVenueName?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hiddenDate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenFromTicketmaster?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  paypal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paypalEnabledAtOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  privacy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishLaterAt?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  ticketmasterVenueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeSlots?: Resolver<Array<ResolversTypes['ManageWhenTimeslot']>, ParentType, ContextType>;
  tz?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venueTagging?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  virtualInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageCustomizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageCustomize'] = ResolversParentTypes['ManageCustomize']> = ResolversObject<{
  additionalImages?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  contactDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverPhoto?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  eventPhoto?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  privateNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageCustomizeTicketsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageCustomizeTickets'] = ResolversParentTypes['ManageCustomizeTickets']> = ResolversObject<{
  allInPricing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  calendarDates?: Resolver<Array<ResolversTypes['CustomizeTicketsDate']>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstMonthWithEvents?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastMonthWithEvents?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rateCustomizations?: Resolver<Array<ResolversTypes['RateCustomization']>, ParentType, ContextType>;
  rateCustomizationsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rates?: Resolver<Array<ResolversTypes['Rate']>, ParentType, ContextType>;
  timeslots?: Resolver<Array<ResolversTypes['CustomizeTicketsTimeslot']>, ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uniquePriceChangesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizeTicketsDateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizeTicketsDate'] = ResolversParentTypes['CustomizeTicketsDate']> = ResolversObject<{
  calendarTimeslotIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizeTicketsTimeslotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizeTicketsTimeslot'] = ResolversParentTypes['CustomizeTicketsTimeslot']> = ResolversObject<{
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCustomized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPast?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rateIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  soldCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageChannelPartnerSalesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageChannelPartnerSales'] = ResolversParentTypes['ManageChannelPartnerSales']> = ResolversObject<{
  channelPartnerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  channelPartnerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dcomAllowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  remainingTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticketsSold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSales?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PartnerOffersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PartnerOffers'] = ResolversParentTypes['PartnerOffers']> = ResolversObject<{
  channelPartnerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  channelPartnerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maskName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offerPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  serviceFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ticketType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venueFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManageBasicsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ManageBasics'] = ResolversParentTypes['ManageBasics']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attractions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attraction']>>>, ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  customVenueName?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hiddenFromTicketmaster?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  paypal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paypalEnabledAtOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  privacy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishLaterAt?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  ticketmasterVenueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeSlots?: Resolver<Array<ResolversTypes['ManageWhenTimeslot']>, ParentType, ContextType>;
  timedEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tz?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venueTagging?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttractionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Attraction'] = ResolversParentTypes['Attraction']> = ResolversObject<{
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  discoveryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  legacyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketmasterImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeSlotSelectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeSlotSelect'] = ResolversParentTypes['TimeSlotSelect']> = ResolversObject<{
  datesWithTimeSlots?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeslotFilterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeslotFilter'] = ResolversParentTypes['TimeslotFilter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timeslots?: Resolver<Array<Maybe<ResolversTypes['TimeslotFilterTimeslot']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeslotFilterTimeslotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeslotFilterTimeslot'] = ResolversParentTypes['TimeslotFilterTimeslot']> = ResolversObject<{
  countAttending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countAvailable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  endStamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  startStamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tz?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TicketmasterVenuesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TicketmasterVenuesConnection'] = ResolversParentTypes['TicketmasterVenuesConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['TicketmasterVenue']>, ParentType, ContextType, RequireFields<TicketmasterVenuesConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TicketmasterVenueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TicketmasterVenue'] = ResolversParentTypes['TicketmasterVenue']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['Address_TicketmasterVenue']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dma?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location_TicketmasterVenue']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State_TicketmasterVenue']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type State_TicketmasterVenueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['State_TicketmasterVenue'] = ResolversParentTypes['State_TicketmasterVenue']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Address_TicketmasterVenueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Address_TicketmasterVenue'] = ResolversParentTypes['Address_TicketmasterVenue']> = ResolversObject<{
  line1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Location_TicketmasterVenueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Location_TicketmasterVenue'] = ResolversParentTypes['Location_TicketmasterVenue']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TicketmasterAttractionConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TicketmasterAttractionConnection'] = ResolversParentTypes['TicketmasterAttractionConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['TicketmasterAttraction']>, ParentType, ContextType, RequireFields<TicketmasterAttractionConnectionnodesArgs, 'limit' | 'offset'>>;
  pagination?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TicketmasterAttractionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TicketmasterAttraction'] = ResolversParentTypes['TicketmasterAttraction']> = ResolversObject<{
  discoveryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  legacyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderCollectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReaderCollection'] = ResolversParentTypes['StripeTerminalReaderCollection']> = ResolversObject<{
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['StripeTerminalReader']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReader'] = ResolversParentTypes['StripeTerminalReader']> = ResolversObject<{
  action?: Resolver<Maybe<ResolversTypes['StripeTerminalReaderAction']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  device_sw_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  livemode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serial_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReaderAction'] = ResolversParentTypes['StripeTerminalReaderAction']> = ResolversObject<{
  failure_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failure_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  process_payment_intent?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  process_setup_intent?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  refund_payment?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  set_reader_display?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalLocation'] = ResolversParentTypes['StripeTerminalLocation']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['StripeTerminalLocationAddress']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  livemode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalLocationAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalLocationAddress'] = ResolversParentTypes['StripeTerminalLocationAddress']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postal_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountCreatePayload'] = ResolversParentTypes['DiscountCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountDeletePayload'] = ResolversParentTypes['DiscountDeletePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountsUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountsUpdatePayload'] = ResolversParentTypes['DiscountsUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<Array<ResolversTypes['Error']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountsCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DiscountsCreatePayload'] = ResolversParentTypes['DiscountsCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<ResolversTypes['Discount']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HostGaIntegrationUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HostGaIntegrationUpdatePayload'] = ResolversParentTypes['HostGaIntegrationUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['Host']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocaleChangePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LocaleChangePayload'] = ResolversParentTypes['LocaleChangePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  viewer?: Resolver<Maybe<ResolversTypes['Viewer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SeatsSyncRatesPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SeatsSyncRatesPayload'] = ResolversParentTypes['SeatsSyncRatesPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SeatsPublishDraftPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SeatsPublishDraftPayload'] = ResolversParentTypes['SeatsPublishDraftPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateCreatePayload'] = ResolversParentTypes['RateCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Rate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateUpdatePayload'] = ResolversParentTypes['RateUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Rate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RatesUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RatesUpdatePayload'] = ResolversParentTypes['RatesUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<ResolversTypes['Rate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateUpgradeCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateUpgradeCreatePayload'] = ResolversParentTypes['RateUpgradeCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  rate_upgrade?: Resolver<Maybe<ResolversTypes['RateUpgrade']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateUpgradeUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateUpgradeUpdatePayload'] = ResolversParentTypes['RateUpgradeUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  rate_upgrade?: Resolver<Maybe<ResolversTypes['RateUpgrade']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RateUpgradeDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RateUpgradeDeletePayload'] = ResolversParentTypes['RateUpgradeDeletePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  rate_upgrade?: Resolver<Maybe<ResolversTypes['RateUpgrade']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventSavePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventSavePayload'] = ResolversParentTypes['EventSavePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventUpdatePayload'] = ResolversParentTypes['EventUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventCreatePayload'] = ResolversParentTypes['EventCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventDuplicatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventDuplicatePayload'] = ResolversParentTypes['EventDuplicatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventPublishPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventPublishPayload'] = ResolversParentTypes['EventPublishPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventUnpublishPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventUnpublishPayload'] = ResolversParentTypes['EventUnpublishPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventDeletePayload'] = ResolversParentTypes['EventDeletePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventReportPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventReportPayload'] = ResolversParentTypes['EventReportPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttendeesMessagePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttendeesMessagePayload'] = ResolversParentTypes['AttendeesMessagePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HostFieldDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HostFieldDeletePayload'] = ResolversParentTypes['HostFieldDeletePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  hostField?: Resolver<Maybe<ResolversTypes['HostField']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeSlotUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeSlotUpdatePayload'] = ResolversParentTypes['TimeSlotUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  timeSlot?: Resolver<Maybe<ResolversTypes['TimeSlot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeslotRateCustomizationPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeslotRateCustomizationPayload'] = ResolversParentTypes['TimeslotRateCustomizationPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rateCustomizationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rate']>>>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uniquePriceChangesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventSetReportPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventSetReportPayload'] = ResolversParentTypes['EventSetReportPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventSet?: Resolver<Maybe<ResolversTypes['EventSet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomReportCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomReportCreatePayload'] = ResolversParentTypes['CustomReportCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_report?: Resolver<Maybe<ResolversTypes['CustomReport']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomReportDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomReportDeletePayload'] = ResolversParentTypes['CustomReportDeletePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_report?: Resolver<Maybe<ResolversTypes['CustomReport']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomReportUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomReportUpdatePayload'] = ResolversParentTypes['CustomReportUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_report?: Resolver<Maybe<ResolversTypes['CustomReport']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferDeclinePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferDeclinePayload'] = ResolversParentTypes['TransferDeclinePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferAcceptPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferAcceptPayload'] = ResolversParentTypes['TransferAcceptPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddOnCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddOnCreatePayload'] = ResolversParentTypes['AddOnCreatePayload']> = ResolversObject<{
  addOn?: Resolver<Maybe<ResolversTypes['AddOn']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddOnDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddOnDeletePayload'] = ResolversParentTypes['AddOnDeletePayload']> = ResolversObject<{
  addOn?: Resolver<Maybe<ResolversTypes['AddOn']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddOnUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddOnUpdatePayload'] = ResolversParentTypes['AddOnUpdatePayload']> = ResolversObject<{
  addOn?: Resolver<Maybe<ResolversTypes['AddOn']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxCreatePayload'] = ResolversParentTypes['TaxCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['Tax']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemCheckInPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemCheckInPayload'] = ResolversParentTypes['OrderItemCheckInPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemCheckOutPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemCheckOutPayload'] = ResolversParentTypes['OrderItemCheckOutPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExternalMetadataUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExternalMetadataUpdatePayload'] = ResolversParentTypes['ExternalMetadataUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemResendPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemResendPayload'] = ResolversParentTypes['OrderItemResendPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  orderItem?: Resolver<ResolversTypes['OrderItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemAttendeeInfoChangePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemAttendeeInfoChangePayload'] = ResolversParentTypes['OrderItemAttendeeInfoChangePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Any'], any> {
  name: 'Any';
}

export type OrderResendPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderResendPayload'] = ResolversParentTypes['OrderResendPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderBuyerInfoChangePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderBuyerInfoChangePayload'] = ResolversParentTypes['OrderBuyerInfoChangePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarkInvoiceAsPaidPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarkInvoiceAsPaidPayload'] = ResolversParentTypes['MarkInvoiceAsPaidPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderRefundPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderRefundPayload'] = ResolversParentTypes['OrderRefundPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderTimeSlotUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderTimeSlotUpdatePayload'] = ResolversParentTypes['OrderTimeSlotUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BulkOrderTimeSlotUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BulkOrderTimeSlotUpdatePayload'] = ResolversParentTypes['BulkOrderTimeSlotUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderUpgradePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderUpgradePayload'] = ResolversParentTypes['OrderUpgradePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderApprovePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderApprovePayload'] = ResolversParentTypes['OrderApprovePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderDeclinePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderDeclinePayload'] = ResolversParentTypes['OrderDeclinePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResendEmailConfirmationPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResendEmailConfirmationPayload'] = ResolversParentTypes['ResendEmailConfirmationPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelPartnerOffersStatusTogglePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChannelPartnerOffersStatusTogglePayload'] = ResolversParentTypes['ChannelPartnerOffersStatusTogglePayload']> = ResolversObject<{
  channelPartnerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channelPartnerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportThirdPartyTicketPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImportThirdPartyTicketPayload'] = ResolversParentTypes['ImportThirdPartyTicketPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  importedCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThirdPartyTicketDeleteByProviderPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThirdPartyTicketDeleteByProviderPayload'] = ResolversParentTypes['ThirdPartyTicketDeleteByProviderPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  numDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WaitlistSubscriberCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WaitlistSubscriberCreatePayload'] = ResolversParentTypes['WaitlistSubscriberCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  waitlist_subscriber?: Resolver<Maybe<ResolversTypes['WaitlistSubscriber']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReaderCreatePayload'] = ResolversParentTypes['StripeTerminalReaderCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  terminalReaderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderUpdatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReaderUpdatePayload'] = ResolversParentTypes['StripeTerminalReaderUpdatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  stripeTerminalReader?: Resolver<Maybe<ResolversTypes['StripeTerminalReader']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderDeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReaderDeletePayload'] = ResolversParentTypes['StripeTerminalReaderDeletePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalLocationCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalLocationCreatePayload'] = ResolversParentTypes['StripeTerminalLocationCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  terminalLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTerminalReaderCancelPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTerminalReaderCancelPayload'] = ResolversParentTypes['StripeTerminalReaderCancelPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrintedTicketConfigurationManagePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PrintedTicketConfigurationManagePayload'] = ResolversParentTypes['PrintedTicketConfigurationManagePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  printedTicketConfiguration?: Resolver<Maybe<ResolversTypes['PrintedTicketConfiguration']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrintingLogCreatePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PrintingLogCreatePayload'] = ResolversParentTypes['PrintingLogCreatePayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  printingLog?: Resolver<Maybe<ResolversTypes['PrintingLog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrintingLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PrintingLog'] = ResolversParentTypes['PrintingLog']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['PrintingLogPage']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['PrintingLogSource']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = ResolversObject<{
  abilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilitiesListItem']>>>, ParentType, ContextType>;
  attacks?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttacksListItem']>>>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dexId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energyType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evolveFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  illustrator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  legal?: Resolver<ResolversTypes['Legal'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  localId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regulationMark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resistances?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeakResListItem']>>>, ParentType, ContextType>;
  retreat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trainerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  variants?: Resolver<Maybe<ResolversTypes['Variants']>, ParentType, ContextType>;
  weaknesses?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeakResListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AbilitiesListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AbilitiesListItem'] = ResolversParentTypes['AbilitiesListItem']> = ResolversObject<{
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttacksListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttacksListItem'] = ResolversParentTypes['AttacksListItem']> = ResolversObject<{
  cost?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  damage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LegalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Legal'] = ResolversParentTypes['Legal']> = ResolversObject<{
  expanded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  standard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeakResListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WeakResListItem'] = ResolversParentTypes['WeakResListItem']> = ResolversObject<{
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VariantsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Variants'] = ResolversParentTypes['Variants']> = ResolversObject<{
  firstEdition?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  holo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  normal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reverse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wPromo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = ResolversObject<{
  cardCount?: Resolver<ResolversTypes['CardCount'], ParentType, ContextType>;
  cards?: Resolver<Array<Maybe<ResolversTypes['Card']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serie?: Resolver<ResolversTypes['Serie'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tcgOnline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CardCountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CardCount'] = ResolversParentTypes['CardCount']> = ResolversObject<{
  firstEd?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  normal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  official?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reverse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SerieResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Serie'] = ResolversParentTypes['Serie']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sets?: Resolver<Array<Maybe<ResolversTypes['Set']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StringEndpointResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StringEndpoint'] = ResolversParentTypes['StringEndpoint']> = ResolversObject<{
  cards?: Resolver<Array<Maybe<ResolversTypes['Card']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Host?: HostResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  Features?: FeaturesResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  CommissionCode?: CommissionCodeResolvers<ContextType>;
  TimeSlotConnection?: TimeSlotConnectionResolvers<ContextType>;
  TimeSlot?: TimeSlotResolvers<ContextType>;
  TimeWithoutTz?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  BaseEvent?: BaseEventResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  EventConnection?: EventConnectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  ImageConnection?: ImageConnectionResolvers<ContextType>;
  PaymentSettings?: PaymentSettingsResolvers<ContextType>;
  RefundPolicy?: RefundPolicyResolvers<ContextType>;
  AttendeeConnection?: AttendeeConnectionResolvers<ContextType>;
  Attendee?: AttendeeResolvers<ContextType>;
  Rate?: RateResolvers<ContextType>;
  OrderItemConnection?: OrderItemConnectionResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderCostItemBreakdown?: OrderCostItemBreakdownResolvers<ContextType>;
  CostItemBreakdownTax?: CostItemBreakdownTaxResolvers<ContextType>;
  CostItemBreakdownFee?: CostItemBreakdownFeeResolvers<ContextType>;
  OrderCostBreakdown?: OrderCostBreakdownResolvers<ContextType>;
  CostBreakdownItem?: CostBreakdownItemResolvers<ContextType>;
  DiscountRedemption?: DiscountRedemptionResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  DiscountRedemptionConnection?: DiscountRedemptionConnectionResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Answer?: AnswerResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Buyer?: BuyerResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  AddOn?: AddOnResolvers<ContextType>;
  AddOnRate?: AddOnRateResolvers<ContextType>;
  RateCapacity?: RateCapacityResolvers<ContextType>;
  Tax?: TaxResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  ThirdPartyTicketConnection?: ThirdPartyTicketConnectionResolvers<ContextType>;
  ThirdPartyTicket?: ThirdPartyTicketResolvers<ContextType>;
  DailySales?: DailySalesResolvers<ContextType>;
  GoogleAdsSendTos?: GoogleAdsSendTosResolvers<ContextType>;
  WrstbndIntegration?: WrstbndIntegrationResolvers<ContextType>;
  GoogleAdsTracker?: GoogleAdsTrackerResolvers<ContextType>;
  FacebookPixel?: FacebookPixelResolvers<ContextType>;
  RateConnection?: RateConnectionResolvers<ContextType>;
  RateStateExists?: RateStateExistsResolvers<ContextType>;
  SaversConnection?: SaversConnectionResolvers<ContextType>;
  Saver?: SaverResolvers<ContextType>;
  AccessKeyConnection?: AccessKeyConnectionResolvers<ContextType>;
  AccessKey?: AccessKeyResolvers<ContextType>;
  DiscountConnection?: DiscountConnectionResolvers<ContextType>;
  ReferralCode?: ReferralCodeResolvers<ContextType>;
  RateCustomization?: RateCustomizationResolvers<ContextType>;
  Report?: ReportResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  ScheduleConnection?: ScheduleConnectionResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  ScheduleInterval?: ScheduleIntervalResolvers<ContextType>;
  TimeSlotReport?: TimeSlotReportResolvers<ContextType>;
  HostField?: HostFieldResolvers<ContextType>;
  RateUpgrade?: RateUpgradeResolvers<ContextType>;
  WaitlistSubscriber?: WaitlistSubscriberResolvers<ContextType>;
  PrintedTicketConfiguration?: PrintedTicketConfigurationResolvers<ContextType>;
  RateCapacityConnection?: RateCapacityConnectionResolvers<ContextType>;
  Analytics?: AnalyticsResolvers<ContextType>;
  SalesChannel?: SalesChannelResolvers<ContextType>;
  BuyersLocation?: BuyersLocationResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  StripeConnectAccount?: StripeConnectAccountResolvers<ContextType>;
  CustomReportConnection?: CustomReportConnectionResolvers<ContextType>;
  CustomReport?: CustomReportResolvers<ContextType>;
  AddOnConnection?: AddOnConnectionResolvers<ContextType>;
  TaxConnection?: TaxConnectionResolvers<ContextType>;
  ChargebackConnection?: ChargebackConnectionResolvers<ContextType>;
  Chargeback?: ChargebackResolvers<ContextType>;
  WithdrawalConnection?: WithdrawalConnectionResolvers<ContextType>;
  Withdrawal?: WithdrawalResolvers<ContextType>;
  AccountBalanceConnection?: AccountBalanceConnectionResolvers<ContextType>;
  AccountBalance?: AccountBalanceResolvers<ContextType>;
  EventSet?: EventSetResolvers<ContextType>;
  Calendar?: CalendarResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
  MembershipConnection?: MembershipConnectionResolvers<ContextType>;
  Membership?: MembershipResolvers<ContextType>;
  WrstbndPasstype?: WrstbndPasstypeResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CalendarWidget?: CalendarWidgetResolvers<ContextType>;
  AvailableMonths?: AvailableMonthsResolvers<ContextType>;
  CalendarWidgetTimeslot?: CalendarWidgetTimeslotResolvers<ContextType>;
  CalendarWidgetDate?: CalendarWidgetDateResolvers<ContextType>;
  UpgradableOrder?: UpgradableOrderResolvers<ContextType>;
  UpgradableOrderItem?: UpgradableOrderItemResolvers<ContextType>;
  OrderItemOwner?: OrderItemOwnerResolvers<ContextType>;
  ManageTickets?: ManageTicketsResolvers<ContextType>;
  ManageTicketsRate?: ManageTicketsRateResolvers<ContextType>;
  ManageWhenTimeslot?: ManageWhenTimeslotResolvers<ContextType>;
  ManageWhenTimedEntry?: ManageWhenTimedEntryResolvers<ContextType>;
  ManageWhenRegularEntry?: ManageWhenRegularEntryResolvers<ContextType>;
  ManageCustomize?: ManageCustomizeResolvers<ContextType>;
  ManageCustomizeTickets?: ManageCustomizeTicketsResolvers<ContextType>;
  CustomizeTicketsDate?: CustomizeTicketsDateResolvers<ContextType>;
  CustomizeTicketsTimeslot?: CustomizeTicketsTimeslotResolvers<ContextType>;
  ManageChannelPartnerSales?: ManageChannelPartnerSalesResolvers<ContextType>;
  PartnerOffers?: PartnerOffersResolvers<ContextType>;
  ManageBasics?: ManageBasicsResolvers<ContextType>;
  Attraction?: AttractionResolvers<ContextType>;
  TimeSlotSelect?: TimeSlotSelectResolvers<ContextType>;
  TimeslotFilter?: TimeslotFilterResolvers<ContextType>;
  TimeslotFilterTimeslot?: TimeslotFilterTimeslotResolvers<ContextType>;
  TicketmasterVenuesConnection?: TicketmasterVenuesConnectionResolvers<ContextType>;
  TicketmasterVenue?: TicketmasterVenueResolvers<ContextType>;
  State_TicketmasterVenue?: State_TicketmasterVenueResolvers<ContextType>;
  Address_TicketmasterVenue?: Address_TicketmasterVenueResolvers<ContextType>;
  Location_TicketmasterVenue?: Location_TicketmasterVenueResolvers<ContextType>;
  TicketmasterAttractionConnection?: TicketmasterAttractionConnectionResolvers<ContextType>;
  TicketmasterAttraction?: TicketmasterAttractionResolvers<ContextType>;
  StripeTerminalReaderCollection?: StripeTerminalReaderCollectionResolvers<ContextType>;
  StripeTerminalReader?: StripeTerminalReaderResolvers<ContextType>;
  StripeTerminalReaderAction?: StripeTerminalReaderActionResolvers<ContextType>;
  StripeTerminalLocation?: StripeTerminalLocationResolvers<ContextType>;
  StripeTerminalLocationAddress?: StripeTerminalLocationAddressResolvers<ContextType>;
  DiscountCreatePayload?: DiscountCreatePayloadResolvers<ContextType>;
  DiscountDeletePayload?: DiscountDeletePayloadResolvers<ContextType>;
  DiscountsUpdatePayload?: DiscountsUpdatePayloadResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  DiscountsCreatePayload?: DiscountsCreatePayloadResolvers<ContextType>;
  HostGaIntegrationUpdatePayload?: HostGaIntegrationUpdatePayloadResolvers<ContextType>;
  LocaleChangePayload?: LocaleChangePayloadResolvers<ContextType>;
  SeatsSyncRatesPayload?: SeatsSyncRatesPayloadResolvers<ContextType>;
  SeatsPublishDraftPayload?: SeatsPublishDraftPayloadResolvers<ContextType>;
  RateCreatePayload?: RateCreatePayloadResolvers<ContextType>;
  RateUpdatePayload?: RateUpdatePayloadResolvers<ContextType>;
  RatesUpdatePayload?: RatesUpdatePayloadResolvers<ContextType>;
  RateUpgradeCreatePayload?: RateUpgradeCreatePayloadResolvers<ContextType>;
  RateUpgradeUpdatePayload?: RateUpgradeUpdatePayloadResolvers<ContextType>;
  RateUpgradeDeletePayload?: RateUpgradeDeletePayloadResolvers<ContextType>;
  EventSavePayload?: EventSavePayloadResolvers<ContextType>;
  EventUpdatePayload?: EventUpdatePayloadResolvers<ContextType>;
  EventCreatePayload?: EventCreatePayloadResolvers<ContextType>;
  EventDuplicatePayload?: EventDuplicatePayloadResolvers<ContextType>;
  EventPublishPayload?: EventPublishPayloadResolvers<ContextType>;
  EventUnpublishPayload?: EventUnpublishPayloadResolvers<ContextType>;
  EventDeletePayload?: EventDeletePayloadResolvers<ContextType>;
  EventReportPayload?: EventReportPayloadResolvers<ContextType>;
  AttendeesMessagePayload?: AttendeesMessagePayloadResolvers<ContextType>;
  HostFieldDeletePayload?: HostFieldDeletePayloadResolvers<ContextType>;
  TimeSlotUpdatePayload?: TimeSlotUpdatePayloadResolvers<ContextType>;
  TimeslotRateCustomizationPayload?: TimeslotRateCustomizationPayloadResolvers<ContextType>;
  EventSetReportPayload?: EventSetReportPayloadResolvers<ContextType>;
  CustomReportCreatePayload?: CustomReportCreatePayloadResolvers<ContextType>;
  CustomReportDeletePayload?: CustomReportDeletePayloadResolvers<ContextType>;
  CustomReportUpdatePayload?: CustomReportUpdatePayloadResolvers<ContextType>;
  TransferDeclinePayload?: TransferDeclinePayloadResolvers<ContextType>;
  TransferAcceptPayload?: TransferAcceptPayloadResolvers<ContextType>;
  AddOnCreatePayload?: AddOnCreatePayloadResolvers<ContextType>;
  AddOnDeletePayload?: AddOnDeletePayloadResolvers<ContextType>;
  AddOnUpdatePayload?: AddOnUpdatePayloadResolvers<ContextType>;
  TaxCreatePayload?: TaxCreatePayloadResolvers<ContextType>;
  OrderItemCheckInPayload?: OrderItemCheckInPayloadResolvers<ContextType>;
  OrderItemCheckOutPayload?: OrderItemCheckOutPayloadResolvers<ContextType>;
  ExternalMetadataUpdatePayload?: ExternalMetadataUpdatePayloadResolvers<ContextType>;
  OrderItemResendPayload?: OrderItemResendPayloadResolvers<ContextType>;
  OrderItemAttendeeInfoChangePayload?: OrderItemAttendeeInfoChangePayloadResolvers<ContextType>;
  Any?: GraphQLScalarType;
  OrderResendPayload?: OrderResendPayloadResolvers<ContextType>;
  OrderBuyerInfoChangePayload?: OrderBuyerInfoChangePayloadResolvers<ContextType>;
  MarkInvoiceAsPaidPayload?: MarkInvoiceAsPaidPayloadResolvers<ContextType>;
  OrderRefundPayload?: OrderRefundPayloadResolvers<ContextType>;
  OrderTimeSlotUpdatePayload?: OrderTimeSlotUpdatePayloadResolvers<ContextType>;
  BulkOrderTimeSlotUpdatePayload?: BulkOrderTimeSlotUpdatePayloadResolvers<ContextType>;
  OrderUpgradePayload?: OrderUpgradePayloadResolvers<ContextType>;
  OrderApprovePayload?: OrderApprovePayloadResolvers<ContextType>;
  OrderDeclinePayload?: OrderDeclinePayloadResolvers<ContextType>;
  ResendEmailConfirmationPayload?: ResendEmailConfirmationPayloadResolvers<ContextType>;
  ChannelPartnerOffersStatusTogglePayload?: ChannelPartnerOffersStatusTogglePayloadResolvers<ContextType>;
  ImportThirdPartyTicketPayload?: ImportThirdPartyTicketPayloadResolvers<ContextType>;
  ThirdPartyTicketDeleteByProviderPayload?: ThirdPartyTicketDeleteByProviderPayloadResolvers<ContextType>;
  WaitlistSubscriberCreatePayload?: WaitlistSubscriberCreatePayloadResolvers<ContextType>;
  StripeTerminalReaderCreatePayload?: StripeTerminalReaderCreatePayloadResolvers<ContextType>;
  StripeTerminalReaderUpdatePayload?: StripeTerminalReaderUpdatePayloadResolvers<ContextType>;
  StripeTerminalReaderDeletePayload?: StripeTerminalReaderDeletePayloadResolvers<ContextType>;
  StripeTerminalLocationCreatePayload?: StripeTerminalLocationCreatePayloadResolvers<ContextType>;
  StripeTerminalReaderCancelPayload?: StripeTerminalReaderCancelPayloadResolvers<ContextType>;
  PrintedTicketConfigurationManagePayload?: PrintedTicketConfigurationManagePayloadResolvers<ContextType>;
  PrintingLogCreatePayload?: PrintingLogCreatePayloadResolvers<ContextType>;
  PrintingLog?: PrintingLogResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  AbilitiesListItem?: AbilitiesListItemResolvers<ContextType>;
  AttacksListItem?: AttacksListItemResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Legal?: LegalResolvers<ContextType>;
  WeakResListItem?: WeakResListItemResolvers<ContextType>;
  Variants?: VariantsResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  CardCount?: CardCountResolvers<ContextType>;
  Serie?: SerieResolvers<ContextType>;
  StringEndpoint?: StringEndpointResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  locale?: localeDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = CanopyapiTypes.Context & TcgdexTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/tcgdex/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/canopyapi/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = {"endpoint":"/api/graphql","port":4001} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const canopyapiTransforms = [];
const tcgdexTransforms = [];
const additionalTypeDefs = [] as any[];
const canopyapiHandler = new GraphqlHandler({
              name: "canopyapi",
              config: {"endpoint":"https://www.universe.com/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("canopyapi"),
              logger: logger.child("canopyapi"),
              importFn,
            });
const tcgdexHandler = new GraphqlHandler({
              name: "tcgdex",
              config: {"endpoint":"https://api.tcgdex.net/v2/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("tcgdex"),
              logger: logger.child("tcgdex"),
              importFn,
            });
sources[0] = {
          name: 'canopyapi',
          handler: canopyapiHandler,
          transforms: canopyapiTransforms
        }
sources[1] = {
          name: 'tcgdex',
          handler: tcgdexHandler,
          transforms: tcgdexTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"endpoint":"/api/graphql","port":4001},
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));