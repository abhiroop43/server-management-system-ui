export interface ListData<T> {
    data: T[];
    pageIndex: number;
    pageSize: number;
    count: number;
}