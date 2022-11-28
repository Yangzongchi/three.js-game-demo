import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import * as THREE from 'three'
import Lights from './Lights.js'
import { Level } from './Level.js'
import Player from './Player.js'
import useGame from './stores/useGame.js'
import Effects from './Effects.js'



export default function Experience()
{

    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)
    return <>

        <color args={ ['#252731']}  attach='background' />
        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level count={ blocksCount } seed= { blocksSeed }/>
            <Player />
        </Physics>

        <Effects />
    </>
}