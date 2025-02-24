import React from 'react'
import HeroSection from '../../components/HeroSection'
import AdminSidebar from '../../components/AdminSideBar'
import Profile from '../../components/Profile'

const AdminHome = () => {
  return (
    <>
            <HeroSection title="Admin" />
            <div className="container-fluid py-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <Profile title="Admin"/>
                    </div>
                </div>
            </div>
        </>
  )
}

export default AdminHome
