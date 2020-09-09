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
    'audio/webm',
    'audio/mpeg',
    'application/x-7z-compressed'
  ]
};
