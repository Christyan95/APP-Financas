import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const index = () => {
  return (
    <>
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="500" />
            <ResumeItem title="Total" Icon={FaDollarSign} value="100" />
        </C.Container>
    </>
  )
}

export default index