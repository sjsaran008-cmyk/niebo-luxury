import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const { name, phone, email, requirement, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required",
      });
    }

    const lead = await Lead.create({
      name,
      phone,
      email,
      requirement,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Consultation request submitted successfully",
      lead,
    });
  } catch (error) {
    console.error("Create lead error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit consultation request",
    });
  }
};