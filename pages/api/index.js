import axios from "axios";

export const loadNewsApi = async () => 
    await axios.post("https://ruttienmattuthe.com/wp-json/api/v1/news/landing");  