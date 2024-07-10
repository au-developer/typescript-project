// 1 Вармант - в аргументах различніе пропсы

// export interface SimponsCardProps {
//     avatar: string; 
//     firstName:string; 
//     lastName:string; 
//     job:string; 
//     hobby:string
// }

// 2 Вармант - в аргументах обьект, декомпозиция его внутри 
export interface Sdata{
    avatar: string; 
    firstName:string; 
    lastName:string; 
    job:string; 
    hobby:string
}

export interface SimponsCardProps {
   simData:Sdata;
}

