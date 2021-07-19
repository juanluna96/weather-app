import { GET_ID_WEATHER, CHANGE_TEMPERATURE_TYPE } from '../types';
import axiosWeather from '../api/axios';

export const getWeatherAction = (id = "2459115") => async (dispatch) => {
    try {
        const url = `/location/${id}/`;
        const response = await axiosWeather.get(url);
        dispatch(getWeather(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const getWeatherGeoLocationAction = (latitude, longitude) => async (dispatch) => {
    try {
        const url = `/location/search/?lattlong=${latitude},${longitude}`;
        const response = await axiosWeather.get(url);
        dispatch(getWeatherAction(response.data[0].woeid));
    } catch (error) {
        console.error(error);
    }
};

export const changeWeatherTemperatureAction = temperature => dispatch => {
    dispatch(changeTemperature(temperature));
};

const changeTemperature = (temperature) => {
    return ({
        type: CHANGE_TEMPERATURE_TYPE,
        payload: temperature
    })
}

const getWeather = (weather) => {
    return ({
        type: GET_ID_WEATHER,
        payload: weather
    })
}