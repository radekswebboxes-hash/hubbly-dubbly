import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Building2,
  Users
} from "lucide-react";

const statsData = [
  {
    title: "Active RFQs",
    value: "24",
    icon: FileText,
    trend: "+2 this week",
    color: "text-blue-600"
  },
  {
    title: "Pending Tasks",
    value: "12",
    icon: Clock,
    trend: "5 due today",
    color: "text-orange-600"
  },
  {
    title: "Won This Month",
    value: "$125K",
    icon: TrendingUp,
    trend: "+18% vs last month",
    color: "text-green-600"
  },
  {
    title: "Active Accounts",
    value: "156",
    icon: Building2,
    trend: "+8 new this month",
    color: "text-purple-600"
  }
];

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}