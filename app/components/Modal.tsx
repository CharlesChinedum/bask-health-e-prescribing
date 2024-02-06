"use client"

import React, { useContext } from 'react'
import { GlobalContext } from "@/app/context/global.context";


interface ModalProps {
    open: boolean
    onClose: () => void
}

const Modal = (
    { open, onClose }: ModalProps
) => {

    const { prescription, setPrescription } = useContext<any>(GlobalContext);
    const inputStyle = 'w-full bg-gray-100 p-2 rounded-md border-[1px] border-gray-400'

    const addPrescription = (e: any) => {
        e.preventDefault()
        const patient = e.target.patient.value
        const drug = e.target.drug.value
        const description = e.target.description.value
        const last_prescribed = e.target.last_prescribed.value
        const active_prescription = e.target.active_prescription.value
        const status = e.target.status.value

        setPrescription([
            ...prescription,
            {
                id: prescription.length + 1,
                patient,
                drug,
                description,
                last_prescribed,
                active_prescription,
                status
            }
        ])


        onClose()
    }

    return (
        open && (
            <>
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-6 md:p-8 w-[90%] md:w-1/2">
                        <div className="flex flex-col items-center gap-10">
                            <div className="flex w-full justify-between">
                                <h3 className='text-xl font-semibold'>New Prescription</h3>
                                <div className='bg-red-200 w-7 h-7 rounded-full flex items-center justify-center'>
                                    <button
                                        onClick={
                                            () => onClose()
                                        }
                                        className="text-red-500 font-semibold "
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                            <div className='w-full'>
                                <form
                                    onSubmit={addPrescription}
                                    className='w-full flex flex-col gap-10'>
                                    <div className="w-full flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="patient">Patient</label>
                                            <input
                                                type="text"
                                                placeholder='Enter patient name'
                                                required
                                                id="patient"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="drug">Drug</label>
                                            <input type="text"
                                                placeholder='Enter drug name'
                                                required
                                                id="drug"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5">
                                            <div className="flex flex-col gap-1 w-full md:w-1/2">
                                                <label htmlFor="description">Description</label>
                                                <input type="text"
                                                    placeholder='Enter drug description'
                                                    id="description"
                                                    className={inputStyle}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 w-full md:w-1/2">
                                                <label htmlFor="last_prescribed">Last Prescribed</label>
                                                <input type="text"
                                                    placeholder='Enter last prescribed date'
                                                    required
                                                    id="last_prescribed"
                                                    className={inputStyle}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5">
                                            <div className="flex flex-col gap-1 w-full md:w-1/2">
                                                <label htmlFor="active_prescription">Active Prescription</label>
                                                <input type="text"
                                                    placeholder='Enter active prescription count'
                                                    required
                                                    id="active_prescription"
                                                    className={inputStyle}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 w-full md:w-1/2">
                                                <label htmlFor="status">Status</label>
                                                <input type="text"
                                                    placeholder='Enter status'
                                                    id="status"
                                                    className={inputStyle}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <button
                                            type='submit'
                                            className='bg-[#111827] text-white py-3 px-5 text-sm rounded-md'>Add Prescription</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </>
        )
    )
}

export default Modal