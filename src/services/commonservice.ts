import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {


    public form_json = [
        {
            "id": "register",
            "label": "Register",
            "name": "register",
            "api": "",
            "fields": [
                {
                    "label": "Email",
                    "name": "email",
                    "type": "text",
                    "icon":"mail",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "email",
                    "value": ""
                },
                {
                    "label": "Mobile Number",
                    "name": "mobile_number",
                    "type": "text",
                    "icon":"call",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "mobile",
                    "value": ""
                }
            ],
            "value": "option-3",
            "is_completed": "",
            "fuction":"submitEmail"
        },
        {
            "id": "pan",
            "label": "PAN & Aadhar",
            "name": "pan",
            "api": "",
            "fields": [
                {
                    "label": "PAN Number",
                    "name": "pan_number",
                    "type": "text",
                    "icon":"card",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "PAN",
                    "value": ""
                },
                {
                    "label": "Aadhar Number",
                    "name": "aadhar_number",
                    "type": "text",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "aadhar",
                    "value": ""
                }
            ],
            "value": "option-3",
            "is_completed": ""
        },
        {
            "id": "personalDetail",
            "label": "Personal Detail",
            "name": "personalDetail",
            "api": "",
            "fields": [
                {
                    "label": "First Name",
                    "name": "first_name",
                    "type": "text",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "name",
                    "value": ""
                },
                {
                    "label": "Last Name",
                    "name": "last_name",
                    "type": "text",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "name",
                    "value": ""
                },
                {
                    "label": "Middle Name",
                    "name": "middle_name",
                    "type": "text",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "name",
                    "value": ""
                },
                {
                    "label": "Gender",
                    "name": "gender",
                    "type": "select",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "name",
                    "value": "",
                    "options":[
                        {
                            "id":1,
                            "name":"Male"
                        }, {
                            "id":2,
                            "name":"Female"
                        }
                    ]
                },
                {
                    "label": "Education",
                    "name": "education",
                    "type": "select",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "name",
                    "value": "",
                    "options":[
                        {
                            "id":1,
                            "name":"UG"
                        }, {
                            "id":2,
                            "name":"PG"
                        }
                    ]
                },
                {
                    "label": "PIN Code",
                    "name": "pincode",
                    "type": "text",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "name",
                    "value": "",
                    "api":"https://appserver.constient.com/AliceBlueFullAPI/api/Full/SearchPinCode"
                },
                {
                    "label": "DOB",
                    "name": "dob",
                    "type": "date",
                    "class": "",
                    "id": "",
                    "event": "",
                    "eventCall": "",
                    "validation": "required",
                    "validation_type": "date",
                    "value": ""
                },
                {
                    "label": "Upload Image",
                    "name": "user_image",
                    "type": "file",
                    "class": "",
                    "id": "",
                    "event": "click",
                    "eventCall": "presentActionSheet",
                    "validation": "required",
                    "validation_type": "date",
                    "value": ""
                }
            ],
            "value": "option-3",
            "is_completed": ""
        }
    ];

    constructor() {
    }
}