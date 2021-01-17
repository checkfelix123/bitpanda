export interface Welcome8 {
  data: Data;
}

export interface Data {
  type: string;
  attributes: DataAttributes;
}

export interface DataAttributes {
  bfc: Bfc[];
  aml: Aml[];
  best_rewards: BestReward[];
  payout_providers: PayoutProvider[];
  asset_types: AssetType[];
  asset_groups: any[];
  commodities: Commodity[];
  cryptocoins: Commodity[];
  indexes: Commodity[];
  fiats: Fiat[];
  languages: Language[];
  newsletters: Newsletter[];
  countries: Country[];
  profile_report_reasons: ProfileReportReason[];
  vip_levels_thresholds: VipLevelsThreshold[];
}

export interface Aml {
  type: string;
  attributes: AmlAttributes;
}

export interface AmlAttributes {
  aml_active: boolean;
}

export interface AssetType {
  type: string;
  attributes: AssetTypeAttributes;
  id: string;
}

export interface AssetTypeAttributes {
  asset_type_name: string;
  sort: number;
}

export interface BestReward {
  type: string;
  attributes: BestRewardAttributes;
}

export interface BestRewardAttributes {
  start_date: NextRewardAt;
  banner_text: string;
  show_banner: boolean;
  next_reward_at: NextRewardAt;
  banner_text_deu: string;
  banner_text_eng: string;
  banner_text_fra: string;
  banner_text_ita: string;
  banner_text_pol: string;
  banner_text_spa: string;
  banner_text_tur: string;
}

export interface NextRewardAt {
  date_iso8601: Date;
  unix: string;
}

export interface Bfc {
  type: string;
  attributes: BfcAttributes;
}

export interface BfcAttributes {
  bfc_deduction: string;
  bfc_min_value_eur: number;
  bfc_enabled: boolean;
  bfc_upselling_lower_limit: string;
  bfc_upselling_best_recommended_lower_factor: number;
  bfc_upselling_best_recommended_upper_factor: number;
}

export interface Commodity {
  type: AssetTypeNameEnum;
  attributes: CommodityAttributes;
  id: string;
}

export interface CommodityAttributes {
  symbol: string;
  name: string;
  sort: number;
  asset_type_name: AssetTypeNameEnum;
  asset_group_name: AssetGroupName;
  url_check_address?: string;
  url_check_transaction?: string;
  buy_active: boolean;
  sell_active: boolean;
  withdraw_active: boolean;
  deposit_active: boolean;
  transfer_active: boolean;
  available: boolean;
  maintenance_enabled: boolean;
  min_buy_eur: string;
  min_sell_eur: string;
  min_withdraw_eur: string;
  min_withdrawal: string;
  default_sell_amount: string;
  precision_for_fiat_price: number;
  precision_for_coins: number;
  precision_for_tx: number;
  precision_for_internal: number;
  wallet_min_deposit?: string;
  wallet_small_deposit?: string;
  wallet_small_deposit_fee?: string;
  avg_price: string;
  color: string;
  wallet_withdraw_fee?: string;
  change_24h: string;
  change_24h_amount: string;
  change_1w: string;
  change_1w_amount: string;
  change_1m: string;
  change_1m_amount: string;
  change_1y: string;
  change_1y_amount: string;
  logo: string;
  logo_dark: string;
  support_destination_tag: boolean;
  support_destination_tag_type: boolean;
  circulating_supply?: string;
  allowed_unverified: boolean;
  allowed_documented: boolean;
  allowed_verified: boolean;
  measurement_unit?: string;
  ieo_phases?: IeoPhase[];
  index_only: boolean;
  info: string;
  unavailable_reason: string;
  maintenance_reason: string;
  wallet_info: string;
  extra_info: string;
  investment_info: string;
  info_integration: string;
  description: string;
  info_deu: string;
  info_eng: string;
  info_fra: string;
  info_ita: string;
  info_pol: string;
  info_spa: string;
  info_tur: string;
  unavailable_reason_deu: string;
  unavailable_reason_eng: string;
  unavailable_reason_fra: string;
  unavailable_reason_ita: string;
  unavailable_reason_pol: string;
  unavailable_reason_spa: string;
  unavailable_reason_tur: string;
  maintenance_reason_deu: string;
  maintenance_reason_eng: string;
  maintenance_reason_fra: string;
  maintenance_reason_ita: string;
  maintenance_reason_pol: string;
  maintenance_reason_spa: string;
  maintenance_reason_tur: string;
  wallet_info_deu: string;
  wallet_info_eng: string;
  wallet_info_fra: string;
  wallet_info_ita: string;
  wallet_info_pol: string;
  wallet_info_spa: string;
  wallet_info_tur: string;
  extra_info_deu: string;
  extra_info_eng: string;
  extra_info_fra: string;
  extra_info_ita: string;
  extra_info_pol: string;
  extra_info_spa: string;
  extra_info_tur: string;
  investment_info_deu: string;
  investment_info_eng: string;
  investment_info_fra: string;
  investment_info_ita: string;
  investment_info_pol: string;
  investment_info_spa: string;
  investment_info_tur: string;
  info_integration_deu: string;
  info_integration_eng: string;
  info_integration_fra: string;
  info_integration_ita: string;
  info_integration_pol: string;
  info_integration_spa: string;
  info_integration_tur: string;
  description_deu: string;
  description_eng: string;
  description_fra: string;
  description_ita: string;
  description_pol: string;
  description_spa: string;
  description_tur: string;
  android_supported_version?: string;
  ios_supported_version?: IosSupportedVersion;
  family?: Family;
  index_assets?: IndexAsset[];
  index_provider?: string;
  index_original_fiat_symbol?: string;
}

