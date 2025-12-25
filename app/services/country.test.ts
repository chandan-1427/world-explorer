import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import {
  fetchCountryDetail,
  fetchExternalCountryData,
} from "./country";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

beforeEach(() => {
  mockFetch.mockReset();
});

afterAll(() => {
  vi.unstubAllGlobals();
});

describe("Country Detail APIs", () => {
  describe("fetchCountryDetail (GraphQL)", () => {
    it("fetches specific country data using GraphQL variables", async () => {
      const mockCountry = {
        code: "FR",
        name: "France",
        capital: "Paris",
        continent: { name: "Europe" },
        languages: [],
        states: [],
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: { country: mockCountry },
        }),
      });

      const result = await fetchCountryDetail("FR");

      expect(mockFetch).toHaveBeenCalledWith(
        "https://countries.trevorblades.com/",
        expect.objectContaining({
          method: "POST",
          body: expect.stringContaining('"variables":{"code":"FR"}'),
        })
      );

      expect(result).toEqual(mockCountry);
    });

    it("throws when country is not found", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: { country: null },
        }),
      });

      await expect(fetchCountryDetail("INVALID")).rejects.toThrow(
        "Country not found"
      );
    });

    it("throws when GraphQL returns errors", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          errors: [{ message: "GraphQL error" }],
        }),
      });

      await expect(fetchCountryDetail("FR")).rejects.toThrow("GraphQL error");
    });

    it("throws when network response is not ok", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
      });

      await expect(fetchCountryDetail("FR")).rejects.toThrow("Network Error");
    });
  });

  describe("fetchExternalCountryData (REST)", () => {
    it("fetches from REST countries API with correct code in URL", async () => {
      const mockExternalData = [
        {
          flags: { svg: "https://flag.svg", alt: "Flag of India" },
          population: 1400000000,
        },
      ];

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockExternalData,
      });

      const result = await fetchExternalCountryData("IN");

      expect(mockFetch).toHaveBeenCalledWith(
        "https://restcountries.com/v3.1/alpha/IN"
      );

      expect(result).toEqual(mockExternalData[0]);
    });

    it("throws when REST API returns empty array", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      });

      await expect(fetchExternalCountryData("XYZ")).rejects.toThrow(
        "No external data"
      );
    });

    it("throws when REST network request fails", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      await expect(fetchExternalCountryData("IN")).rejects.toThrow(
        "Network error"
      );
    });

    it("throws when REST response is not ok", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
      });

      await expect(fetchExternalCountryData("IN")).rejects.toThrow(
        "External API failure"
      );
    });
  });
});
