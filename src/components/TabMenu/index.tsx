import { Menu, Tab } from "./styles"

export const TabMenu = (props: { cb: Function; focused: number; tabs: string[] }) => {
  const { cb, focused, tabs } = props;
  return (
    <Menu tabs={tabs.length}>
      {tabs.map((tab, i) => (
        <Tab focused={i === focused} key={tab + i} onClick={() => cb(i)} >
          {tab}
        </Tab>
      ))}
    </Menu>
  );
};