export enum AssetGroupName {
  Coin = 'coin',
  Index = 'index',
  Metal = 'metal',
  Token = 'token',
}

export enum AssetTypeNameEnum {
  Commodity = 'commodity',
  Cryptocoin = 'cryptocoin',
  Index = 'index',
}

export enum Family {
  Eth = 'ETH',
  Neo = 'NEO',
}

export interface IeoPhase {
  type: string;
  attributes: IeoPhaseAttributes;
  id: string;
}

export interface IeoPhaseAttributes {
  name: string;
  phase_number: number;
  start_date: NextRewardAt;
  end_date: NextRewardAt;
  max_stock: string;
  price: string;
  active: boolean;
}

export interface IndexAsset {
  attributes: IndexAssetAttributes;
}

export interface IndexAssetAttributes {
  asset_id: string;
  allocation: string;
  allocation_percentage: string;
}

export enum IosSupportedVersion {
  The100 = '1.0.0',
  The1000 = '10.0.0',
  The101 = '1.0.1',
  The120 = '1.2.0',
  The190 = '1.9.0',
}

export interface Country {
  type: CountryType;
  attributes: CountryAttributes;
  id: string;
}

export interface CountryAttributes {
  iso: string;
  name: string;
  phonecode: number;
  numcode?: number;
  fiat_id: string;
  usable: boolean;
}

export enum CountryType {
  Country = 'country',
}

export interface Fiat {
  type: string;
  attributes: FiatAttributes;
  id: string;
}

export interface FiatAttributes {
  default_sell_amount: string;
  has_wallets: boolean;
  logo: string;
  logo_color: string;
  logo_dark: string;
  logo_white: string;
  name: string;
  numeric_character_reference: string;
  min_deposit_euro: string;
  min_withdraw_euro: string;
  precision: number;
  transfer_active: boolean;
  symbol: string;
  symbol_character: string;
  to_eur_rate: string;
  wallet_min_deposit: string;
  wallet_min_withdrawal: string;
  name_deu: string;
  name_eng: string;
  name_fra: string;
  name_ita: string;
  name_pol: string;
  name_spa: string;
  name_tur: string;
}

export interface Language {
  type: string;
  attributes: LanguageAttributes;
  id: string;
}

export interface LanguageAttributes {
  fallback: string;
  name: string;
  enabled: boolean;
  iso_alpha_2: string;
  name_deu: string;
  name_eng: string;
  name_fra: string;
  name_ita: string;
  name_pol: string;
  name_spa: string;
  name_tur: string;
}

export interface Newsletter {
  type: string;
  attributes: NewsletterAttributes;
  id: string;
}

export interface NewsletterAttributes {
  name: string;
  sort: number;
  name_deu: string;
  name_eng: string;
  name_fra: string;
  name_ita: string;
  name_pol: string;
  name_spa: string;
  name_tur: string;
}

export interface PayoutProvider {
  type: PayoutProviderType;
  attributes: PayoutProviderAttributes;
  id: string;
}

export interface PayoutProviderAttributes {
  short_name: string;
  name: string;
  description: string;
  terms: string;
  fiat_provider_details: FiatProviderDetail[];
  fields: Field[];
  sort: number;
  is_instant: boolean;
  logo: string;
  logo_dark: string;
  enabled: boolean;
  send_enabled: boolean;
  '2fa_required': boolean;
  name_deu: string;
  name_eng: string;
  name_fra: string;
  name_ita: string;
  name_pol: string;
  name_spa: string;
  name_tur: string;
  description_deu: string;
  description_eng: string;
  description_fra: string;
  description_ita: string;
  description_pol: string;
  description_spa: string;
  description_tur: string;
  terms_deu: string;
  terms_eng: string;
  terms_fra: string;
  terms_ita: string;
  terms_pol: string;
  terms_spa: string;
  terms_tur: string;
}

export interface FiatProviderDetail {
  type: FiatProviderDetailType;
  attributes: FiatProviderDetailAttributes;
  id: string;
}

export interface FiatProviderDetailAttributes {
  fee_fix: string;
  fee_percent: string;
  fee_max: string;
  fiat_id: string;
  allowed_payout_accounts?: number;
}

export enum FiatProviderDetailType {
  FiatProviderDetail = 'fiat_provider_detail',
}

export interface Field {
  type: FieldType;
  attributes: FieldAttributes;
  id: string;
}

export interface FieldAttributes {
  field_name: string;
  field_type: FieldTypeEnum;
  alias: string;
  is_primary: boolean;
  is_mandatory: boolean;
  sort: number;
}

export enum FieldTypeEnum {
  Email = 'email',
  Text = 'text',
}

export enum FieldType {
  PayoutProviderField = 'payout_provider_field',
}

export enum PayoutProviderType {
  PayoutProvider = 'payout_provider',
}

export interface ProfileReportReason {
  type: string;
  attributes: ProfileReportReasonAttributes;
  id: string;
}

export interface ProfileReportReasonAttributes {
  reason: string;
  active: number;
}

export interface VipLevelsThreshold {
  type: string;
  attributes: VipLevelsThresholdAttributes;
  id?: string;
}

export interface VipLevelsThresholdAttributes {
  level: number;
  name: string;
  cryptocoin_id: string;
  min_amount: string;
  perks: any[];
}
