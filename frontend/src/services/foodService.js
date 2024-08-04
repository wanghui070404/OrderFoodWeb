<<<<<<< Updated upstream
import { sample_foods, sample_tags } from "../data";

export const getAll = async () => sample_foods;

export const search = async searchTerm =>
    sample_foods.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getAllTags = async () => sample_tags;

export const getAllByTag = async tag => {
    if (tag === "All") return getAll();
    return sample_foods.filter(food => food.tags?.includes(tag));
};

export const getById = async id => sample_foods.find(food => food.id === id);
=======
import axios from "axios";

export const getAll = async () => {
    const { data } = await axios.get("/api/foods");
    return data;
};

export const search = async searchTerm => {
    const { data } = await axios.get(`/api/foods/search/${searchTerm}`);
    return data;
}

export const getAllTags = async () => {
    const { data } = await axios.get("/api/foods/tags");
    return data;
}

export const getAllByTag = async tag => {
    if (tag === "All") return getAll();
    const { data } = await axios.get(`/api/foods/tag/${tag}`);
    return data;
};

export const getById = async id => {
    const { data } = await axios.get(`/api/foods/${id}`);
    return data;
}
>>>>>>> Stashed changes
