import React, { useState } from 'react'

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ id: '', name: '', salary: '' });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEmployee = () => {
    if (formData.id && formData.name && formData.salary) {
      setEmployees([...employees, formData]);
      setFormData({ id: '', name: '', salary: '' });
    }
  };

  const handleEditEmployee = (id) => {
    setEditingId(id);
    const selectedEmployee = employees.find(emp => emp.id === id);
    setFormData(selectedEmployee);
  };

  const handleUpdateEmployee = () => {
    if (formData.id && formData.name && formData.salary) {
      const updatedEmployees = employees.map(emp =>
        emp.id === editingId ? { ...formData } : emp
      );
      setEmployees(updatedEmployees);
      setFormData({ id: '', name: '', salary: '' });
      setEditingId(null);
    }
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };
  return (
    <div>
      <h1>Employee Management</h1>
      <div>
        <label>ID:</label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
        />
        <br />
        {editingId ? (
          <button onClick={handleUpdateEmployee}>Update Employee</button>
        ) : (
          <button onClick={handleAddEmployee}>Add Employee</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => handleEditEmployee(employee.id)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employee