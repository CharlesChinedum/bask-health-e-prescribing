"use client"

import { useState, useContext } from 'react'

import { GlobalContext } from "@/app/context/global.context";

import Card from '../components/e-prescription/Card'
import Modal from '../components/Modal'
import { Trash2 } from 'lucide-react';

const Page = () => {
    const [modal, setModal] = useState(false)
    const { prescription, setPrescription } = useContext<any>(GlobalContext);

    const deletePrescription = (id: any) => {
        setPrescription(prescription.filter((item: any) => item.id !== id))
    }

    const overviewData = [
        {
            title: 'Prescriptions this month',
            description: '86',
            status: 'pending',
        }, {
            title: 'Patients reach',
            description: '24',
        }, {
            title: 'Satisfied patients',
            description: '20',
        }, {
            title: 'Unsatisfied patients',
            description: '4',
        },

    ]

    const patients = [
        {
            name: 'John Doe',
            age: 45,
            active_prescriptions: 5,
            last_prescription: '20, May 2021',
        },
        {
            name: 'Jane Doe',
            age: 35,
            active_prescriptions: 3,
            last_prescription: '25, May 2021',
        },
        {
            name: 'Sam Smith',
            age: 55,
            active_prescriptions: 2,
            last_prescription: '30, May 2021',
        },
        {
            name: 'Sara Smith',
            age: 25,
            active_prescriptions: 1,
            last_prescription: '05, June 2021',
        },

    ]

    return (
        <div className='w-full h-full p-5 md:p-10 flex flex-col gap-5 bg-gray-100'>
            <div className='w-full'>
                <button
                    onClick={() => setModal(!modal)}
                    className='bg-[#111827] text-white py-2 px-5 text-sm rounded-md'>Create New</button>
            </div>
            <div className="w-full flex flex-wrap gap-5">
                {
                    overviewData.map((item) => (
                        <div
                            key={item.title}
                            className='w-full md:w-[48%] lg:w-1/4'
                        >

                            <Card
                                title={item.title} description={item.description} status={item.status} />
                        </div>
                    ))
                }
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-1/2 h-[27rem] overflow-auto rounded-lg bg-white border-[1px] border-gray-400 p-5">
                    <div className="w-full">
                        <h2 className='font-semibold text-xl'>Prescription Status</h2>
                        <div>
                            {
                                prescription.map((item: any) => (
                                    <div
                                        key={item.drug}
                                        className="w-full flex justify-between py-3 border-b-[1px]">
                                        <div>
                                            <h2 className='font-semibold'>{item.drug} <span className='text-xs text-gray-500'>({item.description})</span> </h2>
                                            <p className='text-sm text-gray-500'>Last prescribed: {item.last_prescribed}</p>
                                        </div>
                                        <div className='flex items-center gap-2 md:gap-5'>
                                            <p className='text-sm'>Active: <span className='text-lg font-semibold'> {item.active_prescription} </span></p>
                                            <div
                                                onClick={
                                                    () => deletePrescription(item.id)
                                                }
                                                className='w-5 md:w-8 h-5 md:h-8 flex items-center justify-center rounded-full bg-red-200 hover:cursor-pointer'>
                                                <Trash2 size={15} className='text-red-500' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[27rem] overflow-auto rounded-lg bg-white border-[1px] border-gray-400 p-5">
                    <div className="w-full">
                        <h2 className='font-semibold text-xl'>Patients</h2>
                        <div>
                            {
                                patients.map((item) => (
                                    <div
                                        key={item.name}
                                        className="w-full flex justify-between py-3 border-b-[1px]">
                                        <div>
                                            <h2 className='font-semibold'>{item.name} <span className='text-xs text-gray-500'>({item.age})</span> </h2>
                                            <p className='text-sm text-gray-500'>Last prescription: {item.last_prescription}</p>
                                        </div>
                                        <div>
                                            <p className='text-sm'>Active: <span className='text-lg font-semibold'> {item.active_prescriptions} </span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Modal
                    open={modal}
                    onClose={() => setModal(false)}
                />

            </div>
        </div>
    )
}

export default Page