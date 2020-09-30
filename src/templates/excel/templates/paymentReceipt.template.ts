import * as Excel from 'exceljs';
import * as dateFormat from 'dateformat';

import {
  alightCenterNormal,
  alightRightBolt,
  bolt,
  borderBolt,
  borderBottomBolt,
  borderNormal,
  normal
} from '../fonts';

class PaymentTemplate {
  excel(): Excel.Workbook {
    const workbook = new Excel.Workbook();

    const worksheet = workbook.addWorksheet('Payment', {
      pageSetup: {paperSize: 9, orientation: 'landscape'}
    });

    worksheet.mergeCells('A2:I2');
    worksheet.mergeCells('A3:I3');
    worksheet.mergeCells('A4:I4');
    worksheet.mergeCells('A5:I5');
    worksheet.mergeCells('A6:I6');
    worksheet.mergeCells('A7:I7');
    worksheet.mergeCells('A8:B8');
    worksheet.mergeCells('C8:E8');
    worksheet.mergeCells('A11:D11');
    worksheet.mergeCells('A12:I12');
    worksheet.mergeCells('B13:F13');
    worksheet.mergeCells('A14:A15');
    worksheet.mergeCells('G14:G15');
    worksheet.mergeCells('H14:H15');
    worksheet.mergeCells('I14:I15');
    worksheet.mergeCells('B14:F14');
    worksheet.mergeCells('B15:F15');
    worksheet.mergeCells('G16:H16');
    worksheet.mergeCells('A18:I18');
    worksheet.mergeCells('A19:I19');
    worksheet.mergeCells('D21:F21');
    worksheet.mergeCells('G21:I21');
    worksheet.mergeCells('G22:I22');

    worksheet.getColumn('B').width = 12;
    worksheet.getColumn('C').width = 25;
    worksheet.getColumn('D').width = 8;
    worksheet.getColumn('E').width = 17;
    worksheet.getColumn('F').width = 5;
    worksheet.getColumn('G').width = 13;

    worksheet.getCell('A3').value = 'ФОП  Журавльов Сергій Сергійович';
    worksheet.getCell('A3').style = bolt;

    worksheet.getCell('A4').value = 'банк АТ "АльфаБанк"';
    worksheet.getCell('A4').style = bolt;

    worksheet.getCell('A5').value = 'МФО 300346';
    worksheet.getCell('A5').style = bolt;

    worksheet.getCell('A6').value = 'р/р UA393003460000026003062512801';
    worksheet.getCell('A6').style = bolt;

    worksheet.getCell('A7').value = 'ІПН 3212202619';
    worksheet.getCell('A7').style = bolt;

    worksheet.getCell('A8').value = 'Одержувач послуг:';
    worksheet.getCell('A8').style = bolt;

    worksheet.getCell('C8').value = 'Микола Баргилевич';
    worksheet.getCell('C8').style = normal;

    worksheet.getCell('A11').value = 'Квитанція №';
    worksheet.getCell('A11').style = alightRightBolt;

    worksheet.getCell('E11').value = Date.now().toString();
    worksheet.getCell('E11').style = alightCenterNormal;

    worksheet.getCell('F11').value = 'від';
    worksheet.getCell('F11').style = bolt;

    worksheet.getCell('G11').value = dateFormat(new Date(), 'dd.mm.yyyy').toString();
    worksheet.getCell('G11').style = alightCenterNormal;

    worksheet.getCell('A13').value = '№';
    worksheet.getCell('A13').style = borderBolt;

    worksheet.getCell('B13').value = 'Назва';
    worksheet.getCell('B13').style = borderBolt;
    worksheet.getCell('C13').style = borderBolt;
    worksheet.getCell('D13').style = borderBolt;
    worksheet.getCell('E13').style = borderBolt;
    worksheet.getCell('F13').style = borderBolt;

    worksheet.getCell('G13').value = 'Кількість';
    worksheet.getCell('G13').style = borderBolt;

    worksheet.getCell('H13').value = 'Ціна';
    worksheet.getCell('H13').style = borderBolt;

    worksheet.getCell('I13').value = 'Сума';
    worksheet.getCell('I13').style = borderBolt;

    worksheet.getCell('A14').value = '1';
    worksheet.getCell('A14').style = borderBolt;
    worksheet.getCell('A15').style = borderBolt;

    worksheet.getCell('B14').value = 'За отримання інформаційно - консультаційних послуг з курсу';
    worksheet.getCell('B14').style = bolt;

    worksheet.getCell('B15').value = 'Java Complex';
    worksheet.getCell('B15').style = borderBottomBolt;
    worksheet.getCell('C15').style = borderBottomBolt;
    worksheet.getCell('D15').style = borderBottomBolt;
    worksheet.getCell('E15').style = borderBottomBolt;
    worksheet.getCell('F15').style = borderBottomBolt;

    worksheet.getCell('G14').value = '1';
    worksheet.getCell('G14').style = borderNormal;
    worksheet.getCell('G15').style = borderNormal;

    worksheet.getCell('H14').value = '3900';
    worksheet.getCell('H14').style = borderNormal;
    worksheet.getCell('H15').style = borderNormal;

    worksheet.getCell('I14').value = '3900';
    worksheet.getCell('I14').style = borderNormal;
    worksheet.getCell('I15').style = borderNormal;

    worksheet.getCell('G16').value = 'Разом';
    worksheet.getCell('G16').style = borderBolt;
    worksheet.getCell('H16').style = borderBolt;

    worksheet.getCell('I16').value = '3900';
    worksheet.getCell('I16').style = borderNormal;

    worksheet.getCell('A18').value = 'Сума прописом:';
    worksheet.getCell('A18').style = bolt;

    worksheet.getCell('A19').value = 'три тисячі дев\'ятсот грн';
    worksheet.getCell('A19').style = normal;

    worksheet.getCell('D21').value = 'ФОП  Журавльов С. С.';
    worksheet.getCell('D21').style = alightRightBolt;

    worksheet.getCell('G21').style = borderBottomBolt;
    worksheet.getCell('H21').style = borderBottomBolt;
    worksheet.getCell('I21').style = borderBottomBolt;

    worksheet.getCell('G22').value = 'Підпис';
    worksheet.getCell('G22').style = alightCenterNormal;

    return workbook;
  }
}

export const paymentTemplate = new PaymentTemplate();
