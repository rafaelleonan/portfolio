import { useState, useCookie } from "#app";

export const useTheme = () => {
    const theme = useState<"light" | "dark">("theme", () => "light");

    const themeCookie = useCookie("theme");

    if (themeCookie.value) {
        theme.value = themeCookie.value as "light" | "dark";
        document.documentElement.setAttribute("data-theme", theme.value);
    }

    const toggleTheme = () => {
        theme.value = theme.value === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme.value);
        themeCookie.value = theme.value;
    };

    return { theme, toggleTheme };
};
