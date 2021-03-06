import React, { Component } from 'react';

class LightBulb extends Component {

    render() {
        return (
<svg version="1.1" x="0px" y="0px"
	 viewBox="0 0 960 960" style={{EnableBackground: "new 0 0 960 960"}}
     transform={`rotate(${this.props.rotation})`}
     className={this.props.className}
	 id={this.props.id}
	 aria-label="light bulb">
<g>
	<circle fill="#E6E6E6" cx="478.7" cy="792.5" r="35.9"/>
	<path onClick={this.props.onClick}
			onKeyPress={this.props.onClick}
			onFocus={this.props.handleFocus}
			onBlur={this.props.handleUnfocus}
			onMouseEnter={this.props.handleFocus}
			onMouseLeave={this.props.handleUnfocus}
			tabIndex="0"
			className='bulb' 
			d="M488.4,222.2c-2.7-0.1-5.3-0.2-8-0.2c-2.6,0-5.2,0.1-7.9,0.2c-130.1,5.2-227.4,145.4-170,262.3l2.7,5.4
		c30.5,52.5,70.4,38.5,70.4,98.3v42.3h210.6v-42.8c0-59.5,36-47.4,65.6-97.5l3.1-6.4C711.2,366.8,618.1,227.4,488.4,222.2z"/>
	<g>
		<path className='bulb-highlight' d="M488.4,222.2c-2.7-0.1-5.3-0.2-8-0.2c-2.6,0-5.2,0.1-7.9,0.2c-57.2,2.3-108,30.6-142.1,71.6
			c31.8-26.6,72.1-43.9,116.2-45.7c2.6-0.1,5.2-0.2,7.9-0.2c2.7,0,5.3,0.1,8,0.2c129.7,5.3,222.9,144.6,166.6,261.6l-3.1,6.4
			c-2.3,3.9-4.6,7.4-7,10.5c10.4-8.2,22.1-18.2,32.9-36.4l3.1-6.4C711.2,366.8,618.1,227.4,488.4,222.2z"/>
	</g>
	<path className="filament" style={{fill:"none", strokeWidth:"14.9358", strokeMiterlimit:"10"}} d="M500.2,615.4c-3.8-33.6-7.5-67.3-6.2-101.1s8.1-67.8,24.2-97.5c4.1-7.5,8.9-14.9,15.9-19.9
		c11.7-8.3,28.8-8.1,40.3,0.6s16.3,25.1,11.5,38.6c-4.8,13.3-17.2,22.3-30.1,28.2c-25.6,11.8-134.3,11.8-159.9,0
		c-12.8-5.9-25.3-14.9-30.1-28.2c-4.9-13.5,0-29.9,11.5-38.6s28.6-8.9,40.3-0.6c7,5,11.8,12.4,15.9,19.9
		c16.1,29.7,22.9,63.7,24.2,97.5s-2.4,67.5-6.2,101.1"/>
	<path fill="#CCCCCC" d="M556.9,792.5H406.2c-12.1,0-30.9-9.4-30.9-20.9l0,0V619.9c0-8.1,6.5-14.6,14.6-14.6h183.3
		c8.1,0,14.6,6.5,14.6,14.6V771v0.6C587.8,783.1,568.9,792.5,556.9,792.5z"/>
	<path fill="#E6E6E6" d="M588.2,630.5l-225.6,27.2c-9.6,1.2-18.3-5.7-19.5-15.3l-0.4-3.4c-1.2-9.6,5.7-18.3,15.3-19.5l225.6-27.2
		c9.6-1.2,18.3,5.7,19.5,15.3l0.4,3.4C604.7,620.6,597.8,629.3,588.2,630.5z"/>
	<path fill="#E6E6E6" d="M595.9,693.9l-225.6,27.2c-9.6,1.2-18.3-5.7-19.5-15.3l-0.4-3.4c-1.2-9.6,5.7-18.3,15.3-19.5l225.6-27.2
		c9.6-1.2,18.3,5.7,19.5,15.3l0.4,3.4C612.3,684,605.5,692.8,595.9,693.9z"/>
	<path fill="#E6E6E6" d="M603.5,757.4l-225.6,27.2c-9.6,1.2-18.3-5.7-19.5-15.3l-0.4-3.4c-1.2-9.6,5.7-18.3,15.3-19.5l225.6-27.2
		c9.6-1.2,18.3,5.7,19.5,15.3l0.4,3.4C620,747.5,613.1,756.2,603.5,757.4z"/>
	<polygon fill="#B3B3B3" points="375.3,720.5 375.3,732.6 587.8,707 587.8,694.9 	"/>
	<path fill="#B3B3B3" d="M586.5,630.7l-211.2,25.5v12.1l211.2-25.5c0.4-0.1,0.8-0.2,1.2-0.3v-12.1C587.3,630.5,587,630.6,586.5,630.7z"
		/>
	<path fill="#B3B3B3" d="M382.8,784c6.6,5.1,16.2,8.5,23.4,8.5h6.5l175.1-21.1V771v-11.7L382.8,784z"/>
	<g>
		<g>
			<g>
				<g>
					<line className='light-ray' x1="242.2" y1="605.2" x2="298" y2="557.6"/>
					<line className='light-ray' x1="242.2" y1="605.2" x2="298" y2="557.6"/>
					<path fill="none" d="M275,466.8c0,0,0.1,0.3,0.3,0.9c0.2,0.6,0.5,1.5,0.9,2.6c0.8,2.2,1.8,5.4,3.3,9.2c0.4,0.9,0.7,1.9,1.1,2.9
						c0.2,0.5,0.4,1,0.6,1.6c0.2,0.5,0.5,1,0.7,1.6c0.9,2.1,1.9,4.4,2.9,6.7c1.1,2.3,2.3,4.6,3.4,7c0.5,1.2,1.2,2.4,1.9,3.5
						c0.6,1.2,1.3,2.4,1.9,3.6c5.2,9.4,11.3,18.4,16.1,24.9c2.4,3.2,4.6,5.9,6.1,7.7s2.4,2.8,2.4,2.8l-85,72.6c0,0-1.3-1.5-3.6-4.3
						s-5.5-6.8-9.2-11.7c-1.8-2.5-3.7-5.2-5.8-8.1c-1-1.4-2.1-2.9-3.1-4.4s-2.1-3.1-3.1-4.7c-1-1.6-2.1-3.2-3.2-4.9
						c-1.1-1.6-2.1-3.4-3.1-5.1c-1-1.7-2.1-3.5-3.1-5.2l-1.6-2.6l-1.5-2.7c-1-1.8-2-3.6-2.9-5.4c-1-1.8-2-3.6-2.8-5.4
						c-1.8-3.6-3.5-7.2-5.2-10.7c-1.5-3.5-3-6.9-4.4-10.2c-0.3-0.8-0.7-1.6-1-2.4c-0.3-0.8-0.6-1.6-0.9-2.4c-0.6-1.5-1.2-3-1.7-4.5
						c-2.3-5.7-3.9-10.6-5-14c-0.6-1.7-1-3-1.3-4c-0.3-0.9-0.5-1.4-0.5-1.4L275,466.8z"/>
				</g>
				<g>
					<line className='light-ray' x1="177.9" y1="482.7" x2="248.7" y2="463.9"/>
					<line className='light-ray' x1="177.9" y1="482.7" x2="248.7" y2="463.9"/>
					<path fill="none" d="M267.3,371.9c0,0-0.2,1.3-0.4,3.7c-0.1,1.2-0.3,2.6-0.5,4.2c-0.1,0.8-0.2,1.7-0.3,2.6
						c-0.1,0.9-0.1,1.9-0.2,2.9c-0.7,8.1-0.9,19-0.3,29.7c0.1,1.3,0.2,2.7,0.3,4c0.1,1.3,0.1,2.7,0.3,4c0.3,2.6,0.6,5.2,0.9,7.7
						c0.8,5,1.4,9.7,2.3,13.6c0.4,2,0.7,3.8,1.1,5.4s0.7,3,1,4.1c0.6,2.3,0.9,3.6,0.9,3.6l-108.1,28.7c0,0-0.5-2-1.4-5.5
						c-0.4-1.7-0.9-3.9-1.5-6.3s-1.1-5.2-1.7-8.2c-1.3-6-2.3-13.1-3.5-20.7c-0.4-3.8-0.9-7.8-1.3-11.8c-0.3-2-0.3-4-0.5-6.1
						c-0.1-2-0.3-4.1-0.4-6.1c-0.9-16.4-0.6-32.7,0.5-45c0.1-1.5,0.2-3,0.3-4.4c0.2-1.4,0.3-2.7,0.4-3.9c0.3-2.5,0.5-4.6,0.8-6.4
						c0.4-3.6,0.7-5.6,0.7-5.6L267.3,371.9z"/>
				</g>
				<g>
					<line className='light-ray' x1="172.9" y1="344.5" x2="244.9" y2="358"/>
					<line className='light-ray' x1="172.9" y1="344.5" x2="244.9" y2="358"/>
					<path fill="none" d="M301.2,283.2c0,0-0.2,0.3-0.5,0.8s-0.8,1.3-1.5,2.3c-0.6,1-1.4,2.2-2.3,3.6c-0.4,0.7-0.9,1.4-1.4,2.2
						c-0.5,0.8-0.9,1.6-1.4,2.5c-1,1.8-2.1,3.7-3.2,5.7c-0.6,1-1.1,2.1-1.6,3.2s-1.1,2.2-1.7,3.3c-0.6,1.1-1.2,2.3-1.7,3.4
						c-0.6,1.2-1.1,2.4-1.6,3.6s-1.1,2.4-1.6,3.7c-0.5,1.2-1.1,2.4-1.6,3.7c-1,2.5-1.9,5-2.9,7.5c-0.5,1.2-0.9,2.5-1.3,3.7
						s-0.8,2.5-1.2,3.7c-0.4,1.2-0.8,2.4-1.2,3.5c-0.4,1.2-0.6,2.3-1,3.4c-0.6,2.2-1.2,4.3-1.7,6.3c-0.3,1-0.5,1.9-0.7,2.8
						s-0.4,1.8-0.6,2.6c-0.4,1.6-0.7,3-0.9,4.1c-0.3,1.2-0.5,2-0.6,2.7c-0.1,0.6-0.2,1-0.2,1L159,341.9c0,0,0.1-0.5,0.3-1.5
						c0.1-1,0.5-2.3,0.8-4.1c0.4-1.8,0.9-3.9,1.4-6.3c0.3-1.2,0.6-2.5,0.9-3.9c0.3-1.4,0.6-2.8,1-4.3c0.8-3,1.7-6.2,2.6-9.6
						c0.5-1.7,0.9-3.5,1.5-5.2c0.6-1.8,1.2-3.6,1.8-5.4s1.2-3.7,1.8-5.6s1.2-3.8,2-5.7c1.5-3.8,2.9-7.6,4.4-11.4
						c0.7-1.9,1.6-3.8,2.4-5.7c0.8-1.9,1.7-3.7,2.5-5.6c0.8-1.8,1.6-3.7,2.5-5.5s1.8-3.5,2.6-5.2c0.9-1.7,1.7-3.4,2.5-5.1
						c0.8-1.6,1.6-3.3,2.5-4.8c1.7-3.1,3.4-6,4.9-8.7c0.8-1.3,1.5-2.6,2.2-3.8s1.5-2.3,2.1-3.4c1.3-2.1,2.5-4,3.5-5.5
						s1.7-2.7,2.2-3.5s0.8-1.2,0.8-1.2L301.2,283.2z"/>
				</g>
				<g>
					<line className='light-ray' x1="228" y1="217.5" x2="287" y2="260.9"/>
					<line className='light-ray' x1="228" y1="217.5" x2="287" y2="260.9"/>
					<path fill="none" d="M370.2,217.7c0,0-0.3,0.2-0.8,0.5s-1.4,0.8-2.4,1.4c-2,1.3-4.8,3.1-8.2,5.3c-6.6,4.7-15.3,11.1-23.3,18.4
						c-1,0.9-2,1.8-3,2.8c-1,0.9-1.9,1.9-2.9,2.8c-1,0.9-1.9,1.8-2.8,2.7c-0.9,1-1.8,1.9-2.6,2.8c-0.9,0.9-1.7,1.8-2.6,2.7
						c-0.8,0.9-1.7,1.7-2.4,2.6c-1.5,1.8-2.9,3.4-4.2,5c-0.7,0.8-1.3,1.5-1.9,2.2s-1.1,1.4-1.6,2.1c-1,1.3-1.9,2.4-2.6,3.4
						c-0.7,0.9-1.3,1.7-1.7,2.2c-0.4,0.5-0.6,0.8-0.6,0.8l-90.1-66.2c0,0,0.3-0.4,0.9-1.2c0.6-0.8,1.4-1.9,2.5-3.3
						c1.1-1.4,2.4-3.1,4-5.1c0.8-1,1.6-2,2.4-3.1c0.9-1.1,1.9-2.2,2.8-3.4c2-2.3,4.2-4.9,6.5-7.5c1.1-1.4,2.4-2.6,3.7-4
						c1.3-1.3,2.6-2.7,3.9-4.1c1.3-1.4,2.7-2.8,4-4.2c1.4-1.4,2.8-2.8,4.3-4.2s2.9-2.8,4.4-4.2c1.5-1.4,2.9-2.9,4.5-4.2
						c12.1-11.1,25.3-20.9,35.3-27.9c5.2-3.4,9.4-6.1,12.5-8.1c1.5-1,2.8-1.6,3.6-2.1c0.8-0.5,1.3-0.7,1.3-0.7L370.2,217.7z"/>
				</g>
				<g>
					<line className='light-ray' x1="332.4" y1="126.9" x2="367" y2="191.4"/>
					<line className='light-ray' x1="332.4" y1="126.9" x2="367" y2="191.4"/>
					<path fill="none" d="M460.6,188.4c0,0-1.3,0.1-3.7,0.3c-2.3,0.2-5.7,0.8-9.7,1.3c-2,0.2-4.1,0.7-6.4,1.1
						c-1.1,0.2-2.3,0.4-3.5,0.7c-1.2,0.2-2.4,0.4-3.6,0.7c-2.5,0.6-5,1.2-7.6,1.8c-1.3,0.3-2.6,0.7-3.9,1.1
						c-1.3,0.4-2.6,0.8-3.9,1.1c-1.3,0.4-2.6,0.7-3.9,1.1c-1.3,0.4-2.5,0.9-3.8,1.3c-1.3,0.4-2.5,0.9-3.7,1.3
						c-1.2,0.4-2.5,0.8-3.6,1.3c-2.3,0.9-4.6,1.9-6.8,2.7c-0.5,0.2-1.1,0.4-1.6,0.6c-0.5,0.2-1,0.5-1.5,0.7c-1,0.5-1.9,0.9-2.9,1.3
						c-1.8,0.8-3.5,1.6-5,2.3c-1.5,0.8-2.7,1.4-3.8,2c-2.1,1.1-3.3,1.7-3.3,1.7l-52.9-98.5c0,0,1.8-0.9,5-2.6c1.6-0.8,3.5-1.8,5.7-3
						c2.3-1.1,4.8-2.2,7.6-3.5c1.4-0.6,2.9-1.3,4.4-2c0.8-0.3,1.5-0.7,2.3-1s1.6-0.7,2.4-1c3.3-1.3,6.7-2.7,10.3-4.1
						c1.8-0.7,3.6-1.4,5.5-2c1.9-0.7,3.8-1.3,5.7-2c1.9-0.7,3.8-1.3,5.8-2c2-0.6,3.9-1.2,5.9-1.7c2-0.6,3.9-1.2,5.9-1.7
						c2-0.6,3.9-1.2,5.9-1.6c3.9-0.9,7.8-1.9,11.5-2.8c1.9-0.5,3.7-0.8,5.5-1.1c1.8-0.3,3.6-0.7,5.3-1c3.5-0.6,6.7-1.3,9.8-1.7
						c6.1-0.8,11.2-1.6,14.7-1.9c3.6-0.3,5.6-0.5,5.6-0.5L460.6,188.4z"/>
				</g>
				<g>
					<line className='light-ray' x1="465.8" y1="90.2" x2="469.1" y2="163.4"/>
					<line className='light-ray' x1="465.8" y1="90.2" x2="469.1" y2="163.4"/>
					<path fill="none" d="M554.9,201c0,0-0.3-0.1-0.9-0.4c-0.6-0.2-1.4-0.6-2.6-0.9c-2.2-0.7-5.4-1.8-9.3-3
						c-1.9-0.5-4.1-1.1-6.3-1.7c-1.1-0.3-2.3-0.6-3.4-1c-1.2-0.3-2.4-0.5-3.6-0.8c-2.5-0.5-5-1.1-7.6-1.7c-2.6-0.4-5.3-0.9-7.9-1.3
						c-10.7-1.6-21.5-2.5-29.6-2.5c-2,0-3.9-0.1-5.5-0.1s-3.1,0.1-4.3,0.1c-2.4,0.1-3.7,0.1-3.7,0.1l-5-111.7c0,0,2-0.1,5.6-0.2
						c1.8,0,4-0.2,6.5-0.2s5.3,0.1,8.4,0.1c12.3,0,28.6,1.4,44.8,3.8c4,0.7,8.1,1.4,12.1,2.1c4,0.8,7.8,1.7,11.6,2.5
						c1.9,0.4,3.7,0.8,5.5,1.3s3.5,1,5.2,1.4c3.4,0.9,6.6,1.8,9.6,2.6c5.9,1.9,10.7,3.5,14.1,4.6c1.7,0.5,3,1.1,3.9,1.4
						s1.4,0.5,1.4,0.5L554.9,201z"/>
				</g>
				<g>
					<line className='light-ray' x1="601.9" y1="114.6" x2="573.4" y2="182"/>
					<line className='light-ray' x1="601.9" y1="114.6" x2="573.4" y2="182"/>
					<path fill="none" d="M634.4,253.1c0,0-0.9-1-2.6-2.7c-0.8-0.9-1.9-1.8-3.1-3c-1.2-1.1-2.5-2.4-4-3.8c-1.4-1.4-3.2-2.8-4.9-4.3
						c-0.9-0.8-1.8-1.5-2.7-2.3c-0.5-0.4-0.9-0.8-1.4-1.2s-1-0.8-1.5-1.2c-2-1.6-4.1-3.2-6.2-4.8c-2.1-1.6-4.4-3.1-6.6-4.7
						c-8.9-6.1-18.2-11.6-25.5-15c-1.8-0.9-3.4-1.8-4.9-2.5s-2.8-1.2-3.9-1.7c-2.2-1-3.4-1.5-3.4-1.5l43.6-102.9
						c0,0,1.9,0.8,5.2,2.3c1.6,0.7,3.6,1.6,5.9,2.6c2.3,1,4.8,2.4,7.5,3.7c11.1,5.4,25.3,13.6,38.8,22.9c3.3,2.4,6.7,4.7,10,7.1
						c3.2,2.5,6.3,4.9,9.4,7.3c0.8,0.6,1.5,1.2,2.2,1.8s1.4,1.2,2.1,1.8c1.4,1.2,2.8,2.4,4.1,3.5c2.7,2.3,5.2,4.4,7.4,6.6
						c2.2,2.1,4.3,4,6.1,5.7s3.4,3.2,4.6,4.5c2.5,2.6,3.9,4,3.9,4L634.4,253.1z"/>
				</g>
				<g>
					<line className='light-ray' x1="714.1" y1="195.4" x2="659.3" y2="244"/>
					<line className='light-ray' x1="714.1" y1="195.4" x2="659.3" y2="244"/>
					<path fill="none" d="M683.8,334.3c0,0-0.4-1.3-1.2-3.5c-0.4-1.1-0.9-2.5-1.4-4c-0.6-1.5-1.3-3.2-2.1-5.1
						c-0.4-0.9-0.8-1.9-1.2-2.9c-0.2-0.5-0.4-1-0.6-1.5c-0.2-0.5-0.5-1-0.7-1.6c-1-2.1-2-4.3-3-6.6c-0.5-1.2-1.1-2.3-1.7-3.4
						c-0.6-1.2-1.2-2.3-1.8-3.5s-1.2-2.4-1.8-3.6c-0.7-1.2-1.4-2.3-2.1-3.5c-0.7-1.2-1.4-2.3-2-3.5l-1-1.7c-0.4-0.6-0.7-1.1-1.1-1.7
						c-1.4-2.2-2.9-4.4-4.2-6.5c-1.4-2.1-2.9-4-4.2-5.9c-0.7-0.9-1.3-1.9-2-2.7c-0.6-0.9-1.3-1.7-2-2.5c-1.3-1.6-2.4-3-3.4-4.3
						c-0.5-0.6-1-1.3-1.4-1.8c-0.5-0.5-0.9-1-1.3-1.5c-1.6-1.8-2.5-2.8-2.5-2.8l83.8-74c0,0,1.3,1.5,3.7,4.2c0.6,0.7,1.2,1.4,2,2.2
						c0.7,0.8,1.4,1.7,2.2,2.7c1.6,2,3.3,4.2,5.2,6.6c0.9,1.2,2,2.4,3,3.8c1,1.3,2,2.7,3,4.2c2,2.9,4.3,5.8,6.4,9
						c2.1,3.2,4.3,6.5,6.5,9.9c0.5,0.8,1.1,1.7,1.6,2.6c0.5,0.9,1,1.8,1.5,2.6c1,1.8,2.1,3.5,3.1,5.3s2.1,3.5,3.1,5.3
						s1.9,3.6,2.8,5.4c0.9,1.8,1.9,3.6,2.8,5.3c0.9,1.8,1.8,3.5,2.6,5.2c1.6,3.5,3.2,6.9,4.6,10.1c0.4,0.8,0.7,1.6,1.1,2.4
						c0.3,0.8,0.6,1.6,1,2.3c0.6,1.5,1.2,3,1.8,4.4c1.1,2.9,2.2,5.5,3.1,7.8c0.8,2.4,1.6,4.4,2.2,6.1c1.2,3.4,1.8,5.3,1.8,5.3
						L683.8,334.3z"/>
				</g>
				<g>
					<line className='light-ray' x1="780.6" y1="316.8" x2="710.1" y2="336.8"/>
					<line className='light-ray' x1="780.6" y1="316.8" x2="710.1" y2="336.8"/>
					<path fill="none" d="M692.8,425.6c0,0,0.1-0.3,0.2-0.9c0.1-0.3,0.1-0.7,0.2-1.1c0.1-0.4,0.1-0.9,0.2-1.4c0.2-1,0.4-2.3,0.6-3.7
						c0.1-0.7,0.1-1.4,0.2-2.1c0-0.4,0.1-0.7,0.1-1.1s0.1-0.8,0.1-1.1c0-0.7,0.1-1.4,0.1-2.2c0.1-0.6,0.1-1.9,0.1-3
						c0-2.3,0.1-4.8,0.1-7.3c0.1-1.3,0-2.6-0.1-3.9c0-1.3-0.1-2.6-0.1-3.9s-0.1-2.7-0.1-4s-0.2-2.7-0.3-4
						c-0.6-10.8-2.7-21.4-4.2-29.3c-0.9-3.9-1.7-7.2-2.3-9.5c-0.7-2.3-1.1-3.5-1.1-3.5L794,313c0,0,0.6,2,1.6,5.4
						c0.8,3.5,2,8.5,3.5,14.5c2.5,12.1,5.4,28.3,6.4,44.6c0.2,2,0.4,4.1,0.5,6.1s0.1,4.1,0.2,6.1c0.1,2,0.1,4,0.2,6
						c0.1,2,0.1,3.9,0.1,5.8c-0.1,3.8-0.1,7.5-0.2,11.1c0,1.8,0,3.3-0.2,5.5c-0.1,2-0.3,3.9-0.4,5.8c-0.1,1-0.2,1.8-0.2,2.6
						c-0.1,0.8-0.2,1.6-0.3,2.4c-0.2,1.6-0.4,3.1-0.5,4.5c-0.4,2.7-0.7,5-1,6.9c-0.1,0.9-0.3,1.8-0.4,2.5c-0.1,0.7-0.2,1.3-0.3,1.8
						c-0.2,1-0.3,1.5-0.3,1.5L692.8,425.6z"/>
				</g>
				<g>
					<line className='light-ray' x1="786" y1="457.2" x2="714.7" y2="440.4"/>
					<line className='light-ray' x1="786" y1="457.2" x2="714.7" y2="440.4"/>
					<path fill="none" d="M657.2,524c0,0,0.7-1.4,1.9-3.7c1.2-2.4,2.8-5.8,4.8-9.9c3.8-8.3,8.7-19.5,13-30.8
						c4.4-11.3,8.1-22.7,10.5-31c1.1-4.1,2.1-7.6,2.7-10c0.3-1.2,0.5-2.1,0.7-2.8c0.2-0.6,0.2-1,0.2-1l108.9,25.5
						c0,0-0.1,0.5-0.3,1.4s-0.6,2.2-1,3.9c-0.8,3.4-2.1,8.2-3.7,13.8c-3.2,11.3-8,25.8-13.4,39.8c-5.4,14.1-11.3,27.8-16.1,38
						c-2.4,5.1-4.4,9.3-5.9,12.3s-2.3,4.6-2.3,4.6L657.2,524z"/>
				</g>
				<g>
					<line className='light-ray' x1="738.3" y1="579.7" x2="673.8" y2="545"/>
					<line className='light-ray' x1="738.3" y1="579.7" x2="673.8" y2="545"/>
					<path fill="none" d="M607.2,594.4c0,0,0.2-0.2,0.5-0.4c0.1,0,0.1,0,0.2-0.1c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.5-0.4,0.7-0.5
						c0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.4-0.3,0.6-0.5c0.4-0.3,0.8-0.7,1.3-1.1c0.4-0.3,1-0.9,1.5-1.4c0.6-0.5,1.1-1.1,1.7-1.6
						c0.6-0.7,1.3-1.4,2-2.1c0.3-0.3,0.7-0.7,1-1.1c0.3-0.3,0.7-0.8,1.1-1.2c0.7-0.8,1.5-1.7,2.2-2.5c0.8-0.8,1.5-1.9,2.3-2.8
						c1.6-1.9,3.2-4,4.8-6.1c6.4-8.5,12.6-18.5,17.1-26c2.2-3.9,4.1-7,5.3-9.4c1.3-2.3,2-3.6,2-3.6l98.5,52.8c0,0-0.9,1.7-2.5,4.6
						c-1.6,2.9-4,7.1-6.8,12.1c-5.9,10-14,23.2-24,36.4c-2.5,3.3-5,6.6-7.7,9.9c-1.4,1.6-2.6,3.2-4,4.8s-2.8,3.2-4.2,4.7
						c-0.7,0.8-1.3,1.5-2.1,2.3c-0.7,0.8-1.5,1.5-2.2,2.3c-1.5,1.5-2.9,3-4.3,4.4c-1.5,1.4-3,2.9-4.5,4.2c-1.5,1.4-2.8,2.6-4.4,3.9
						c-1.5,1.3-3,2.5-4.3,3.6c-0.7,0.6-1.3,1.1-2.1,1.7c-0.7,0.5-1.5,1.1-2.2,1.6c-1.4,1-2.7,2-4,2.9c-0.6,0.4-1.2,0.9-1.8,1.2
						c-0.6,0.4-1.3,0.8-1.8,1.2c-4.7,2.9-7.5,4.5-7.5,4.5L607.2,594.4z"/>
				</g>
			</g>
		</g>
	</g>
</g>
</svg> );
    }
}

export default LightBulb;