import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMessages } from '../redux/greetings';

function Greetings() {
	const dispatch = useDispatch()
	const message = useSelector(state => state.messages)

	const generateMessage = async () => {
		await dispatch(fetchAllMessages())
	}

	return (
		<div>
			<button onClick={()=> generateMessage()}>GENERATE MESSAGE</button>
			<p>{message}</p>
		</div>
		

	);
}

export default Greetings