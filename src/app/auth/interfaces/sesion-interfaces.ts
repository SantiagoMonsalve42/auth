export interface sesion {
    ok: boolean;
    uid?: string;
    name?: string;
    token?: string;
    msg?: string;
}

export interface user{
    uid: string;
    name: string;
}