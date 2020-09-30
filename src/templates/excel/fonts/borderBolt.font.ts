import {BorderStyle} from 'exceljs';

export const borderBolt = {
  font: {
    size: 12,
    bold: true,
    visibility: 'visible',
    name: 'Arial'
  },
  alignment: {
    horizontal: 'center' as 'left' | 'center' | 'right' | 'fill' | 'justify' | 'centerContinuous' | 'distributed',
    vertical: 'middle' as 'top' | 'middle' | 'bottom' | 'distributed' | 'justify'
  },
  border: {
    top: {
      style: 'thin' as BorderStyle
    },
    bottom: {
      style: 'thin' as BorderStyle
    },
    left: {
      style: 'thin' as BorderStyle
    },
    right: {
      style: 'thin' as BorderStyle
    }
  },
  numFmt: 'string'
};
