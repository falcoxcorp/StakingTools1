import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class GeckoTerminalAPI {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
        });

        // Puedes configurar interceptores, headers comunes, etc. aquí si es necesario
    }

    async get(endpoint: string, params?: any): Promise<any> {
        try {
            const response: AxiosResponse = await this.axiosInstance.get(endpoint, { params });
            return response.data;
        } catch (error) {
            throw new Error(`Error making GET request to ${endpoint}: ${error}`);
        }
    }

    async post(endpoint: string, data?: any): Promise<any> {
        try {
            const response: AxiosResponse = await this.axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`Error making POST request to ${endpoint}: ${error}`);
        }
    }

    async getPrices(addresses: string[], network?: string): Promise<any> {
        try {
            const endpoint = `/simple/networks/${network ?? 'bsc'}/token_price/${addresses}`;
            const response: AxiosResponse = await this.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting prices: ${error}`);
        }
    }

    async getPool(network: string, address: string): Promise<any> {
        try {
            const endpoint = `/networks/${network}/pools/${address}`;
            const response: AxiosResponse = await this.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting pool: ${error}`);
        }
    }

    async getToken(network: string, address: string): Promise<any> {
        try {
            const endpoint = `/networks/${network}/tokens/${address}`;
            const response: AxiosResponse = await this.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting pool: ${error}`);
        }
    }
    async getTokenInfo(network: string, address: string): Promise<any> {
        try {
            const endpoint = `/networks/${network}/tokens/${address}/info`;
            const response: AxiosResponse = await this.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting pool: ${error}`);
        }
    }
}
