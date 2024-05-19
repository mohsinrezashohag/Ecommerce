
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MdSkipNext, MdSkipPrevious } from "react-icons/md"


export function DataTable({columns,data,}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
  

    <>
    
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>


    </div>

    <div className="flex justify-between mt-4">
<button onClick={()=>table.previousPage()}disabled={!table.getCanPreviousPage()}  className="flex items-center gap-1 text-blue-500 text-xs font-semibold"><MdSkipPrevious></MdSkipPrevious><p>Previous Page</p></button>
<button onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()} className="flex items-center gap-1 text-blue-500 text-xs font-semibold"><p>Next Page</p><MdSkipNext></MdSkipNext></button>

</div>
    </>
  )
}
