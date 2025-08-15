import { Tabbar } from "@telegram-apps/telegram-ui";
import { Icon24PersonRemove } from '@telegram-apps/telegram-ui/dist/icons/24/person_remove';

import { useState } from "react";

const tabs = [
    {
        id: 'tab1',
        // text: 'Tab 1',
        Icon: () =>  <Icon24PersonRemove />
    },
    {
        id: 'tab2',
        text: 'Tab 2',
        Icon: () =>  <Icon24PersonRemove />
    },
    
    {
        id: 'tab3',
        text: 'Tab 3',
        Icon: () =>  <Icon24PersonRemove />
    },
    
]

export const TabbarSection = () => {
    const [currentTab, setCurrentTab] = useState(tabs[0].id);
    return <Tabbar>
        {tabs.map(({
            id,
            text,
            Icon
        }) => <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
            <Icon />
        </Tabbar.Item>)}
    </Tabbar>;
}
