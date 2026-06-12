import { describe, it, expect, beforeEach } from "vitest";
import { prismThemes, getStoredPrismTheme, getThemeBackground } from "../prism-theme-utils";

describe("Foxyz theme registration", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("registers a custom Foxyz theme on #0F1014", () => {
    const foxyz = prismThemes.find((t) => t.value === "prism-foxyz");
    expect(foxyz).toBeDefined();
    expect(foxyz?.background).toBe("#0F1014");
    expect(foxyz?.textColor).toBe("#e5e7eb");
    expect(foxyz?.source).toBe("custom");
  });

  it("defaults to Foxyz when nothing is stored", () => {
    expect(getStoredPrismTheme()).toBe("prism-foxyz");
  });

  it("ignores the legacy storage key so returning users still get Foxyz", () => {
    localStorage.setItem("rustybin-prism-theme", "prism-tomorrow");
    expect(getStoredPrismTheme()).toBe("prism-foxyz");
  });

  it("getThemeBackground returns #0F1014 for Foxyz", () => {
    expect(getThemeBackground("prism-foxyz")).toBe("#0F1014");
  });
});
