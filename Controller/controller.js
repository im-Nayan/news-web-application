const express = require('express');

// FOR NEWS API
const axios = require('axios')
const NEWS_API_KEY = '8a77c43303894657a5b58bbaf3d0e88a';

// FOR WEATHER AND COVID MODULE
const covid_api = require('covid19-api');
const weather_js = require('weather-js');

// HOME PAGE RENDERING
exports.home = (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);
            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('home', { country, cases, deaths, recovered, day, time, month, celcius, location, sky });
        })

    })
}
exports.sports = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const sport_news = await axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=' + NEWS_API_KEY);
            const dataNews = sport_news.data.articles;
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('sports', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.technology = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('technology', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.health = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('health', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.international = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('International', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.entertainment = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('Entertainment', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.country = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('Country', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.business = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('Business', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}
exports.science = async (req, res) => {
    covid_api.getReportsByCountries('india').then(async result => {
        weather_js.find({ search: 'durgapur', degreeType: 'C' }, async (err, data) => {

            let date = new Date;
            let date_string = date.toDateString();
            let day = date_string.slice(0, 3);
            let month = date_string.slice(4, 10);
            let time_string = date.toTimeString();
            let time = time_string.slice(0, 5)

            const celcius = await data[0].current.temperature;
            const location = await data[0].location.name;
            const sky = await data[0].current.skytext;

            // console.log(celcius);

            //FOR NEWS API
            const NEWS_API_KEY = 'db90916aecfa4abdbee210ab0f6b42d7';
            const country_news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=' + NEWS_API_KEY);
            const dataNews = country_news.data.articles
            // console.log(dataNews);

            const { country, flag, cases, deaths, recovered } = await result[0][0];
            res.render('science', { country, cases, deaths, recovered, day, time, month, celcius, location, sky, dataNews });
        })

    })
}