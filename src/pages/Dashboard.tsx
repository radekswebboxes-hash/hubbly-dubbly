import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  Clock,
  Calendar,
  TrendingUp
} from "lucide-react";

const upcomingTasks = [
  { id: 1, task: "Follow up with ABC Logistics", due: "Today 2:00 PM", priority: "high" },
  { id: 2, task: "Prepare RFQ for XYZ Corp", due: "Tomorrow 10:00 AM", priority: "medium" },
  { id: 3, task: "Review lane pricing", due: "Friday 3:00 PM", priority: "low" },
];

const recentRFQs = [
  { id: 1, customer: "ABC Logistics", amount: "$45,000", status: "Submitted", date: "2024-01-15" },
  { id: 2, customer: "Global Freight", amount: "$28,500", status: "Won", date: "2024-01-14" },
  { id: 3, customer: "Express Lines", amount: "$62,000", status: "Pending", date: "2024-01-13" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Won":
      return "bg-green-100 text-green-800";
    case "Submitted":
      return "bg-blue-100 text-blue-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New RFQ
          </Button>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Task
          </Button>
        </div>
      </div>

      <DashboardCards />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Active RFQs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-lg">Active RFQs</CardTitle>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentRFQs.map((rfq) => (
                <div key={rfq.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{rfq.customer}</p>
                    <p className="text-sm text-muted-foreground">{rfq.amount}</p>
                  </div>
                  <Badge className={getStatusColor(rfq.status)}>
                    {rfq.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="space-y-1">
                  <div className="flex items-start justify-between">
                    <p className="font-medium text-sm">{task.task}</p>
                    <Badge 
                      variant="secondary" 
                      className={getPriorityColor(task.priority)}
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{task.due}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;