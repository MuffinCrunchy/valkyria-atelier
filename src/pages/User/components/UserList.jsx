import PropTypes from "prop-types";

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {/* Mapping setiap pengguna menjadi card */}
            {users.map((user, index) => (
                <div key={index} className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{user.username}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                            <p className="card-text">Call: {user.phone}</p>
                            <a className="btn btn-sm login-btn text-light me-1" onClick={() => onEdit(user)}>Edit</a>
                            <a className="btn btn-sm btn-danger text-light" onClick={() => onDelete(user)}>Remove</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default UserList;

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}