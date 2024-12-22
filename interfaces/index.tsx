export interface PlayList {
    title: string;
    id: string;
}

export interface ConfrimDialogProps {
    content: string,
    visible: boolean,
    confirmed: () => void,
    cancelled: () => void,
    loading?: boolean
}

export interface CardMenuProps {
    props: any;
    onEditPressed: () => void;
    onDeletePressed: () => void;
    deleteDialogContent: string;
}