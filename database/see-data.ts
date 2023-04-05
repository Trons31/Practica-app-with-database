


interface SeeData {
    entries : seeEntry[]
}

interface seeEntry {
    name: string;
    address: string;
    phoneNumber: string;
    rol: string;
}


export const SeedData:SeeData = {
    entries: [
        {
            
            name: 'Daniel',
            address: 'cll- 10-21',
            phoneNumber: '3041201032',
            rol: 'Admin'
        },
        

    ]
}