import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import { styles } from "./styles";

interface MyProps {
  control: Control<FieldValues, any>;
  fieldName: string;
  secureTextEntry: boolean;
  label: string;
  validate: (value: string) => string | undefined;
  errors: FieldErrorsImpl<{
    [x: string]: string | undefined;
  }>;
}

const Textbox: FC<MyProps> = ({
  control,
  fieldName,
  label = "test",
  validate,
  secureTextEntry,
  errors,
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={secureTextEntry}
            />
            {errors[fieldName] ? (
              <Text style={styles.errorMessage}>
                {errors[fieldName]?.message}
              </Text>
            ) : (
              ""
            )}
          </>
        )}
        name={fieldName}
        rules={{
          validate: validate,
        }}
      />
    </View>
  );
};

export default Textbox;
