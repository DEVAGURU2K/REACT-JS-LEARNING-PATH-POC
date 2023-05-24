import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import User from "./user";
import Project from "./project";

const Sidebar = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflow: "scroll initial",
            }}
        >
            <div>
                <CDBSidebar textColor="#0a0a0a" backgroundColor="#b051f5">
                    <CDBSidebarHeader
                        prefix={<i className="fa fa-bars fa-large"></i>}
                    >
                        <a
                            href="/"
                            className="text-decoration-none"
                            style={{ color: "inherit", margin: "5vh" }}
                        >
                            Dashboard
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink
                                exact
                                to="/profile"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="columns">
                                    profile page
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink
                                exact
                                to="/dashboard/project"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="table">
                                    projects
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink
                                to="/dashboard/user"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="user">
                                    user
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink
                                exact
                                to="/setting"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="chart-line">
                                    setting
                                </CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink
                                exact
                                to="/hero404"
                                target="_blank"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="exclamation-circle">
                                    404 page
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
            <div>
                {/* <nav class="navbar navbar-light bg-dark float-right">
                    <a class="navbar-brand" href="/login">
                        Logout
                    </a>
                </nav> */}
            </div>
            <div>
                <Routes>
                    <Route path="/user" element={<User />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            </div>
        </div>
    );
};

export default Sidebar;
