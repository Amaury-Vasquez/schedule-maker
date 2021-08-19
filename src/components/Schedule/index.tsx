import { Table } from "./styles"
import { useSchedule } from "../../hooks/useSchedule"

export const Schedule = () => {
  const {hours, schedule} = useSchedule();
  return <Table></Table>;
}