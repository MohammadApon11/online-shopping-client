import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsCard from './TabsCard';


const ToyTabs = () => {
    const [toys, setToys] = useState([])
    const [active, setActive] = useState("sports car")

    useEffect(() => {
        fetch(`https://toy-house-server.vercel.app/allToysByCategory/${active}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [active])

    const handleTabClick = (tabName) => {
        setActive(tabName)
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Shop By Category</h1>
            <div className='mt-20 mb-20 flex justify-center'>
                <Tabs className="w-full">
                    <TabList className="flex justify-between mb-10 border-2">
                        <Tab className="cursor-pointer lg:px-20 p-2 py-5 
                        border
                        focus:font-semibold 
                        focus:outline
                        outline-2
                         outline-blue-600 focus:text-blue-600 text-lg font-semibold" onClick={() => handleTabClick("sports car")} >Sports Car</Tab>
                        <Tab className="cursor-pointer lg:px-20 p-2 py-5 
                        border outline-2
                        focus:font-semibold 
                        focus:outline focus:outline-blue-600 focus:text-blue-600 text-lg font-semibold" onClick={() => handleTabClick("regular car")}>Regular Car</Tab>
                        <Tab className="cursor-pointer lg:px-20 p-2 py-5 
                        border outline-2
                        focus:font-semibold 
                        focus:outline focus:outline-blue-600 focus:text-blue-600 text-lg font-semibold" onClick={() => handleTabClick("truck")}>Truck</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-10'>
                            {
                                toys.map(toy => <TabsCard
                                    key={toy._id}
                                    toy={toy}
                                ></TabsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            {
                                toys.map(toy => <TabsCard
                                    key={toy._id}
                                    toy={toy}
                                ></TabsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            {
                                toys.map(toy => <TabsCard
                                    key={toy._id}
                                    toy={toy}
                                ></TabsCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default ToyTabs;