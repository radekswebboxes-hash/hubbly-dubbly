import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "John Smith",
    action: "submitted RFQ",
    target: "ABC Logistics Contract",
    time: "2 hours ago",
    type: "rfq",
    status: "submitted"
  },
  {
    id: 2,
    user: "Sarah Johnson",
    action: "completed task",
    target: "Follow up with XYZ Corp",
    time: "4 hours ago",
    type: "task",
    status: "completed"
  },
  {
    id: 3,
    user: "Mike Davis",
    action: "added new account",
    target: "Global Freight Inc",
    time: "6 hours ago",
    type: "account",
    status: "new"
  },
  {
    id: 4,
    user: "Lisa Brown",
    action: "won RFQ",
    target: "Regional Express Route",
    time: "1 day ago",
    type: "rfq",
    status: "won"
  },
  {
    id: 5,
    user: "Tom Wilson",
    action: "created lane",
    target: "Chicago to Detroit",
    time: "1 day ago",
    type: "lane",
    status: "new"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "won":
      return "bg-green-100 text-green-800";
    case "submitted":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-gray-100 text-gray-800";
    case "new":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}{' '}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <Badge 
                    variant="secondary" 
                    className={getStatusColor(activity.status)}
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}