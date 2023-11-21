import { useCallback, useState } from "react";

type ValidationRule = {
  required?: boolean;
  email?: boolean;
  maxLength?: number;
  minLength?: number;
};

type FormValidationRule<T> = {
  [key in keyof T]?: ValidationRule;
};

type ValidationError = {
  isError: boolean;
  rules: {
    rule: keyof ValidationRule;
    message: string;
  }[];
};

type FormValidationError<T> = {
  [key in keyof T]: ValidationError;
};

export type UseFormProps<T> = {
  initialValues: T;
  rules: FormValidationRule<T>;
};

export const useForm = <T extends { [key: string]: any }>({
  initialValues,
  rules = {} as FormValidationRule<T>,
}: UseFormProps<T>) => {
  // エラーの初期値を設定する
  const initialErrors: FormValidationError<T> = Object.keys(
    initialValues
  ).reduce((acc, field) => {
    acc[field as keyof T] = {
      isError: false,
      rules: [],
    };
    return acc;
  }, {} as FormValidationError<T>);

  const [errors, setErrors] = useState<FormValidationError<T>>(initialErrors);
  const [values, setValues] = useState<T>(initialValues);

  // フォームの入力値とエラーをリセットする
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors(initialErrors);
  }, [initialValues, initialErrors]);

  const setFieldValue = useCallback(
    <K extends keyof T, U extends T[K]>(field: K, value: U) => {
      setValues((prevValues) => ({ ...prevValues, [field]: value }));
    },
    []
  );

  // フォームの入力値が変更されたときに、そのフィールドのバリデーションを実行する
  const validateField = useCallback(
    (field: keyof T) => {
      setErrors((prevErrors) =>
        updateValidationErrors(rules[field], values, prevErrors, field)
      );
    },
    [rules, values]
  );

  // フォーム送信時に全体のバリデーションを実行する
  const onSubmit = useCallback(() => {
    Object.keys(values).forEach((field) => {
      setErrors((prevErrors) =>
        updateValidationErrors(
          rules[field as keyof T],
          values,
          prevErrors,
          field as keyof T
        )
      );
    });
  }, [rules, values]);

  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
    reset,
    validateField,
    onSubmit,
  };
};

const updateValidationErrors = <T extends { [key: string]: any }>(
  rules: ValidationRule | undefined,
  values: T,
  errors: FormValidationError<T>,
  field: keyof T
) => {
  if (!rules) {
    return errors;
  }
  if (!isRequiredValid(rules.required, values[field])) {
    errors[field].isError = true;
    const targetIndex = errors[field].rules.findIndex(
      (rule) => rule.rule === "required"
    );
    errors[field].rules[targetIndex] = {
      rule: "required",
      message: "必須項目です",
    };
  } else {
    errors[field].isError = false;
    errors[field].rules = errors[field].rules.filter(
      (rule) => rule.rule !== "required"
    );
  }
  if (!isEmailValid(rules.email, values[field])) {
    errors[field].isError = true;
    const targetIndex = errors[field].rules.findIndex(
      (rule) => rule.rule === "email"
    );
    errors[field].rules[targetIndex] = {
      rule: "email",
      message: "メールアドレスの形式で入力してください",
    };
  }
  if (!isMaxLengthValid(rules.maxLength, values[field])) {
    errors[field].isError = true;
    const targetIndex = errors[field].rules.findIndex(
      (rule) => rule.rule === "maxLength"
    );
    errors[field].rules[targetIndex] = {
      rule: "maxLength",
      message: `${rules.maxLength}文字以内で入力してください`,
    };
  }
  if (!isMinLengthValid(rules.minLength, values[field])) {
    errors[field].isError = true;
    const targetIndex = errors[field].rules.findIndex(
      (rule) => rule.rule === "minLength"
    );
    errors[field].rules[targetIndex] = {
      rule: "minLength",
      message: `${rules.minLength}文字以上で入力してください`,
    };
  }

  return errors;
};

// ここからバリデーションの関数群

const isRequiredValid = (isRequired: boolean | undefined, value: any) => {
  if (isRequired === false || isRequired === undefined) return true;
  console.log(value !== "" && value !== null && value !== undefined);
  return value !== "" && value !== null && value !== undefined;
};

const isEmailValid = (isEmail: boolean | undefined, value: any) => {
  if (isEmail === false || isEmail === undefined) return true;
  const pattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  return pattern.test(value);
};

const isMaxLengthValid = (maxLength: number | undefined, value: any) => {
  if (maxLength === undefined) return true;
  return String(value).length <= maxLength;
};

const isMinLengthValid = (minLength: number | undefined, value: any) => {
  if (minLength === undefined) return true;
  return String(value).length >= minLength;
};
