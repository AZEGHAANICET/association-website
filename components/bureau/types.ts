export interface Member {
    id: string;
    name: string;
    position: string;
    photo?: string;
    email?: string;
    phone?: string;
    social?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
    parentId?: string | null;
}

export interface NodeData {
    member: Member;
}