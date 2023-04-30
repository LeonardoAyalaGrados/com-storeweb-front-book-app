export interface User{
    id:number;
    firstName:string;
    lastName:string;
    fullName:string;
    email:string;
    password:string;
    createdAt:Date;
    role:string;
}

export class User{
    id:number;
    firstName:string;
    lastName:string;
    fullName:string;
    email:string;
    password:string;
    createdAt:Date;
    role:string;
}

export interface BookPage {
    content:          User[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}
export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}