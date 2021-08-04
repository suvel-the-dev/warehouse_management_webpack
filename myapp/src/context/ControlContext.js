import React,{ createContext, useState, useEffect, useRef } from 'react'
import favCamList from '../data/favCamList'
const ControlContext = createContext({});


export const ControlProvider = ({ children }) => {
    const [control, setControl] = useState({
        demand: 'All',
        velocity: 'NONE',
        dayLastPick: '',
        expiry: '',
        utilization: false,
        utilizationType: 'UBA',
        costHeatMap: false,
        showStats: false,
        showAisleMark: false,
        showSKUType: false,
        showOpzModal: false,
        showFilterModal: false,
        abc: 'NONE',
        componentOpacity: 1.0,
        displacement: false,
        displacedDesc: undefined,
        swap: false,
        showOptimizationSwitch: false,
        optimizationForm: {
            startTime: '',
            endOptimization: '',
            associates: '',
            OptimizationType: 'NONE'

        },
        cameraPosition: [0, 50, 500],
        orbitTarget: [0, 50, 1000],
        abcdClassification: false,
        animate: false,
        favCams: [],
    })
    useEffect(() => {
        let cams = favCamList;
        if (localStorage?.favCams && JSON.parse(localStorage.favCams)?.length > 0)
            cams = JSON.parse(localStorage.favCams);
        setControl({
            ...control,
            favCams: cams
        })
    }, [])
    var orbitRef = useRef()
    const value = { control, setControl, orbitRef }

    return (
        <ControlContext.Provider value={value}>
            {children}
        </ControlContext.Provider>
    )
}
export default ControlContext;