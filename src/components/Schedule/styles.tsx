import { number } from 'joi';
import styled from 'styled-components';

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
`;

export const DayTitle = styled.span`
  width: 100%;
  height: 100%;
  background: var(--watermelon);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
  border-radius: var(--radius);
`;

export const EmptySchedule = styled.div<{ columnEnd: number; rowEnd: number }>`
  grid-column-start: 2;
  grid-row-start: 2;
  ${(props) =>
    `grid-column-end: ${props.columnEnd};` + `grid-row-end: ${props.rowEnd};`};
  background: var(--white);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    height: auto;
    width: auto;
    padding: 10px;
    & > * {
      display: block;
      margin: 0 auto;
    }
    & > span {
      text-align: center;
      color: var(--gray-text);
    }
    & > svg {
      margin-top: 4vh;
      margin-bottom: 4vh;
      font-size: 3rem;
      color: var(--watermelon);
    }
    & > span:first-child {
      font-size: 1.5rem;
      font-weight: 500;
    }
    & > span:last-child {
      font-size: 1.2rem;
      font-weight: 400;
    }
    & > svg:last-child {
      font-size: 1.5rem;
    }
  }
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
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const ScheduleDiv = styled.div<{ columns: number; rows: number }>`
  height: auto;
  display: grid;
  width: 100%;
  /* border: 1px solid var(--carbon); */
  margin-top: 2vh;
  border-radius: var(--radius);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  ${(props) =>
    `grid-template-columns: 1fr repeat(${props.columns}, 2fr);` +
    `grid-template-rows: 1fr repeat(${props.rows}, 2fr);`};
  & > div {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    border-radius: var(--radius);
  }
  @media screen and (max-width: 700px) {
    overflow-x: scroll;
    width: auto;
    ${(props) => `grid-template-columns: repeat(${props.columns + 1}, 1fr);`};
  }
`;

export const Subject = styled.span<{ column: number }>`
  grid-column: ${(props) => props.column};
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: var(--gray-text);
  display: flex;
  justify-content: center;
  align-items: center;
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
