export declare function register(data: {
    email: string;
    password: string;
    name?: string;
}): Promise<{
    id: string;
    email: string;
    name: string | null;
}>;
export declare function login(email: string, password: string): Promise<{
    access: string;
    refresh: string;
}>;
export declare function refresh(token: string): Promise<{
    access: string;
}>;
export declare function logout(token: string): Promise<void>;
