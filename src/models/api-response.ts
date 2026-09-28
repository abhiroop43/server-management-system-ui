export interface ApiResponse<T> {
    status: number;
    title: string;
    detail: { data: T }
}