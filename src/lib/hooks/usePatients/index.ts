
import { useState, useEffect } from 'react';
import { useAppSelector } from '~/store';
import axiosInstance from '~/lib/api/axios';
import { Patient } from '~/features/Patient/types';


const usePatients = () => {
    const [patients, setPatients] = useState<Patient[]>([])
    const token = useAppSelector(state => state?.auth?.token)
    const [isLoading, setIsLoading] = useState(false)
    const fetchPatients = async () => {
        try {
            const response = await axiosInstance.get('/user/get_all_patients', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.patients);

            setPatients(response.data.patients)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        setIsLoading(true)
        fetchPatients()
        setIsLoading(false)
    }, [token])

    return {
        patients: patients,
        isLoading: isLoading,
    };
}
export default usePatients;