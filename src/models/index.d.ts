import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSearchData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SearchData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly searchAddressA?: string | null;
  readonly searchAddressB?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySearchData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SearchData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly searchAddressA?: string | null;
  readonly searchAddressB?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SearchData = LazyLoading extends LazyLoadingDisabled ? EagerSearchData : LazySearchData

export declare const SearchData: (new (init: ModelInit<SearchData>) => SearchData) & {
  copyOf(source: SearchData, mutator: (draft: MutableModel<SearchData>) => MutableModel<SearchData> | void): SearchData;
}