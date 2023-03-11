const Pet = require("../models/petModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


exports.createLostFoundPet = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.image === "string") {
    images.push(req.body.image);
  } else {
    images = req.body.image;
  }

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "pets",
    });

    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.image = imagesLink;
  req.body.user = req.user.id;

  const pet = await Pet.create(req.body);

  res.status(201).json({
    success: true,
    pet,
  });


});

exports.getAllLostFoundPet = catchAsyncErrors(async (req, res) => {
  const petsCount = await Pet.countDocuments();

  const apiFeature = new ApiFeatures(Pet.find(), req.query)
    .search()
    .filter();

  let pet = await apiFeature.query;

  let filteredPetsCount = pet.length;

  pet = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    pet,
    petsCount,
    filteredPetsCount,
  });
});


exports.getLostFoundPetDetails = catchAsyncErrors(async (req, res, next) => {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return next(new ErrorHandler("Pet not found", 404));
    }
  
    res.status(200).json({
      success: true,
      pet,
    });
});

exports.updateLostFoundPet = catchAsyncErrors(async (req, res, next) => {
  let pet = Pet.findById(req.params.id);
  if (!pet) {
    return next(new ErrorHandler("Pet not found", 404));
  }

  //Images Start here
  let images = [];

  if (typeof req.body.image === "string") {
    images.push(req.body.image);
  } else {
    images = req.body.image;
  }

  if (images !== undefined) {
    for (let i = 0; i < pet.images?.length; i++) {
      await cloudinary.v2.uploader.destroy(pet.images[i].public_id);
    }

    const imagesLink = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "pets",
      });

      imagesLink.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    };

    req.body.image = imagesLink;
  };

  pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    pet,
  });
});

exports.deleteLostFoundPet = catchAsyncErrors(async (req, res, next) => {
    let pet = Pet.findById(req.params.id);
  
    if (!pet) {
      return next(new ErrorHandler("Pet not found", 404));
    }

    // Deleting Images from Cloudinary
  if (pet.image !== undefined) {
    for (let i = 0; i < (pet?.image ? pet.image.length : ""); i++) {
      await cloudinary.v2.uploader.destroy(pet.image[i].public_id);
    }
  }
  
    await pet.remove();
  
    res.status(200).json({
      success: true,
      message: "Delete pet successful!",
    });
  });

  // get logged in user pet
exports.myPets = catchAsyncErrors(async (req, res, next) => {
  const pet = await Pet.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    pet,
  });
});

//get all Pets -- Admin
exports.getAllPetLostFound = catchAsyncErrors(async (req, res, next) => {
  const pet = await Pet.find();

  res.status(200).json({
    success: true,
    pet,
  });
});


// Get all product (Admin)
exports.getAdminPet = catchAsyncErrors(async (req, res, next) => {
  const pets = await Pet.find();

  res.status(200).json({
    success: true,
    pets,
  });
});

//update Pet status -- Admin
exports.updatePetAdmin = catchAsyncErrors(async (req, res, next) => {
  const pet = await Pet.findById(req.params.id);

  if (pet.petStatus === 'Censored') {
    return next(new ErrorHandler('You have already censored', 400));
  }


  pet.statusConfirm = req.body.statusConfirm;
  

  await pet.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    pet,
  });
});