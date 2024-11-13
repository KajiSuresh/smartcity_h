
import { Card } from '@/components/ui/card';
import { BarChart3, Users, ArrowUp, ArrowDown, DollarSign } from 'lucide-react';
import Sidebar from '../../layout/sidebar';
import Header from '../../layout/header';
import { Progress } from '@/components/ui/progress';


const stats = [
  {
    title: 'Total Users',
    value: '2,834',
    icon: Users,
    change: '+12.5%',
    trend: 'up',
  },
  {
    title: 'Revenue',
    value: '$45,234',
    icon: DollarSign,
    change: '+8.2%',
    trend: 'up',
  },
  {
    title: 'Active Sessions',
    value: '1,423',
    icon: BarChart3,
    change: '-3.1%',
    trend: 'down',
  },
];

export default function Statics() {
  return (
    <div className="flex min-h-screen bg-gray-50/90">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8 pt-24">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
            <p className="mt-2 text-gray-600">Here is what is happening today.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.title} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <h3 className="mt-1 text-2xl font-semibold">{stat.value}</h3>
                  </div>
                  <div className="rounded-full bg-gray-100 p-3">
                    <stat.icon className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {stat.change}
                  </span>
                  <span className="text-gray-600">vs last month</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-semibold">Project Progress</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Website Redesign</span>
                    <span className="text-gray-600">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Mobile App</span>
                    <span className="text-gray-600">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Database Migration</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold">Recent Activity</h3>
              <div className="mt-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                    <div>
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-gray-600">{i} hour ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}