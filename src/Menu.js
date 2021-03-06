import React, { Component } from 'react'
import $ from 'jquery'


import './menu.css'

class Menu extends Component {
	constructor(props){
		super(props)
		this.configs = {
			'senseSpeed'    : 5,
			'previusScroll' : 0,
			'imediate'      : 10,
			'openMenu'      : false,
		}
		this.renderMenu = this.renderMenu.bind(this)
	}
	componentDidMount() {
		this.setDebounce()
		this.setHamburguer()
		this.setLinks()
	}
	debounce(func, wait, immediate){
		let timeout
		return function() {
			let context = this, args = arguments
			let later = function() {
				timeout = null
				if (!immediate) func.apply(context, args)
			}
			let callNow = immediate && !timeout
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
			if (callNow) func.apply(context, args)
		}
	}
	setHamburguer(){
		$(".hamburguer").on("click", function(e) {
			e.preventDefault()
			$(this).toggleClass("active")
			$(".menu-mobile").toggleClass("active")
			setTimeout(function () {
				$(".menu-mobile").toggleClass("end")
			}, 500)
		})
	}
	setDebounce() {
		const self = this
		$(document).scroll(self.debounce(function () {
			self.go()
		}, self.configs.imediate))
	}
	go() {
		let scroller = $(document).scrollTop()
		let offset = $(window).height() * 1 / 6
		if (scroller - this.configs.senseSpeed > this.configs.previousScroll && scroller > offset) {
			$('#header-menu').addClass('off')
			$('#header-menu').removeClass('on')
			if ($(".menu-mobile").hasClass('active')) {
				$(".hamburguer").toggleClass("active")
				$(".menu-mobile").toggleClass("active")
				setTimeout(function () {
					$(".menu-mobile").toggleClass("end")
				}, 500)
			}
		} else if (scroller + this.configs.senseSpeed < this.configs.previousScroll && scroller > offset) {
			$('#header-menu').addClass('on')
			$('#header-menu').removeClass('off')
		}
		this.configs.previousScroll = scroller
	}
	setLinks(){
		$('[data-menu="true"]').on("click", function (e) {
			e.preventDefault()
			if ($(".menu-mobile").hasClass('active')) {
				$(".hamburguer").toggleClass("active")
				$(".menu-mobile").toggleClass("active")
				setTimeout(function () {
					$(".menu-mobile").toggleClass("end")
				}, 500)
			}
			let o = $(this)
			$("html, body").stop().animate({
				scrollTop: $(o.attr("href")).offset().top
			}, 1000)
		})
	}
	goStart(){
		$("html, body").stop().animate({ scrollTop: 0 }, 1000)
	}
	renderMenu(){
		return(
			<div className="menu-container nav navbar-nav">
				<ul>
				{
					this.props.itemsMenu.map((item, i) => {
						return(
							<li className="menu-item" key={i}>
								<a href={item.link} data-menu="true">{item.name}</a>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
	render() {
		return (
			<nav id="header-menu">
				<div className="container">
					<header>
						<div title="Menu" className="hamburguer d-xs-block d-sm-block d-md-block d-lg-none">
							<span></span>
						</div>
						<a className="a-header" onClick={this.goStart}>
							
						</a>
					</header>
					<nav className="menu-desktop bg-transparent bg-shared d-none d-md-block">
						{this.renderMenu()}
					</nav>
					<nav className="menu-mobile bg-transparent bg-shared d-xs-block d-sm-block d-md-block d-lg-none">
						{this.renderMenu()}
					</nav>
				</div>
			</nav>
		)
	}
}

export default Menu