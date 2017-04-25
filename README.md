# AmbulanceApp
This app allows patients to request an Ambulance. It routs for a nearby Ambulance and send a patient notification to it and also to the Ambulance Regional Station.

Design 

	- In this application Justinmind is the design tool used. 
	- The design has been reviewed by local ambulance operators in the OR Tambo region in Umtata.

Technologies
	This application will be developed using NodeJs as the development environtment. 

	FrontEnd:
		- JavaScript: as the core programming langauge.
		- React Redux: for interactive design and state maintanace.
		- CSS: for web styling
		- OnsenUI: for native (Android and iOS) styling

	BackEnd:
		- NodeJs + Express Server: server side processing
		- Firebase: as a cloud based database provider
		- Google API's: for location services

Application Separation
	
	- Ambulance App: this is mobile application which will be downloaded by patients and use it to request an ambulance.

	- Control Room App: will be a web based application for the Control Room Operators where they will be recieving request from patients and monitor they progress.

	- Ambulance Driver App: is a mobile based application designed for the ambulance drivers to be able to recieve patient request when they are closeby to the patient and also recieve notifications from the Control Room.