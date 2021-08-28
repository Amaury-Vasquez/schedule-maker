import { number } from 'joi';
import styled from 'styled-components';

export const CreateSchedule = styled.div``;

export const DayColumn = styled.div<{ columns: number; rows: number }>`
  display: grid;
  width: 100%;
  height: 100%;
  ${(props) =>
    `grid-template-columns: repeat(${props.columns}, 2fr);` +
    `grid-column-end: ${props.columns + 2};` +
    `grid-row-end: ${props.rows};`};
  grid-template-rows: inherit;
  grid-column-start: 2;
  grid-row-start: 1;
  border: 1px solid black;
`;

export const DayTitle = styled.span`
  width: 100%;
  height: 100%;
`;

export const HourTitle = styled.span`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background: var(--carbon);
  font-weight: 500;
  border-radius: var(--radius);
`;

export const Hour = styled.span`
  width: 100%;
  height: 100px;
  display: flex;
  background: var(--white);
  color: var(--gray-text);
  justify-content: center;
  align-items: center;
  border-top: none;
  border-bottom: 1px solid var(--neutral);
  text-align: center;
  border-radius: var(--radius);
`;

export const HourRow = styled.div<{ rows: number }>`
  grid-column: 1;
  min-height: 40vh;
  height: auto;
  width: 100%;
  display: grid;
  grid-row-start: 1;
  grid-row-end: ${(props) => props.rows};
  grid-template-rows: inherit;
  & > span:last-child {
    border-bottom: none;
  }
`;

export const ScheduleDiv = styled.div<{ columns: number; rows: number }>`
  height: auto;
  display: grid;
  width: 100%;
  /* border: 1px solid var(--carbon); */
  margin-top: 2vh;
  border-radius: var(--radius);

  ${(props) =>
    `grid-template-columns: 1fr repeat(${props.columns}, 2fr);` +
    `grid-template-rows: 1fr repeat(${props.rows}, 2fr);`}
`;

export const Table = styled.div`
  min-height: 94vh;
  height: auto;
  width: 90vw;
  padding: var(--padding);
  display: block;
  @media screen and (max-width: 700px) {
    width: 100vw;
    padding: 0;
  }
`;

export const Title = styled.span``;
