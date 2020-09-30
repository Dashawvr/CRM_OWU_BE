import {BorderStyle} from 'exceljs';

export const borderBottomBolt = {
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
    bottom: {
      style: 'thin' as BorderStyle
    }
  },
  numFmt: 'string'
};
