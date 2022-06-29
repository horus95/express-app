export interface StoreModel {
    id?: number,
    name: string,
    store_category_id: number,
    country_id: number,
    contact_email: string,
    contact_phone: string,
    status?: number,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}
