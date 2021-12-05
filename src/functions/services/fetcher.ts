import Airtable, { FieldSet, Record, Records } from "airtable";

import { AIRTABLE_BASE, API_KEY } from "constants/baseConfig";

const base = new Airtable({ apiKey: API_KEY }).base(String(AIRTABLE_BASE));

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<FieldSet>) => {
  return records.map((record: Record<FieldSet>) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record: Record<FieldSet>) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export const getAllProjectsTable = async () => {
  const records = await base("Projects")
    .select({ sort: [{ field: "date_added", direction: "desc" }] })
    .all();
  const minifiedRecords = getMinifiedRecords(records);
  return minifiedRecords;
};
