/* eslint-disable @typescript-eslint/no-explicit-any */

type ObjectWithNestedKeys = { [key: string]: any };

export const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
};

export const convertKeysToCamelCase = <T extends ObjectWithNestedKeys>(
  obj: ObjectWithNestedKeys
): T => {
  if (Array.isArray(obj)) {
    return obj.map((v) =>
      convertKeysToCamelCase<ObjectWithNestedKeys>(v)
    ) as unknown as T;
  }

  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = toCamelCase(key);
      result[camelKey] = convertKeysToCamelCase(obj[key]);
      return result;
    }, {} as ObjectWithNestedKeys) as T;
  }

  return obj as T;
};
