import React, { HTMLProps } from 'react';
import { ReactComponent as CryptoTokenIcon } from '../../assets/svg/crypto_token.svg'
import { ReactComponent as FantomIcon } from '../../assets/svg/fantom.svg'
import { ReactComponent as TombIcon } from '../../assets/svg/tomb.svg'

import {
  ExpandedState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender
} from '@tanstack/react-table';
import { protocolLists } from '../../utility/constants';
import { Protocol } from '../../utility/types';
import Icon from '@salesforce/design-system-react/components/icon';

export default function ProtocolTable() {

  const columns = React.useMemo<ColumnDef<Protocol>[]>(
    () => [
      {
        accessorKey: 'protocol',
        header: ({ table }) => (
          <div className='flex items-center'>
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
              className="mr-4"
            />
            Protocol
          </div>
        ),
        cell: ({ row, getValue }) => (
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <IndeterminateCheckbox
                {...{
                  checked: row.getIsSelected(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                }}
                className="mr-4"
              />
              {row.getCanExpand() && <TombIcon className='mr-2' />}
              <div className={`${row.getCanExpand() ? "" : "font-bold text-gray-700"}`}>{getValue() as any}</div>
            </div>

            {row.getCanExpand() && (
              <button
                {...{
                  onClick: row.getToggleExpandedHandler(),
                  style: { cursor: 'pointer' },
                }}
              >
                <Icon
                  assistiveText={{ label: 'Announcement' }}
                  category="utility"
                  name={row.getIsExpanded() ? "up" : "down"}
                  size="x-small"
                  className="fill-gray-400"
                />
              </button>
            )}
          </div>
        ),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'balance',
        header: () => <span>Balance</span>,
        cell: ({ row, getValue }) => {
          const nestedCell = row.original;
          return (
            <div>
              <>
                {row.getCanExpand() ? (
                  getValue()
                ) : (
                  <div className='w-min flex flex-col items-end space-y-1'>
                    <div className='flex space-x-2'>
                      <p className='font-bold text-gray-700'>{nestedCell.usdc}</p>
                      <p>USDC</p>
                      <CryptoTokenIcon className='w-5 h-5' />
                    </div>
                    <div className='flex space-x-2'>
                      <p className='font-bold text-gray-700'>{nestedCell.ftm}</p>
                      <p>FTM</p>
                      <FantomIcon className='w-5 h-5' />
                    </div>
                  </div>
                )}
              </>
            </div>
          )
        },
        footer: props => props.column.id
      },
      {
        accessorKey: 'token',
        header: () => <span>Tokens</span>,
        cell: ({ row }) => {
          return (
            <div className={`${row.getCanExpand() ? "" : "font-bold text-gray-700"}`}>
              {row.getCanExpand() ? (
                <div className='flex space-x-2'>
                  {[...new Array(5)].map((_, index) => <TombIcon key={index} />)}
                </div>
              ) : (
                <div className='flex space-x-1 items-center'>
                  <CryptoTokenIcon className='w-5 h-5' />
                  <p>USDC</p>
                  <p className='text-base'>+</p>
                  <FantomIcon className='w-5 h-5' />
                  <p>TSHARE</p>
                </div>
              )}
            </div>
          )
        },
        footer: props => props.column.id,
      },
      {
        accessorKey: 'rewards',
        header: () => <span>Rewards</span>,
        cell: ({ row, getValue }) => {
          return (
            <div className={`${row.getCanExpand() ? "" : "font-bold text-gray-700"}`}>
              {getValue() as any}
            </div>
          )
        },
        footer: props => props.column.id,
      },
      {
        accessorKey: 'lastTransactionDate',
        header: () => <span>Last Transaction Date</span>,
        footer: props => props.column.id,
      },
    ],
    []
  )

  const [data] = React.useState(protocolLists)
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: row => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: true,
  });

  return (
    <div className="bg-white  overflow-x-auto">

      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="border-b-2 bg-slate-50">
              {headerGroup.headers.map(header => {
                return (
                  <th className='text-xs py-2 px-3 text-gray-700' key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id} className="border-b-2">
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className={`py-2 px-3 text-xs font-medium text-gray-600 ${row.depth === 1 ? row.index % 2 === 0 ? "bg-gray-50" : "" : ""}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}


function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer w-4 h-4 text-blue-600  rounded border-gray-300 focus:ring-blue-500  focus:ring-0'}
      {...rest}
    />
  )
}