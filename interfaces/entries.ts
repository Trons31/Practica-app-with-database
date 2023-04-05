


export interface Entry {
    _id: string;
    nid: string;
    name : string;
    address : string;
    phoneNUmber: number;
    rol:  EntrieRol;
}




export type EntrieRol = 'Provider' | 'Client' | 'Admin'