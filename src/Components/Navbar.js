import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import { getCartItems } from '../action';


const Navbar = (props) => {
    useEffect(() => {
        props.getCartItems();
    }, [])

    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="Navbar">
            <div className="ui secondary pointing menu">
                <Link to="/" className="item" style={{
            backgroundColor: path == "/" ? "pink" : "unset",
          }} >
                    Home
                </Link>
                <Link to="/motherboard" className="item" style={{
            backgroundColor: path == "/motherboard" ? "pink" : "unset",
          }}>
                    Motherboard
                </Link>
                <Link to="/memory" className="item" style={{
            backgroundColor: path == "/memory" ? "pink" : "unset",
          }}>
                    Memory
                </Link>
                <Link to="/processor" className="item"  style={{
            backgroundColor: path == "/processor" ? "pink" : "unset",
          }}>
                    Processor
                </Link>
                <Link to="/graphics-card" className="item"  style={{
            backgroundColor: path == "/graphics-card" ? "pink" : "unset",
          }}>
                    Graphics Card
                </Link>
                <Link to="/add" className="item" style={{
            backgroundColor: path == "/add" ? "pink" : "unset",
          }}>
                    Add Item
                </Link>
                <Link to="/contact" className="item" style={{
            backgroundColor: path == "/contact" ? "pink" : "unset",
          }}>
                    Contact Us
                </Link>
                <div className="right menu temp">
                    <Link to="/cart" className="item">
                        <i class="shopping cart large icon cartIcon" ></i>
                    </Link>
                    <div className="circle">{props.items.length}</div>
                    <Link to="/sign-in" className="ui item">
                        Sign In
                    </Link>
                    <Link to="/log-in" className="ui item">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log(state.cartItems);
    return {
        items: state.cartItems,
    }
}

export default connect(mapStateToProps, { getCartItems })(Navbar);