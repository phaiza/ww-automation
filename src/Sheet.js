import React, { useEffect, useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const Sheet = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [discount, setDiscount] = useState('');
  const SheetId = props.sheetId;
  const doc = new GoogleSpreadsheet(SheetId); //spreadshhet Id
  doc.useApiKey('AIzaSyChaG9155ErqsNOXPAi_5s4VlajbRj17VM'); // google project api key

  useEffect(() => {
    async function getSheetData() {
      await doc.loadInfo();
      setSheetTitle(doc.title);
      await doc.sheetsById[0].loadHeaderRow();
      //get ros
      const rows = await doc.sheetsById[0].getRows();
      console.log('rows----> ', rows);
      console.log(rows[0].cro_tag);

      //rows.forEach((element) => console.log(element.));
      setSheetData(rows[0]);
      setDiscount(rows[0].discount);
      console.log(discount);
      setIsLoading(true);
    }

    getSheetData();
  }, []);

  return (
    <div>
      <h2>SheetId: {SheetId}</h2>
      {!isLoading && <h3>Loading...</h3>}
      {isLoading && (
        <div>
          <h3>Sheet Title: {sheetTitle}</h3>

          <a href={sheetData.headerImgLink}>
            <img src={`${sheetData.headerImgUrl}${sheetData.cro_tag}`} />
          </a>
          <div>
            <h1>{eval('`' + sheetData.heading + '`')}</h1>
            <h3>
              Shop online and enjoy {sheetData.discount} off your next online
              shop.
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sheet;
