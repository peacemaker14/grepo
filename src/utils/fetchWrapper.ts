import { convertKeysToCamelCase } from "./caseConverter";

class FetchError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = "FetchError";
  }
}

export const fetchJson = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(input, init);

    if (!response.ok) {
      throw new FetchError(
        `HTTP error! status: ${response.status}`,
        response.status,
        response.statusText
      );
    }

    const data = await response.json();

    return convertKeysToCamelCase(data) as T;
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }
    throw new FetchError(
      "Failed to fetch data",
      undefined,
      error instanceof Error ? error.message : String(error)
    );
  }
};
