import {
    scale,
    palletObject
} from '../../constant';
import React,{ useContext } from 'react'
import ControlContext from '../../context/ControlContext'
import UtilizationContext from '../../context/UtilizationContext'
const palletDimension = palletObject.dim;

const Space = ({
    pos,// position
    utilization = 0,
    ...props
}) => {
    const { control } = useContext(ControlContext)
    const { utilizationsRanges } = useContext(UtilizationContext)

    const getUtilization = (percent = 0) => {
        return utilizationsRanges.find(r => {
            return r.min <= percent && r.max > percent
        })?.color || 'black';

    }

    return (
        <mesh
            {...props}
            position={pos}
            scale={[
                palletDimension.width * scale,
                palletDimension.height * scale,
                palletDimension.depth * scale
            ]}
        >
            <boxGeometry />
            {
                (control?.utilization) ?
                    (
                        <meshBasicMaterial
                            opacity={0.3}
                            transparent={true}
                            color={getUtilization(utilization)}
                            wireframe={false}
                        />
                    )
                    :
                    (
                        <meshStandardMaterial
                            opacity={control?.componentOpacity}
                            transparent={true}
                            color={'#fff'}
                            wireframe={true}
                        />
                    )
            }
        </mesh>
    )
};

export default Space;

/*
 control?.utilization ?
                    (
                        <meshBasicMaterial
                            opacity={0.8}
                            transparent={true}
                            color={getUtilization(utilization)}
                            wireframe={false}
                        />
                    )
                    :
                    (
                        <meshStandardMaterial
                            map={texture}
                            attach="material"
                            reflectivity={1}
                            opacity={0.5}
                            transparent={true}
                        />
                    )
*/