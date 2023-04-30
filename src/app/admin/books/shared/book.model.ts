export interface BookPage {
    content:          Book[];
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

export interface Book {
    id:        number | null;
    title:     string;
    slug:      string;
    desc:      null | string;
    price:     number;
    coverPath:  string | null;
    filePath:   string | null;
    createdAt: Date;
    updatedAt: Date | null;
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
