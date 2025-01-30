import Table from "@/Components/Table";
import { useFetchTopStudents } from "@/hooks/data-management/use-fetch-top-students";

const TopStudents = () => {
  const { isLoading, data, error } = useFetchTopStudents();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>{error?.response?.data?.message ?? "  Something went wrong!!"}</p>
    );

  console.log(data);
  return (
    <div className="rounded-lg border border-[#F0F2F5] p-6">
      <p className="mb-7 font-bold text-[#23314A]">Top Students</p>

      <Table cols={"2fr 1fr"}>
        <Table.Header className={"*:text-sm *:font-medium"}>
          <p>Name</p>
          <p>No. of Courses</p>
        </Table.Header>
        <div className="divide-y">
          <Table.Row className={"*:px-1 *:text-sm"}>
            <div>
              <p className="text-sm font-medium text-[#344054]">Robinson</p>
              <p className="truncate text-[#475367]">Robinson@gmail.com</p>
            </div>
            <p className="text-sm font-medium text-[#98A2B3]">23</p>
          </Table.Row>
          <Table.Row className={"*:px-1 *:text-sm"}>
            <div>
              <p className="text-sm font-medium text-[#344054]">Robinson</p>
              <p className="truncate text-[#475367]">Robinson@gmail.com</p>
            </div>
            <p className="text-sm font-medium text-[#98A2B3]">23</p>
          </Table.Row>
        </div>
      </Table>
    </div>
  );
};

export default TopStudents;
