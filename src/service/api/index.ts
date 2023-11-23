import axios, { AxiosResponse } from "axios";
import { productsListProps } from "../../components/cardProdutos";

const api = axios.create({
	baseURL: 'https://dummyjson.com/'
});

export interface getProductListResponse {
	products: productsListProps[];
	limit: number,
	skip: number,
	total: number
}

export interface getProductResponse {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	brand: string;
	category: string;
	thumbnail: string;
	stock: number;
}

// PEGAR TODAS AS CATEGORIAS
export function getCategoriesList(): Promise<AxiosResponse> {
	const url = 'products/categories';

	return api.get(url)
}

export function getProductList(category): Promise<AxiosResponse<getProductListResponse, any>> {
	const url = `products/category/${category}`;

	return api.get(url)
		.then(response => {
			// console.log(response.data);
			// console.log(url);
			return response;
		});
}
export function getProductDetails(id): Promise<AxiosResponse<getProductResponse, any>> {
	const url = `products/${id}`;

	return api.get(url)
}

export function getAllProductList(): Promise<AxiosResponse<getProductListResponse, any>> {
	const url = `products`;

	return api.get(url)
}