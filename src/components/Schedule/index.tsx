import { ImFilesEmpty } from 'react-icons/im';
import { BsArrowUpRight, BsArrowUp } from 'react-icons/bs';

import {
  DayColumn,
  DayTitle,
  EmptySchedule,
  Hour,
  HourRow,
  HourTitle,
  ScheduleDiv,
  Table,
} from './styles';
import { ScheduleMenu } from '../ScheduleMenu';
import { useSchedule } from '../../hooks/useSchedule';

export const Schedule = () => {
  const {
    days,
    defaultDays,
    defaultHours,
    getColumns,
    getRows,
    hours,
    schedule,
  } = useSchedule();
  const { innerWidth } = window;

  const mapDays = (daysArray: string[]) =>
    daysArray.map((day, i) => (
      <DayTitle key={day + i}>
        {innerWidth <= 500 ? day.charAt(0) : day}
      </DayTitle>
    ));

  const mapHours = (hoursArray: string[]) =>
    hoursArray.map((hour, i) => <Hour key={hour + i}>{hour}</Hour>);

  const Subjects = () => {
    return <h1> hdstpm</h1>;
  };
  const Empty = (props: { columns: number; rows: number }) => {
    const { columns, rows } = props;
    return (
      <EmptySchedule columnEnd={columns + 2} rowEnd={rows + 2}>
        <div>
          <span>{"You haven't add a subject yet!"}</span>
          <ImFilesEmpty />
          <span> {'Go to schedule menu to start adding subjects'} </span>
          {innerWidth <= 700 ? <BsArrowUp /> : <BsArrowUpRight />}
        </div>
      </EmptySchedule>
    );
  };
  return (
    <Table>
      <ScheduleMenu />
      <ScheduleDiv
        columns={getColumns()}
        rows={hours?.length || defaultHours.length}
      >
        <HourRow rows={getRows() + 2}>
          <HourTitle>{'Hour'}</HourTitle>
          {mapHours(hours.length ? hours : defaultHours)}
        </HourRow>
        <DayColumn columns={getColumns()} rows={getRows() + 2}>
          {mapDays(days.length ? days : defaultDays)}
        </DayColumn>
        {schedule.subjects.length ? (
          <Subjects />
        ) : (
          <Empty columns={defaultDays.length} rows={defaultHours.length} />
        )}
      </ScheduleDiv>
    </Table>
  );
};
