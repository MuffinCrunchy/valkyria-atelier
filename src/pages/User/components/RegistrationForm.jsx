import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const RegistrationForm = ({ onSubmit, editUser }) => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (editUser) {
            setForm(editUser); // Efek samping: Mengisi formData dengan data editUser saat komponen dimuat atau editUser berubah
        }
    }, [editUser]); // Menggunakan editUser sebagai dependensi, sehingga efek samping hanya terjadi saat editUser berubah

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        }); // Memperbarui state formData saat nilai input berubah
    };

    const reset = () => {
        setForm({
            username: '',
            email: '',
            phone: '',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah pengiriman formulir secara default (refresh halaman)
        onSubmit(form); // Menjalankan onSubmit dengan formData sebagai argumen
        reset(); // Mengosongkan formData setelah formulir disubmit
    };

    return (
        <form className="login-form shadow-lg p-5 w-100 rounded-5" onSubmit={handleSubmit}>
            {/* Form Group untuk field Full Name */}
            <div className="mb-3">
                <label className="mb-1" htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required // Input ini wajib diisi
                />
            </div>
            {/* Form Group untuk field Email */}
            <div className="mb-3">
                <label className="mb-1" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required // Input ini wajib diisi
                />
            </div>
            {/* Form Group untuk field Phone */}
            <div className="mb-3">
                <label className="mb-1" htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required // Input ini wajib diisi
                />
            </div>
            <button type="submit" className="btn login-btn mt-4 w-100 text-light">
                {editUser ? 'Update' : 'Submit'} {/* Teks tombol bergantung pada mode edit atau submit */}
            </button>
        </form>
    );
}

export default RegistrationForm;

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    editUser: PropTypes.bool,
}