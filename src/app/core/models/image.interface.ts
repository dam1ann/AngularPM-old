export default interface Image {
    status;
    updatedAt;
    createdAt;
    id: string;
    handle: string;
    fileName: string;
    height?: number;
    width?: number;
    size?: number;
    mimeType?: string;
    attribution?;
}

