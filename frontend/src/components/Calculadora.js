import React from 'react'
import {  Modal,Image } from 'semantic-ui-react'
import CalculatorClass from './calculadora/CalculatorClass';

const Calculadora = () => (
  <Modal size="large" trigger={<Image size="mini" src="img/calcicon.png"></Image>}>
    <Modal.Content >
      <CalculatorClass></CalculatorClass>
    </Modal.Content>
  </Modal>
)

export default Calculadora