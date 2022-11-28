/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SearchData } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SearchDataUpdateFormInputValues = {
    searchAddressA?: string;
    searchAddressB?: string;
};
export declare type SearchDataUpdateFormValidationValues = {
    searchAddressA?: ValidationFunction<string>;
    searchAddressB?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchDataUpdateFormOverridesProps = {
    SearchDataUpdateFormGrid?: FormProps<GridProps>;
    searchAddressA?: FormProps<TextFieldProps>;
    searchAddressB?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SearchDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: SearchDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    searchData?: SearchData;
    onSubmit?: (fields: SearchDataUpdateFormInputValues) => SearchDataUpdateFormInputValues;
    onSuccess?: (fields: SearchDataUpdateFormInputValues) => void;
    onError?: (fields: SearchDataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SearchDataUpdateFormInputValues) => SearchDataUpdateFormInputValues;
    onValidate?: SearchDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SearchDataUpdateForm(props: SearchDataUpdateFormProps): React.ReactElement;
