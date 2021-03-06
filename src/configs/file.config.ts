import {DocumentFileSize} from '../constants';

export const fileOptions = {
  MAX_DOCUMENT_SIZE: DocumentFileSize.MEGABYTES * DocumentFileSize.KILOBYTES * DocumentFileSize.BYTES,
  DOCUMENT_MIMETYPES: [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/svg+xml',
    'application/java-archive',
    'application/pdf',
    'application/zip',
    'text/html',
    'text/plain',
    'text/csv',
    'video/webm',
    'video/mp4',
    'audio/webm',
    'audio/mpeg',
    'application/x-7z-compressed',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]
};
