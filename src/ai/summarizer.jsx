export function summarizeText(text) {
    if (!text) return "";
    return text.split(". ").slice(0, 2).join(". ") + "...";
}