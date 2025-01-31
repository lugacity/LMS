import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";
import { Skeleton } from "@/Components/ui/skeleton";
import { useFetchEnrollment } from "@/hooks/data-management/use-fetch-enrollment-trends";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 3000 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 173 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305 },
  { month: "September", desktop: 237 },
  { month: "October", desktop: 173 },
  { month: "November", desktop: 209 },
  { month: "December", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "",
    color: "hsl(var(--chart-1))",
  },
};

export function TrendChart() {
  const [active, setActive] = useState("day");
  const period = [
    {
      label: "Today",
      action: "day",
    },
    {
      label: "This week",
      action: "week",
    },
    {
      label: "This month",
      action: "month",
    },
    {
      label: "This year",
      action: "year",
    },
  ];

  const { refetch } = useFetchEnrollment(active);

  const handleClick = (label) => {
    setActive(label);
    refetch();
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Enrollment Trends</CardTitle>
          <div className="flex items-center gap-5">
            {period.map((time) => {
              return (
                <button
                  className={cn(
                    "block rounded-[8.39px] px-[8.39px] py-[4.14px] text-xs capitalize text-[#1D2739] shadow-md hover:bg-[#CD0000] hover:text-white",
                    active === time.action && "bg-[#CD0000] text-white",
                  )}
                  key={time.action}
                  onClick={() => handleClick(time.action)}
                >
                  {time.label}
                </button>
              );
            })}
          </div>
        </div>
      </CardHeader>
      <TheBarChart />
    </Card>
  );
}

const TheBarChart = () => {
  const { isLoading, error, data } = useFetchEnrollment("day");

  if (isLoading) return <Skeleton className={"min-h-[382px] w-full"} />;
  if (error)
    return (
      <p>Error: {error?.response?.data?.message ?? "Something went wrong"}</p>
    );

  console.log("data", { data });

  const chartData = data?.data?.data?.map((enrollment) => {
    return {
      month: enrollment.date,
      desktop: enrollment.enrollmentCount,
    };
  });
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={true}
            axisLine={true}
            tickMargin={8}
            // tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="desktop"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            // tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="linear"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
  );
};
