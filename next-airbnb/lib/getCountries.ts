import countries from "world-countries";

const formattedCountries = countries.map((item) => ({
    value: item.cca2,
    label: item.name.common,
    flag: item.flag,
    latLang: item.latlng,
    region: item.region,
}));

export const useCountries = () => {
    const getAllCountries = () => formattedCountries;

    const getCountryByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === value)
    }

    return {
        getAllCountries,
        getCountryByValue
    }
}
