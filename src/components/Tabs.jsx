import React, {useState} from 'react';

const Tabs = props => {
    const { tab_list } = props;
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <>
        <div style={{display: 'flex'}}>
            {
                tab_list.map((item, index) => {
                    const tab_style = {
                        width: '100px', 
                        border: '1px solid black', 
                        margin: '4px', 
                        padding: '10px',
                    };

                    if (selectedTab === index){
                        tab_style.backgroundColor = "black";
                        tab_style.color = "white";
                    }

                    return (
                        <div key={index} onClick={e =>{
                            setSelectedTab(index);
                            tab_list[index].callback();
                        }} style={tab_style}>
                            {item.tab_name}
                        </div>
                    )
                })
            }
            </div>
            <div style={{width: '500px',height:'100px', border: '1px solid black', margin: '4px', padding: '10px'}}>
                {tab_list[selectedTab].tab_content}
            </div>
        
        </>

    )
}

export default Tabs;