const Service = require("../models/serviceModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newOrderService = catchAsyncErrors(async (req, res, next) => {
  const {
    type,
    statusOfPet,
    dateOfBooking,
    totalPrice,
    itemsPrice,
    paymentInfo,
  } = req.body;

  const service = await Service.create({
    type,
    statusOfPet,
    dateOfBooking,
    totalPrice,
    itemsPrice,
    paymentInfo,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

exports.getSingleOrderService = catchAsyncErrors(async (req, res, next) => {
  const service = await Service.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!service) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    service,
  });
});

// get logged in user Order
exports.myOrdersService = catchAsyncErrors(async (req, res, next) => {
  const service = await Service.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    order,
  });
});

exports.getAllOrdersService = catchAsyncErrors(async (req, res, next) => {
  const service = await Service.find();

  let totalAmount = 0;

  service.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    service,
  });
});

//update Order status -- Admin
exports.updateOrderService = catchAsyncErrors(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (service.orderStatus === "Completed") {
    return next(new ErrorHandler("You have already completed", 400));
  }

  service.orderStatus = req.body.status;

  if (req.body.status === "Completed") {
    service.completedAt = Date.now();
  }

  await service.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    order,
  });
});

exports.deleteOrderService = catchAsyncErrors(async (req, res, next) => {
    const service = await Service.findById(req.params.id);
  
    service.remove();
  
    res.status(200).json({
      success: true,
    });
  });
