import {
  DayColumn,
  DayTitle,
  Hour,
  HourRow,
  HourTitle,
  ScheduleDiv,
  Table,
} from './styles';
import { ScheduleMenu } from '../ScheduleMenu';
import { useSchedule } from '../../hooks/useSchedule';

export const Schedule = () => {
  const { days, defaultDays, defaultHours, hours, schedule } = useSchedule();

  return (
    <Table>
      <ScheduleMenu />
      <ScheduleDiv
        columns={days.length || defaultDays.length}
        rows={hours?.length || defaultHours.length}
      >
        <HourRow
          rows={hours.length ? hours.length + 2 : defaultHours.length + 2}
        >
          <HourTitle>{'Hour'}</HourTitle>

          {hours?.length
            ? hours.map((hour, i) => <Hour key={hour + i}>{hour}</Hour>)
            : defaultHours.map((hour, i) => <Hour key={hour + i}>{hour}</Hour>)}
        </HourRow>
        <DayColumn
          columns={days.length ? days.length : defaultDays.length}
          rows={hours.length ? hours.length + 2 : defaultHours.length + 2}
        >
          {days.length
            ? days.map((day, i) => <DayTitle key={day + i}>{day}</DayTitle>)
            : defaultDays.map((day, i) => (
                <DayTitle key={day + i}> {day} </DayTitle>
              ))}
        </DayColumn>
      </ScheduleDiv>
    </Table>
  );
};
