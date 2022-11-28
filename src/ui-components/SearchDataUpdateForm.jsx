/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { SearchData } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SearchDataUpdateForm(props) {
  const {
    id,
    searchData,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    searchAddressA: undefined,
    searchAddressB: undefined,
  };
  const [searchAddressA, setSearchAddressA] = React.useState(
    initialValues.searchAddressA
  );
  const [searchAddressB, setSearchAddressB] = React.useState(
    initialValues.searchAddressB
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...searchDataRecord };
    setSearchAddressA(cleanValues.searchAddressA);
    setSearchAddressB(cleanValues.searchAddressB);
    setErrors({});
  };
  const [searchDataRecord, setSearchDataRecord] = React.useState(searchData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(SearchData, id) : searchData;
      setSearchDataRecord(record);
    };
    queryData();
  }, [id, searchData]);
  React.useEffect(resetStateValues, [searchDataRecord]);
  const validations = {
    searchAddressA: [],
    searchAddressB: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          searchAddressA,
          searchAddressB,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            SearchData.copyOf(searchDataRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "SearchDataUpdateForm")}
    >
      <TextField
        label="Search address a"
        isRequired={false}
        isReadOnly={false}
        defaultValue={searchAddressA}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchAddressA: value,
              searchAddressB,
            };
            const result = onChange(modelFields);
            value = result?.searchAddressA ?? value;
          }
          if (errors.searchAddressA?.hasError) {
            runValidationTasks("searchAddressA", value);
          }
          setSearchAddressA(value);
        }}
        onBlur={() => runValidationTasks("searchAddressA", searchAddressA)}
        errorMessage={errors.searchAddressA?.errorMessage}
        hasError={errors.searchAddressA?.hasError}
        {...getOverrideProps(overrides, "searchAddressA")}
      ></TextField>
      <TextField
        label="Search address b"
        isRequired={false}
        isReadOnly={false}
        defaultValue={searchAddressB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchAddressA,
              searchAddressB: value,
            };
            const result = onChange(modelFields);
            value = result?.searchAddressB ?? value;
          }
          if (errors.searchAddressB?.hasError) {
            runValidationTasks("searchAddressB", value);
          }
          setSearchAddressB(value);
        }}
        onBlur={() => runValidationTasks("searchAddressB", searchAddressB)}
        errorMessage={errors.searchAddressB?.errorMessage}
        hasError={errors.searchAddressB?.hasError}
        {...getOverrideProps(overrides, "searchAddressB")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
