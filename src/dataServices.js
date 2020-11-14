import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19/gov/india';

const getCountryData = () => {
	return axios
		.get(baseURL)
		.then(result => result.data)
		.then(data => data.total);
}

const getAllProvinceData = () => {
	return axios
		.get(baseURL)
		.then(result => result.data)
		.then(data => data.states);
}

const getProvinceData = () => {
	const baseURL = 'https://disease.sh/v3/covid-19/jhucsse';
	return axios
		.get(baseURL)
		.then(result => result.data)
		.then(data => data.filter(province => province.country.toLowerCase() === 'india' && province.province.toLowerCase() !== 'unknown'))
}

export default {getCountryData, getAllProvinceData, getProvinceData}