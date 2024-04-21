import { IoMdAdd } from "react-icons/io";
import React from "react";
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from "~/store";
import type { Patient, BasePatient } from "~/features/Patient/types";
import { createPatient } from "~/features/Patient/thunks";

// import
const AddPatientBtn = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const token = useAppSelector(state => state.auth.token);
    const handleCreatePatient = async (e: React.FormEvent<HTMLFormElement>) => {
        // create patient
        e.preventDefault();
        // const dob = ;
        const patient: BasePatient = {
            name_patient: e.currentTarget.full_name.value,
            dob: dayjs(e.currentTarget.dob.value).format('YYYY-MM-DD'),
            address_patient: e.currentTarget.address.value,
            avatar: e.currentTarget.avatar.files[0] ? e.currentTarget.avatar.files[0] : ''

        }
        console.log(patient);
        dispatch(createPatient({ patient, token: token as string }));
        // handleClose();
    }

    return (
        <>
            <div className="h-48 w-48 bg-gray-50 border-4 border-dashed rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <div className="text-9xl text-gray-200 hover:text-bluse-400" onClick={handleOpen}>
                    <IoMdAdd />
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                }} className="w-[800px] p-8">
                    <h1 className="text-3xl font-medium antialiased mb-5">Tạo hồ sơ bệnh nhân</h1>
                    <form onSubmit={handleCreatePatient} className="max-w" action='#' >
                        <div className="max-w">
                            <div className="mb-5 mx-8 flex items-center gap-5">
                                <label htmlFor="full_name" className="text-lg text-gray-900 dark:text-white w-48">Tên bệnh nhân</label>
                                <input type="text" id="full_name" name="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[56px] w-96" placeholder="ex: le thanh hoa" required />
                            </div>
                            <div className="mb-5 mx-8 flex items-center gap-5">
                                <label htmlFor="dob" className="text-lg text-gray-900 dark:text-white w-48">Ngày tháng năm sinh</label>
                                <input type="date" id="dob" name="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[56px] w-96" placeholder="Ngay inh" required />
                            </div>
                            <div className="mb-5 mx-8 flex items-center gap-5">
                                <label htmlFor="avatar" className="text-lg text-gray-900 dark:text-white w-48">Avatar</label>
                                <input type="file" id="avatar" name="avatar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[56px] w-96" placeholder="Ngay inh" accept="image/*" />
                            </div>
                            <div className="mb-5 mx-8 flex items-center gap-5">
                                <label htmlFor="address" className="text-lg text-gray-900 dark:text-white w-48">Địa chỉ</label>
                                <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[56px] w-96" placeholder="ex: le thanh hoa" required />
                            </div>
                            <div className="flex items-end justify-end mr-20 mx-8">
                                <button color="primary" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Tạo mới
                                </button>
                            </div>

                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
};

const PatientBtn: React.FC<{ patient: Patient }> = ({ patient }) => {
    return (
        <div className="h-48 w-48 bg-gray-0 border-4 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <Link to={`/patient/${patient.id_patients}`} >
                <div className="flex flex-col items-center">
                    <Avatar
                        alt={patient.name_patient}
                        src={`data:image/png;base64,${patient.avatar}`}
                        sx={{ width: 56, height: 56, mb: 2 }}
                    />
                    <span>{patient.name_patient}</span>
                    <span>{patient.dob}</span>
                </div>
            </Link>
        </div>
    )
}

export { AddPatientBtn, PatientBtn }