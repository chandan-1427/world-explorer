import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import { fetchCountries, GRAPHQL_ENDPOINT, GET_COUNTRIES_QUERY } from "./api";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

beforeEach(() => {
  mockFetch.mockReset();
});

afterAll(() => {
  vi.unstubAllGlobals();
});

describe("fetchCountries", () => {
  it("fetches and transforms countries successfully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: {
          countries: [
            { code: "IN", name: "India", capital: "New Delhi", continent: { name: "Asia" } },
            { code: "BR", name: "Brazil", capital: "Brasília", continent: { name: "South America" } },
          ],
        },
      }),
    });

    const result = await fetchCountries();

    expect(result).toHaveLength(2);
    expect(result[0].code).toBe("IN");
    expect(mockFetch).toHaveBeenCalledWith(
      GRAPHQL_ENDPOINT,
      expect.objectContaining({ method: "POST" })
    );
  });

  it("throws error when GraphQL returns an errors array", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        errors: [{ message: "Unauthorized access to countries" }],
      }),
    });

    await expect(fetchCountries()).rejects.toThrow("Unauthorized access to countries");
  });

  it("returns empty array if data.countries is null", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: { countries: null } }),
    });

    const result = await fetchCountries();
    expect(result).toEqual([]);
  });

  it("throws standard network error", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });
    await expect(fetchCountries()).rejects.toThrow("Network response was not ok");
  });
});