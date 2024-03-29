import React, { useEffect } from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBIcon
} from 'mdbreact';

function CallToActionIntro() {
    const state = {
        collapsed: false
    };

    const handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    const { collapsed } = this.state;
    const navStyle = { marginTop: '4rem' };
    const overlay = (
        <div
            id='sidenav-overlay'
            style={{ backgroundColor: 'transparent' }}
            onClick={this.handleTogglerClick}
        />
    );


    return (
        <div id='caltoaction'>
            {/* <Router> */}
            <div>
                <MDBNavbar
                    color='secondary-color'
                    style={navStyle}
                    light
                    expand='md'
                    fixed='top'
                    scrolling
                    transparent
                >
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <strong>FORM-BUILDER</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to='#!'>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='/form/create'>Form</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='/form/answer'>Answers</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBFormInline waves>
                                        <div className='md-form my-0'>
                                            <input
                                                className='form-control mr-sm-2'
                                                type='text'
                                                placeholder='Search'
                                                aria-label='Search'
                                            />
                                        </div>
                                    </MDBFormInline>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                {collapsed && overlay}
            </div>
            {/* </Router> */}
            <MDBView src='https://mdbcdn.b-cdn.net/img/Photos/Others/gradient2.png'>
                <MDBMask className='rgba-purple-slight ' />
                <MDBContainer
                    style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
                    className='d-flex justify-content-center align-items-center'
                >
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center'>
                            <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                                Our New Form builder
                            </h1>
                            <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                                It comes with a lot of new features, easy to follow videos and
                                images. Check it out now!
                            </h5>
                            <MDBBtn rounded className='btn-purple'>
                                <MDBIcon icon='user' className='mr-2' /> Sign up!
                            </MDBBtn>
                            <MDBBtn outline color='purple' rounded>
                                <MDBIcon icon='book' className='mr-2' /> Learn more
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>
        </div>
    );
}


export default CallToActionIntro;