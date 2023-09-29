import { create } from 'zustand';
import axios from 'axios';

const employeeStore = create((set) => ({
  employees: null,
  createEmployee: {
    employeeName: '',
    employeeRole: '',
    employeeNumber: '',
    employeeDepartment: '',
    employeeSalary: '',
    employeeStartDate: '',
    employeeEndDate: '',
  },
  updateForm: {
    employeeName: '',
    employeeRole: '',
    employeeNumber: '',
    employeeDepartment: '',
    employeeSalary: '',
    employeeStartDate: '',
    employeeEndDate: '',
    _id: null,
  },

  //functions
  getEmployees: async () => {
    try {
      const response = await axios.get('/employees');
      set({ employees: response.data.employees });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateEmployees: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createEmployee: {
            ...state.createEmployee,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddEmployee: async (e) => {
    try {
      e.preventDefault();
      const { createEmployee, employees } = employeeStore.getState();
      const response = await axios.post('/employees', createEmployee);
      set({
        employees: [...employees, response.data.employee],
        createEmployee: {
          employeeName: '',
          employeeRole: '',
          employeeNumber: '',
          employeeDepartment: '',
          employeeSalary: '',
          employeeStartDate: '',
          employeeEndDate: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteEmployee: async (_id) => {
    try {
      const response = await axios.delete(`/employees/${_id}`);
      const { employees } = employeeStore.getState();

      const newEmployees = employees.filter((item) => {
        return item._id !== _id;
      });
      set({ employees: newEmployees });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdate: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateForm: {
            ...state.updateForm,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editEmployee: (item) => {
    try {
      set({
        updateForm: {
          name: item.name,
          employeeName: item.employeeName,
          employeeRole: item.employeeRole,
          employeeNumber: item.employeeNumber,
          employeeDepartment: item.employeeDepartment,
          employeeSalary: item.employeeSalary,
          employeeStartDate: item.employeeStartDate,
          employeeEndDate: item.employeeEndDate,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateEmployee: async (e) => {
    try {
      e.preventDefault();
      const {
        updateForm: {
          employeeName,
          employeeRole,
          employeeNumber,
          employeeDepartment,
          employeeSalary,
          employeeStartDate,
          employeeEndDate,
          _id,
        },
        employees,
      } = employeeStore.getState();

      const response = await axios.put(`/employees/${_id}`, {
        employeeName,
        employeeRole,
        employeeNumber,
        employeeDepartment,
        employeeSalary,
        employeeStartDate,
        employeeEndDate,
      });

      const newEmployees = [...employees];
      const employeeIndex = employees.findIndex((item) => {
        return item._id === _id;
      });
      newEmployees[employeeIndex] = response.data.employee;

      set({
        employees: newEmployees,
        updateForm: {
          employeeName: '',
          employeeRole: '',
          employeeNumber: '',
          employeeDepartment: '',
          employeeSalary: '',
          employeeStartDate: '',
          employeeEndDate: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default employeeStore;
