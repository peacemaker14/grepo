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

interface FetchResponse<T> {
  data: T;
  headers?: Headers;
}

export const fetchJson = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<FetchResponse<T>> => {
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
    return {
      data: convertKeysToCamelCase(data) as T,
      headers: response.headers,
    };
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
