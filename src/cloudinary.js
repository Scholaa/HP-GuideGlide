const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: "dtbpblrgg",
	api_key: "365536794595652",
	api_secret: "***************************",
});

cloudinary.uploader.upload(
	"C:\Users\User\Downloads\input.webm",
	{
		resource_type: "video",
		transformation: [
			{ width: 1280, height: 720, crop: "limit" }, // Resize the video
			{ quality: "auto" }, // Automatically adjust the quality
		],
	},
	function (error, result) {
		console.log(result, error);
	}
);
