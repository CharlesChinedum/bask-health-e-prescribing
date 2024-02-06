"use client"
import { createContext, useState } from "react"

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }: any) => {
    const [prescription, setPrescription] = useState([
        {
            id: 0,
            drug: 'Diazepam',
            description: 'Valium',
            last_prescribed: '04, May 2021',
            active_prescription: '11',
        },
        {
            id: 1,
            drug: 'Ibuprofen',
            description: 'Advil',
            last_prescribed: '10, May 2021',
            active_prescription: '8',
        },
        {
            id: 2,
            drug: 'Lisinopril',
            description: 'Zestril',
            last_prescribed: '15, May 2021',
            active_prescription: '5',
        },
        {
            id: 3,
            drug: 'Metformin',
            description: 'Glucophage',
            last_prescribed: '20, May 2021',
            active_prescription: '3',
        },
        {
            id: 4,
            drug: 'Atorvastatin',
            description: 'Lipitor',
            last_prescribed: '25, May 2021',
            active_prescription: '2',
        },
    ]
    )




    return (
        <GlobalContext.Provider value={{ prescription, setPrescription }}>
            {children}
        </GlobalContext.Provider>
    )
}