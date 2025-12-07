import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import PageHeader from "@/components/page-header"

export default function AdminDashboard() {
  return (
    <>
    <div className="mb-6">
        <PageHeader title="Admin Dashboard" description="An overview of your clinic's performance." className="text-left" />
    </div>
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
            Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
            +20.1% from last month
            </p>
        </CardContent>
        </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
            New Patients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">+235</div>
            <p className="text-xs text-muted-foreground">
            +18.1% from last month
            </p>
        </CardContent>
        </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
            +19% from last month
            </p>
        </CardContent>
        </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
            +201 since last hour
            </p>
        </CardContent>
        </Card>
    </div>
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
        <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
            <CardTitle>Recent Appointments</CardTitle>
            <CardDescription>
                Recent appointments from your clinic.
            </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="/admin/appointments">
                View All
                <ArrowUpRight className="h-4 w-4" />
            </Link>
            </Button>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead className="hidden xl:table-column">
                    Doctor
                </TableHead>
                <TableHead className="hidden xl:table-column">
                    Status
                </TableHead>
                <TableHead className="text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                    </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">Dr. Reed</TableCell>
                <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                    Approved
                    </Badge>
                </TableCell>
                <TableCell className="text-right">2023-06-23</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                    olivia@example.com
                    </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">Dr. Thorne</TableCell>
                <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                    Declined
                    </Badge>
                </TableCell>
                <TableCell className="text-right">2023-06-24</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                    noah@example.com
                    </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">Dr. Petrova</TableCell>
                <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                    Approved
                    </Badge>
                </TableCell>
                <TableCell className="text-right">2023-06-25</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </CardContent>
        </Card>
        <Card>
        <CardHeader>
            <CardTitle>Recent Patients</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="https://picsum.photos/seed/p1/100/100" alt="Avatar" data-ai-hint="person avatar" />
                <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                Olivia Martin
                </p>
                <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
                </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="https://picsum.photos/seed/p2/100/100" alt="Avatar" data-ai-hint="person avatar"/>
                <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                Jackson Lee
                </p>
                <p className="text-sm text-muted-foreground">
                jackson.lee@email.com
                </p>
            </div>
            <div className="ml-auto font-medium">+39.00</div>
            </div>
        </CardContent>
        </Card>
    </div>
    </>
  )
}
