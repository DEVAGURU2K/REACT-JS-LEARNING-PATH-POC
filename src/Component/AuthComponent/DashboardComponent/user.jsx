import React from "react";
import {
    Navbar,
    Nav,
    Modal,
    Button,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import {
    PostList,
    DeletePost,
    updatePost,
    createPost,
} from "../../../services/UserApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { padding } from "@mui/system";
import { Navigate } from "react-router-dom";
import { Login } from "../login";
function User() {
    const [data, setData] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editValue, setEditValue] = useState({});
    const [createValue, setCreateValue] = useState({});
    const [createShowModal, setCreateShowModal] = useState(false);

    const navigate = useNavigate();
    // edit operation.
    const EditUser = (item) => {
        setEditValue(item);
        setShowEditModal(true);
    };
    const handleEditClose = () => {
        setShowEditModal(false);
    };

    // user list out function
    const userDetails = () => {
        PostList().then((data) => {
            setData(data.data);
        });
    };
    const handleDeleteShowModal = async (id) => {
        await DeletePost(id);
        userDetails();
        toast.error("Post Deleted successfully!", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const handleUpdate = async () => {
        console.log("update", editValue);
        setShowEditModal(false);
        await updatePost(editValue);
        userDetails();
        toast.success("update successfully");
    };
    const showCreateModal = () => {
        setCreateShowModal(true);
    };
    const handleCreateClose = () => {
        setCreateShowModal(false);
    };
    const submitPost = async () => {
        await createPost(createValue);
        setCreateShowModal(false);
        userDetails();
        toast.success("new posts created successfully");
    };
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        userDetails();
    }, []);
    return (
        <div>
            <row>
                <nav className="navbar navbar-light bg-dark">
                    <ul>
                        <button
                            className="btn btn-outline-warning my-2 my-sm-0"
                            onClick={showCreateModal}
                            style={{ float: "left" }}
                        >
                            CREATE
                        </button>
                    </ul>
                    <ul>
                        <button
                            className="btn btn-outline-warning my-2 my-sm-0"
                            onClick={logout}
                            style={{
                                float: "right",
                                font: "bold",
                                marginLeft: "5px",
                            }}
                        >
                            LOGOUT
                        </button>
                    </ul>
                </nav>
            </row>
            <row></row>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col B-G-black">Title</th>
                        <th scope="col B-G-black">Body</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr item={item.id}>
                            <td>
                                {item.title} <br />
                            </td>
                            <td>
                                {item.body} <br />
                            </td>
                            <td>
                                {
                                    <a
                                        className="btn btn-primary btn-sm"
                                        onClick={() => EditUser(item)}
                                    >
                                        EDIT
                                    </a>
                                }
                            </td>
                            <td>
                                {
                                    <a
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) =>
                                            handleDeleteShowModal(item.id)
                                        }
                                    >
                                        DELETE
                                    </a>
                                }
                            </td>
                        </tr>
                    ))}
                    <ToastContainer autoClose={200} />
                </tbody>
                <Modal show={createShowModal} onHide={handleCreateClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Model</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>title:</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            required
                            name="title"
                            onChange={(e) => {
                                setCreateValue({
                                    ...createValue,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <br />
                        <label>Body:</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            required
                            name="body"
                            onChange={(e) => {
                                setCreateValue({
                                    ...createValue,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCreateClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={submitPost}>
                            INSERT
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showEditModal} onHide={handleEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>title:</label>
                        <br />
                        <input
                            type="text"
                            value={editValue?.title ? editValue.title : ""}
                            onChange={(e) =>
                                setEditValue({
                                    ...editValue,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            className="form-control"
                            name="title"
                        />
                        <br />
                        <label>Body:</label>
                        <br />
                        <input
                            type="text"
                            value={editValue?.body ? editValue.body : ""}
                            onChange={(e) =>
                                setEditValue({
                                    ...editValue,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            className="form-control"
                            name="body"
                        />
                        <br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleEditClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            UPDATE
                        </Button>
                    </Modal.Footer>
                </Modal>
            </table>
        </div>
    );
}

export default User;
