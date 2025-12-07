import { Calendar, Stethoscope, Clock, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HealthTipsGenerator from '@/components/health-tips-generator';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const upcomingAppointments = [
  {
    id: 1,
    doctor: 'Dr. Evelyn Reed',
    specialty: 'Cardiologist',
    date: 'September 15, 2024',
    time: '10:00 AM',
    status: 'Confirmed'
  },
  {
    id: 2,
    doctor: 'Dr. Marcus Thorne',
    specialty: 'General Practitioner',
    date: 'October 2, 2024',
    time: '11:30 AM',
    status: 'Confirmed'
  },
];

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold">Welcome back, Alex!</h1>
        <p className="text-muted-foreground">Here's your health summary and upcoming appointments.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>You have {upcomingAppointments.length} appointments scheduled.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingAppointments.map((appt) => (
            <div key={appt.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-1">
                <p className="font-semibold">{appt.doctor}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Stethoscope className="h-4 w-4" />
                  <span>{appt.specialty}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{appt.date}</span>
                </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{appt.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={appt.status === 'Confirmed' ? 'default' : 'secondary'}>
                  {appt.status}
                </Badge>
                 <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Reschedule</DropdownMenuItem>
                    <DropdownMenuItem>Cancel</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <HealthTipsGenerator />

    </div>
  );
};

export default DashboardPage;
