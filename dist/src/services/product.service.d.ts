export declare function list(query: any): Promise<{
    total: number;
    page: number;
    per: number;
    products: ({
        variants: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            sku: string;
            stock: number;
            attrs: import("@prisma/client/runtime/library").JsonValue | null;
            productId: string;
        }[];
        images: {
            id: string;
            createdAt: Date;
            url: string;
            productId: string;
            key: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        price: number;
        sku: string | null;
        categoryId: string | null;
        stockQty: number;
    })[];
}>;
export declare function getById(id: string): Promise<({
    reviews: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string | null;
        productId: string;
        rating: number;
        body: string | null;
    }[];
    variants: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        sku: string;
        stock: number;
        attrs: import("@prisma/client/runtime/library").JsonValue | null;
        productId: string;
    }[];
    images: {
        id: string;
        createdAt: Date;
        url: string;
        productId: string;
        key: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    price: number;
    sku: string | null;
    categoryId: string | null;
    stockQty: number;
}) | null>;
export declare function create(data: any): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    price: number;
    sku: string | null;
    categoryId: string | null;
    stockQty: number;
}>;
export declare function update(id: string, data: any): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    price: number;
    sku: string | null;
    categoryId: string | null;
    stockQty: number;
}>;
export declare function remove(id: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    price: number;
    sku: string | null;
    categoryId: string | null;
    stockQty: number;
}>;
