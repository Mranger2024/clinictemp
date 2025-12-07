'use client';

import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

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
import { patients as data, type Patient } from '@/lib/placeholder-data';
import PageHeader from '@/components/page-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const columns: ColumnDef<Patient>[] = [
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
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
        const patient = row.original;
        const patientImage = PlaceHolderImages.find(p => p.id === patient.imageId);
        return <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
                {patientImage && <AvatarImage src={patientImage.imageUrl} alt={patient.name} data-ai-hint={patientImage.imageHint} />}
                <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{patient.name}</span>
        </div>
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'lastVisit',
    header: 'Last Visit',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const patient = row.original;
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
              onClick={() => navigator.clipboard.writeText(patient.id)}
            >
              Copy Patient ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View profile</DropdownMenuItem>
            <DropdownMenuItem>View appointments</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function AdminPatientsPage() {
  return (
    <>
      <PageHeader title="Patient Management" description="View and manage all patient records in your clinic." className="text-left" />
      <DataTable columns={columns} data={data} filterColumn="name" filterPlaceholder="Filter by patient name..."/>
    </>
  );
}
