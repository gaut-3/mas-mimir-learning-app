export const fetchTranslations = (lang: string) => {
    return new Promise((resolve) => {
        fetch("/lang/{lang}.json".replace("{lang}", lang))
            .then((response) => response.json())
            .then((data) => resolve(data));
    });
}