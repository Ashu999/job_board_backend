export interface ApiResponse<T> {
    status: string;
    status_code: number;
    data?: T;
    error?: string;
    message?: string;
}

// Utility function to create a standard API response
export const createApiResponse = <T>(status: string, statusCode: number, data?: T, error?: string, message?: string): ApiResponse<T> => {
    return { status, status_code: statusCode, data, error, message };
};