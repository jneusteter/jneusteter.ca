import type { PrimeVuePTOptions } from "primevue/config";

const dataTable: PrimeVuePTOptions["datatable"] = {
  thead: 'border-b border-slate-200 font-semibold',
  table: 'w-full text-slate-700',
  bodyRow: 'border-b border-slate-200 hover:bg-slate-200',
  column: {
    bodyCell: 'p-2',
    headerCell: 'text-left p-2'
  },
}

export { dataTable }