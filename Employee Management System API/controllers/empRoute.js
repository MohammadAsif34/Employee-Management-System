import Employee from "../models/EmployeeModel.js";
import Personal from "../models/PersonalModel.js";
import Bank from "../models/BankModel.js";
import Job from "../models/JobModel.js";
import mongoose from "mongoose";

// create new employee
export const createEmp = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { personal, job, bank } = req.body;
    if (!personal || !job || !bank) {
      return res.json({
        code: 401,
        status: "BAD",
        message: "invalid details",
      });
    }
    const createPersonal = await Personal.create([personal], { session });
    const createJob = await Job.create([job], { session });
    const createBank = await Bank.create([bank], { session });
    const employee = await Employee.create(
      [
        {
          personal: createPersonal[0]._id,
          job: createJob[0]._id,
          bank: createBank[0]._id,
        },
      ],
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({
      code: 200,
      status: "OK",
      message: "new employee created successfully",
      emp: employee,
    });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};

// read employee details
export const readEmp = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.json({
        code: 401,
        status: "BAD",
        message: "invalid details",
      });
    }

    const emp = await Employee.findById(id)
      .populate("personal")
      .populate("job")
      .populate("bank");

    if (!emp) {
      return res.json({
        code: 400,
        status: "BAD",
        message: "emplyee not found",
        emp: emp,
      });
    }

    res.json({
      code: 200,
      status: "OK",
      message: "emplyee found",
      emp: emp,
    });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};

// update employee details
export const updateEmp = async (req, res) => {
  try {
    const { personal, job, bank } = req.body;

    if (personal && personal._id) {
      await Personal.findByIdAndUpdate(
        personal._id,
        { $set: personal },
        { new: true, runValidators: true }
      );
      return res.json({
        code: 200,
        status: "OK",
        message: "employee updated successfully",
      });
    } else if (job && job._id) {
      await Job.findByIdAndUpdate(
        job._id,
        { $set: job },
        { new: true, runValidators: true }
      );
      return res.json({
        code: 200,
        status: "OK",
        message: "employee updated successfully",
      });
    } else if (bank && bank._id) {
      await Bank.findByIdAndUpdate(
        bank._id,
        { $set: bank },
        { new: true, runValidators: true }
      );
      return res.json({
        code: 200,
        status: "OK",
        message: "employee updated successfully",
      });
    } else
      res.json({
        code: 401,
        status: "BAD",
        message: "something went wrong",
      });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};

// delete employee
export const deleteEmp = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const id = req.params.id;
    if (!id) {
      return res.json({
        code: 401,
        status: "BAD",
        message: "invalid details",
      });
    }

    const emp = await Employee.findById(id);
    if (!emp) {
      return res.json({
        code: 400,
        status: "BAD",
        message: "employee not found ",
      });
    }

    await Personal.findByIdAndDelete(emp.personal, { session });
    await Job.findByIdAndDelete(emp.job, { session });
    await Bank.findByIdAndDelete(emp.bank, { session });
    await Employee.findByIdAndDelete(id, { session });

    await session.commitTransaction();
    session.endSession();

    res.json({
      code: 200,
      status: "OK",
      message: "employee deleted successfully",
    });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};

// getall employee details
export const getAll = async (req, res) => {
  try {
    const employee = await Employee.find()
      .populate("personal", "fullname email")
      .populate("job", "employeeId department jobRole joiningDate status");

    const emp = [];
    for (let i = 0; i < employee.length; i++) {
      const e = employee[i];
      const temp = {
        _id: e._id,
        employeeId: e.job?.employeeId,
        fullname: e.personal.fullname,
        email: e.personal.email,
        department: e.job.department,
        jobole: e.job.jobRole,
        status: e.job.status,
        joiningDate: e.job.joiningDate,
      };
      emp.push(temp);
    }

    res.json({
      code: 200,
      status: "OK",
      message: "all employee details fetched ",
      employee: emp,
      // employee,
    });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};

//get login user information
export const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.json({ code: 400, status: "BAD", message: "access denied" });
    }
    const user = await Employee.findById(userId);

    res.json({
      code: 200,
      status: "OK",
      message: "user verify and access",
      user,
    });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};
