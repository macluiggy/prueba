import React from 'react';
import { bankOne, bankTwo } from '../drum-pads/'
import InputWithLabel from './InputWithLabel'
import DrumPad from './DrumPad';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'

const Main = ({ state, switchPower, switchBank, switchVolume, changeClipText }) => {
	const { power, bank, volume } = state.switchStatus
	const { clipText } = state.clipTextStatus
	return (
		<div id='drum-machine'>
			<div className='drum_pad_container'>
				{(bank ? bankTwo : bankOne ).map(items =>
						<DrumPad
						 power={power}
						 key={items.keyCode}
						 {...items}
						 changeClipText={changeClipText}
						 volume={volume} /> )}
			</div>
			<div id='display'>
				<InputWithLabel
				 id='power'
				 name='power'
				 type='checkbox'
				 fn={(e) => switchPower(e.target.checked)}
				 toggle={power} >Power</InputWithLabel>
				 <span>{clipText}</span>
				 <input type="range" onChange={(e) => {
				 	console.log(e.target.value)
				 	changeClipText(`volume: ${Math.floor(e.target.value)}`)
				 	switchVolume(e.target.value)
				 }}/>
				 <InputWithLabel
				 id='power'
				 name='power'
				 type='checkbox'
				 fn={(e) => {
				 	switchBank(e.target.checked);
				 	changeClipText(bank ? 'heater kit' : 'smooth piano kit');
				 }}
				 toggle={bank} >Bank</InputWithLabel>

			</div>
		</div>
		)
}




export default connect(mapStateToProps, mapDispatchToProps)(Main)