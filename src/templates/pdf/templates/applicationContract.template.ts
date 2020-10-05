import * as dateFormat from 'dateformat';
import {TDocumentDefinitions} from 'pdfmake/interfaces';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as writtenNumber from 'written-number';

import {IApplication} from '../../../database';
import {style} from '../styles';

class ApplicationContractTemplate {
  pdf({id, leftToPay, course, client, city}: IApplication): TDocumentDefinitions {
    return {
      pageMargins: [35, 20, 20, 0],
      content: [
        {
          text: `ДОГОВІР №${id}`,
          style: 'header'
        },
        {
          text: 'ПРО НАДАННЯ ІНФОРМАЦІЙНО-КОНСУЛЬТАЦІЙНИХ ПОСЛУГ\n',
          alignment: 'center',
          style: 'm2s9'
        },
        {
          columns:
            [
              {
                text: `м. ${city?.name}`,
                style: 'colLeft'
              },
              {
                text: `${dateFormat(new Date(), '« dd » mm yyyy')} р.`,
                style: 'colRight'
              }
            ]
        },
        {
          text: [
            {text: '\u200B\t\t ФОП Журавльов Сергій Сергійович ', bold: true},
            'що діє на підставі рішення № 2 415 000 0000 101308 про державну реєстрацію ' +
            'СГД - фізичної особи від 10.07.2019 р. (надалі - Виконавець), з однієї сторони, та фізична особа \n' +
            // eslint-disable-next-line max-len
            `${client?.name} ${client?.surname} ${client?.patronymic} (надалі - Замовник), з іншої сторони, а разом – Сторони, уклали цей Договір про наступне:`
          ],
          style: 'ml0t8s9'
        },
        {
          text: '1. ПРЕДМЕТ ДОГОВОРУ',
          style: 'm0s9',
          alignment: 'center'
        },
        {
          text: '\u200B\t\t 1. Виконавець зобов`язується надати Замовнику інформаційно-консультативні послуги за програмою курсу \n' +
            `“ ${course?.name} ”, зміст якого Замовнику відомий до підписання даного Договору, і з ` +
            'яким Замовник погоджується, а Замовник зобов’язується прийняти ці послуги і оплатити їх.',
          style: 'm0s9'
        },

        {
          text: '2. ПРАВА ТА ОБОВ’ЯЗКИ СТОРІН',
          style: 'm0s9',
          alignment: 'center'
        },
        {
          text: '\u200B\t\t 2.1. Права Замовника:',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: `\u200B		2.1.1. Отримати інформаційно-консультативні послуги за програмою курсу “ ${course?.name} ”, вчасно(згідно погодженого графіку) і повному обсязі. `,
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.1.2. Отримувати, за погодженням Виконавця, додаткові оплатні чи безоплатні індивідуальні консультації та матеріали для підвищення успішності засвоєння курсу',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t2.1.3. Змінити, за погодженням Виконавця, вид отримуваних послуг (програму курсу) із зарахуванням частини коштів пропорційно до вартості неотримуваних первинних послуг, визначених цим Договором. ',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.1.4. Одноразово безкоштовно повторно здати підсумкове тестування для отримання сертифікату. ',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.1.5. Стати членом Програми лояльності, яку запровадив Виконавець і отримувати всі переваги, пільги і бонуси в рамках даного курсу згідно умов Програми лояльності.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.2. Обов’язки Замовника:',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.2.1. Вчасно та в повному обсязі оплачувати послуги Виконавця відповідно до вимог даного Договору.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.2.2. Сумлінно виконувати обов’язки Замовника відповідно до даного Договору, дотримуватися правил поведінки, вимог техніки безпеки, вимог протипожежної і санітарної безпеки в приміщеннях Виконавця, визначеного графіку програми курсу.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.2.3. Не публікувати, не передавати третім особам та не використовувати з комерційною метою матеріали, які надаються Виконавцем, у тому числі для самостійної роботи, без письмового дозволу Виконавця.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.2.4. Під час отримання послуг не використовувати обладнання та майно Виконавця для заподіяння шкоди третім ' +
            'особам, несанкціонованої розсилки інформації (spam), не здійснювати неавторизований доступ до комп`ютерних систем, ' +
            'програмного забезпечення, даних та інших матеріалів, що захищені правом інтелектуальної власності, копіювати та ' +
            'поширювати їх, виконувати інші протиправні дії, використовуючи майно Виконавця. ',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.2.5. В повному обсязі виконувати план курсу та передбачені ним завдання для самостійного опрацювання, вказівки Виконавця та/або його помічників.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.2.6. У разі наявності хвороби або іншого стану замовника (наркотичного сп’яніння і т.п.), який може стати загрозою здоров’ю оточуючих, не відвідувати заняття до повного одужання.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.2.7. У разі неявки на перше заняття, попередити Виконавця шляхом відправки електронного листа не пізніше ніж за 24 години до початку заняття.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.3. Права Виконавця:',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.3.1. Призупинити/припинити надання Замовнику послуг в односторонньому порядку, у разі:',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - якщо Замовник, використовуючи обладнання Виконавця, вчинив дії, які перешкоджають функціонуванню мережі ' +
            // eslint-disable-next-line max-len
            'Інтернет або внутрішніх каналів зв\'язку в приміщеннях (в тому числі дії незаконного або аморального характеру, або такі, що ' +
            'порушують громадський порядок, посягають на честь і гідність громадян та підприємств та/або викликають їхні скарги, ' +
            'розповсюдження в мережі вірусів або інших деструктивних компонентів, спрямовані на протиправне отримання конфіденційної ' +
            'інформації або інформації із спеціальним доступом);',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t - недбайливого ставлення Замовника до майна та/або обладнання Виконавця, що спричинило його пошкодження - до\n' +
            'моменту відшкодування заподіяної шкоди; ',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - якщо він перебуває у стані сп’яніння, веде себе зухвало і порушує громадський порядок;',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - порушення Замовником термінів оплати послуг за даним Договором.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - крадіжки майна виконавця.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - першої вимоги замовником. ',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t2.3.2. Вимагати від Замовника відшкодування в повному обсязі збитків, спричинених діями Замовника.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t2.3.3. Вносити в односторонньому порядку зміни в графік надання послуг, заздалегідь повідомивши Замовника, не менш ніж за 5 год. ',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.3.4. Залучати до виконання своїх зобов’язань за даним Договором третіх осіб, що мають відповідну кваліфікацію.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.3.5. Використовувати відгуки замовника у соціальних мережах та на власному сайті без додаткового повідомлення.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t2.3.6. Використовувати контактні дані замовника для відправки йому рекламних повідомлень і припинити розсилку за першою вимогою замовника.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 2.4. Обов’язки Виконавця:',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t2.4.1. Надавати послуги якісно, своєчасно, в повному обсязі на умовах даного Договору та після оплати обраного Замовником курсу.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t2.4.2. До початку надання послуг ознайомити Замовника з приміщеннями, де надаватимуться послуги, та провести інструктаж щодо правил поведінки та вимог техніки безпеки, вимог протипожежної і санітарної безпеки.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t2.4.3. Забезпечити Замовника необхідною матеріально-технічною базою та методичними матеріалами згідно з вимогами курсу',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 2.5. Зaмовник дає згоду на використання фото та відео матеріалів зроблених Виконавцем з участю Замовника в соціальних мережах, рекламних компаніях та сайтах',
          style: 'm0s9'
        },
        {
          text: '3. ВАРТІСТЬ ПОСЛУГ ТА ПОРЯДОК РОЗРАХУНКІВ',
          style: 'm0s9',
          alignment: 'center'
        },
        {
          text: ['\u200B\t\t 3.1. Вартість інформаційно-консультативних послуг, що надаються Виконавцем, становить \n',
            {
              // eslint-disable-next-line max-len
              text: `${writtenNumber(leftToPay, {lang: 'uk'})} грн. 0 коп. (${leftToPay ? leftToPay : 0} грн. 0 коп.).`,
              bold: true
            }],
          style: 'm0s9'

        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t3.2. Послуги за цим Договором оплачуються шляхом 100% передоплати їх вартості на рахунок Виконавця, що підтверджується складанням Актом приймання-передачі, підписаним Сторонами.',
          style: 'm0s9'
        },
        {
          text: [
            // eslint-disable-next-line max-len
            '\u200B\t\t 3.3. Замовник має право на повернення сплачених за курс коштів після відвідання першого зайняття тільки у випадку ' +
            'попередження Виконавця електронним листом за електронною адресою ',
            {text: 'info@owu.com.ua', link: 'info@owu.com.ua', decoration: 'underline', color: 'blue'}
            , ' за термін не пізніше 1 години після ' +
            'завершення першого заняття. Замовник погоджується, що повернення коштів відбувається протягом одного місяця з моменту ' +
            'звернення до Виконавця.',
            {
              // eslint-disable-next-line max-len
              text: ' В інших, ніж ті, що передбачені цим пунктом Договору випадках, сплачена Замовником за цим Договором сума передоплати поверненню не підлягає.',
              bold: true
            }
          ],
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 3.4. Замовник зобов’язаний оплатити Виконавцеві вартість послуг в розмірі та на умовах передбачених пп. 3.1., ' +
            '3.2. цього Договору незалежно від тривалості навчання на курсі, обсягу виконаних завдань, кількості прослуханих ' +
            'занять, інших обставин, за винятком випадків, визначених п. 3.3. цього Договору. ',
          style: 'm0s9',
          pageBreak: 'before',
          bold: true
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 3.5. В разі, якщо Замовник прослухав перше зайняття, Сторони погоджують, що Замовника задовольняє якість надання ' +
            'інформаційно-консультаційних послуг та порядок їх надання. В такому випадку Замовник не має права вимагати від Виконавця ' +
            'повернення сплачених згідно п. 3.1. даного Договору коштів.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 3.6. Замовник має право одноразово призупинити отримання послуг на строк обумовлений Сторонами. В такому ' +
            'випадку поновлення надання послуг може розпочатися згідно графіку, якій узгоджується Виконавцем.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 3.7. Підписання акту виконаних робіт засвідчує, що виконавець надав послуги в повному обсязі.',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t3.8. У випадку пропуску Замовником занять чи невиконання завдань сплачені кошти за ці заняття поверненню не ' +
            'підлягають. ',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 3.9. Сторони доходять згоди, що у випадку надання Замовнику розтермінування на 12 місяців, сплата за отримання ' +
            'послуг відбувається наступним чином: ',
          style: 'm0s9'
        },
        {
          text: `\u200B\t\t\t - 50% вартості послуг сплачуються не пізніше ніж «   » ___________${dateFormat(new Date(), 'yyyy')} р.`,
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: `\u200B\t\t\t - 50% вартості послуг сплачуються не пізніше ніж 21 календарний день «   » ___________${dateFormat(new Date(), 'yyyy')} р.`,
          style: 'm0s9'
        },
        {
          text: '4. ПОРЯДОК ОТРИМАННЯ СЕРТИФІКАТУ',
          style: 'm4s9',
          alignment: 'center'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 4.1. Замовник має право отримати іменний сертифікат про успішне засвоєння курсу згідно вимог програмного плану в ' +
            'разі дотримання наступних умов:',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - Замовник був присутній не менше, аніж на 80% занять;',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - Виконавець прийняв від Замовника позитивне виконання не менше 80% завдань для самостійного опрацювання ' +
            'матеріалу (домашня робота);',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t - Виконавець прийняв від Замовника позитивне виконання не менше 80% підсумкового тестування, яке має на меті ' +
            'перевірку засвоєння програмного матеріалу Замовником',
          style: 'm0s9'
        },
        {
          text: '\u200B\t\t 4.2. В разі, якщо Замовник не набере 80% балів і Виконавець не прийме від Замовника позитивне виконання ' +
            'підсумкового тестування, Замовник має право одноразово, в узгоджений із Виконавцем час і день, протягом одного місяця ' +
            'безкоштовно пройти підсумкове тестування для отримання сертифікату. ',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 4.3. Кількість додаткових здач підсумкового тестування не є обмеженою, але наступні перездачі є платними. Сума ' +
            'оплати такої перездачі погоджується з Виконавцем. Для підготовки перездачі рекомендується проведення додаткових ' +
            'індивідуальних занять по матеріалу, щодо якого виникало найбільше помилок. ',
          style: 'm0s9'
        },
        {
          text: '5. КОНФІДЕНЦІЙНІСТЬ',
          style: 'm0s9',
          alignment: 'center',
          bold: true
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t  5.1. Відеоматеріали та завдання отримані Замовником від Виконавця під час дії цього Договору, не залежно від ' +
            'її змісту та форми зовнішнього вираження є конфіденційною інформацією Виконавця. ',
          style: 'm0s9',
          bold: true
        },
        {
          text: '\u200B\t\t5.2. Замовник зобов’язаний зберігати в таємниці конфіденційну інформацію Виконавця та не вправі: ' +
            'розголошувати, передавати, робити конфіденційну інформацію доступною для третіх осіб, здійснювати обробку такої ' +
            'інформації всупереч умовам цього Договору, її цільового призначення, меті для якої така інформація доведена до ' +
            'відома Замовника без попередньої на те письмової згоди Виконавця, крім випадків, коли обов’язок з передачі ' +
            'Замовником такої інформації третім особам, зміст та обсяг інформації, що підлягає передачі прямо передбачені ' +
            'чинним законодавством України.',
          style: 'm0s9',
          bold: true
        },
        {
          text: '6. ВІДПОВІДАЛЬНІСТЬ СТОРІН',
          style: 'm0s9',
          alignment: 'center',
          bold: true
        },
        {
          text: '\u200B\t\t 6.1. За порушення взятих на себе за цим Договором Сторони несуть відповідальність в порядку та на підставах ' +
            'передбачених цим Договором та чинним законодавством України',
          style: 'm0s9',
          bold: true
        },
        {
          text: '\u200B\t\t 6.2. За порушення Замовником вимог, передбачених пп. 5.1., 5.2 цього Договору, останній сплачує на користь ' +
            'Виконавця штраф у сумі 150 000, 00 грн. за кожен випадок такого порушення.',
          style: 'm0s9',
          bold: true
        },
        {
          text: '7. СТРОК ДІЇ ДОГОВОРУ ТА ІНШІ УМОВИ',
          style: 'm0s9',
          alignment: 'center'

        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 7.1. Даний Договір набуває чинності з моменту здійснення Замовником оплати послуг Виконавцю та діє до повного ' +
            'виконання Сторонами своїх зобов`язань за Договором.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 7.2. Даний Договір може бути розірваним Виконавцем в односторонньому порядку у випадку, передбаченому п. 2.3.1. ' +
            'цього Договору.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 7.3. Даний Договір може бути розірвано на вимогу Замовника у будь-який час за наявності його письмової заяви з ' +
            'дотриманням вимог п. 3.3. цього Договору.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 7.4. Сторони погоджуються вирішувати всі питання між собою шляхом переговорів з метою досягнення взаємної користі ' +
            'Сторін, проте це не позбавляє їх права звернутися за захистом своїх прав і законних інтересів в суд в порядку, визначеному ' +
            'чинним законодавством.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t 7.5. Будь-які зміни, доповнення та додатки до даного Договору набирають сили виключно після погодження Сторонами ' +
            'або їх представниками і підписання відповідних письмових примірників.',
          style: 'm0s9'
        },
        {
          // eslint-disable-next-line max-len
          text: '\u200B\t\t  7.6. Даний Договір складено українською мовою у двох примірниках, які мають однакову юридичну силу для кожної із\n' +
            'Сторін.',
          style: 'm6s9'
        },
        {
          text: 'РЕКВІЗИТИ СТОРІН',
          style: 'ml10b7s9',
          alignment: 'center'
        },
        {
          style: 'tableExample',
          table: {
            widths: [230, 260],
            headerRows: 1,
            body: [
              [{text: 'ВИКОНАВЕЦЬ', style: 'tableHeader'}, {text: 'ЗАМОВНИК ', style: 'tableHeader'}],
              [
                {
                  text: [
                    {text: 'ФОП Журавльов Сергій Сергійович,\n', style: 'tableContent'},
                    {text: 'ІПН 3212202619,\n', style: 'tableContent'},
                    {
                      text: '79495 Львівська обл., м. Винники, вул. Винна Гора,\n',
                      style: 'tableContent'
                    },
                    {text: 'буд. 8/г, кв.40 Рахунок № 26003062512801\n', style: 'tableContent'},
                    {text: 'в АТ "АльфаБанк" МФО 300346\n', style: 'tableContent'},
                    '\u200B\t\t \n',
                    '\u200B\t\t \n',
                    {
                      text: `\u200B\t\t _________ Журавльов С.С. ________${dateFormat(new Date(), 'yyyy')} \n`,
                      fontSize: 9,
                      style: 'signature'
                    }
                  ]
                },
                {
                  text: [
                    {
                      // eslint-disable-next-line max-len
                      text: `ПІБ:  ${client?.name} ${client?.surname} ${client?.patronymic}\n\n`,
                      fontSize: 9
                    },
                    // {text: `Адреса: ${client?.address} \n\n`, fontSize: 9},
                    {text: `Тел.: ${client?.phone}\n\n`, fontSize: 9},
                    '\u200B\t\t \n',
                    {text: '/______________________/\n\n', alignment: 'center', fontSize: 9},
                    {text: `підпис\n\n`, alignment: 'center', fontSize: 9}
                  ]
                }
              ]
            ]
          }
        }
      ],
      styles: style as any
    };
  }
}

export const applicationContractTemplate = new ApplicationContractTemplate();