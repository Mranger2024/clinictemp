'use client';

import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DataTable } from '@/components/data-table';
import { appointments as data, type Appointment } from '@/lib/placeholder-data';
import PageHeader from '@/components/page-header';

export const columns: ColumnDef<Appointment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'patientName',
    header: 'Patient',
  },
  {
    accessorKey: 'doctorName',
    header: 'Doctor',
  },
  {
    accessorKey: 'service',
    header: 'Service',
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'time',
    header: 'Time',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
        const status: 'Confirmed' | 'Pending' | 'Cancelled' = row.getValue('status');
        const variant = status === 'Confirmed' ? 'default' : status === 'Pending' ? 'secondary' : 'destructive';
        return <Badge variant={variant}>{status}</Badge>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(appointment.id)}
            >
              Copy Appointment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View patient details</DropdownMenuItem>
            <DropdownMenuItem>View appointment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function AdminAppointmentsPage() {
  return (
    <>
      <PageHeader title="Manage Appointments" description="View, manage, and track all patient appointments." className="text-left" />
      <DataTable columns={columns} data={data} filterColumn="patientName" filterPlaceholder="Filter by patient name..."/>
    </>
  );
}
