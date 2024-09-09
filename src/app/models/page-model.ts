export interface Info {
    name: string;
}

export interface AllData {
    customers: string[];
    staffs: string[];
    products: string[];
}

export interface GenderData {
    gender: GenderApiResponse;
    error: any;
    loading: boolean;
}

export interface GenderApiResponse {
    gender: string;
    name: string
}
